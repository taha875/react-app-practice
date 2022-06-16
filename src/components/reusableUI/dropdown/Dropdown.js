import React, { useState, useRef, useEffect, useContext } from "react";
import Tags from "../Tags";

function Dropdown({ selected, setSelected, options, name }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    dropdownRef.current?.focus();
  }, [isOpen]);

  const addTagsHandler = (optionTags) => {
    if (selected.includes(optionTags)) {
      console.log("Already exist");
    } else {
      setSelected([...selected, optionTags]);
    }
  };
  const removeTagsHandler = (optionTags, e) => {
    e.stopPropagation();
    setSelected(selected.filter((item) => item !== optionTags));
  };
  const renderTags = () => {
    return (
      <>
        {selected?.map((items, index) => {
          return (
            <>
              <Tags click={(e) => removeTagsHandler(items, e)} index={index} items={items} />
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="relative z-50  ">
      <div
        ref={dropdownRef2}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="py-[14px]    border justify-between hover:bg-slate-50 cursor-pointer flex items-center rounded px-3  border-gray-400 w-full"
      >
        <p className="flex items-center gap-x-2">{selected ? renderTags() : `Select ${name}`}</p>
        <svg className={`${isOpen ? "rotate-180" : ""} transition-all duration-500 `} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L5 5L10 0" fill="black" />
        </svg>
      </div>
      <div tabIndex={5} onBlur={() => setIsOpen(false)} style={{ width: dropdownRef2.current?.clientWidth }} ref={dropdownRef} className={`${isOpen ? "block" : "hidden"} absolute max-h-[300px] overflow-auto  bg-white outline-none rounded shadow `}>
        {options.map((option, index) => {
          return (
            <p
              onClick={() => {
                setIsOpen(false);
                addTagsHandler(option.title);
              }}
              key={index}
              className="py-[10px] break-words px-4 cursor-pointer text-black text-xs letter-[-0.03em] hover:bg-slate-100"
            >
              {option.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
