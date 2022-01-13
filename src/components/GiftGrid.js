/* import React from "react";

export const GiftGrid = ({ categories }) => {
  const getGifts = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=9QceXYkgWnjljFQJMtf5uuBtnuWVFzNA&q=Rick and Morty&limit=10";
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts=data.map((img)=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    console.log(data);
  };
  getGifts();
  return (
    <>
      <li>{categories}</li>
    </>
  );
}; */

import React, { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // useEffect es utilizado en esta oportunidad para evitar duplicar la renderizacion al actualizar componente
  useEffect(() => {
    getGifts(category).then((imgs) => setImages(imgs));
  }, [category]); // pasar como segundo parametro array vacio hace que se ejecute esa instruccion sólo cuando el componente es renderizado por primera vez.

  //Renderiza las categorías
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
