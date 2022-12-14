const updateCartItems = (cartItems, item, index) => {
	if (item.count === 0) {
		return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
	}
	if (index === -1) {
		return [...cartItems, item];
	}

	return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
	const { id = book.id, count = 0, title = book.title, total = 0 } = item;
	return {
		id: id,
		title: title,
		count: count + quantity,
		total: total + quantity * book.price,
	};
};

const updateOrder = (state, bookId, quantity) => {
	const {
		bookList: { books },
		shoppingCart: { cartItems },
	} = state;
	const book = books.find((bookItem) => bookItem.id === bookId);
	const itemIndex = cartItems.findIndex((bookItem) => bookItem.id === bookId);
	const item = cartItems[itemIndex];
	const newItem = updateCartItem(book, item, quantity);
	const newState = {
		...state,
		cartItems: updateCartItems(cartItems, newItem, itemIndex),
		orderTotal: 0,
	};
	let totalPrice = 0;
	newState.cartItems.forEach(
		(cartItem) => (totalPrice = totalPrice + cartItem.total)
	);
	newState.orderTotal = totalPrice;
	return newState;
};

const updateShoppingCart = (state, action) => {
	if (state === undefined) {
		return { cartItems: [], orderTotal: 0 };
	}
	switch (action.type) {
		case "BOOK_ADDED_TO_CART":
			return updateOrder(state, action.payload, 1);
		case "ALL_BOOKS_REMOVED_FROM_CART":
			const item = state.shoppingCart.cartItems.find(
				(book) => book.id === action.payload
			);
			return updateOrder(state, action.payload, -item.count);
		case "BOOK_REMOVE_FROM_CART":
			return updateOrder(state, action.payload, -1);
		default:
			return state.shoppingCart;
	}
};

export default updateShoppingCart;
