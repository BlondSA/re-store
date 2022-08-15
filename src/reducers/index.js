const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	orderTotal: 0,
};

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
	const { cartItems, books } = state;
	const book = books.find((bookItem) => bookItem.id === bookId);
	const itemIndex = cartItems.findIndex((bookItem) => bookItem.id === bookId);
	const item = cartItems[itemIndex];
	const newItem = updateCartItem(book, item, quantity);

	return {
		...state,
		cartItems: updateCartItems(cartItems, newItem, itemIndex),
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_BOOKS_REQUEST":
			return { ...state, error: null, loading: true };
		case "FETCH_BOOKS_SUCCESS": {
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null,
			};
		}
		case "FETCH_BOOKS_FAILURE":
			return { ...state, error: action.payload, loading: false };
		case "BOOK_ADDED_TO_CART":
			return updateOrder(state, action.payload, 1);
		case "ALL_BOOKS_REMOVED_FROM_CART":
			const item = state.cartItems.find(
				(book) => book.id === action.payload
			);
			return updateOrder(state, action.payload, -item.count);
		case "BOOK_REMOVE_FROM_CART":
			return updateOrder(state, action.payload, -1);
		default:
			return state;
	}
};

export default reducer;
