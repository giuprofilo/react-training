import { useState } from "react";

export default function LikeButton() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(["red"]);
  const [colors, setColors] = useState([
    "purple",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ]);

  function handleAdd() {
    let result = counter + 1;
    setCounter(result);
    let randomColors = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColors]);
  }

  return (
    <div>
      <button
        onClick={handleAdd}
        style={{ backgroundColor: color, margin: "10px" }}
      >
        {counter} Likes
      </button>
    </div>
  );
}
