import {
  fetchAndDisplayPokemons,
  fetchAndDisplayTypes,
} from "./pokemon.module.js";

import { initClosingModalButtons } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  initClosingModalButtons();

  const pokemonsButton = document.querySelector("#pokemons-button");
  const pokemonsTypeButton = document.querySelector("#pokemons-type-button");
  // const pokemonsTeamButton = document.querySelector("#pokemons-team-button");
  // const pokemonsSortTypeButton = document.querySelector(
  //   "#pokemons-sort-type-button"
  // );
  // const pokemonsSortAlphabetButton = document.querySelector(
  //   "#pokemons-sort-alphabet-button"
  // );
  // const pokemonsSortAscendingButton = document.querySelector(
  //   "#pokemons-sort-ascending-button"
  // );

  pokemonsButton.addEventListener("click", fetchAndDisplayPokemons);
  pokemonsTypeButton.addEventListener("click", fetchAndDisplayTypes);
  // Charger les données lors du chargement de la page
  await fetchAndDisplayPokemons();
});
