import { sequelize } from "../database.js";
import { Model, DataTypes } from "sequelize";

export class Team extends Model {}

Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "team", // nom de la table
    timestamps: false, // desactiver les 'champs created_at' & 'updated_at'
  }
);
