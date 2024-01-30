import { useFetchGifs } from "../hooks/useFetchGifs";
import DeleteGifItem from "./DeleteGifItem";
import GifItem from "./GifItem";
import Loading from "./Loading";

const GifGrid = ({ category, onDeleteCategory }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="flex gap-3 text-3xl font-bold">
        {category.toUpperCase()}
        {<DeleteGifItem onDeleteCategory={() => onDeleteCategory(category)} />}
      </h3>{" "}
      <Loading isLoading={isLoading} />
      <ol className=" space-y-3 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </ol>
    </>
  );
};

export default GifGrid;
