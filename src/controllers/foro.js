import { conexion } from "../database";

export const getTemas = async (req, res) => {
  const users = [];
  const { rows } = await conexion.query("SELECT * FROM foro");
  for (let i = 0; i < rows.length; i++) {
    users.push(await getUser(rows[i].id_user));
  }
  console.log(users)
  //Pintar en pantalla
  res.render("foro", { data: rows, users: users, login: req.session.loggedin });
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
  const rows = await conexion.query(
    "INSERT INTO respuesta (id_foro, descripcion_res, ayuda, noayuda, usuario_res,fecha_coment) VALUES ($1,$2,$3,$4,$5,$6)",
    [
      req.params.id,
      req.body.comment,
      1,
      0,
      req.body.author,
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
