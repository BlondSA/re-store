import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = (props) => {
	const { numItems, totalPrice } = props;
	return (
		<header className="shop-header row">
			<Link className="logo text-dark" to="/">
				ReStore
			</Link>
			<Link className="shopping-cart" to="/cart">
				<i className="cart-icon fa fa-shopping-cart"></i>
				{numItems} items (${totalPrice})
			</Link>
		</header>
	);
};

const mapStateToProps = (state) => ({
	numItems: state.cartItems.length,
	totalPrice: state.orderTotal,
});

export default connect(mapStateToProps)(ShopHeader);
