import { Button, Modal } from "react-bootstrap";
import { useBookContext } from "../../contexts/BookContext";

export default function BookUpdater() {
  const {
    showModal,
    handleCloseModal,
    currentBook,
    setcurrentBook,
    updateSelectedBook,
  } = useBookContext();

  return (
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
              value={currentBook.title}
              onChange={e =>
                setcurrentBook({ ...currentBook, title: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-column w-100 gap-2 mb-3">
            <label htmlFor="author">Author</label>
            <input
              className="px-3 py-2"
              type="text"
              id="author"
              name="author"
              value={currentBook.author}
              onChange={e =>
                setcurrentBook({ ...currentBook, author: e.target.value })
              }
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => updateSelectedBook()}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
