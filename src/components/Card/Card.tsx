import { BsBook } from "react-icons/bs";
import { BookProps } from "../../data/BooksListData";
import "./Card.css";

export default function Card(props: BookProps) {
  return (
    <div className="custom-card">
      <a className="custom-card1" href="#">
        <p>{props.title}</p>
        <p className="custom-card-small">
          {props.isbn} - {props.author}
        </p>
        <div className="go-corner">
          <div className="go-arrow">
            <BsBook />
          </div>
        </div>
      </a>
    </div>
  );
}
