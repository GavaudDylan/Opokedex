import { apiBaseUrl } from "./config.js";

export async function getPokemons() {
  try {
    const httpResponse = await fetch(`${apiBaseUrl}/pokemons`);
    if (!httpResponse.ok) {
      throw new Error(`HTTP error! status: ${httpResponse.status}`);
    }
    const pokemons = await httpResponse.json();
    return pokemons;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des Pokémons : ",
      error
    );
    return null;
  }
}

export async function getPokemon(id) {
  try {
    const httpResponse = await fetch(`${apiBaseUrl}/pokemons/${id}`);
    if (!httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    const pokemon = await httpResponse.json();
    return pokemon;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération du Pokémon : ",
      error
    );
    return null;
  }
}

export async function getTypes() {
  try {
    const httpResponse = await fetch(`${apiBaseUrl}/types`);
    if (!httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    const types = await httpResponse.json();
    return types;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des Types : ",
      error
    );
    return null;
  }
}

export async function getType(id) {
  try {
    const httpResponse = await fetch(`${apiBaseUrl}/types/${id}`);
    if (!httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    const type = await httpResponse.json();
    return type;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération du Type : ",
      error
    );
    return null;
  }
}
export async function getTeams() {
  try {
    const httpResponse = await fetch(`${apiBaseUrl}/teams`);
    if (!httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    const teams = await httpResponse.json();
    return teams;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des Équipes : ",
      error
    );
    return null;
  }
}

//Lancer la fonction pour test
// getPokemons();
// getPokemon(1);
