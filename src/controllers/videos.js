import { conexion } from "../database";

export const cursos = async (req, res) => {
  res.render("cursos");
};

export const getVideos = async (req, res) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1",
    [req.params.id]
  );
  res.render("lista", { data: rows });
};
