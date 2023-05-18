import React from "react";
import { getQuantity, addFittingOncart } from "../../helper/cart-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const FittingQuantityInput = ({ fitting, minVal, disabled }) => {
  const handleQtyChange = (fitting, action) => {
    addFittingOncart({
      ...fitting,
      qty: parseInt(
        action === "increase"
          ? getQuantity(fitting.id) + 1
          : getQuantity(fitting.id) - 1
      ),
      selected: false,
    });
  };

  return (
    <div className="fitting-qty">
      <div
        className={`decrease-qty-btn ${
          getQuantity(fitting.id) === minVal && "pointer-events-none"
        }`}
        onClick={() => handleQtyChange(fitting, "decrease")}
      >
        <FontAwesomeIcon icon={faMinus} size="xs" color="#000" />
      </div>
      <input
        type="text"
        disabled={disabled}
        value={getQuantity(fitting.id)}
        onChange={(e) => {
          if (e.target.value === "" || isNaN(e.target.value))
            e.target.value = minVal;
          addFittingOncart({
            ...fitting,
            qty: parseInt(e.target.value),
            selected: false,
          });
        }}
      ></input>
      <div
        className="increase-qty-btn"
        onClick={() => handleQtyChange(fitting, "increase")}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" color="#000" />
      </div>
    </div>
  );
};

export default FittingQuantityInput;
