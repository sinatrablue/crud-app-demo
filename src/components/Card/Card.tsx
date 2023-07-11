import { BookProps } from "../Books/BooksList";
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
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
}
