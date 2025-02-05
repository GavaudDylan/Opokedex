import { Router } from "express";
import * as pokemonController from "./controllers/pokemonController.js";
import * as typeController from "./controllers/typeController.js";
import * as teamController from "./controllers/teamController.js";
export const router = Router();

// Test
// router.get("/");

// Pokémons
router.get("/pokemons", pokemonController.getAllpokemon);
router.get("/pokemons/:id", pokemonController.getPokemonById);

// Types
router.get("/types", typeController.getAllTypes);
router.get("/types/:id", typeController.getTypeById);

// Équipes
router.get("/teams", teamController.GetAllTeams);
router.get("/teams/:id", teamController.getTeamById);
// router.post("/teams", createTeam);
// router.patch("/teams/:id", patchTeam);
// router.delete("/teams/:id", deleteTeam);
// Notes :
// - on ne doit pas pouvoir mettre deux fois le même Pokémon dans une même Team ;
// - on ne doit pas pouvoir mettre plus de 6 Pokémons dans une Team.

// router.put("/teams/:id/pokemons/:id", patchPokemonsInTeam);
// router.delete("/teams/:id/pokemons/:id", deletePokemonsInTeam);

// Votes
// router.post("/pokemons/:id/votes", currentVotes);
// router.get("/pokemons/leadboard", topTenPokemonsLeaderboard);
// Notes :
// - la route POST permet d'ajouter une voix supplémentaire à un Pokémon ;
// - dans un premier temps, les utilisateurs peuvent l'appeler autant de fois qu'ils le souhaitent ;
// - dans un second temps, il faudrait :
//   - limiter cette route à un appel par utilisateur ;
//   - offrir la possibilité à un utilisateur de retirer son vote via une route additionnelle.
