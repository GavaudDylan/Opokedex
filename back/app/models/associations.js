import { Pokemon } from "./Pokemon.js";
import { Type } from "./Type.js";
import { Team } from "./Team.js";

// Pokemon <-> Type (Many-to-Many)
Pokemon.belongsToMany(Type, {
  through: "pokemon_type",
  as: "types",
  foreignKey: "pokemon_id",
});
Type.belongsToMany(Pokemon, {
  through: "pokemon_type",
  as: "pokemons",
  foreignKey: "type_id",
});

// Pokemon <-> Team (Many-to-Many)
Pokemon.belongsToMany(Team, {
  through: "team_pokemon",
  as: "teams",
  foreignKey: "pokemon_id",
});
Team.belongsToMany(Pokemon, {
  through: "team_pokemon",
  as: "pokemons",
  foreignKey: "team_id",
});

export { Pokemon, Team, Type };
