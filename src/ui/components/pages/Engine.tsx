import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import React from "react";

const Engine = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box sx={{mb: 2}}>
        <Typography variant="h3">{t("engine.heading")}</Typography>
      </Box>
      <img width="300px" src="https://source.unsplash.com/random/?engine" />
      <Box sx={{mt: 2}}>
        <Typography>{t("engine.content")}</Typography>
      </Box>
    </>
  );
};

export default Engine;
