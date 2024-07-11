import { Team } from "../models/Team.js";

export async function GetAllTeams(req, res) {
  const teams = await Team.findAll();
  console.log(teams); // Manque le seeding
  res.json(teams);
}

export async function getTeamById(req, res) {
  const { id } = req.params;
  const team = await Team.findByPk(id);
  res.json(team);
}
