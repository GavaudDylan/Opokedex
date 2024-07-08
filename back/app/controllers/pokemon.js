import { Pokemon } from "../models/Pokemon.js";

export async function getAllpokemons(req, res) {
  const pokemons = await Pokemon.findAll();
  // console.log(pokemons);
  res.json(pokemons);
}
