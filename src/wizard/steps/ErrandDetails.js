import React from "react";
import Dropdown from "../../Dropdown";

const ErrandDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-2/3 gap-x-7 gap-y-12 mt-16 ">
      <Dropdown label="Errand Channel ?" />
      <Dropdown label="Errand Priority" />
      <Dropdown label="POS Type" />
      <Dropdown label="FST" />
      <Dropdown label="Number Of POSs / Sim / Paper Rol" />
    </div>
  );
};

export default ErrandDetails;
