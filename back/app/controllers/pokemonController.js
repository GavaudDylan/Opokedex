import { Pokemon } from "../models/Pokemon.js";
import { Type } from "../models/Type.js";
import { Team } from "../models/Team.js";

export async function getAllpokemon(req, res) {
  const pokemons = await Pokemon.findAll();
  res.json(pokemons);
}

export async function getPokemonById(req, res) {
  const { id } = req.params;
  const pokemon = await Pokemon.findByPk(id, {
    include: [
      { model: Type, as: "types" },
      { model: Team, as: "teams" },
    ],
  });
  res.json(pokemon);
}
