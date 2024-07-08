import { sequelize } from "../database.js";
import { Model, DataTypes } from "sequelize";

export class Type extends Model {}

Type.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "type", // nom de la table
    timestamps: false, // desactiver les 'champs created_at' & 'updated_at'
  }
);
