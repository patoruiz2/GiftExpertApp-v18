const Skeleton = () => {
  return (
    <div className="bg-white shadow-lg w-full rounded-2xl mt-auto">
      <div className="h-32 overflow-hidden bg-gray-200 animate-pulse"></div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
          <div className="col-span-2 ..."></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
