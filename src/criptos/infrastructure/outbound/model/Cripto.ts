import { DataTypes } from "sequelize";

import { sequelize } from "../../../../common/SequelizeConnection";

export const Cripto = sequelize.define("criptos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  current_price: {
    type: DataTypes.DECIMAL,
  },
});
