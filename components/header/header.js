import React from "react";
import UserDashboard from "./dashboard";

const Header = () => {
  return (
    <div className="boxed-container">
      <div className="flex gap-10 py-5 mb-10 items-center">
        <div className="w-3/5">
          <div className="job-packs-text">PrimeTime App</div>
          <div className="job-packs-subtext">
            Select Items. Save List. Get Quote.
          </div>
        </div>
        <div className="w-2/5">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
};

export default Header;
