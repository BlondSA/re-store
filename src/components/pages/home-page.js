import React from "react";
import BookList from "../book-list";

const HomePage = () => {
	const books = [
		{
			id: 1,
			name: "Production-Ready Microsoftservices",
			title: "Susan J. Fowler",
		},
		{ id: 2, name: "Release It!", title: "Michael T. Nygard" },
	];
	return (
		<>
			<div>Home Page</div>
			<BookList books={books} />
		</>
	);
};

export default HomePage;
