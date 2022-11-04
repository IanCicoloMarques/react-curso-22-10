export default function RecipeDetail(props){
    const { title, steps, ingredients, time } = props;
    return(
        <div>
            <h1>Receita: {title}</h1>
            <h2>Tempo de preparo: {time}</h2>
            <h3>Ingredientes:
                {ingredients.map(ingredient => {
                    return <div>- {ingredient}</div>
                })}
            </h3>
            <h3>Modo de preparo: 
                {steps.map( (step, index) => {
                return <div>{index+1}. {step}</div>
                })}
            </h3>
        </div>
    )
}