import React, { useState } from "react";

 // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

function RecipeCreate({ handleAddRecipe }) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddRecipe(formData);
    setFormData({
      ...initialFormState
    })
  };
 
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  placeholder="Photo"
                  value={formData.photo}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  type="text"
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  value={formData.preparation}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td>
            <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
