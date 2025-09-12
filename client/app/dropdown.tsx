"use client";
import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("ENGLISH");
  const options = ["ENGLISH", "HINDI", "FRENCH", "SPANISH"];

  return (
    <div className="relative w-30">
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="border rounded-full pl-3 pr-6 py-3 font-w-b cursor-pointer bg-white flex justify-between items-center border-gray-300"
      >
        {selected}
        <span className="ml-2">▼</span>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute mt-2 bg-white border rounded-2xl shadow-lg z-30 border-gray-300">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`px-6 rounded-2xl py-2  mx-2 my-3 cursor-pointer hover:bg-gray-100 ${
                option === selected ? "bg-gray-200 font-bold" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
