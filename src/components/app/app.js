import React from "react";
import "./app.css";
import { HomePage, CartPage } from "../pages";
import { Routes, Route } from "react-router-dom";
import ShopHeader from "../shop-header";
const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={210} />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/cart" element={<CartPage />} />
			</Routes>
		</main>
	);
};

export default App;
