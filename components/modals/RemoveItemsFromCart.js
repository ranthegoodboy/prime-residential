import React from "react";
import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { removeFittingsFromCart } from "../../helper/cart-utils";

const RemoveItemsFromCart = ({ isOpen, onCloseFn, fittingsToRemove }) => {
  function onConfirm() {
    removeFittingsFromCart(fittingsToRemove);
    onCloseFn();
  }
  return (
    <Modal
      open={isOpen}
      onClose={onCloseFn}
      classNames={{
        modal: "remove-cart-item",
      }}
      center
      showCloseIcon={false}
    >
      <div className="title-wrapper">
        <div className="title">
          <FontAwesomeIcon icon={faCircleExclamation} size="xl" color="#000" />
          <div className="font-bold text-lg">Remove Cart Item</div>
        </div>
      </div>

      {fittingsToRemove.length > 0 && (
        <div className="content">
          {fittingsToRemove.length > 0 ? (
            <div className="text-lg">
              <span>Are you sure you want to remove </span>
              <span>
                {fittingsToRemove.length > 1
                  ? `selected items?`
                  : `selected item?`}
              </span>
            </div>
          ) : (
            <span>Please select {"item(s)"} to remove.</span>
          )}
          <div className="flex justify-end gap-5 mt-7">
            <button className="" onClick={onCloseFn}>
              Cancel
            </button>
            <button className="ok-btn" onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RemoveItemsFromCart;
