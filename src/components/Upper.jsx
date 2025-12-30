import React from "react";

const Upper = (props) => {
  return (
    <div className="upper">
      <img
        src={props.product.image}
        className="h-[180px] w-full object-cover"
      />
    </div>
  );
};

export default Upper;
