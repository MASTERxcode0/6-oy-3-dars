import React from "react";
import stiylea from "./index.module.css";

function Card(props) {
  const {
    firstName,
    lastName,
    phone,
    email,
    image,
    cars,
    address: { region, zip },
  } = props.data;
  console.log(cars);
  // console.log(zip);

  return (
    <div class={stiylea.card}>
      <img class={stiylea.cardimage} src={image} />
      <h3 class={stiylea.cardtitle}>
        {firstName} {lastName}
      </h3>
      <div class={stiylea.cardcontent}>
        <div class={stiylea.cardleft}>
          <p>{phone}</p>
          <div className={stiylea.div}>
            <div className={stiylea.adres}>
              <p className={stiylea.p}>{region}</p>
              <p className={stiylea.p}>{zip}</p>
            </div>
            <ul>
              {cars.length > 0 ? (
                cars.map((car, index) => (
                  <li className="p2" key={index}>
                    {car}
                  </li>
                ))
              ) : (
                <li className="p2">Card yo‘q</li>
              )}
            </ul>
          </div>
        </div>
        <div class={stiylea.cardright}>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
