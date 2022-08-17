const updateBookList = (state, action) => {
	if (state === undefined) {
		return { books: [], loading: true, error: null };
	}
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
		default:
			return state.bookList;
	}
};

export default updateBookList;
