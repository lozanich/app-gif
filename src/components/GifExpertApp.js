import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./../components/GifGrid";

function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Nueva categoria"]);
  //   };

  return (
    <>
      <h2>Gif expert app</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((item) => {
          return <GifGrid key={item} category={item} />;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;
