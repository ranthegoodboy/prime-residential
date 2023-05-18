import React from "react";
import { getActiveStep } from "../../helper/utils";

function BusinessContactInfo({ register, errors, steps }) {
  return (
    <div className={`${getActiveStep(steps) === "step1" ? "block" : "hidden"}`}>
      <div className="font-black text-5xl mb-12">BUSINESS CONTACT INFO</div>
      <div className="row-wrapper mb-5">
        <div className="w-1/2">
          <input
            placeholder="Company Name"
            type="text"
            className="w-full"
            {...register("cname", {
              required: "This field is required",
            })}
          />
          {errors.cname && (
            <div className="mt-2 text-red-500">{errors.cname.message}</div>
          )}
        </div>
        <div className="w-1/2">
          <input
            placeholder="Company Email"
            type="email"
            className="w-full"
            {...register("cemail", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.cemail && (
            <div className="mt-2 text-red-500">{errors.cemail.message}</div>
          )}
        </div>
      </div>
      <div className="row-wrapper">
        <div className="w-1/2">
          <input
            placeholder="Phone Number"
            type="number"
            className="w-full"
            {...register("cphone", {
              required: "This field is required",
            })}
          />
          {errors.cphone && (
            <div className="mt-2 text-red-500">{errors.cphone.message}</div>
          )}
        </div>
        <div className="w-1/2">
          <input
            placeholder="Fax Number"
            type="number"
            className="w-full"
            {...register("cfax", {
              required: "This field is required",
            })}
          />
          {errors.cfax && (
            <div className="mt-2 text-red-500">{errors.cfax.message}</div>
          )}
        </div>
      </div>
      <div className="mt-12">
        <div className="font-black text-2xl text-[#0023A3]">COMPANY TYPE</div>
        <div className="flex gap-7 mt-5 items-center">
          <div className="form-radio-wrap">
            <label
              htmlFor="sole-proprietorship"
              className="flex items-center gap-2"
            >
              <input
                {...register("ctype", { required: "This field is required" })}
                type="radio"
                name="ctype"
                value="Sole Proprietorship"
                className="cursor-pointer h-[18px] w-[18px]"
                id="sole-proprietorship"
              />{" "}
              <span className="cursor-pointer">Sole Proprietorship</span>
            </label>
          </div>
          <div className="form-radio-wrap">
            <label htmlFor="partnership" className="flex items-center gap-2">
              <input
                {...register("ctype", { required: "This field is required" })}
                type="radio"
                name="ctype"
                value="Partnership"
                className="cursor-pointer h-[18px] w-[18px]"
                id="partnership"
              />{" "}
              <span className="cursor-pointer">Partnership</span>
            </label>
          </div>
          <div className="form-radio-wrap">
            <label htmlFor="corporation" className="flex items-center gap-2">
              <input
                {...register("ctype", { required: "This field is required" })}
                type="radio"
                name="ctype"
                value="Corporation"
                className="cursor-pointer h-[18px] w-[18px]"
                id="corporation"
              />{" "}
              <span className="cursor-pointer">Corporation</span>
            </label>
          </div>
          <div className="form-radio-wrap">
            <label htmlFor="other" className="flex items-center gap-2">
              <input
                {...register("ctype", { required: "This field is required" })}
                type="radio"
                name="ctype"
                value="Other"
                className="cursor-pointer h-[18px] w-[18px]"
                id="other"
              />{" "}
              <span className="cursor-pointer">Other</span>
            </label>
          </div>
          {errors.ctype && (
            <div className="text-red-500">{errors.ctype.message}</div>
          )}
        </div>

        <div className="mt-7">
          <div className="row-wrapper mb-5">
            <div className="w-1/2">
              <input
                placeholder="Company Shipping Address"
                type="text"
                className="w-full"
                {...register("cshippingadd", {
                  required: "This field is required",
                })}
              />
              {errors.cshippingadd && (
                <div className="mt-2 text-red-500">
                  {errors.cshippingadd.message}
                </div>
              )}
            </div>
            <div className="w-1/2">
              <input
                placeholder="City"
                type="text"
                className="w-full"
                {...register("ccity", {
                  required: "This field is required",
                })}
              />
              {errors.ccity && (
                <div className="mt-2 text-red-500">{errors.ccity.message}</div>
              )}
            </div>
          </div>
          <div className="row-wrapper">
            <div className="w-1/2">
              <input
                placeholder="State / Province"
                type="text"
                className="w-full"
                {...register("cstate", {
                  required: "This field is required",
                })}
              />
              {errors.cstate && (
                <div className="mt-2 text-red-500">{errors.cstate.message}</div>
              )}
            </div>
            <div className="w-1/2">
              <input
                placeholder="Postal / Zip Code"
                type="number"
                className="w-full"
                {...register("czipcode", {
                  required: "This field is required",
                })}
              />
              {errors.czipcode && (
                <div className="mt-2 text-red-500">
                  {errors.czipcode.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessContactInfo;
