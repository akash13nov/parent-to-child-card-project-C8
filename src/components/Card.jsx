import React from "react";
import Upper from "./Upper";
import Lower from "./Lower";

const Card = (props) => {
  return (
    <>
      <div className="w-[280px] bg-white rounded-xl shadow-lg overflow-hidden">
        <Upper product={props.product} />
        <Lower product={props.product} />
      </div>
    </>
  );
};

export default Card;
