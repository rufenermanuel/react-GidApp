/* import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  //const categories = ["Rick and Morty", "The Simpsons", "Friends"];
  const [categories, setCategories] = useState(["Rick and Morty"]); */

/*  const handleAdd = () => {
    const extra = "Football Match";
    setCategories([...categories, extra ]);
  }; */

/*   return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((categories) => //<li key={categories}>{categories}</li>
          <GiftGrid categories={categories} key={categories}/>
        )}
      </ol>
    </>
  );
}; */
//cd Desktop\Curso Fernando Herrera\React\04-gif-expert-app

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  // Categorías

  const [category, setCategory] = useState(["Rick and Morty"]);
  //Agregar categorías
/*   const handleAddCategories = () => {
    const inputCat = document.querySelector("#newCategory");

    setCategory([...category, inputCat.value]);
  
  }; */

  // Se renderiza las categorías desde el componente GifGrid

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategory={setCategory} />
      <hr></hr>
      <ol>
        {category.map((cat) => (
          <GiftGrid category={cat} key={cat} />
        ))}
      </ol>
      {/* <input id="newCategory"></input> */}
      {/* <button onClick={handleAddCategories}>ADD Categorie</button> */}
    </>
  );
};
