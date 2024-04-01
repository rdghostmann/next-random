"use client";
import useStore from "@/hooks/randomNumbers";
import React from "react";


const NumDisplay = () => {

  const storedData = useStore((state: any) => state.randomNumbers)
  console.log("Stored data: ", { storedData })

  if (!storedData) {
    return <div>No data available</div>;
  }

  return (
    <section>

      <div className="w-2/3 h-screen flex flex-wrap gap-3 mt-4 p-5 border border-black ">
        {storedData.map((dataObj: any, index: any) => (
          <pre key={index} className="w-fit h-fit border border-black rounded px-3 py-2">
            {dataObj.generatedNum}
          </pre>
        ))}
      </div>

      <div>
      {storedData.map((dataObj:any, index:any) => {
        console.log('dataObj:', dataObj);

        if (!dataObj.generatedNum) {
          return <div key={index}>Missing generatedNum value</div>;
        }

        return <pre key={index}>{dataObj.generatedNum}</pre>;
      })}
    </div>

    </section >
  );
}

export default NumDisplay

