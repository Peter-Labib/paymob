import React from "react";
import Input from "../../Input";

const Mer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-2/3 gap-x-7 gap-y-12 mt-16 ">
      <Input label="Merchant Contact Number" />
      <Input label="Merchant ID" />
      <Input label="Merchant Name" />
      <Input label="Company Name / Partner Name" />
      {/* <Dropdown label="Merchant Name" hasLabel/> */}
      <Input label="Username" />
    </div>
  );
};

export default Mer;
