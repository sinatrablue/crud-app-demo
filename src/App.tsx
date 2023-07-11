import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksList from "./components/Books/BooksList";
import BookAdder from "./components/Books/BookAdder";
import "./App.css";
import { BooksProvider } from "./contexts/BookContext";

function App() {
  return (
    <Container>
      <BooksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/books" element={<BooksList />} />
            <Route path="/books/add" element={<BookAdder />} />
          </Routes>
        </BrowserRouter>
      </BooksProvider>
    </Container>
  );
}

export default App;
