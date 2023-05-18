import React, { useState } from "react";
import Modal from "react-responsive-modal";
import {
  loadJobPack,
  removeJobPack,
  addJobPack,
  isJobPackDuplicate,
  updateJobPackName,
} from "../../helper/job-pack-utils";
import { useForm } from "react-hook-form";
import useFittingCart from "../../state/useFittingCart";
import Image from "next/image";
import { jobPackActionsMap } from "../../constants/job-pack-actions";

const JobPackAction = ({ isOpen, onCloseFn, action, jobPackName }) => {
  const fittingCart = useFittingCart();
  const [isDuplicateName, setIsDuplicateName] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isJobPackDuplicate(data.jobpackName)) {
      reset();
    } else {
      if (action === "Save") {
        addJobPack(data.jobpackName);
        onClose();
      } else if (action === "Edit") {
        updateJobPackName(jobPackName, data.jobpackName);
        onClose();
      }
    }
  };

  const onConfirm = () => {
    if (action === "Load") {
      loadJobPack(jobPackName);
    } else if (action === "Remove") {
      removeJobPack(jobPackName);
    } else if (action === "Clear") {
      fittingCart.emptyCart();
    }
    onClose();
  };

  const onClose = () => {
    setIsDuplicateName(false);
    clearErrors("jobpackName");
    reset();
    onCloseFn();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      classNames={{
        modal: "job-pack-actions",
      }}
      showCloseIcon={false}
    >
      <div className="title-wrapper">
        <div className="title">
          <Image
            src={jobPackActionsMap[action]?.icon}
            width={25}
            height={25}
            alt=""
          />
          <div className="text-lg font-bold">
            {jobPackActionsMap[action]?.title}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text-lg">
          {action === "Remove" && (
            <span className="font-bold">{jobPackName} </span>
          )}
          <span>{jobPackActionsMap[action]?.message}</span>
        </div>

        {(action === "Save" || action === "Edit") && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-list-name"
              placeholder="List Name"
              type="text"
              onInput={(e) =>
                isJobPackDuplicate(e.currentTarget.value)
                  ? setIsDuplicateName(true)
                  : setIsDuplicateName(false)
              }
              {...register("jobpackName", {
                required: true,
              })}
            />
            <div className="mt-2 text-red-500">
              {errors.jobpackName && <div>This field is required</div>}
              {isDuplicateName && (
                <div>You already have this List. Please use a new name.</div>
              )}
            </div>
            <div className="flex gap-5 justify-end mt-7">
              <div className="btns-wrapper">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={onClose}
                >
                  <div>Cancel</div>
                </div>
              </div>
              <div className="btns-wrapper">
                <button className="blue-btn ml-[auto]" type="submit">
                  {action === "Save" ? "Save List" : "Update List"}
                </button>
              </div>
            </div>
          </form>
        )}
        {(action === "Load" || action === "Remove" || action === "Clear") && (
          <div className="flex gap-5 justify-end mt-7">
            <div className="flex items-center " onClick={onClose}>
              <button className="focus-visible:outline-none">Cancel</button>
            </div>
            <div className="flex flex-row gap-5" onClick={onConfirm}>
              <button className="blue-btn ml-[auto]">Confirm</button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default JobPackAction;
