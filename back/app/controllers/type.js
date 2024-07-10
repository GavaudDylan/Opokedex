import { Type } from "../models/Type.js";

export async function getAllTypes(req, res) {
  const types = await Type.findAll();
  //   console.log(types);
  res.json(types);
}

export async function getTypeById(req, res) {
  const { id } = req.params;
  const type = await Type.findByPk(id);
  // console.log(type);
  res.json(type);
}
