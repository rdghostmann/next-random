"use client";
import { scrapeRandomNumbers } from '@/actions/scrape-randomNumbers';
import useStore from '@/hooks/randomNumbers';
import React, { useState } from 'react';


const SearchBar = () => {

  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);
  const addRandomNumber = useStore((state: any) => state.addRandomNumber);
  const randomNumber = useStore((state: any) => state.randomNumber);





  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      //scraping logic
      const randomNumber = await scrapeRandomNumbers(searchPrompt);
      console.log("StoredX:", randomNumber);
      addRandomNumber(randomNumber);
      // setSearchPrompt("");
    } catch (error) {
      console.log("puppeteer problem",error);
    }
    setLoading(false);
  }


  return (
    <>
      <div className="flex flex-col lg:flex-row w-full items-start gap-3">
        <input className="w-full text-sm p-3 border-4 border-neutral-200 rounded-lg text-gray-500"
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Search for Random Number to Scrap"
        />

        <div className="flex gap-3">
          <button disabled={searchPrompt == '' || isLoading} className={`${searchPrompt !== '' && !isLoading ? 'cursor-pointer bg-gray-800 w-36' : ''}bg-gray-800 w-36 disabled:bg-gray-400 rounded-md px-5 py-3 text-white`}
            onClick={handleSubmit}>{isLoading ? 'Scraping...' : "Scrape"}</button>

          <button
            className={`${randomNumber && !isLoading ? "cursor-pointer" : ""} bg-gray-800 w-36 disabled:bg-gray-400 rounded-md shadow-xm px-5 py-3 text-white`}
            onClick={() => { }}>Export</button>
        </div>
      </div>
    </>
  )
}

export default SearchBar