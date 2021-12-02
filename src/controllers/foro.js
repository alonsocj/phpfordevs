import { conexion } from "../database";

export const getTemas = async (req, res) => {
  const users = [];
  const { rows } = await conexion.query("SELECT * FROM foro");
  for (let i = 0; i < rows.length; i++) {
    users.push(await getUser(rows[i].id_user));
  }
  console.log(users);
  //Pintar en pantalla
  res.render("foro", { data: rows, users: users, login: req.session.loggedin });
};

export const renderComments = async (req, res) => {
  const users = [];
  const { rows } = await conexion.query(
    "SELECT * FROM respuesta WHERE id_foro = $1",
    [req.params.id]
  );
  const foro = await getForo(req.params.id);
  const likes = [];
  const actualUser = req.session.name;
  for (let i = 0; i < rows.length; i++) {
    users.push(await getUser(rows[i].id_user));
    likes.push(await isLike(actualUser, rows[i].id_respuesta));
  }
  //Pintar en pantalla
  res.render("thread", {
    data: rows,
    foro: foro,
    users: users,
    likes: likes,
    login: req.session.loggedin,
    actualUser: actualUser,
  });
};

export const postLike = async (req, res) => {
  const post = await getForo(req.params.id);
  const coments = await getComments(post[0].id_foro);
  coments.forEach(async (coment) => {
    if (coment.id_respuesta == req.params.res) {
      await conexion.query(
        "UPDATE respuesta SET ayuda = $1 WHERE id_respuesta = $2",
        [coment.ayuda + 1, coment.id_respuesta]
      );
      await conexion.query(
        "INSERT INTO apoyo_res (id_user,id_respuesta) VALUES($1,$2)",
        [req.params.us, coment.id_respuesta]
      );
    }
  });
  res.redirect("/foro/" + req.params.id);
};
export const postUnlike = async (req, res) => {
  const post = await getForo(req.params.id);
  const coments = await getComments(post[0].id_foro);
  coments.forEach(async (coment) => {
    if (coment.id_respuesta == req.params.res) {
      await conexion.query(
        "UPDATE respuesta SET ayuda = $1 WHERE id_respuesta = $2",
        [coment.ayuda - 1, coment.id_respuesta]
      );
      await conexion.query(
        "DELETE FROM apoyo_res WHERE id_user = $1 AND id_respuesta=$2",
        [req.params.us, coment.id_respuesta]
      );
    }
  });
  res.redirect("/foro/" + req.params.id);
};
const getComments = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM respuesta WHERE id_foro = $1 ",
    [id]
  );
  return rows;
};
const getForo = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM foro WHERE id_foro = $1",
    [id]
  );
  return rows;
};

export const postTemas = async (req, res) => {
  if (req.session.loggedin) {
    await conexion.query(
      "INSERT INTO foro (descripcion,id_user, titforo, fecha_pub) VALUES ($1,$2,$3,$4)",
      [
        req.body.contenido,
        req.session.name,
        req.body.Titulo,
        new Date().toLocaleString(),
      ]
    );
    res.redirect("/foro");
  }
};

export const postComments = async (req, res) => {
  await conexion.query(
    "INSERT INTO respuesta (id_foro, descripcion_res, ayuda, id_user,fecha_coment) VALUES ($1,$2,$3,$4,$5)",
    [
      req.params.id,
      req.body.comment,
      0,
      req.session.name,
      new Date().toLocaleString(),
    ]
  );

  let id = req.params.id;
  res.redirect("/foro/" + id.toString());
};

const getUser = async (id) => {
  const { rows } = await conexion.query(
    "SELECT * FROM usuario WHERE id_user=$1",
    [id]
  );
  return rows;
};
const isLike = async (user, post) => {
  const { rows } = await conexion.query(
    "SELECT * FROM apoyo_res WHERE id_user = $1 AND id_respuesta = $2",
    [user, post]
  );
  if (rows.length == 1) {
    return true;
  } else {
    return false;
  }
};
