import React, { useState, useEffect } from "react";
import useJobPacks from "../../state/useJobPacks";
import JobPackAction from "../modals/JobPackAction";
import useFittingCart from "../../state/useFittingCart";
import Select, { components } from "react-select";
import DeleteIcon from "../../public/images/delete-action.svg";
import EditIcon from "../../public/images/edit-action.svg";
import ListIcon from "../../public/images/actions/list.svg";
import Image from "next/image";

const JobPacks = () => {
  const fittingsCart = useFittingCart();
  const [cart, setCart] = useState([]);

  const jobPackState = useJobPacks();
  const [jobPackOptions, setJobPackOptions] = useState([]);
  const [selectedJobPack, setSelectedJobPack] = useState("");

  const [jobPackAction, setJobPackAction] = useState("");
  const [openJobPackAction, setOpenJobPackAction] = useState(false);

  useEffect(() => {
    const jobPackState = useJobPacks.getState().jobPacks;
    const options = jobPackState.map((jobpack) => {
      return { value: jobpack.name, label: jobpack.name };
    });
    setJobPackOptions(options);
  }, [jobPackState]);

  useEffect(() => {
    setCart(useFittingCart.getState().fittings);
  }, [fittingsCart]);

  const handleJobPackAction = (action, jobPackName) => {
    setSelectedJobPack(jobPackName);
    setJobPackAction(action);
    setOpenJobPackAction(true);
  };

  const { Option } = components;
  const customSelectStyles = {
    control: (base) => ({
      ...base,
      paddingLeft: "30px",
      borderColor: "#9a9a9a",
      minHeight: "48px",
    }),
  };
  const JobPackSelectOptions = (props) => (
    <div className="flex">
      <Option {...props}>
        <div className="flex justify-between items-center min-w-[200px]">
          {props.label}
        </div>
      </Option>
      <div
        className={`flex gap-3 px-3 ${props.isFocused ? "bg-[#deebff]" : ""} ${
          props.isSelected ? "bg-[#2684ff]" : ""
        }`}
      >
        <Image
          src={EditIcon}
          alt={""}
          height={25}
          width={25}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleJobPackAction("Edit", props.value);
          }}
        />
        <Image
          src={DeleteIcon}
          alt={""}
          height={25}
          width={25}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleJobPackAction("Remove", props.value);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="job-packs pb-5">
      <div className="flex flex-col md:flex-row gap-5 md:gap-2">
        <div className="relative">
          <div className="absolute top-[14px] left-[10px] z-10">
            <Image src={ListIcon} width={20} height={20} alt="" />
          </div>
          <Select
            value={""}
            options={jobPackOptions}
            placeholder={
              jobPackOptions.length > 0
                ? "Select a Saved List to load"
                : "You don't have Saved List."
            }
            components={{ Option: JobPackSelectOptions }}
            id="jobpack-select"
            instanceId="jobpack-select"
            className="w-full md:min-w-[375px]"
            onChange={(e) => handleJobPackAction("Load", e.value)}
            styles={customSelectStyles}
          />
        </div>

        <div className="flex gap-5 md:gap-2">
          <div
            className={`blue-btn ${cart.length === 0 && "disabled-btn"}`}
            onClick={() => handleJobPackAction("Save", "")}
          >
            <div>Save List</div>
          </div>
          <div
            className={`red-btn ${cart.length === 0 && "disabled-btn"}`}
            onClick={() => handleJobPackAction("Clear", "")}
          >
            <div>Clear List</div>
          </div>
        </div>
      </div>
      <JobPackAction
        isOpen={openJobPackAction}
        onCloseFn={() => setOpenJobPackAction(false)}
        action={jobPackAction}
        jobPackName={selectedJobPack}
      />
    </div>
  );
};

export default JobPacks;
