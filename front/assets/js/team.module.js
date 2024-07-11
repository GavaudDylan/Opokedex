import {
  getAllPokemon,
  getPokemonById,
  getAllTypes,
  getTypeById,
  getAllTeams,
  getTeamById,
} from "./api.js";
import { resetMainContainer, changeGridClass } from "./utils.js";

export async function fetchAndDisplayTeams() {
  resetMainContainer();
  const teams = await getAllTeams();

  if (!teams) {
    alert("Une erreur est survenue. Réessayer plus tard."); // TODO: remplacer le alert par l'ouverture d'une modale d'erreur plus ergonomique
    return;
  }

  // - changer la classe grid de la mainContainer
  changeGridClass("#main-container", "grid is-col-min-12", "grid is-col-min-3");

  teams.forEach(addTeamsToContainer);
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

  // - modifier le template avec les données du pokemon (image)
  teamClone.querySelector("img").src = `./assets/img/team/${team.id}.webp`;

  // - selectionner le main-container
  const teamsContainer = document.querySelector("#main-container");

  // - insérer le clone dedans
  teamsContainer.appendChild(teamClone);
}
