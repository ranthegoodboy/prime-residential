import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/footer";
import {
  goToNextStep,
  goToPrevStep,
  getActiveStepFields,
  isFirstStepActive,
  isLastStepActive,
  setActiveStep,
} from "../helper/utils";
import BusinessContactInfo from "../components/credit-application/BusinessContactInfo";
import BusinessAndCreditInfo from "../components/credit-application/BusinessAndCreditInfo";
import BusinessReferences from "../components/credit-application/BusinessReferences";
import Agreement from "../components/credit-application/Agreement";
import SubmitSuccess from "../components/credit-application/SubmitSuccess";
import formDataFormatter from "../helper/form-data-formatter";
import { creditApplicationStepsMap } from "../constants/credit-application-map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const CreditApplication = () => {
  const [steps, setSteps] = useState(creditApplicationStepsMap);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setIsLoading(true);
    const mailData = {
      formValues: getValues(),
      message: formDataFormatter(getValues()),
    };

    fetch("/api/mailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        reset();
        setActiveStep(steps, "step1");
        setIsLoading(false);
      }
    });
  };

  const StepsStatus = ({ steps }) => {
    return (
      <div className="py-20">
        <div className="boxed-container">
          <div className="flex gap-5">
            {Object.keys(steps).map((step, index) => (
              <div key={index} className={`${index !== 3 && "flex-grow"}`}>
                <div className="step-status-wrapper">
                  <div
                    className={`circle-status ${
                      steps[step].active === true
                        ? `bg-green-300 border border-green-400`
                        : `bg-gray-300 border border-gray-400`
                    }`}
                  >
                    {index + 1}
                  </div>
                  <hr
                    className={`flex-grow  border-1 border-gray-300 ${
                      index === 3 ? `hidden` : `block`
                    }`}
                  ></hr>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {submitted && <SubmitSuccess callBack={() => setSubmitted(false)} />}

      {!submitted && (
        <>
          <StepsStatus steps={steps} />
          <div id="credit-application" className="boxed-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <BusinessContactInfo
                register={register}
                errors={errors}
                steps={steps}
              />
              <BusinessAndCreditInfo
                register={register}
                errors={errors}
                steps={steps}
              />
              <BusinessReferences
                register={register}
                errors={errors}
                steps={steps}
              />
              <Agreement register={register} errors={errors} steps={steps} />
              <div className="flex gap-3 py-20 justify-end">
                <div
                  className={`${isFirstStepActive(steps) ? "hidden" : "block"}`}
                >
                  <button
                    className="form-nav-btn"
                    onClick={() => setSteps(goToPrevStep(steps))}
                  >
                    Previous
                  </button>
                </div>
                <div
                  className={`${isLastStepActive(steps) ? "hidden" : "block"}`}
                >
                  <div
                    className="form-nav-btn"
                    onClick={async () => {
                      const isActiveStepValid = await trigger(
                        getActiveStepFields(steps)
                      );
                      if (isActiveStepValid) {
                        setSteps(goToNextStep(steps));
                        clearErrors(getActiveStepFields(steps));
                      }
                    }}
                  >
                    Next
                  </div>
                </div>
                <div
                  className={`${isLastStepActive(steps) ? "block" : "hidden"} ${
                    isLoading ? "disabled-btn" : ""
                  }`}
                >
                  <button className="form-nav-btn" type="Submit">
                    {isLoading ? (
                      <div className="flex gap-2 items-center">
                        <FontAwesomeIcon
                          icon={faSpinner}
                          size={"lg"}
                          className="animate-spin"
                        />
                        Submitting
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">Submit</div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default CreditApplication;
