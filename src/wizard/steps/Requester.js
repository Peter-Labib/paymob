import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";

const Requester = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-2/3 gap-x-7 gap-y-12 mt-16 ">
      <Input label="Requester Contact Number" />
      <Input label="Please Copy Your Name" />
      <Dropdown
        label="Requester Function"
        placeholder="Please Select (Department)"
      />
      <Dropdown
        label="Requester City"
        placeholder="Please Select Your City"
      />
      <Dropdown
        label="Please Select Your HOD"
        placeholder="Please Select From Here"
      />
      <Dropdown
        label="Please Choose Your District Manager"
        placeholder="Please Select From Here"
      />
    </div>
  );
};

export default Requester;
