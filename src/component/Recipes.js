import React from 'react'

const Recipes = ({recipe}) => {
    return (
        <div className='recipe'>
           <h1>{recipe.recipe.label}</h1> 
           <ol>
               {recipe.recipe.ingredients.map(ingredient=>
               
               <li >
                   <h6>{ingredient.text}</h6>
               </li>
                )}
           </ol>
           <h2>{Math.round(recipe.recipe.calories)}</h2> 
           <img className='image' src={recipe.recipe.image} alt={recipe.recipe.image} />

        </div>
    )
}

export default Recipes
