import React from "react";
import Skeleton from "./ui/skeleton";

const Loading = ({ isLoading }) => {
  if (isLoading)
    return (
      <ol className=" space-y-3 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ol>
    );

  return null;
};

export default Loading;
