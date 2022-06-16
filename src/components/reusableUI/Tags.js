import React from "react";

function Tags({ items ,click,index}) {
  const [cross, setCross] = React.useState(false);
  return (
    <>
      <div key={index} onMouseEnter={() => setCross(true)} onMouseLeave={() => setCross(false)} onClick={click} className="px-2 py-1 flex items-center justify-center bg-blue-400 text-white  rounded-full text-xs">
        {items}
        {cross && (
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        )}
      </div>
    </>
  );
}

export default Tags;
