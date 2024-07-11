import {
  getAllPokemon,
  getPokemonById,
  getAllTypes,
  getTypeById,
  getAllTeams,
  getTeamById,
} from "./api.js";
import { resetMainContainer, changeGridClass } from "./utils.js";

export async function fetchAndDisplayTypes() {
  resetMainContainer();
  const types = await getAllTypes();

  if (!types) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-12", "grid is-col-min-3");

  types.forEach(addTypesToContainer);
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

  // - changer la couleur du fond de la carte
  typeClone.querySelector(
    ".type-card"
  ).style.backgroundColor = `#${type.color}`;

  // - ajouter un écouter d'évènement pour le click sur la carte
  typeClone.querySelector(".type-card").addEventListener("click", () => {
    addPokemonsByTypeToContainer(type.id);
  });

  // - selectionner le main-container
  const typeContainer = document.querySelector("#main-container");

  // - insérer le clone dedans
  typeContainer.appendChild(typeClone);
}
