import { conexion } from "../database";

export const ejemplo = async (req, res) => {
  if (req.session.loggedin) {
    res.render("index", { login: true, name: req.session.name });
  }else{
    res.render("index", { login: false, name: 'Debe iniciar session' });
  }
};
export const index = async (req, res) => {
  res.render("index");
};
export const cuestionarios = async (req, res) => {
  res.render("cuestionarios");
};
export const cuestionarioBasico = async (req, res) => {
  res.render("cuestionarioBasico");
};
export const cuestionarioIntermedio = async (req, res) => {
  res.render("cuestionarioIntermedio");
};
export const cuestionarioAvanzado = async (req, res) => {
  res.render("cuestionarioAvanzado");
};

export const contactos = async (req, res) => {
  res.render("contactanos");
};
