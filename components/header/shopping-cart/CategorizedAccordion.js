import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faImage,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  getSelectedState,
  updateFittingSelectedState,
} from "../../../helper/cart-utils";
import RemoveItemsFromCart from "../../modals/RemoveItemsFromCart";
import FittingQuantityInput from "../../fittings/FittingQuantityInput";
import { isEven } from "../../../helper/utils";

const CategorizedAccordion = ({ fittingCategory, toggleCollpseAll }) => {
  const [collapsed, setCollapsed] = useState(toggleCollpseAll);
  const [openRemoveCartItemModal, setOpenRemoveCartItemModal] = useState(false);
  const [fittingsToRemove, setFittingsToRemove] = useState([]);

  useEffect(() => {
    setCollapsed(toggleCollpseAll);
  }, [toggleCollpseAll]);

  return (
    <div className="categorized-accordion">
      <div className="category-header" onClick={() => setCollapsed(!collapsed)}>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            {collapsed ? (
              <FontAwesomeIcon icon={faCaretDown} className="text-lg" />
            ) : (
              <FontAwesomeIcon icon={faCaretRight} className="text-lg" />
            )}
            <div className="flex justify-between items-center font-bold">
              {fittingCategory.category}
            </div>
          </div>
          <div
            className={`font-bold mr-[72px] ${collapsed ? "block" : "hidden"}`}
          >
            QTY
          </div>
        </div>
      </div>

      <div
        className={`${
          collapsed && (collapsed || toggleCollpseAll) ? "block" : "hidden"
        }`}
      >
        {fittingCategory.fittings.map((fitting, index) => (
          <div
            key={index}
            className={`category-item-wrapper ${
              isEven(index) ? "alt-even" : "alt-odd"
            }`}
          >
            <div className="category-title-wrap">
              <input
                checked={getSelectedState(fitting.id)}
                type="checkbox"
                className="item-chk"
                data-id={`${fitting.id}`}
                onChange={(e) =>
                  updateFittingSelectedState(
                    [fitting.id],
                    e.currentTarget.checked
                  )
                }
              />

              <div className="font-bold">
                {fitting.title},{" "}
                <span className="font-semibold">
                  {fitting.primeProducts.partNumber}
                </span>
              </div>
            </div>
            <div className="col-span-2 font-medium text-gray-500">
              {fitting.primeProducts.description}
            </div>
            <div className="flex justify-end">
              <div className="flex gap-3 items-center">
                <FittingQuantityInput
                  fitting={fitting}
                  minVal={1}
                  disabled={false}
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="fitting-trash"
                  onClick={() => {
                    setOpenRemoveCartItemModal(true);
                    setFittingsToRemove([fitting.id]);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <RemoveItemsFromCart
        isOpen={openRemoveCartItemModal}
        onCloseFn={() => setOpenRemoveCartItemModal(false)}
        fittingsToRemove={fittingsToRemove}
      />
    </div>
  );
};

export default CategorizedAccordion;
