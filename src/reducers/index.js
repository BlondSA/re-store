const initialState = {
	books: [],
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_BOOKS_REQUEST":
			return { ...state, error: null, loading: true };
		case "FETCH_BOOKS_SUCCESS": {
			return { books: action.payload, loading: false, error: null };
		}
		case "FETCH_BOOKS_FAILURE":
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
};

export default reducer;
