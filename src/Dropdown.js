import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Dropdown = ({loadOptions,
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
  hasLabel = false,
  label = "",
  filterOption, // (option, rawInput) =>
  isDisabled = false,}) => {
  return <div
  className={
    className
      ? className
      : fullWidth === undefined
      ? ""
      : "mt-4"
  }
>
  {hasLabel && (
    <span className="label_title" style={{ ...labelStyles }}>
      {label || placeholder}
    </span>
  )}
  <AsyncPaginate
    loadOptions={loadOptions}
    className={'p-4'}
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
</div>;
};

export default Dropdown;
