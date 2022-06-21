import React from "react";
import { RiSearchFill } from "react-icons/ri";
import Dropdown from "./Dropdown";
import Input from "./Input";

const Managment = () => {
  return (
    <div className="section">
      <p className="text-left section__header">Managment &amp; City Owner</p>
      <div className="container">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <Dropdown hasLabel label="Statue" placeholder="Please Select City" />
          <Dropdown
            hasLabel
            label="Requester City"
            placeholder="Please Select Your City"
          />
          <Dropdown
            hasLabel
            label="Requester"
            placeholder="Please Select Your City"
          />
          <Dropdown hasLabel label="Merchant" placeholder="Filter Content" />
          <Input hasLabel label="Filter Title " placeholder="Search" hasIcon>
            <RiSearchFill
              size={30}
              color="#00BEAC"
              style={{ transform: "translate(0, 50%)" }}
            />
          </Input>
        </div>
      </div>
    </div>
  );
};

export default Managment;
