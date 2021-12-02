import { conexion } from "../database";

export const index = async (req, res) => {
  res.render("index", { login: req.session.loggedin, name: req.session.name });
};
export const cuestionarios = async (req, res) => {
  res.render("cuestionarios", { login: true, name: req.session.name });
};
export const cuestionarioBasico = async (req, res) => {
  res.render("cuestionarioBasico", {
    login: req.session.loggedin,
    name: req.session.name,
  });
};
export const cuestionarioIntermedio = async (req, res) => {
  res.render("cuestionarioIntermedio", {
    login: req.session.loggedin,
    name: req.session.name,
  });
};
export const cuestionarioAvanzado = async (req, res) => {
  res.render("cuestionarioAvanzado", {
    login: req.session.loggedin,
    name: req.session.name,
  });
};

export const contactos = async (req, res) => {
  res.render("contactanos", {
    login: req.session.loggedin,
    name: req.session.name,
  });
};
