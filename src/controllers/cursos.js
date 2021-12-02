import req from "express/lib/request";
import { conexion } from "../database";

export const getCursos = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM curso");
  console.log(rows);
  //Pintar en pantalla
  res.render("cursos", {
    data: rows,
    login: req.session.loggedin,
    name: req.session.name,
  });
};
