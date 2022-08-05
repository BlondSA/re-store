import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import store from "./store";
import ErrorBoundary from "./components/error-boundary";
import BookstoreService from "./services/bookstore-services";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const bookstoreService = new BookstoreService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<BookstoreServiceProvider value={bookstoreService}>
					<Router>
						<App />
					</Router>
				</BookstoreServiceProvider>
			</ErrorBoundary>
		</Provider>
	</React.StrictMode>
);
