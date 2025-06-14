import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Config from "./pages/device/Config.jsx";
import ChooseDevice from "./pages/device/ChooseDevice.jsx";
import Machine from "./pages/machine/Machine.jsx";
import Schedule from "./pages/schedule/Schedule.jsx";
import ConfigSuccess from "./pages/ConfigSuccess/ConfigSuccess.jsx";

function App() {
    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route path="/config" element={<Config />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/choose-device" element={<ChooseDevice />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/machine" element={<Machine />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/config/success" element={<ConfigSuccess />} />
            </Routes>
        </Router>
    );
}

export default App;
