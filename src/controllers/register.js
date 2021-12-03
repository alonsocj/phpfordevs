import { conexion } from "../database";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  //Pintar en pantalla
  res.render("register");
};

export const registerPost = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  if (user == "" || pass == "") {
    res.render("register", {
      alert: true,
      alertTitle: "Error al Registrar Usuario",
      alertMessage: "No puede registrar si tiene espacios vacios",
      alertIcon: "error",
      showConfirmButton: true,
      time: false,
      ruta: "register",
    });
  } else {
    const passhash = await bcryptjs.hash(pass, 8);
    await conexion.query(
      "INSERT INTO usuario (username,password) VALUES ($1,$2)",
      [user, passhash],
      async (error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.render("register", {
            alert: true,
            alertTitle: "Nuevo Usuario!",
            alertMessage: "Registro Exitoso",
            alertIcon: "success",
            showConfirmButton: false,
            time: 1500,
            ruta: "login",
          });
        }
      }
    );
  }
};
