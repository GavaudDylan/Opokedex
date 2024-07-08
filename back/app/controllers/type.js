import { Type } from "../models/Type.js";

export async function getAllTypes(req, res) {
  const types = await Type.findAll();
  //   console.log(types);
  res.json(types);
}
