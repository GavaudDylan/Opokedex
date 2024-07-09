import { getPokemons } from "./api.js";

export async function fetchAndDisplayPokemons() {
  const pokemons = await getPokemons();

  if (!pokemons) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }
  pokemons.forEach(addPokemonTopokemonsContainer);
}

export function addPokemonTopokemonsContainer(pokemon) {
  // - récupérer le template d'un pokemon
  const pokemonTemplate = document.querySelector("#template-pokemon");

  // - cloner le template
  const pokemonClone = pokemonTemplate.content.cloneNode(true);

  // - recuperer l'id du pokemon
  pokemonClone.querySelector("[slot=pokemon-id-name]").dataset.pkmId =
    pokemon.id;

  // - modifier le template avec les données du pokemon (id + name)
  pokemonClone.querySelector(
    "[slot=pokemon-id-name]"
  ).textContent = `N° ${pokemon.id} - ${pokemon.name}`;

  // - modifier le template avec les données du pokemon (image)
  pokemonClone.querySelector("img").src = `./assets/img/${pokemon.id}.webp`;

  // - modifier le template avec les données du pokemon (stat)

  // - selectionner le pokemons-container
  const pokemonsContainer = document.querySelector("#pokemons-container");

  // - insérer le clone dedans
  pokemonsContainer.appendChild(pokemonClone);
}
