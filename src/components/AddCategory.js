import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Escribe la categoria"
        onChange={(e) => handleInputChange(e)}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
