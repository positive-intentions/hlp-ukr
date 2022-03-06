import React, { FC, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AppDrawer from "./components/mulecules/AppDrawer";
import Home from "./components/pages/Home";
import Order from "./components/pages/Order";

const App: FC = () => {
  // useEffect(() => {
  //   if (!window.location.pathname.startsWith('/hlp-ukr')) {
  //     window.location.assign('/hlp-ukr');
  //   }
  // }, []);

  return (
    <HashRouter>
      <AppDrawer>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="" element={<Navigate replace to="home" />} />
        </Routes>
      </AppDrawer>
    </HashRouter>
  );
}

export default App;
