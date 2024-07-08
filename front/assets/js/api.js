import { apiBaseUrl } from "./config.js";
import { addPokemonTopokemonsContainer } from "./pokemon.module.js";

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

//Lancer la fonction pour test
// getPokemons();
