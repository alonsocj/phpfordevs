import { conexion } from "../database";

export const cursos = async (req, res) => {
  res.render("cursos");
};

export const getVideos = async (req, res) => {
  const rows = await getListVideos(req.params.id);
  res.render("videos", { data: rows });
};
export const watchVideo = async (req, res) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1 AND cod = $2",
    [req.params.id, req.params.cod]
  );
  console.log(rows);
  res.render("vervideo", { video: rows });
};
const getListVideos = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1",
    [id]
  );
  return rows;
};
