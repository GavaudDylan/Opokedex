import { apiBaseUrl } from "./config.js";

export async function getPokemons() {
  try {
    const httpResponse = await fetch(`${apiBaseUrl}/pokemons`);
    if (!httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    const pokemons = await httpResponse.json();
    return pokemons;
  } catch (error) {
    console.error(error);
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
    console.error(error);
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
    console.error(error);
    return null;
  }
}

//Lancer la fonction pour test
// getPokemons();
// getPokemon(1);
