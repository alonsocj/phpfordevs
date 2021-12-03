import req from "express/lib/request";
import { conexion } from "../database";

export const getCursos = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM curso");
  const { rowsRecursos } = await conexion.query("SELECT * FROM recursos");
  const { rowsVideos } = await conexion.query("SELECT * FROM video");

  //Pintar en pantalla
  res.render("cursos", {
    data: rows,
    login: req.session.loggedin,
    name: req.session.name,
    recurso:rowsRecursos,
    video:rowsVideos,
  });
};

