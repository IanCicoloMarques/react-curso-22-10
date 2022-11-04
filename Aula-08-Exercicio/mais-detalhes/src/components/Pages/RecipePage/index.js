import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

import RecipeDetail from "../../RecipeDetails";

export default function RecipePage(props){
    const [recipeReturn, setRecipeReturn] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
      }

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/recipes/${params.id}`);
        promise.then(response => {
          setRecipeReturn(response.data);
        });
        promise.catch(error => console.log("error", error));
      }, []);

    return(
        <div>
            {
                recipeReturn ?
                <RecipeDetail
                title = {recipeReturn.title}
                steps = {recipeReturn.steps}
                ingredients = {recipeReturn.ingredients}
                time = {recipeReturn.time}/>
                :
                <div>Receita não encontrada</div>
            }
            <div className="actions">
                <button onClick={handleBack}>Voltar</button>
            </div>
        </div>
    )
}