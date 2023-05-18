import React, { useState, useEffect } from "react";
import UserDashboard from "../dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faTrashCan,
  faShoppingCart,
  faLocationDot,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  categorizedCartItems,
  setAllFittingSelectedState,
  getSelectedFittingIds,
} from "../../../helper/cart-utils";
import useFittingCart from "../../../state/useFittingCart";
import Link from "next/link";
import CategorizedAccordion from "./CategorizedAccordion";
import RemoveItemsFromCart from "../../modals/RemoveItemsFromCart";
import ShippingInfoForm from "./ShippingInfoForm";
import { useForm } from "react-hook-form";
import SuccessMailandSaved from "./SuccessMailandSaved";
import { addJobPack, isJobPackDuplicate } from "../../../helper/job-pack-utils";

import Script from "next/script";
import generatePdfTemplate from "../../../helper/generate-pdf-template";

const ShoppingCart = () => {
  const fittingCart = useFittingCart();
  const [cartItemCategories, setCartItemCategories] = useState([]);
  const [collapseAll, setCollapseAll] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [openRemoveCartItemModal, setOpenRemoveCartItemModal] = useState(false);
  const [selectedFittings, setSelectedFittings] = useState([]);

  const [successMail, setSuccessMail] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setCartItemCategories(categorizedCartItems());
  }, [fittingCart]);

  const onSelectAll = () => {
    setCollapseAll(true);
    setSelectAll(!selectAll);
    setAllFittingSelectedState(!selectAll);
  };

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({ shouldFocusError: true });

  const payload = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  };

  const onSubmit = async (e) => {
    setIsSending(true);
    saveItemsAsJobPackemailTemplate(getValues().jobName);

    const pdf = await createPdfFromTemplate(cartItemCategories, getValues());
    await fetch("/api/cart-mailer", {
      ...payload,
      body: JSON.stringify({
        formValues: getValues(),
        items: cartItemCategories,
        pdf: btoa(pdf),
      }),
    }).then((res) => {
      if (res.status === 200) {
        emailSuccessAndSavedNotifier();
      }
    });
  };

  const downloadPdf = async () => {
    const isFormValid = await trigger(undefined, { shouldFocus: true });
    if (!isFormValid) return;
    setIsDownloading(true);
    createPdfFromTemplate(cartItemCategories, getValues(), true);
    setIsDownloading(false);
  };

  const createPdfFromTemplate = async (cartItems, formVals, execDownload) => {
    const pdfTemplate = generatePdfTemplate(cartItems, formVals);
    const pdfOptions = {
      filename: `primetimeapp-${formVals.jobName}.pdf`,
      jsPDF: { unit: "in", format: "Letter", orientation: "portrait" },
    };
    if (execDownload)
      html2pdf().set(pdfOptions).from(pdfTemplate).outputPdf().save();
    return html2pdf().set(pdfOptions).from(pdfTemplate).outputPdf();
  };

  const emailSuccessAndSavedNotifier = () => {
    setSuccessMail(true);
    setTimeout(() => {
      setIsSending(false);
      setSuccessMail(false);
    }, 4000);
  };

  const saveItemsAsJobPackemailTemplate = (jobPackName) => {
    if (isJobPackDuplicate(jobPackName)) return;
    addJobPack(jobPackName);
  };

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" />
      <div className="pb-20">
        <div className="boxed-container shopping-cart">
          <div className="flex gap-20 py-5 items-center mb-10">
            <div className="w-2/3">
              <div className="cart-text">REVIEW YOUR ORDER</div>
            </div>
            <div className="flex gap-3 justify-end w-1/3">
              <Link href={"/"} passHref>
                <div className="back-btn">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <div className="">Back</div>
                </div>
              </Link>
              <UserDashboard />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {cartItemCategories.length === 0 && (
              <div className="text-xl font-bold">Your cart is empty</div>
            )}
            {cartItemCategories.length > 0 && (
              <>
                <div className="flex gap-3 items-center mb-3">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-2xl cursor-pointer"
                  />
                  <div className="font-bold text-2xl">Items</div>
                </div>
                <div className="py-3 border-y border-gray-400">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-5 items-center">
                      <div className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={onSelectAll}
                          className="w-[16px] h-[16px] cursor-pointer"
                        />
                        <div
                          className="font-semibold cursor-pointer select-none"
                          onClick={onSelectAll}
                        >
                          Select All
                        </div>
                      </div>

                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-xl text-red-500 cursor-pointer"
                        onClick={() => {
                          setSelectedFittings(getSelectedFittingIds());
                          setOpenRemoveCartItemModal(true);
                        }}
                      />
                    </div>
                    <div
                      className="collapse-all-btn"
                      onClick={() => setCollapseAll(!collapseAll)}
                    >
                      <span>{collapseAll ? `Collapse All` : `Expand All`}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 mb-20">
                  {cartItemCategories.map((category, index) => (
                    <div key={index}>
                      <CategorizedAccordion
                        fittingCategory={category}
                        toggleCollpseAll={collapseAll}
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-20">
                  <div className="flex gap-3 items-center pb-3 border-b border-gray-400 mb-5">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-2xl cursor-pointer"
                    />
                    <div className="font-bold text-2xl">Information</div>
                  </div>
                  <ShippingInfoForm register={register} errors={errors} />
                </div>
                <div className="flex gap-3 items-center pb-3 border-b border-gray-400">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-2xl cursor-pointer"
                  />
                  <div className="font-bold text-2xl">Quote</div>
                </div>

                <div className="flex gap-5 mt-5">
                  <div className="flex-grow">
                    <input
                      placeholder="Enter Your Best Email"
                      className="enter-email w-full"
                      type="email"
                      {...register("ShipEmail", {
                        required: "This field is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                    />
                    {errors.ShipEmail && (
                      <div className="mt-2 text-red-500 text-sm">
                        {errors.ShipEmail.message}
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <input
                      placeholder="Enter A Password"
                      className="enter-pass w-full opacity-40"
                      type="password"
                      defaultValue={""}
                      disabled
                      // {...register("userPass", {
                      //   required: "This field is required",
                      // })}
                    />
                    {/* {errors.userPass && (
                      <div className="mt-2 text-red-500 text-sm">
                        {errors.userPass.message}
                      </div>
                    )} */}
                  </div>
                  <div>
                    <div className="flex gap-5 justify-end">
                      <div>
                        <button
                          className={`send-email-btn ${
                            isSending ? "disabled-btn" : ""
                          }`}
                          type="Submit"
                        >
                          {isSending ? (
                            <div className="flex gap-2 items-center">
                              <FontAwesomeIcon
                                icon={faSpinner}
                                size={"lg"}
                                className="animate-spin"
                              />
                              Sending Email
                            </div>
                          ) : (
                            <div>Send To Prime and Yourself</div>
                          )}
                        </button>
                      </div>

                      <div
                        className={`download-pdf-btn  ${
                          isDownloading ? "disabled-btn" : ""
                        }`}
                        onClick={downloadPdf}
                      >
                        {isDownloading ? (
                          <div className="flex gap-2 items-center">
                            <FontAwesomeIcon
                              icon={faSpinner}
                              size={"lg"}
                              className="animate-spin"
                            />
                            Downloading PDF
                          </div>
                        ) : (
                          <div className="flex gap-2 items-center">
                            Download PDF
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <RemoveItemsFromCart
                  isOpen={openRemoveCartItemModal}
                  onCloseFn={() => setOpenRemoveCartItemModal(false)}
                  fittingsToRemove={selectedFittings}
                />
                <SuccessMailandSaved isSuccess={successMail} />
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
