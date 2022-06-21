import React, { useEffect } from "react";

const WizardNav = ({ currentStep, goToStep, activeStepHandler }) => {
  useEffect(() => {
    activeStepHandler(currentStep);
  }, [activeStepHandler, currentStep]);

  return (
    <div className="mx-auto">
      <button className="bg-main px-4 py-3 mt-8 bg-opacity-25"> submit</button>
      <ul className="list-none flex justify-evenly gap-x-2 mx-auto mt-10">
        {Array.apply(null, Array(4)).map((el, i) => (
          <li
            className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
            onClick={() => goToStep(i + 1)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default WizardNav;
