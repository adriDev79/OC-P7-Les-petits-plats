/* eslint-disable import/extensions */
// traitement recherche / affichage des cards
// eslint-disable-next-line import/extensions, import/no-unresolved
import { getRecipes } from "./fetchRecipe.js";
import { cardTemplate } from "./card.js";
import { initInputFilter, filterIngredient, filterUstensils, filterAppliance } from "./inputFilter.js";
import { setFilterData } from "./filters.js";

const {recipes} = await getRecipes()

// eslint-disable-next-line import/prefer-default-export
function displayData(recipes) {
  const cardSection = document.getElementById("card__section");
  recipes.forEach((recipe) => {
    // eslint-disable-next-line no-undef
    const cardModel = cardTemplate(recipe);
    const createCard = cardModel.getCreateCard();
    cardSection.appendChild(createCard);
    console.log('rrrr');
  });
}
function init() {
  // Récupère les datas des photographes
  console.log('recettes', recipes);

  //const { recipes } = await getRecipes();
  setFilterData(recipes);
  displayData(recipes);
  const filters = ["ingredients", "ustensils", "appliance"];
  filters.forEach((filter) => initInputFilter(filter, recipes));
}

init();


document.querySelector('#input-ingredients').addEventListener('input', (input, e) => filterIngredient(input))
document.querySelector('#input-ustensils').addEventListener('input', (input) => filterUstensils(input))
document.querySelector('#input-appliance').addEventListener('input', (input) => filterAppliance(input))

