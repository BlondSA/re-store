import React from "react";
import "./shop-header.css";

const ShopHeader = (props) => {
	const { numItems, total } = props;
	return (
		<header className="shop-header row">
			<a className="logo text-dark" href="#">
				ReStore
			</a>
			<a className="shopping-cart">
				<i className="cart-icon fa fa-shopping-cart"></i>
				{numItems} items (${total})
			</a>
		</header>
	);
};

export default ShopHeader;
