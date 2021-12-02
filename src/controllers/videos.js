import { conexion } from "../database";

export const cursos = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM curso");
  res.render("cursos", {
    data: rows,
    login: req.session.loggedin,
    name: req.session.name,
  });
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
  res.render("videos", {
    data: rows,
    curso: curso,
    login: req.session.loggedin,
    name: req.session.name,
  });
};
export const watchVideo = async (req, res) => {
  const codvid = req.params.cod;
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1 AND cod = $2",
    [req.params.id, codvid]
  );
  const recurso = await getRecurso(codvid);

  const lista = await getListVideos(req.params.id);
  const comments = await getComments(codvid);
  const users = [];
  for (let i = 0; i < comments.length; i++) {
    users.push(await getUser(comments[i].id_user));
  }
  res.render("vervideo", {
    video: rows,
    lista: lista,
    login: req.session.loggedin,
    comments: comments,
    users: users,
    recurso: recurso,
  });
};
export const postComments = async (req, res) => {
  const idcurso = req.params.id;
  const codvideo = req.params.cod;
  await conexion.query(
    "INSERT INTO comentario (cod,id_user,opinion,megusta,date_comment) VALUES($1,$2,$3,$4,$5)",
    [
      codvideo,
      req.session.name,
      req.body.comment,
      0,
      new Date().toLocaleString(),
    ]
  );
  res.redirect("/cursos/" + idcurso + "/videos/" + codvideo);
};
const getListVideos = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1",
    [id]
  );
  return rows;
};
const getUser = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM usuario WHERE id_user=$1",
    [id]
  );
  return rows;
};
const getComments = async (id_coment) => {
  const { rows } = await conexion.query(
    "SELECT * FROM comentario WHERE cod = $1",
    [id_coment]
  );
  return rows;
};
const getRecurso = async (cod) => {
  const { rows } = await conexion.query(
    "SELECT * FROM recursos WHERE cod = $1",
    [cod]
  );
  console.log(rows);
  return rows;
};
