import React, { useState } from "react";

const UseCallbackOnce = (cb) => {
  const [called, setCalled] = useState(false);
  return (e) => {
    if (!called) {
      setCalled(true);
      cb(e);
    }
  };
};

export default UseCallbackOnce;
