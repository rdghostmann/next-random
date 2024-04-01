"use client";
import useStore from "@/hooks/randomNumbers";
import React, { useRef, useState } from "react";

const NumShow = () => {
  const storedData = useStore((state: any) => state.randomNumbers);

  const [copy, setCopy] = useState(false);

  if (!storedData) {
    return <div>No data available</div>;
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
  
      setTimeout(() => {
        setCopy(false);
      }, 2000);

      return true;
    } catch (err) {
      console.error("Failed to copy text to clipboard: " + err);
      setCopy(false);
      return false;
    }
  };



  return (
    <section className="w-full shadow-md bg-stone-300 ">
      <div className="w-full h-screen flex flex-wrap gap-3 mt-4 p-5">
        {storedData.map((dataObj: any, index: any) => (
          <div key={index} className="relative pt-10">
            <pre  className="w-fit h-fit border border-slate-200 bg-slate-300 rounded px-3 py-2">
              {dataObj.generatedNum}
            </pre>

            <button
              className="absolute top-2 right-2 text-xs font-medium text-white bg-black py-1 px-2 rounded"
              onClick={() => copyToClipboard(dataObj.generatedNum)}
            >
              {copy? "Copied" : "Copy"}
            </button>

         
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumShow;



