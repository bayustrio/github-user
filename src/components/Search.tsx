import React, { FormEventHandler, KeyboardEvent, useState } from "react";
import axios from "axios";
import { IDataUser } from "../Type";
interface IUserData {
  user: string;
  setData: React.Dispatch<React.SetStateAction<IDataUser>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<IUserData> = ({
  user,
  setData,
  loading,
  setLoading,
  setUser,
}) => {
  // HANDLESUBMIT SEARCH USER
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className="flex items-center justify-center  ">
      <form className="w-full" onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill="#0079ff"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={user}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser(e.target.value);
            }}
            className="block p-4 pl-12 w-full text-sm text-gray-900 bg-gray rounded-lg   focus:outline-none  dark:bg-bgCard  dark:placeholder-gray-400 dark:text-white "
            placeholder="Search Github username..."
            required
          />
          <button
            type="submit"
            // onKeyDown={handleSubmit}
            // onKeyPress={handleKey}
            className="text-white absolute right-2.5 bottom-2.5 bg-Btnblue hover:bg-blue-800 focus:ring-4 focus:outline-none ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
function setData(data: any) {
  throw new Error("Function not implemented.");
}
