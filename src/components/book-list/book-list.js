import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks, bookAddedToCart } from "../../actions";
import "./book-list.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = (props) => {
	const { books, onAddedToCart } = props;
	return (
		<ul className="book-list">
			{books.map((book) => {
				return (
					<li key={book.id}>
						<BookListItem
							book={book}
							onAddedToCart={() => onAddedToCart(book.id)}
						/>
					</li>
				);
			})}
		</ul>
	);
};

class BookListContainer extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error, onAddedToCart } = this.props;
		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		return <BookList books={books} onAddedToCart={onAddedToCart} />;
	}
}

const mapStateToProps = (state) => {
	return { books: state.books, loading: state.loading, error: state.error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
	};
};

export default withBookstoreService()(
	connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
