import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessMailandSaved = ({ isSuccess }) => {
  return (
    <div
      className={`email-sent-notifier ${
        isSuccess ? "visible opacity-100" : "invisible opacity-0"
      }
    `}
    >
      <div className="mt-[25vh] text-center">
        <div className="p-10 bg-[#007bff] w-[500px] inline-block align-middle rounded-lg shadow-[0_3px_20px_rgba(0,0,0,0.2)] opacity-70">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2x"
                className="text-green-500 z-10"
              />
              <div className="absolute w-[20px] h-[20px] top-[20%] right-[20%]  bg-white rounded-full z-[-10]"></div>
            </div>

            <span className="text-white font-semibold">
              Email sent and items saved as Jobpack Template
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMailandSaved;
