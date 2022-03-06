import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import React from "react";

const Home = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Typography variant="h3">{t('home.heading')}</Typography>
      <img width="100%" src="https://source.unsplash.com/random/?ukraine" />
    </>
  );
}

export default Home;
