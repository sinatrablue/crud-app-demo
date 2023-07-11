import { createContext, useState } from "react";
import { BookProps, DefaultBooks } from "../data/BooksListData";

// const [input, setInput] = useState<BookProps>({
//   isbn: 0,
//   title: "",
//   author: "",
// });

// const modifyBook = (book: BookProps) => {
//   setInput(book);
//   setShowModal(true);
// };
// const [showModal, setShowModal] = useState<boolean>(false);
// const handleCloseModal = () => setShowModal(false);

// const updateSelectedBook = () => {
//   setBooks(prev => {
//     const index = prev.findIndex(book => book.isbn === input.isbn);
//     prev[index] = input;
//     return prev;
//   });
//   setShowModal(false);
// };

export const BookContext = createContext(DefaultBooks);
