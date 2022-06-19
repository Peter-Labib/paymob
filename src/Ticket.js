import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";

const TicketInfo = ({ title, data }) => (
  <div className="flex gap-2 text-sm">
    <p className="text-gray-500">{title}</p>
    <p className="font-bold text-gray-400">{data}</p>
  </div>
);

const Ticket = () => {
  return (
    <div>
      <div className="flex px-20 py-2 lg:py-0 justify-between">
        <div className="flex gap-x-2 items-center ">
          <p className="text-gray-600 font-semibold">Ticket</p>
          <p className="text-xs text-white bg-green-600 rounded-md px-2">
            ASSIGNED
          </p>
        </div>
        <div className="">
          <Dropdown placeholder={"assign to"} />
        </div>
      </div>
      <div className="bg-mainLight py-4">
        <div className="lg:w-4/5 mx-auto flex gap-8 justify-center flex-wrap w-full">
          <TicketInfo title="Ticket ID" data="1568" />
          <TicketInfo title="Ticket ID" data="1568" />
          <TicketInfo title="Ticket ID" data="1568" />
          <TicketInfo title="Ticket ID" data="1568" />
          <TicketInfo title="Ticket ID" data="1568" />
        </div>
      </div>
      <div className="container px-2  grid grid-cols-1 lg:grid-cols-2 md:gap-y-10 lg:gap-24 mt-16">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-2 form-gap">
            <Input label="HOD" placeholder="HOD" />
            <Input label="Errand Channel" placeholder="Errand Channel" />
            <Input label="District Manager" placeholder="District Manager" />
            <Input label="Errand periority" placeholder="Errand periority" />
            <Input label="Errand periority" placeholder="Errand periority" />
            <Input label="Errand periority" placeholder="Errand periority" />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-2 form-gap">
            <Input label="HOD" placeholder="HOD" />
            <Input label="Errand Channel" placeholder="Errand Channel" />
            <Input label="District Manager" placeholder="District Manager" />
            <Input label="Errand periority" placeholder="Errand periority" />
            <Input label="Errand periority" placeholder="Errand periority" />
            <Input label="Errand periority" placeholder="Errand periority" />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-2 form-gap">
            <Input label="HOD" placeholder="HOD" />
            <Input label="Errand Channel" placeholder="Errand Channel" />
            <Input label="District Manager" placeholder="District Manager" />
            <Input label="Errand periority" placeholder="Errand periority" />
            <Input label="Errand periority" placeholder="Errand periority" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
