import { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./component/Recipes";

function App() {
  const APP_ID = "aea4da4e";
  const APP_KEY = "7c087e2efd192dc9db6da6cbedbf9d55";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const getRecipe = async () => {
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await responce.json();
    setRecipes(data.hits);
  };
  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);





  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipes recipe={recipe} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
