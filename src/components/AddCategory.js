/* import React, { useState } from "react";
import Proptypes from "prop-types";
import { addComments } from "@babel/types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(" ");

  const handleChange = (e) => setInputValue(e.target.value);
  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [...cat, inputValue]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleInputSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired,
}; */

import React, { useState } from "react";

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState(" Add New Series or Movies Here");

  //Maneja valor del input del componente AddCategory
  const handleInput = (e) => {
    const actualValue = e.target.value;
    setInputValue(actualValue);
  };

  //Maneja el submit del input del componenete AddCategory
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategory((categories) => [ inputValue , ...categories]);
      setInputValue("");
    }
  };
  //Limpiar mensaje del Input luego del Click
  const cleanInputMesage=()=>{
    setInputValue("");
  }

  //Renderiza AddCategory
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="animate__animated animate__rubberBand">Add Serie or Movie  ⬇️</h2>
      <input type="text" value={inputValue} onChange={handleInput}  onClick={cleanInputMesage}/>
    </form>
  );
};
