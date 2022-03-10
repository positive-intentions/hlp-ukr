import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import React from "react";

const memoryInfo = performance.memory;

const bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(`${Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024))}`, 10);
    if (i === 0) return `${bytes} ${sizes[i]}`;
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
  }

const Calibration = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box sx={{mb: 2}}>
        <Typography variant="h3">{t("calibration.heading")}</Typography>
      </Box>
      <img width="300px" src="https://source.unsplash.com/random/?kitten" />
      <Box sx={{mt: 2}}>
        <Typography>{t("calibration.network.heading")}</Typography>
      </Box>
      <Box sx={{mt: 2}}>
        <Typography>{t("calibration.memory.heading")}</Typography>
        <Typography>{t("calibration.memory.sizeLimit")}: {bytesToSize(memoryInfo.jsHeapSizeLimit)}</Typography>
        <Typography>{t("calibration.memory.totalAllocated")}: {bytesToSize(memoryInfo.totalJSHeapSize)}</Typography>
        <Typography>{t("calibration.memory.used")}: {bytesToSize(memoryInfo.usedJSHeapSize)}</Typography>
      </Box>
    </>
  );
};

export default Calibration;
