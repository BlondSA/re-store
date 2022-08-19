import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
	const { bookList } = state;
	return {
		books: bookList.books,
		loading: bookList.loading,
		error: bookList.error,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return bindActionCreators(
		{
			fetchBooks: fetchBooks(bookstoreService),
			onAddedToCart: bookAddedToCart,
		},
		dispatch
	);
};

export default withBookstoreService()(
	connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
