import { fetchAndDisplayPokemons } from "./pokemon.module.js";
import { fetchAndDisplayTypes } from "./type.module.js";
import { fetchAndDisplayTeams } from "./team.module.js";
import { initClosingModalButtons } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
	initClosingModalButtons();

	const pokeballButton = document.querySelector("#pokeball-button");
	const pokemonsButton = document.querySelector("#pokemons-button");
	const typeButton = document.querySelector("#pokemons-type-button");
	const teamButton = document.querySelector("#pokemons-team-button");
	// const pokemonsSortTypeButton = document.querySelector(
	//   "#pokemons-sort-type-button"
	// );
	// const pokemonsSortAlphabetButton = document.querySelector(
	//   "#pokemons-sort-alphabet-button"
	// );
	// const pokemonsSortAscendingButton = document.querySelector(
	//   "#pokemons-sort-ascending-button"
	// );

	pokeballButton.addEventListener("click", fetchAndDisplayPokemons);
	pokemonsButton.addEventListener("click", fetchAndDisplayPokemons);
	typeButton.addEventListener("click", fetchAndDisplayTypes);
	teamButton.addEventListener("click", fetchAndDisplayTeams);

	// Charger les données lors du chargement de la page
	await fetchAndDisplayPokemons();
});
