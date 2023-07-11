import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksList from "./components/Books/BooksList";
import BookAdder from "./components/Books/BookAdder";
import "./App.css";
import { BookContext } from "./contexts/BookContext";
import { BookProps, DefaultBooks } from "./data/BooksListData";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState<BookProps[]>(DefaultBooks);

  return (
    <Container>
      <BookContext.Provider value={books}>
        <BrowserRouter>
          <Routes>
            <Route path="/books" element={<BooksList />} />
            <Route path="/books/add" element={<BookAdder />} />
          </Routes>
        </BrowserRouter>
      </BookContext.Provider>
    </Container>
  );
}

export default App;
