import { books } from "../mocks/mocks";
class BookstoreService {
	getBooks() {
		return () => {
			return [...books];
		};
	}
}
export default BookstoreService;
