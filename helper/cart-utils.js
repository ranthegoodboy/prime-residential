import useFittingCart from "../state/useFittingCart";
import _ from "lodash";
import { categorizeFittings } from "./categorize-fittings";

export function addFittingOncart(fittingObj) {
  if (fittingObj.qty === 0) {
    removeFittingsFromCart([fittingObj.id]);
    return;
  }

  if (isFittingInCart(fittingObj.id)) {
    updateFittingQtyInCart(fittingObj);
  } else {
    useFittingCart.setState((state) => ({
      fittings: [...state.fittings, fittingObj],
    }));
  }
}

export function removeFittingsFromCart(arrOfIds) {
  const fittingsOnCart = useFittingCart.getState().fittings;
  const filteredFittings = fittingsOnCart.filter(
    (fitting) => !arrOfIds.includes(fitting.id)
  );
  useFittingCart.setState(() => ({
    fittings: filteredFittings,
  }));
}

export function isFittingInCart(fittingId) {
  const fittingsOnCart = useFittingCart.getState().fittings;
  return fittingsOnCart.some((fitting) => fitting.id === fittingId);
}

export function updateFittingQtyInCart(fittingObj) {
  const newFittingCartState = useFittingCart
    .getState()
    .fittings.map((fitting) => {
      if (fitting.id === fittingObj.id) {
        return { ...fitting, qty: fittingObj.qty };
      } else {
        return { ...fitting };
      }
    });

  useFittingCart.setState(() => ({
    fittings: newFittingCartState,
  }));
}

export function updateFittingSelectedState(arrOfFittingIds, boolean) {
  const newFittingCartState = useFittingCart
    .getState()
    .fittings.map((fitting) => {
      if (arrOfFittingIds.includes(fitting.id)) {
        return { ...fitting, selected: boolean };
      } else {
        return { ...fitting };
      }
    });

  useFittingCart.setState(() => ({
    fittings: newFittingCartState,
  }));
}

export function setAllFittingSelectedState(boolean) {
  const newFittingCartState = useFittingCart
    .getState()
    .fittings.map((fitting) => {
      return { ...fitting, selected: boolean };
    });

  useFittingCart.setState(() => ({
    fittings: newFittingCartState,
  }));
}

export function getQuantity(fittingId) {
  const fittingsOnCart = useFittingCart.getState().fittings;
  const fitting = fittingsOnCart.find((fitting) => fitting.id === fittingId);
  return fitting ? fitting.qty : 0;
}

export function getSelectedState(fittingId) {
  const fittingsOnCart = useFittingCart.getState().fittings;
  const fitting = fittingsOnCart.find((fitting) => fitting.id === fittingId);
  return fitting?.selected || false;
}

export function getSelectedFittingIds() {
  const fittingsOnCart = useFittingCart.getState().fittings;
  return fittingsOnCart
    .filter((fitting) => fitting.selected === true)
    .map((selected) => selected.id);
}

export function getCartCount() {
  const fittingsOnCart = useFittingCart.getState().fittings;

  // if we want to count based on unique product
  //return fittingsOnCart.length;

  //if we want to count based on unique product and their quantities
  return _.sumBy(fittingsOnCart, function (fitting) {
    return parseInt(fitting.qty);
  });
}

export function isCartEmpty() {
  const fittingsOnCart = useFittingCart.getState().fittings;
  return fittingsOnCart.length === 0;
}

export function categorizedCartItems() {
  const fittingsOnCart = useFittingCart.getState().fittings;
  return categorizeFittings(fittingsOnCart);
}
