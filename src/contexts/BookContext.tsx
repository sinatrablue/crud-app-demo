import { ReactNode, createContext, useContext, useState } from "react";
import { BookProps, DefaultBooks } from "../data/BooksListData";

type BooksProviderProps = {
  children: ReactNode;
};

type BookContextProps = {
  books: BookProps[];
  setBooks: (books: BookProps[]) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  handleCloseModal: () => void;
  currentBook: BookProps;
  setcurrentBook: (currentBook: BookProps) => void;
  modifyBook: (book: BookProps) => void;
  deleteBook: (book: BookProps) => void;
  updateSelectedBook: () => void;
};

const BookContext = createContext({} as BookContextProps);
export function useBookContext() {
  return useContext(BookContext);
}

export function BooksProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<BookProps[]>(DefaultBooks);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleCloseModal = () => setShowModal(false);
  const [currentBook, setcurrentBook] = useState<BookProps>({
    isbn: 0,
    title: "",
    author: "",
  });
  const modifyBook = (book: BookProps) => {
    setcurrentBook(book);
    setShowModal(true);
  };
  const deleteBook = (book: BookProps) => {
    setBooks(prev => {
      const newBooks = prev.filter(b => b.isbn !== book.isbn);
      console.log("newBooks: ", newBooks);
      return newBooks;
    });
  };
  const updateSelectedBook = () => {
    setBooks(prev => {
      const index = prev.findIndex(book => book.isbn === currentBook.isbn);
      prev[index] = currentBook;
      return prev;
    });
    setShowModal(false);
  };
  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        showModal,
        setShowModal,
        handleCloseModal,
        currentBook,
        setcurrentBook,
        modifyBook,
        deleteBook,
        updateSelectedBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
