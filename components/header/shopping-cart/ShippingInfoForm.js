import React from "react";

const ShippingInfoForm = ({ register, errors }) => {
  return (
    <div className="shipping-info">
      <div className="w-full flex gap-2">
        <div className="input-wrap pr-3">
          <div className="mb-1 font-semibold">
            Job Name
            <span className="ml-1 text-red-500 font-bold">*</span>
          </div>
          <input
            type="text"
            className="w-full"
            {...register("jobName", {
              required: "This field is required",
            })}
          />
          {errors.jobName && (
            <div className="mt-2 text-red-500 text-sm">
              {errors.jobName.message}
            </div>
          )}
        </div>
        <div className="input-wrap mt-7">
          <div className="login-btn pointer-events-none opacity-50">Log In</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Account Information</div>
        <div className="w-full flex gap-5">
          <div className="w-1/3">
            <div className="mb-1 font-semibold">
              Account #<span className="ml-1 text-red-500 font-bold">*</span>
            </div>
            <input
              type="text"
              className="w-full"
              {...register("shipAccount", {
                required: "This field is required",
              })}
            />
            {errors.shipAccount && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipAccount.message}
              </div>
            )}
          </div>
          <div className="w-1/3">
            <div className="mb-1 font-semibold">Company</div>
            <input
              type="text"
              className="w-full"
              {...register("shipCompany", {})}
            />
            {errors.shipCompany && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipCompany.message}
              </div>
            )}
          </div>
          <div className="w-1/3">
            <div className="mb-1 font-semibold">Purchase Order</div>
            <input
              type="text"
              className="w-full"
              {...register("shipPurchaseOrder", {})}
            />
            {errors.shipPurchaseOrder && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipPurchaseOrder.message}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="font-bold text-xl mb-2">Ship To Address</div>
        <div className="w-full flex gap-5">
          <div className="input-wrap">
            <div className="mb-1 font-semibold">
              City <span className="ml-1 text-red-500 font-bold">*</span>
            </div>
            <input
              type="text"
              className="w-full"
              {...register("shipCity", {
                required: "This field is required",
              })}
            />
            {errors.shipCity && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipCity.message}
              </div>
            )}
          </div>
          <div className="input-wrap">
            <div className="mb-1 font-semibold">
              State <span className="ml-1 text-red-500 font-bold">*</span>
            </div>
            <input
              type="text"
              className="w-full"
              {...register("shipState", {
                required: "This field is required",
              })}
            />
            {errors.shipState && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipState.message}
              </div>
            )}
          </div>
          <div className="input-wrap">
            <div className="mb-1 font-semibold">
              Zip Code <span className="ml-1 text-red-500 font-bold">*</span>
            </div>
            <input
              type="text"
              className="w-full"
              {...register("shipZipCode", {
                required: "This field is required",
              })}
            />
            {errors.shipZipCode && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipZipCode.message}
              </div>
            )}
          </div>
          <div className="input-wrap">
            <div className="mb-1 font-semibold">
              Date Needed On Site{" "}
              <span className="ml-1 text-red-500 font-bold">*</span>
            </div>
            <input
              type="date"
              className="w-full"
              {...register("shipDate", {
                required: "This field is required",
              })}
            />
            {errors.shipDate && (
              <div className="mt-2 text-red-500 text-sm">
                {errors.shipDate.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
