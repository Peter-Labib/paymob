import React from "react";
import Dropdown from "./Dropdown";

const TicketInfo = ({ title, data }) => (
  <div className="flex gap-2 text-sm">
    <p className="text-gray-500">{title}</p>
    <p className="font-bold text-gray-400">{data}</p>
  </div>
);


const Ticket = () => {
  return (
    <div>
      <div className="flex px-20 py-4">
        <div className="flex gap-x-2 items-center">
          <p className="text-gray-600 font-semibold">Ticket</p>
          <p className="text-xs text-white bg-green-600 rounded-md px-2">
            ASSIGNED
          </p>
        </div>
        <div className="w-2"></div>
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
      <div className="container">
        <div>
          <Dropdown
            loadOptions={[
              { label: "p", value: "p" },
              { label: "v", value: "v" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
