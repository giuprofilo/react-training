import "./Greetings.css";
export default function Greetings(props) {
  let hello = "";

  if (props.lang === "de") {
    hello = "Hallo";
  }
  if (props.lang === "fr") {
    hello = "Bonjour";
  }

  return (
    <div className="greetings">
      {hello} {props.children}
    </div>
  );
}
