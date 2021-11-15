import { conexion } from "../database";
export const ejemplo = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM tabla");
  console.log(rows);
  res.render("index", { data: rows });
};
