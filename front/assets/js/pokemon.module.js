import { getAllPokemon, getPokemonById } from "./api.js";
import { resetMainContainer, changeGridClass } from "./utils.js";

export async function fetchAndDisplayPokemons() {
  resetMainContainer();
  const pokemons = await getAllPokemon();

  if (!pokemons) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-3", "grid is-col-min-12");

  pokemons.forEach(addPokemonsToContainer);
}

export function addPokemonsToContainer(pokemon) {
  // - récupérer le template d'un pokemon
  const pokemonTemplate = document.querySelector("#template-pokemon");

  // - cloner le template
  const pokemonClone = pokemonTemplate.content.cloneNode(true);

  // - recuperer l'id du pokemon
  pokemonClone.querySelector("[slot=pokemon-id]").dataset.pkmId = pokemon.id;

  // - modifier le template avec les données du pokemon (id + name)
  pokemonClone.querySelector(
    "[slot=pokemon-id-name]"
  ).textContent = `N° ${pokemon.id} - ${pokemon.name}`;

  // - modifier le template avec les données du pokemon (image)
  pokemonClone.querySelector("img").src = `./assets/img/${pokemon.id}.webp`;

  // - écouter le click sur la carte de Pokémon
  const pokemonCard = pokemonClone.querySelector(".cell");
  pokemonCard.addEventListener("click", () => {
    fetchAndDisplayPokemonModal(pokemon.id);
  });

  // - selectionner le main-container
  const pokemonsContainer = document.querySelector("#main-container");

  // - ajoutter le grid adequat
  pokemonsContainer.classList.add("grid", "is-col-min-12");

  // - insérer le clone dedans
  pokemonsContainer.appendChild(pokemonClone);
}

export async function fetchAndDisplayPokemonModal(pokemonId) {
  const pokemon = await getPokemonById(pokemonId);
  if (!pokemon) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - activer la modale
  const pokemonModal = document.querySelector("[slot=pokemon-modale]");
  pokemonModal.classList.add("is-active");

  // - modifier la modale avec les données du pokemon (id + name)
  pokemonModal.querySelector(
    "[slot=pokemon-id-name]"
  ).textContent = `N° ${pokemon.id} - ${pokemon.name}`;

  // - modifier la modale avec les données du pokemon (image)
  pokemonModal.querySelector("img").src = `./assets/img/${pokemon.id}.webp`;

  // -mettre les stats dans les dataset
  pokemonModal.dataset.hp = pokemon.hp;
  pokemonModal.dataset.atk = pokemon.atk;
  pokemonModal.dataset.def = pokemon.def;
  pokemonModal.dataset.atk_spe = pokemon.atk_spe;
  pokemonModal.dataset.def_spe = pokemon.def_spe;
  pokemonModal.dataset.speed = pokemon.speed;

  // - inserer les datasets values dans la modale
  pokemonModal.querySelector("[slot=pokemon-hp-value]").value = pokemon.hp;
  pokemonModal.querySelector("[slot=pokemon-atk-value]").value = pokemon.atk;
  pokemonModal.querySelector("[slot=pokemon-def-value]").value = pokemon.def;
  pokemonModal.querySelector("[slot=pokemon-atk-spe-value]").value =
    pokemon.atk_spe;
  pokemonModal.querySelector("[slot=pokemon-def-spe-value]").value =
    pokemon.def_spe;
  pokemonModal.querySelector("[slot=pokemon-speed-value]").value =
    pokemon.speed;

  // - inserer les datasets en texte des stats dans la modale
  pokemonModal.querySelector(
    "[slot=pokemon-hp-content]"
  ).textContent = `HP: ${pokemon.hp}`;
  pokemonModal.querySelector(
    "[slot=pokemon-atk-content]"
  ).textContent = `ATK: ${pokemon.atk}`;
  pokemonModal.querySelector(
    "[slot=pokemon-def-content]"
  ).textContent = `DEF: ${pokemon.def}`;
  pokemonModal.querySelector(
    "[slot=pokemon-atk-spe-content]"
  ).textContent = `ATK-SPE: ${pokemon.atk_spe}`;
  pokemonModal.querySelector(
    "[slot=pokemon-def-spe-content]"
  ).textContent = `DEF-SPE: ${pokemon.def_spe}`;
  pokemonModal.querySelector(
    "[slot=pokemon-speed-content]"
  ).textContent = `SPEED: ${pokemon.speed}`;
}

export async function addFilteredPokemonsByTypeToContainer(typeId) {
  resetMainContainer();
  const type = await getTypeById(typeId);

  if (!type) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  const pokemons = type.pokemons;

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-3", "grid is-col-min-12");

  pokemons.forEach(addPokemonsToContainer);
}
