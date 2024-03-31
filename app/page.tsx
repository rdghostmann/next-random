import SearchBar from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-4 pt-24 lg:px-40 lg:pt-28 xl:px-60">
      <h1 className="absolute top-0 w-full text-center text-white bg-gray-800 py-4 text-3xl font-bold  ">Random Scrapper</h1>
    <div className="w-full">
      <SearchBar />
    </div>
    </main>
  );
}
