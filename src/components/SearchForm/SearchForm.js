import "./SearchForm.css";
import React from "react";

function SearchForm({ onSubmit }) {
  const [input, setInput] = React.useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <form className="search-form" name="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        onChange={handleInputChange}
        required
      ></input>
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
