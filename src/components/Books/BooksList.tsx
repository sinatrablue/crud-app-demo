import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Button as ButtonBs, Modal } from "react-bootstrap";
import { BookProps, DefaultBooks } from "../../data/BooksListData";

export default function BooksList() {
  const [books, setBooks] = useState<BookProps[]>(DefaultBooks);

  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCloseModal = () => setShowModal(false);

  const [input, setInput] = useState<BookProps>({
    isbn: 0,
    title: "",
    author: "",
  });

  const modifyBook = (book: BookProps) => {
    setInput(book);
    setShowModal(true);
  };

  const updateSelectedBook = () => {
    setBooks(prev => {
      const index = prev.findIndex(book => book.isbn === input.isbn);
      prev[index] = input;
      return prev;
    });
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
        <h1 className="d-flex justify-content-between w-75 mb-5">
          <div>Books List</div>
          <Link to="/books/add">
            <Button
              title="add a book"
              onClick={() => console.log("add book")}
              variant="create"
            />
          </Link>
        </h1>
        <div className="d-flex flex-column w-75 gap-3">
          {books.map(book => (
            <div onClick={() => modifyBook(book)} key={book.isbn}>
              <Card isbn={book.isbn} title={book.title} author={book.author} />
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <div className="d-flex flex-column w-100 gap-2 mb-3">
              <label htmlFor="title">Title</label>
              <input
                className="px-3 py-2"
                type="text"
                id="title"
                name="title"
                value={input.title}
                onChange={e => setInput({ ...input, title: e.target.value })}
              />
            </div>
            <div className="d-flex flex-column w-100 gap-2 mb-3">
              <label htmlFor="author">Author</label>
              <input
                className="px-3 py-2"
                type="text"
                id="author"
                name="author"
                value={input.author}
                onChange={e => setInput({ ...input, author: e.target.value })}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonBs variant="secondary" onClick={() => updateSelectedBook()}>
            Save changes
          </ButtonBs>
        </Modal.Footer>
      </Modal>
    </>
  );
}
