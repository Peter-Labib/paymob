import React from "react";
import Dropdown from "../../Dropdown";
import Input from "../../Input";

const ServiceLocation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-2/3 gap-x-7 gap-y-12 mt-16 ">
      <Dropdown
        label="Service Task City"
        placeholder="please select city"
      />
      <Input label="Service Task Address" />
      <Input label="Address - Landmark" />
      <Input label="GPS - Location " />
    </div>
  );
};

export default ServiceLocation;
