import { books } from "../mocks/mocks";
class BookstoreService {
	getBooks() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(books);
			}, 700);
		});
	}
}
export default BookstoreService;
