import { books } from "../mocks/mocks";
class BookstoreService {
	getBooks() {
		return [...books];
	}
}
export default BookstoreService;
