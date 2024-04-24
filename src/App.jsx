/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Page";
import { NavComponent } from "./components";

const App = () => {
	return (
		<div className="w-full mx-auto ">
			<NavComponent />

			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
