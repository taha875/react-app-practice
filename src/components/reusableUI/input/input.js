import React from "react";

export default function input({ placeholder, value, change, label,customClass }) {
  return (
    <>
      <div className={`flex flex-col ${customClass}`}>
        <label className="text-sm font-bold">{label}</label>
        <input placeholder={placeholder} value={value} onChange={change} className="w-full focus:outline-none p-2 rounded-md mt-1 border border-gray-400" />
      </div>
    </>
  );
}
