import "./DriverCard.css";
import Rating from "../Rating/Rating";

export default function DriverCard(props) {
  return (
    <>
      <div className="drivercard">
        <img src={props.img} />
        <div className="right">
          <h2>{props.name}</h2>
          <p>
            <Rating>{props.rating}</Rating>
          </p>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}
