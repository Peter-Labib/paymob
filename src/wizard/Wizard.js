import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import ErrandDetails from "./steps/ErrandDetails";
import MerchantDetails from "./steps/MerchantDetails";
import Requester from "./steps/Requester";
import ServiceLocation from "./steps/ServiceLocation";
import WizardNav from "./WizardNav";

const nav = [
  { label: "Requester Info.", val: 1 },
  { label: "Merchant Details", val: 2 },
  { label: "Errand Details", val: 3 },
  { label: "Service Location & Address", val: 4 },
];

const Wizard = () => {
  const [activeNav, setActiveNave] = useState();

  const activeStepHandler = (currentStep) => {
    setActiveNave(currentStep);
  };

  return (
    <div className="container mt-16 min-h-70 p-1">
      <div className="flex border-b border-gray-400 justify-between lg:w-4/5 mx-auto cursor-default">
        {nav.map((el) => (
          <div
            className={`transition border-b-2 font-bold text-lg  py-4 ${
              activeNav === el.val
                ? "border-main text-main"
                : "border-gray-500 text-[#42526E]"
            }`}
          >
            {el.label}
          </div>
        ))}
      </div>

      <StepWizard
        nav={<WizardNav activeStepHandler={activeStepHandler} />}
        className="flex flex-col-reverse min-h-70 justify-between"
      >
        <Requester stepName={"Requester"} />
        <MerchantDetails stepName={"Merchant"} />
        <ErrandDetails stepName={"Errand"} />
        <ServiceLocation stepName={"Service"} />
      </StepWizard>
    </div>
  );
};

export default Wizard;
