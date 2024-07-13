import { Type } from "../models/Type.js";

export async function getAllTypes(req, res) {
  const types = await Type.findAll();
  //   console.log(types);
  res.json(types);
}

export async function getTypeById(req, res) {
  const { typeId } = parseInt(req.params.id);

  if (isNaN(typeId)) {
    return res$
      .status(404)
      .json({ error: "Pokemon not found. Please verify the provided ID." });
  }
  const findTypeById = await Type.findByPk(typeId, {
    include: ["pokemons"],
    order: [["id", "ASC"]],
  });

  if (!findTypeById) {
    return res.status(404).json({
      error: "Type not found. Please verify the provided ID.",
    });
  }

  res.json(findTypeById);
}
