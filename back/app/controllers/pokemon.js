import { Pokemon } from "../models/Pokemon.js";

export async function getAllpokemons(req, res) {
  const pokemons = await Pokemon.findAll();
  // console.log(pokemons);
  res.json(pokemons);
}

export async function getPokemonById(req, res) {
  const { id } = req.params;
  const pokemon = await Pokemon.findByPk(id);
  console.log(pokemon);
  res.json(pokemon);
}
