import "./BoxColor.css";
export default function BoxColor(props) {
  const { r, g, b } = props;

  const divStyle = {
    color: "white",
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  return (
    <div className="boxcolor box">
      <div style={divStyle}>{`rgb(${r},${g},${b})`}</div>
    </div>
  );
}
