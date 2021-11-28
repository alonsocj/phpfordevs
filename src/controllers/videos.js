import { conexion } from "../database";

export const getVideos = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM video");
  console.log(rows);
  res.render("videos", { data: rows });
};
