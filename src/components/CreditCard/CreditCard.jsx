import visaCard from "../../assets/images/visa-logo.jpg";
import masterCard from "../../assets/images/master.png";

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
      <img src={checkType(type)} alt="CardType" />
      <p>**** **** **** {number.substr(-4)}</p>
      <span>
        Expires:{expirationMonth} {expirationYear} {bank} {""}
      </span>
      <p>{owner}</p>
    </div>
  );
}
