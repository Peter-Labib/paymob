import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";

const Wizard = () => {
  return <div className="container mt-16">
    <div className="flex border-b border-gray-400 justify-between lg:w-4/5 mx-auto ">
        <div className="border-b-2 border-main text-main py-4">Requester Info.</div>
        <div className="border-b-2 border-gray-500 py-4">Requester Info.</div>
        <div className="border-b-2 border-gray-500 py-4">Requester Info.</div>
        <div className="border-b-2 border-gray-500 py-4">Requester Info.</div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:w-2/3 gap-x-7 gap-y-12 mt-16 ">
        <Input label="Merchant Contact Number" />
        <Input label="Merchant Contact Number" />
        <Dropdown label="sdf" hasLabel/>
        <Input label="Merchant Contact Number" />
    </div>
  </div>;
};

export default Wizard;
