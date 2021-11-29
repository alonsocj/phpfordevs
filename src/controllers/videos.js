import { conexion } from "../database";

export const cursos = async (req, res) => {
  res.render("cursos");
};

const getCurso = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM curso WHERE id_curso = $1",
    [id]
  );
  return rows;
};

export const getVideos = async (req, res) => {
  const rows = await getListVideos(req.params.id);
  const curso = await getCurso(req.params.id);
  res.render("videos", { data: rows, curso: curso });
};
export const watchVideo = async (req, res) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1 AND cod = $2",
    [req.params.id, req.params.cod]
  );
  const lista = await getListVideos(req.params.id);
  res.render("vervideo", { video: rows, lista: lista });
};
const getListVideos = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1",
    [id]
  );
  return rows;
};
