import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import useFittingCart from "../../state/useFittingCart";
import { getCartCount } from "../../helper/cart-utils";
import Link from "next/link";

const UserDashboard = () => {
  const fittingsOnCart = useFittingCart();
  const [cartCount, setCartCount] = useState(null);

  useEffect(() => {
    setCartCount(getCartCount());
  }, [fittingsOnCart]);

  return (
    <div className="flex gap-3 justify-end">
      <a
        href="https://files.primemetalproducts.com/catalog-book/residential/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="blue-btn font-semibold min-w-max">
          <FontAwesomeIcon icon={faWindowMaximize} />
          Residential Catalog
        </button>
      </a>
      <Link href={"/cart"} passHref>
        <div className="dash-cart-icon">
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
          {cartCount > 0 && <div className="dash-cart-count">{cartCount}</div>}
        </div>
      </Link>
      <div className="dash-user-icon">
        <FontAwesomeIcon icon={faUser} size="xl" />
      </div>
    </div>
  );
};

export default UserDashboard;
