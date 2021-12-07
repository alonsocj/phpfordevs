import { conexion } from "../database";
import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
  //Pintar en pantalla
  res.render("login");
};
export const auth = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  const passHash = await bcryptjs.hash(pass, 8);
  if (user && pass) {
    await conexion.query(
      "SELECT * FROM usuario WHERE username = $1",
      [user],
      async (error, { rows }) => {
        if (
          rows.length == 0 ||
          !(await bcryptjs.compare(pass, rows[0].password))
        ) {
          res.render("login", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "Usuario y/o Contraseña incorrecta",
            alertIcon: "error",
            showConfirmButton: true,
            time: false,
            ruta: "login",
          });
        } else {
          req.session.loggedin = true;
          req.session.name = rows[0].id_user;
          res.render("login", {
            alert: true,
            alertTitle: "Bienvenido!",
            alertMessage: "Login Correcto",
            alertIcon: "success",
            showConfirmButton: false,
            time: 1500,
            ruta: "",
          });
        }
      }
    );
  } else {
    res.render("login", {
      alert: true,
      alertTitle: "Advertencia",
      alertMessage: "Ingrese Usuario y/o Password",
      alertIcon: "warning",
      showConfirmButton: true,
      time: false,
      ruta: "login",
    });
  }
};
export const logout = async (req, res) => {
  req.session = null;
  res.redirect("/");
};
