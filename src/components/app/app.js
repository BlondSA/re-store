import React from "react";
import "./app.css";
import { HomePage, CartPage } from "../pages";
import { Routes, Route } from "react-router-dom";
import ShopHeader from "../shop-header";
const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/cart" element={<CartPage />} />
			</Routes>
		</main>
	);
};

export default App;
