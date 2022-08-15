import React from "react";
import "./shopping-cart-table.css";
import { connect } from "react-redux";
import {
	allBooksRemovedFromCart,
	bookAddedToCart,
	bookRemoveFromCart,
} from "../../actions";

const ShoppingCartTable = (props) => {
	const { items, orderPrice, onIncrease, onDecrease, onDelete } = props;

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => {
						const { count, id, title, total } = item;
						return (
							<tr key={id}>
								<td>{index + 1}</td>
								<td>{title}</td>
								<td>{count}</td>
								<td>${total}</td>
								<td>
									<button
										onClick={() => {
											onDelete(id);
										}}
										className="btn btn-outline-danger btn-sm float-right"
									>
										<i className="fa fa-trash-o" />
									</button>
									<button
										onClick={() => {
											onIncrease(id);
										}}
										className="btn btn-outline-success btn-sm float-right"
									>
										<i className="fa fa-plus-circle" />
									</button>
									<button
										onClick={() => {
											onDecrease(id);
										}}
										className="btn btn-outline-warning btn-sm float-right"
									>
										<i className="fa fa-minus-circle" />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="total">Total: ${orderPrice}</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		items: state.cartItems,
		orderPrice: state.orderTotal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrease: (id) => {
			dispatch(bookRemoveFromCart(id));
		},
		onIncrease: (id) => {
			dispatch(bookAddedToCart(id));
		},
		onDelete: (id) => dispatch(allBooksRemovedFromCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
