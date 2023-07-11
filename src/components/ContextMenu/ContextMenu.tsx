import * as ContextMenu from "@radix-ui/react-context-menu";
import "./ContextMenu.css";
import Card from "../Card/Card";
import { BookProps } from "../../data/BooksListData";
import { TbEdit } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";

export default function BookListContextMenu(props: BookProps) {
  const editBook = (book: BookProps) => () => {
    console.log("edit book", book);
  };

  const deleteBook = (book: BookProps) => () => {
    console.log("delete book", book);
  };

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="ContextMenuTrigger">
        <Card isbn={props.isbn} title={props.title} author={props.author} />
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="ContextMenuContent">
          <ContextMenu.Item
            className="ContextMenuItem"
            onClick={editBook(props)}
          >
            Edit
            <div className="RightSlot">
              <TbEdit />
            </div>
          </ContextMenu.Item>
          <ContextMenu.Item
            className="ContextMenuItem"
            onClick={deleteBook(props)}
          >
            Delete
            <div className="RightSlot">
              <FiDelete />
            </div>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
