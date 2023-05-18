import React from "react";
import { getActiveStep } from "../../helper/utils";

const BusinessAndCreditInfo = ({ register, errors, steps }) => {
  return (
    <div className={`${getActiveStep(steps) === "step2" ? "block" : "hidden"}`}>
      <div className="font-black text-5xl mb-12">BUSINESS AND CREDIT INFO</div>
      <div className="font-black text-2xl text-[#0023A3] mb-5">
        ACCOUNTS PAYABLE CONTACT INFORMATION
      </div>
      <div className="row-wrapper">
        <div className="w-full md:w-1/2">
          <input
            placeholder="First Name"
            type="text"
            className="w-full"
            {...register("bcfname", {
              required: "This field is required",
            })}
          />
          {errors.bcfname && (
            <div className="mt-2 text-red-500">{errors.bcfname.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <input
            placeholder="Last Name"
            type="text"
            className="w-full"
            {...register("bclname", {
              required: "This field is required",
            })}
          />
          {errors.bclname && (
            <div className="mt-2 text-red-500">{errors.bclname.message}</div>
          )}
        </div>
      </div>

      <div className="row-wrapper mt-5">
        <div className="w-full md:w-1/3">
          <input
            placeholder="Email"
            type="email"
            className="w-full"
            {...register("bcemail", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.bcemail && (
            <div className="mt-2 text-red-500">{errors.bcemail.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <input
            placeholder="Phone Number"
            type="number"
            className="w-full"
            {...register("bcphone", {
              required: "This field is required",
            })}
          />
          {errors.bcphone && (
            <div className="mt-2 text-red-500">{errors.bcphone.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <input
            placeholder="Fax Number"
            type="number"
            className="w-full"
            {...register("bcfax", {
              required: "This field is required",
            })}
          />
          {errors.bcfax && (
            <div className="mt-2 text-red-500">{errors.bcfax.message}</div>
          )}
        </div>
      </div>

      <div className="row-wrapper mt-5">
        <div className="w-full md:w-1/2">
          <input
            placeholder="Company to Bill Address"
            type="text"
            className="w-full"
            {...register("bcbilladd", {
              required: "This field is required",
            })}
          />
          {errors.bcbilladd && (
            <div className="mt-2 text-red-500">{errors.bcbilladd.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <input
            placeholder="City"
            type="text"
            className="w-full"
            {...register("bccity", {
              required: "This field is required",
            })}
          />
          {errors.bccity && (
            <div className="mt-2 text-red-500">{errors.bccity.message}</div>
          )}
        </div>
      </div>
      <div className="row-wrapper mt-5 mb-10">
        <div className="w-full md:w-1/2">
          <input
            placeholder="State / Province"
            type="text"
            className="w-full"
            {...register("bcstate", {
              required: "This field is required",
            })}
          />
          {errors.bcstate && (
            <div className="mt-2 text-red-500">{errors.bcstate.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <input
            placeholder="Postal / Zip Code"
            type="number"
            className="w-full"
            {...register("bczipcode", {
              required: "This field is required",
            })}
          />
          {errors.bczipcode && (
            <div className="mt-2 text-red-500">{errors.bczipcode.message}</div>
          )}
        </div>
      </div>
      <div className="font-black text-2xl text-[#0023A3] mb-5">
        BANK INFORMATION *
      </div>
      <div className="row-wrapper mt-5">
        <div className="w-full md:w-1/2">
          <input
            placeholder="Bank Name"
            type="text"
            className="w-full"
            {...register("bcbankname", {
              required: "This field is required",
            })}
          />
          {errors.bcbankname && (
            <div className="mt-2 text-red-500">{errors.bcbankname.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <input
            placeholder="Address"
            type="text"
            className="w-full"
            {...register("bcbankadd", {
              required: "This field is required",
            })}
          />
          {errors.bcbankadd && (
            <div className="mt-2 text-red-500">{errors.bcbankadd.message}</div>
          )}
        </div>
      </div>
      <div className="row-wrapper mt-5">
        <div className="w-full md:w-1/2">
          <input
            placeholder="City"
            type="text"
            className="w-full"
            {...register("bcbankcity", {
              required: "This field is required",
            })}
          />
          {errors.bcbankcity && (
            <div className="mt-2 text-red-500">{errors.bcbankcity.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <input
            placeholder="State / Province"
            type="text"
            className="w-full"
            {...register("bcbankstate", {
              required: "This field is required",
            })}
          />
          {errors.bcbankstate && (
            <div className="mt-2 text-red-500">
              {errors.bcbankstate.message}
            </div>
          )}
        </div>
      </div>
      <div className="row-wrapper mt-5">
        <div className="w-full md:w-1/2">
          <input
            placeholder="Postal / Zip Code"
            type="number"
            className="w-full"
            {...register("bcbankzipcode", {
              required: "This field is required",
            })}
          />
          {errors.bczipcode && (
            <div className="mt-2 text-red-500">{errors.bczipcode.message}</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <input
            placeholder="Phone Number"
            type="number"
            className="w-full"
            {...register("bcbankphone", {
              required: "This field is required",
            })}
          />
          {errors.bcbankphone && (
            <div className="mt-2 text-red-500">
              {errors.bcbankphone.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessAndCreditInfo;
