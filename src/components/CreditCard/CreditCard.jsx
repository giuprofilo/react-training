import visaCard from "../../assets/images/visa-logo.jpg";
import masterCard from "../../assets/images/master.png";
import "./CreditCard.css";

export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  function checkType(type) {
    if (type === "Visa") {
      return visaCard;
    } else {
      return masterCard;
    }
  }

  return (
    <div
      style={{ backgroundColor: bgColor, color: color }}
      className="creditCard"
    >
      <div className="divImg">
        <img className="img-size" src={checkType(type)} alt="CardType" />
      </div>

      <p>**** **** **** {number.substr(-4)}</p>
      <span>
        Expires:{expirationMonth} {expirationYear} {bank} {""}
      </span>
      <p>{owner}</p>
    </div>
  );
}
