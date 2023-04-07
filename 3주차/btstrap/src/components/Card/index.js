import React, { useState } from "react";
import "./index.css";

const Card = ({
  title,
  cost,
  userNumber,
  storage,
  support,
  access,
  color,
  buttonText,
}) => {
  const dataList = [
    `${userNumber} users included`,
    `${storage} GB of storage`,
    `${support} support`,
    `${access}Help center access`,
  ];
  const [counter, setCounter] = useState(parseInt(cost));
  const onIncrease = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="card">
      <div className="card_header">
        <p id="card_header">{title}</p>
      </div>
      <div className="card_body">
        <h2>
          <b>${counter}</b> <small>/ mo</small>
        </h2>
        <ul>
          {dataList.map((value, index) => (
            <li key={`data_item_${index}`}>{value}</li>
          ))}
        </ul>
        <button onClick={onIncrease} className={`${color} card_button`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
