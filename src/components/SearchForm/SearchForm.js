function SearchForm(onSubmit) {
  return (
    <form className="search-form" name="search-form" onSubmit={onSubmit}>
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
