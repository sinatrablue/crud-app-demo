import * as ContextMenu from "@radix-ui/react-context-menu";
import "./ContextMenu.css";
import Card from "../Card/Card";
import { BookProps } from "../../data/BooksListData";
import { TbEdit, TbHttpDelete } from "react-icons/tb";
import { useBookContext } from "../../contexts/BookContext";

export default function BookListContextMenu(props: BookProps) {
  const { modifyBook, deleteBook } = useBookContext();
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="ContextMenuTrigger">
        <Card isbn={props.isbn} title={props.title} author={props.author} />
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="ContextMenuContent">
          <ContextMenu.Item
            className="ContextMenuItem"
            onClick={() => modifyBook(props)}
          >
            Edit
            <div className="RightSlot">
              <TbEdit />
            </div>
          </ContextMenu.Item>
          <ContextMenu.Item
            className="ContextMenuItem"
            onClick={() => deleteBook(props)}
          >
            Delete
            <div className="RightSlot">
              <TbHttpDelete />
            </div>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
