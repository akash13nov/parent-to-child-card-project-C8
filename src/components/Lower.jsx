import React from "react";

const Lower = (props) => {
  return (
    <div className="lower p-4">
      <h4 className="text-sm text-gray-500">{props.product.heading}</h4>
      <h3 className="text-lg font-semibold">{props.product.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{props.product.description}</p>
    </div>
  );
};

export default Lower;
