import { useState } from "react";

export const AddCategory = ({ onAddCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    onAddCategories(inputValue);

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className="sticky block w-full top-1">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none md:h-full">
          <svg
            className="w-4 h-full text-gray-500 dark:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-xl 
          text-gray-900  rounded-lg 
          bg-gray-50 dark:bg-gray-700 
          dark:placeholder-gray-400 
          dark:text-white 
          
          md:h-24 "
          placeholder="Search GIFs"
          required
          autoComplete="none"
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 
          bg-blue-700 hover:bg-blue-800 
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-lg text-xl px-4 py-2 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          md:h-20 "
        >
          Search
        </button>
      </div>
    </form>
  );
};
