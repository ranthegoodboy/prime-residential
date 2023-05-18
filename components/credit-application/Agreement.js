import React from "react";
import { getActiveStep } from "../../helper/utils";

const Agreement = ({ register, errors, steps }) => {
  return (
    <div className={`${getActiveStep(steps) === "step4" ? "block" : "hidden"}`}>
      <div className="font-black text-5xl mb-12">AGREEMENT</div>
      <div className="mt-5 mb-5">
        (By checking these boxes you are agreeing to our terms - should you have
        any questions please contact us)
      </div>
      <div className="font-black text-2xl text-[#0023A3] mb-5">
        AGREEMENT AND TERMS
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <input
            name="acceptTerms1"
            type="checkbox"
            {...register("acceptTerms1", {
              required: "Please check this box if you want to proceed.",
            })}
            id="acceptTerms1"
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <label htmlFor="acceptTerms1" className="form-check-label">
            All invoices are to be paid 30 days from the date of the invoice.
          </label>
        </div>
        {errors.acceptTerms1 && (
          <div className="text-red-500">{errors.acceptTerms1.message}</div>
        )}
      </div>
      <div className="mt-5">
        <div className="flex gap-2 items-center">
          <input
            name="acceptTerms2"
            type="checkbox"
            {...register("acceptTerms2", {
              required: "Please check this box if you want to proceed.",
            })}
            id="acceptTerms2"
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <label htmlFor="acceptTerms2" className="form-check-label">
            Claims arising from invoices must be made within 7 business days of
            the invoice date.
          </label>
        </div>
        {errors.acceptTerms2 && (
          <div className="text-red-500">{errors.acceptTerms2.message}</div>
        )}
      </div>
      <div className="mt-5">
        <div className="flex gap-2 items-center">
          <input
            name="acceptTerms3"
            type="checkbox"
            {...register("acceptTerms3", {
              required: "Please check this box if you want to proceed.",
            })}
            id="acceptTerms3"
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <label htmlFor="acceptTerms3" className="form-check-label">
            By submitting this credit application, you authorize us to make
            inquires into the banking and buisness references that you provided.
          </label>
        </div>
        {errors.acceptTerms3 && (
          <div className="text-red-500">{errors.acceptTerms3.message}</div>
        )}
      </div>
    </div>
  );
};

export default Agreement;
