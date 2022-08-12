import "./SearchForm.css";

function SearchForm(onSubmit) {
  return (
    <form className="search-form" name="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        required
      ></input>
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
