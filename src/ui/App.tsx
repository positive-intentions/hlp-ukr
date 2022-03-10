import React, { FC } from 'react';
import {
  HashRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import AppDrawer from './components/mulecules/AppDrawer';
import Calibration from './components/pages/Calibration';
import Engine from './components/pages/Engine';
import Home from './components/pages/Home';
import Order from './components/pages/Order';

const App: FC = () => (
  <HashRouter>
    <AppDrawer>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calibration" element={<Calibration />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Navigate replace to="home" />} />
      </Routes>
    </AppDrawer>
  </HashRouter>
);

export default App;
