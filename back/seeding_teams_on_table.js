import "dotenv/config";
import { Team } from "./app/models/Team.js";

export async function seedTeams() {
  const teamsData = [
    { name: "Team Volcano", description: "Une équipe de Pokémon de type feu" },
    { name: "Team Ocean", description: "Une équipe de Pokémon de type eau" },
    {
      name: "Team Jungle",
      description: "Une équipe de Pokémon de type plante",
    },
  ];

  for (const teamData of teamsData) {
    const team = new Team(teamData);
    await team.save();
  }

  console.log("Seeding completed");
}

// Appeler la fonction de seeding
seedTeams().catch(console.error);
