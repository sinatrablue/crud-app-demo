import { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BookProps } from "../../data/BooksListData";
import Button from "../Button/Button";
import { useBookContext } from "../../contexts/BookContext";

export default function BookAdder() {
  const [input, setInput] = useState<BookProps>({
    isbn: 0,
    title: "",
    author: "",
  });

  const navigate = useNavigate();
  const { addBook } = useBookContext();

  const addNewBook = () => {
    if (input.title === "" || input.author === "") {
      window.alert("Please fill in all fields");
      return;
    }
    addBook({ ...input, isbn: Math.floor(Math.random() * 1000000) });
    navigate("/books");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
      <h1 className="d-flex align-items-baseline w-75 mb-5">
        <div className="d-flex me-4 fs-1">
          <Link
            to={"/books"}
            style={{ textDecoration: "none", color: "#00838d" }}
          >
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
          variant="create"
          onClick={() => addNewBook()}
          title="add this new book"
        />
      </div>
    </div>
  );
}
