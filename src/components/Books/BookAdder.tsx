import { useState } from "react";
import { BookProps } from "./BooksList";
import { Button } from "react-bootstrap";
import { BsArrowLeftSquareFill, BsFillPlusSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function BookAdder() {
  const [input, setInput] = useState<BookProps>({
    isbn: 0,
    title: "",
    author: "",
  });

  const navigate = useNavigate();

  const addBook = () => {
    console.log("add book");
    navigate("/books");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
      <h1 className="d-flex align-items-baseline w-75 mb-5">
        <div className="d-flex me-3 fs-1">
          <Link to={"/books"}>
            <BsArrowLeftSquareFill />
          </Link>
        </div>
        Book Adder
      </h1>
      <div className="d-flex flex-column w-75 gap-3 mb-5">
        <div className="d-flex flex-column w-100 gap-3">
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
        <div className="d-flex flex-column w-100 gap-3">
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
      <div className="d-flex w-75 justify-content-end">
        <Button
          className="d-flex align-items-baseline fs-5 px-3 py-2"
          variant="primary"
          onClick={() => addBook()}
        >
          <span className="me-2">
            <BsFillPlusSquareFill />
          </span>
          Add Book
        </Button>
      </div>
    </div>
  );
}
