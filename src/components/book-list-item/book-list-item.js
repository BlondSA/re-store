import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
	const { author, title } = book;
	return (
		<>
			<span>{title}</span>
			<span>{author}</span>
		</>
	);
};

export default BookListItem;
