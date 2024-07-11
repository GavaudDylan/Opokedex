import { Team } from "../models/Team.js";

export async function GetAllTeams(req, res) {
  const teams = await Team.findAll();
  console.log(teams); // Manque le seeding
  res.json(teams);
}
