import req from "express/lib/request";
import { conexion } from "../database";

export const getTemas = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM foro");
  console.log(rows);
  //Pintar en pantalla
  res.render("foro", { data: rows });
};

export const getComments = async (req, res) => {
  const { rows } = await conexion.query(
    "SELECT * FROM respuesta WHERE id_foro = $1",
    [req.params.id]
  );
  const foro = await getForo(req.params.id);
  //Pintar en pantalla
  res.render("thread", { data: rows, foro: foro });
};

const getForo = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM foro WHERE id_foro = $1",
    [id]
  );
  return rows;
};

export const postTemas = async (req, res) => {
  const rows = await conexion.query(
    "INSERT INTO foro (descripcion, titforo, user_foro) VALUES ($1,$2,$3)",
    [req.body.contenido, req.body.Titulo, req.body.author]
  );
  res.redirect("/foro");
};

export const postComments = async (req, res) => {
  const rows = await conexion.query(
    "INSERT INTO respuesta (id_foro, descripcion_res, ayuda, noayuda, usuario_res) VALUES ($1,$2,$3,$4,$5)",
    [req.params.id, req.body.comment, 1, 0, req.body.author]
  );

  let id = req.params.id;
  res.redirect("/foro/" + id.toString());
};
