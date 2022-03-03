import React, { useState, useMemo } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDistance } from "date-fns";
import fetchStock from "../../api/fetchStock";
import { Query, Mutation } from "../../../graphql/generated/types";
import { useQuery, useMutation } from "@apollo/client";
import createOrder from "../../api/createOrder";

const Order = (): JSX.Element => {
  const [customerName, setCustomerName] = useState("");
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
  const [milkSliderValue, setMilkSliderValue] = React.useState<
    number | string | Array<number | string>
  >(0);
  const [skinSliderValue, setSkinSliderValue] = React.useState<
    number | string | Array<number | string>
  >(0);

  const handleMilkSliderChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setMilkSliderValue(newValue);
  };

  const handleMilkInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMilkSliderValue(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlurOnMilk = () => {
    if (milkSliderValue < 0) {
      setMilkSliderValue(0);
    } else if (milkSliderValue > data?.stock?.milk) {
      setMilkSliderValue(data?.stock?.milk);
    }
  };

  const handleSkinSliderChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSkinSliderValue(newValue);
  };

  const handleSkinInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSkinSliderValue(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlurOnSkin = () => {
    if (skinSliderValue < 0) {
      setSkinSliderValue(0);
    } else if (skinSliderValue > data?.stock?.skins) {
      setSkinSliderValue(data?.stock?.skins);
    }
  };

  const daysElapsed = useMemo(() => {
    if (dateRange[0] && dateRange[1]) {
      const timeDifference = dateRange[1].getTime() - dateRange[0].getTime();
      const differenceInDays = Math.floor(timeDifference / (1000 * 3600 * 24));
      return differenceInDays;
    }
  }, [dateRange]);

  const daysElapsedMessage = useMemo(
    () =>
      dateRange[0] && dateRange[1]
        ? `The yak shop opened ${formatDistance(dateRange[0], dateRange[1], {
            addSuffix: true,
          })}`
        : "Please select a date range",
    [dateRange]
  );

  const { loading, error, data } = useQuery<Query>(fetchStock, {
    variables: {
      timeInDays: daysElapsed ?? 0,
    },
  });

  const [
    createOrderMutation,
    {
      data: createOrderData,
      loading: createOrderLoading,
      error: createOrderError,
    },
  ] = useMutation<Mutation>(createOrder, {
    variables: {
      timeInDays: daysElapsed ?? 0,
      customerOrder: {
        customer: customerName,
        order: {
          milk: milkSliderValue,
          skins: skinSliderValue,
        },
      },
    },
  });

  const handleOrder = () => {
    createOrderMutation();
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress data-testid="circular-progress" />
      </Box>
    );
  }
  if (error) {
    return <div data-testid="error-message">{`Error! ${error}`}</div>;
  }

  return (
    <>
      <Typography variant="h3">Order</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormGroup>
          <Box sx={{ mb: 2 }}>
            <InputLabel>Set date range</InputLabel>
            <DateRangePicker
              startText="shop opened"
              endText="today"
              value={dateRange}
              onChange={(newValue) => {
                setDateRange(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField
                    {...startProps}
                    data-testid="shop-opened-date-input"
                  />
                  <Box sx={{ m: 2 }}> to </Box>
                  <TextField {...endProps} data-testid="today-date-input" />
                </>
              )}
            />
            <Typography variant="body2">{daysElapsedMessage}</Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel>Set amount of milk to order (litres)</InputLabel>
            <Slider
              value={typeof milkSliderValue === "number" ? milkSliderValue : 0}
              onChange={handleMilkSliderChange}
              aria-labelledby="milk-input-slider"
              min={0}
              max={data?.stock?.milk}
            />
            <TextField
              value={milkSliderValue}
              onChange={handleMilkInputChange}
              onBlur={handleBlurOnMilk}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">litres</InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel>Set amount of skins</InputLabel>
            <Slider
              value={typeof skinSliderValue === "number" ? skinSliderValue : 0}
              onChange={handleSkinSliderChange}
              aria-labelledby="skins-input-slider"
              min={0}
              max={data?.stock?.skins}
            />
            <TextField
              value={skinSliderValue}
              onChange={handleSkinInputChange}
              onBlur={handleBlurOnSkin}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">skins</InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel>Set customer name</InputLabel>
            <TextField
              value={customerName}
              onChange={(e) => setCustomerName(e?.target?.value)}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Button onClick={handleOrder}>Order</Button>
          </Box>
        </FormGroup>
      </LocalizationProvider>
    </>
  );
};

export default Order;
