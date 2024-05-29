import React from 'react';
import {AppRoutes} from "./routes/AppRoutes.jsx";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => (
    <div
        className="min-h-screen bg-gray-100 p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-28 flex flex-col justify-center items-center">
        <div className="relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
            <div className="relative px-4 py-10 bg-white shadow rounded-3xl sm:p-10 md:p-12 lg:p-14 xl:p-16 2xl:p-18">
                <Router>
                    <AppRoutes/>
                </Router>
            </div>
        </div>
    </div>
);

export default App;