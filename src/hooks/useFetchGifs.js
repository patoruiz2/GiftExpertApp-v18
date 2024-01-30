import { useState } from "react";
import { getGifs } from "../service/getGifs";
import { useEffect } from "react";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchGifs = async () => {
    setIsLoading(true);
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);

  }

  useEffect(() => {
    fetchGifs();
  }, [category]);

  return {
    gifs,
    isLoading
  }
}