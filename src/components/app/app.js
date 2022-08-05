import React from "react";
import "./app.css";
import { HomePage, CartPage } from "../pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route path="/cart" element={<CartPage />} />
		</Routes>
	);
};

export default App;
