import { conexion } from "../database";
// renderiza la pantalla curso
export const cursos = async (req, res) => {
  const { rows } = await conexion.query("SELECT * FROM curso");
  res.render("cursos", {
    data: rows,
    login: req.session.loggedin,
    name: req.session.name,
  });
};
//obtiene un curso
const getCurso = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM curso WHERE id_curso = $1",
    [id]
  );
  return rows;
};
// renderiza una lista de videos
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
//obtiene el video actual y lo renderiza
export const watchVideo = async (req, res) => {
  const actualUser = req.session.name;
  const codvid = req.params.cod;
  const idcurso = req.params.id;
  const actualVideo = await getVideo(idcurso, codvid);
  const recurso = await getRecurso(codvid);
  const lista = await getListVideos(idcurso);
  const comments = await getComments(codvid);
  const users = [];
  const commentsLikes = [];
  for (let i = 0; i < comments.length; i++) {
    users.push(await getUser(comments[i].id_user));
    commentsLikes.push(await isLikeComment(actualUser, comments[i].id_coment));
  }
  res.render("vervideo", {
    video: actualVideo,
    lista: lista,
    login: req.session.loggedin,
    comments: comments,
    commentsLikes: commentsLikes,
    users: users,
    recurso: recurso,
    actualUser: actualUser,
    videoLike: await isLikeVideo(actualUser, codvid),
  });
};
// obtiene un video
const getVideo = async (id, cod) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1 AND cod = $2",
    [id, cod]
  );
  return rows;
};
// publica un comentario
export const postComments = async (req, res) => {
  const idcurso = req.params.id;
  const codvideo = req.params.cod;
  const comment = req.body.comment;

  await conexion.query(
    "INSERT INTO comentario (cod,id_user,opinion,megusta,date_comment) VALUES($1,$2,$3,$4,$5)",
    [codvideo, req.session.name, comment, 0, new Date().toLocaleString()]
  );
  res.redirect("/cursos/" + idcurso + "/videos/" + codvideo);
};
// un video obtiene un like
export const postLikeVideo = async (req, res) => {
  const videos = await getVideo(req.params.id, req.params.cod);
  console.log(videos[0].cod == req.params.cod);
  videos.forEach(async (video) => {
    if (video.cod == req.params.cod) {
      await conexion.query("UPDATE video SET likes = $1 WHERE cod = $2", [
        video.likes + 1,
        video.cod,
      ]);
      await conexion.query("INSERT INTO like_vid (id_user,cod) VALUES($1,$2)", [
        req.params.us,
        video.cod,
      ]);
    }
  });
  res.redirect("/cursos/" + req.params.id + "/videos/" + req.params.cod);
};
// da un dislike a un video
export const postUnlikeVideo = async (req, res) => {
  const video = await getVideo(req.params.id, req.params.cod);
  video.forEach(async (video) => {
    await conexion.query("DELETE FROM like_vid WHERE id_user = $1 AND cod=$2", [
      req.params.us,
      video.cod,
    ]);
    if (video.cod == req.params.cod) {
      await conexion.query("UPDATE video SET likes = $1 WHERE cod = $2", [
        video.likes - 1,
        video.cod,
      ]);
    }
  });
  res.redirect("/cursos/" + req.params.id + "/videos/" + req.params.cod);
};

// un comentario obtiene un like
export const postLikeComment = async (req, res) => {
  const video = await getVideo(req.params.id, req.params.cod);
  const comments = await getComments(video[0].cod);
  comments.forEach(async (comment) => {
    if (comment.id_coment == req.params.res) {
      await conexion.query(
        "UPDATE comentario SET megusta = $1 WHERE id_coment = $2",
        [comment.megusta + 1, comment.id_coment]
      );
      await conexion.query(
        "INSERT INTO likes_coments (id_user,id_coment) VALUES($1,$2)",
        [req.params.us, comment.id_coment]
      );
    }
  });
  res.redirect("/cursos/" + req.params.id + "/videos/" + req.params.cod);
};
// quita el megusta del comentario
export const postUnlikeComment = async (req, res) => {
  const video = await getVideo(req.params.id, req.params.cod);
  const comments = await getComments(video[0].cod);
  comments.forEach(async (comment) => {
    if (comment.id_coment == req.params.res) {
      await conexion.query(
        "DELETE FROM likes_coments WHERE id_user = $1 AND id_coment=$2",
        [req.params.us, comment.id_coment]
      );
      await conexion.query(
        "UPDATE comentario SET megusta = $1 WHERE id_coment = $2",
        [comment.megusta - 1, comment.id_coment]
      );
    }
  });
  res.redirect("/cursos/" + req.params.id + "/videos/" + req.params.cod);
};
// obtiene la lista de videos
const getListVideos = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM video WHERE id_curso = $1",
    [id]
  );
  return rows;
};
//obtiene un usuario
const getUser = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM usuario WHERE id_user=$1",
    [id]
  );
  return rows;
};
//obtiene todos los comentarios de un video
const getComments = async (cod) => {
  const { rows } = await conexion.query(
    "SELECT * FROM comentario WHERE cod = $1",
    [cod]
  );
  return rows;
};
//obtiene un recurso de video
const getRecurso = async (cod) => {
  const { rows } = await conexion.query(
    "SELECT * FROM recursos WHERE cod = $1",
    [cod]
  );
  console.log(rows);
  return rows;
};

//verifica si ha dado like a un comentario
const isLikeComment = async (user, post) => {
  const { rows } = await conexion.query(
    "SELECT * FROM likes_coments WHERE id_user = $1 AND id_coment = $2",
    [user, post]
  );
  if (rows.length == 1) {
    return true;
  } else {
    return false;
  }
};
// verifica que le ha dado like a un video
const isLikeVideo = async (user, post) => {
  const { rows } = await conexion.query(
    "SELECT * FROM like_vid WHERE id_user = $1 AND cod = $2",
    [user, post]
  );
  if (rows.length == 1) {
    return true;
  } else {
    return false;
  }
};
