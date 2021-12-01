import { conexion } from "../database";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  //Pintar en pantalla
  res.render("register");
};

export const registerPost = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
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
          alertTitle: "registracion",
          alertMessage: "Registracion Exitosa",
          alertIcon: "success",
          showConfirmButton: false,
          time: 1500,
          ruta: "login",
        });
      }
    }
  );
};
