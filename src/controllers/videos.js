import { conexion } from "../database";

export const getVideos = async (req, res) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1",
    [req.paramas.id]
  );
  console.log(rows);
  res.render("videos", { data: rows });
};
