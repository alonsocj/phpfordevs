import { conexion } from "../database";

export const getEjemplos = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM ejemplo");
  console.log(rows);

  res.render("ejemplos", {
    data: rows,
    login: req.session.loggedin,
    name: req.session.name,
  });
};
