import React from "react";
import Input from "../input";
import Cross from "../../../../svg/cross";
function Modal({ heading, clickCross, valueOne, changeOne, labelOne, placeholderOne, valueTwo, changeTwo, labelTwo, placeholderTwo, handleGetData, buttonText }) {
  return (
    <>
      <div className=" w-full h-screen fixed  bg-black left-0 top-0 bg-opacity-70 ">
        <div className="w-12 h-12 bg-white hover:bg-black hover:text-white text-black rounded-full absolute right-10 top-10 flex items-center justify-center cursor-pointer group" onClick={clickCross}>
          <Cross customClass={"w-6 group-hover:text-white text-black "} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[700px]  bg-white rounded-xl p-12">
            <h1 className="text-2xl font-bold mb-3">{heading}</h1>
            <Input value={valueOne} change={changeOne} customClass={`mb-4`} label={labelOne} placeholder={placeholderOne} />
            <Input value={valueTwo} change={changeTwo} label={labelTwo} placeholder={placeholderTwo} />
            <button onClick={handleGetData} className="hover:bg-neutral-900 bg-neutral-800 w-full py-3 text-base mt-6 focus:outline-none font-semibold text-white rounded-md">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
