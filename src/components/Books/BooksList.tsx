import Button from "../Button/Button";
import { Link } from "react-router-dom";
import BookListContextMenu from "../ContextMenu/ContextMenu";
import { useBookContext } from "../../contexts/BookContext";
import BookUpdater from "./BookUpdater";
import { FcIdea } from "react-icons/fc";

export default function BooksList() {
  const { books } = useBookContext();

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
        <h1 className="d-flex justify-content-between w-75 mb-5">
          <div>Books List</div>
          <Link to="/books/add">
            <Button title="add a book" variant="create" />
          </Link>
        </h1>
        <span className="w-75 text-muted d-flex align-items-baseline mb-2">
          <FcIdea />{" "}
          <span className="ms-2">
            Right click on a book to edit or delete it.
          </span>
        </span>
        <div className="d-flex flex-column w-75 gap-3">
          {books.map(book => (
            <div key={book.isbn}>
              <BookListContextMenu
                isbn={book.isbn}
                title={book.title}
                author={book.author}
              />
            </div>
          ))}
        </div>
      </div>

      <BookUpdater />
    </>
  );
}
