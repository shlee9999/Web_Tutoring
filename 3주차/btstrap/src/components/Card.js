import React, { useState } from "react";

function Card({
  title,
  cost,
  userNumber,
  storage,
  support,
  access,
  color,
  buttonText,
}) {
  const [counter, setCounter] = useState(parseInt(cost));
  const onIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="card_custom">
      <div className="card_header">
        <p id="card_header">{title}</p>
      </div>
      <div className="card_body">
        <h2>
          <b>${counter}</b> <small>/ mo</small>
        </h2>
        <ul>
          <li>{userNumber} users included</li>
          <li>{storage} GB of storage</li>
          <li>{support} support</li>
          <li>{access}Help center access</li>
        </ul>
        <button onClick={onIncrease} className={`${color} card_button`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
