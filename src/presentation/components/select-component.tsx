import React, { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

interface SelectComponentProps {
  items: Array<any>;
  className?: string;
  onChange?: Function;
}

export default function SelectComponent(props: Readonly<SelectComponentProps>) {
  const { items, onChange, className } = props;
  const [selected, setSelected] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);

  function changeSelectedValue(selectedItem: any) {
    setSelected(selectedItem)
    if (onChange) {
      onChange(new CustomEvent('change', {
        detail: {
          value: selectedItem
        }
      }))
    }
  }

  return (
    <>
      <button className={`absolute cursor-default top-0 left-0 w-screen h-screen ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)} ></button>
      <div className={`relative w-fit ${className}`}>
        <button
          className="flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 hover:shadow-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="w-full">{selected}</p>
          <FaChevronDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300 will-change-transform`}
          />
        </button>

        {isOpen && (
          <div className="absolute mt-2 px-2 py-4 w-max bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => {
                  changeSelectedValue(item);
                  setIsOpen(false);
                }}
                className={`flex gap-8 items-center justify-between w-full text-start px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer rounded-lg ${
                  item === selected ? "bg-blue-50" : ""
                }`}
              >
                {item}
                {item === selected && <FaCheck />}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
