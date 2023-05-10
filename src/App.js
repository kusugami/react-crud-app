import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  //const [editRecipe, setEditRecipe] = useState(null);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const handleDeleteRecipe = (indexToDelete) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe, index) => index !== indexToDelete)
    );
  };
/*
  const handleEditRecipe = (recipeId) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);
    setEditRecipe(recipeToEdit);
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
    setEditRecipe(null);
  };
*/
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      
      <RecipeList 
      recipes={recipes} 
      handleDeleteRecipe={handleDeleteRecipe} />

      <RecipeCreate handleAddRecipe={handleAddRecipe} />
    </div>
  );
}

export default App;
