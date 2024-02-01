import React from "react";

const DeleteGifItem = ({ onDeleteCategory }) => {
  return (
    <button
      className="transition-all duration-75 text-black text-lg 
      border px-2 rounded  h-fit focus:ring focus:ring-red-600 
      bg-red-500 font-bold box-border"
      onClick={onDeleteCategory}
    >
      X
    </button>
  );
};

export default DeleteGifItem;
