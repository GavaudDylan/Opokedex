import { getPokemons, getPokemon, getTypes, getType } from "./api.js";
import { resetMainContainer, changeGridClass } from "./utils.js";

export async function fetchAndDisplayPokemons() {
  resetMainContainer();
  const pokemons = await getPokemons();

  if (!pokemons) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-3", "grid is-col-min-12");

  pokemons.forEach(addPokemonsToContainer);
}

export async function fetchAndDisplayTypes() {
  resetMainContainer();
  const types = await getTypes();

  if (!types) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-12", "grid is-col-min-3");

  types.forEach(addTypesToContainer);
}

export async function fetchAndDisplayTeams() {
  resetMainContainer();
  const teams = await getTeams();

  if (!teams) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-12", "grid is-col-min-3");

  teams.forEach(addTeamsToContainer);
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
  });

  // - selectionner le main-container
  const pokemonsContainer = document.querySelector("#main-container");

  // - ajoutter le grid adequat
  pokemonsContainer.classList.add("grid", "is-col-min-12");

  // - insérer le clone dedans
  pokemonsContainer.appendChild(pokemonClone);
}

export function addTypesToContainer(type) {
  // - recuperer le template d'un type
  const typeTemplate = document.querySelector("#template-type");

  // - cloner le template
  const typeClone = typeTemplate.content.cloneNode(true);

  // - recuperer le nom du type
  typeClone.querySelector("[slot=type-name]").dataset.typeName = type.name;

  // - inserer le nom du type
  typeClone.querySelector("[slot=type-name]").textContent = `${type.name}`;

  // - changer la couleur du fond du tag
  typeClone.querySelector(".tag").style.backgroundColor = `#${type.color}`;

  // - selectionner le main-container
  const typeContainer = document.querySelector("#main-container");

  // - insérer le clone dedans
  typeContainer.appendChild(typeClone);
}

export function addTeamsToContainer(team) {
  // - récupérer le template d'une team
  const teamTemplate = document.querySelector("#template-team");

  // - cloner le template
  const teamClone = teamTemplate.content.cloneNode(true);

  // - modifier le template avec les données de la team (name)
  teamClone.querySelector("[slot=team-id-name]").textContent = `${team.name}`;

  // - modifier le template avec les données de la team (description)
  teamClone.querySelector(
    "[slot=team-description]"
  ).textContent = `${team.description}`;

  // - selectionner le main-container
  const teamsContainer = document.querySelector("#main-container");

  // - insérer le clone dedans
  teamsContainer.appendChild(teamClone);
}

// export function sortPokemonsByType(type) {
//   const pokemonsContainer = document.querySelector("#main-container");
//   const pokemons = pokemonsContainer.querySelectorAll(".cell");

//   pokemons.forEach((pokemon) => {
//     const pokemonId = pokemon.querySelector("[slot=pokemon-id-name]").dataset
//       .pkmId;
//     const pokemonType = pokemon.querySelector("[slot=pokemon-type]").dataset
//       .type;

//     if (pokemonType === type) {
//       pokemon.classList.add("is-hidden");
//     } else {
//       pokemon.classList.remove("is-hidden");
//     }
//   });
// }
