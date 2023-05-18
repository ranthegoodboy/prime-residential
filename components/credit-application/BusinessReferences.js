import React from "react";
import { getActiveStep } from "../../helper/utils";

const BusinessReferences = ({ register, steps }) => {
  const referenceForm = [...Array(3)];
  return (
    <div className={`${getActiveStep(steps) === "step3" ? "block" : "hidden"}`}>
      <div className="font-black text-5xl mb-12">BUSINESS REFERENCES</div>
      {referenceForm.map((form, index) => (
        <div key={index} className="mt-12">
          <div className="font-black text-2xl text-[#0023A3] mb-5">
            REFERENCE {`${index + 1}`}
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full">
              <input
                placeholder="Company Name"
                type="text"
                className="w-full"
                {...register(`brcname${index + 1}`)}
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Address"
                type="text"
                className="w-full"
                {...register(`brcaddress${index + 1}`)}
              />
            </div>
          </div>

          <div className="row-wrapper mt-5">
            <div className="w-full md:w-1/3">
              <input
                placeholder="City"
                type="text"
                className="w-full"
                {...register(`brccity${index + 1}`)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <input
                placeholder="State / Province"
                type="text"
                className="w-full"
                {...register(`brcstate${index + 1}`)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <input
                placeholder="Postal / Zip Code"
                type="number"
                className="w-full"
                {...register(`brczipcode${index + 1}`)}
              />
            </div>
          </div>

          <div className="row-wrapper mt-5">
            <div className="w-full md:w-1/3">
              <input
                placeholder="Email"
                type="email"
                className="w-full"
                {...register(`brcemail${index + 1}`, {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
            </div>
            <div className="w-full md:w-1/3">
              <input
                placeholder="Phone Number"
                type="number"
                className="w-full"
                {...register(`brcphone${index + 1}`)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <input
                placeholder="Fax Number"
                type="number"
                className="w-full"
                {...register(`brcfax${index + 1}`)}
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <input
              placeholder="Type of Account"
              type="text"
              className="w-full"
              {...register(`brctype${index + 1}`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessReferences;
