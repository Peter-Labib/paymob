import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const selectStyle = {
  container: (base, state) => ({
    ...base,
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
    // "&:hover": {
    //   boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)",
    // },
    // borderRadius: "10px",
    // minHeight: 35,
  }),
  input: (base, state) => ({
    ...base,
    // color: "white",
    fontSize: "16px",
    padding: ".75rem",
  }),

  indicatorSeparator: (base, state) => ({
    ...base,
    display: "none",
  }),

  loadingIndicator: (base, state) => ({
    ...base,
    ">span": {
      fontSize: "10px",
    },
  }),

  singleValue: (base, state) => ({
    ...base,
    color: "#757575",
    fontSize: "14px",
  }),

  indicatorsContainer: (base, state) => ({
    ...base,
    color: "white",
  }),

  menu: (base, state) => ({
    ...base,
    fontSize: "10px",
    zIndex: 100000,
  }),
  option: (base, state) => ({
    ...base,
    borderBottom: "1px solid #00beac;",
    color: "#3b3b3b",
    padding: 10,
    fontSize: "14px",
    // borderRadius: "5px",
    textAlign: "center",
    background: "none",
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "transparent",
    color: "white",
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: "white",
  }),
};

const mainStyle = {
  control: (base, state) => ({
    ...base,
    background: "#EEEEEE;",
    borderRadius: "0px",
    border: "none",
    width: "100%",
    // minHeight: 35,
    // "&:hover": {
    //   borderColor: "transparent",
    //   // boxShadow: "0 0 0 1px #757575",
    // },
  }),
  valueContainer: (base, state) => ({
    ...base,
    background: "#EEEEEE;",
    // borderRadius: "10px",
    color: "white",
  }),
  placeholder: (base, state) => ({
    ...base,
    color: "#757575",
    fontSize: "16px",
    textAlign: "center",
    width: "100%",
  }),
  clearIndicator: (base, state) => ({
    ...base,
    color: "#757575",
  }),
};

const blueStyle = {
  control: (base, state) => ({
    ...base,
    background: "#0052CC;",
    borderRadius: "0px",
    width: "100%",
    // minHeight: 35,
    "&:hover": {
      borderColor: "#0052CC",
      boxShadow: "0 0 0 1px #0052CC",
    },
  }),
  valueContainer: (base, state) => ({
    ...base,
    background: "#0052CC",
    // borderRadius: "10px",
    color: "white",
  }),
  placeholder: (base, state) => ({
    ...base,
    color: "white",
    fontSize: "16px",
    textAlign: "center",
    width: "100%",
  }),
  clearIndicator: (base, state) => ({
    ...base,
    color: "white",
  }),
};

const Dropdown = ({
  loadOptions,
  value,
  placeholder,
  cacheUniqsArr = undefined,
  onChange,
  additional,
  isMulti = false,
  isClearable = true,
  onFocus,
  fullWidth,
  className = "",
  labelStyles = {},
  label,
  filterOption, // (option, rawInput) =>
  isDisabled = false,
}) => {
  return (
    <div
      className={className ? className : fullWidth === undefined ? "" : "mt-4"}
    >
      {label && (
        <span
          className="mb-2 block text-xs font-semibold text-left"
          style={{ ...labelStyles, color: "#7A869A" }}
        >
          {label}
        </span>
      )}
      <AsyncPaginate
        loadOptions={loadOptions}
        styles={{ ...mainStyle, ...selectStyle }}
        className={""}
        value={value}
        placeholder={placeholder}
        cacheUniqs={cacheUniqsArr}
        onChange={onChange}
        additional={additional}
        onFocus={onFocus}
        isMulti={isMulti}
        isClearable={isClearable}
        filterOption={filterOption}
        closeMenuOnSelect={!isMulti}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default Dropdown;
