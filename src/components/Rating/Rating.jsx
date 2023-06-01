import "./Rating.css";
export default function Rating(props) {
  const numberOfStars = Math.floor(props.children); //os children sao os numeros passados
  //dentre a tag <Rating> no App.jsx
  let string = "★";
  string = string.repeat(numberOfStars).padEnd(5, "☆");

  return (
    <div className="stars">
      <span>{string}</span>
    </div>
  );
}
