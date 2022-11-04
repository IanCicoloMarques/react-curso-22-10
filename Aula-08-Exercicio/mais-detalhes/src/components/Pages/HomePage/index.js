import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const uri = process.env.REACT_APP_BACKEND_URI;
    console.log("url", uri);
    const promise = axios.get(`${uri}/menu`);
    promise.then(response => {
      setRecipes(response.data);
    })
  }, []);

  function buildRecipes() {
    if (!recipes) return <h1>Carregando...</h1>
    return recipes.map(recipe => {
      const url = `/recipe/${recipe.id}`;
      return (
        <li><Link to={url}>{recipe.item}</Link></li>
      )
    })
  }

  const recipesComponent = buildRecipes();
  return (
    <div className="HomePage">
      <h1>Receitinhas delícia 🍔🍟</h1>
      <ul>
        {recipesComponent}
      </ul>
    </div>
  )
}