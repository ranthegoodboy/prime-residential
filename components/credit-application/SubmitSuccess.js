import React from "react";
import Link from "next/link";

const SubmitSuccess = ({ callBack }) => {
  return (
    <div className="min-h-[90vh] py-20">
      <div className="boxed-container">
        <div className="font-bold text-xl mb-10">
          Your credit application has been received and we will be contacting
          you shortly. Thank you!
        </div>
        <button className="blue-btn" onClick={callBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SubmitSuccess;
