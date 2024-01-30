import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const onDeleteCategory = (category) => {
    setCategories((prev) => prev.filter((item) => item !== category));
  };

  return (
    <div className="w-full space-y-5">
      <h1 className="text-center text-4xl font-bold p-5">GifExpertApp</h1>

      <AddCategory onAddCategories={onAddCategory} />
      <section className="space-y-5">
        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            onDeleteCategory={onDeleteCategory}
          />
        ))}
      </section>
    </div>
  );
};

export default GifExpertApp;
