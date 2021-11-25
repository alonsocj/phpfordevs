import { conexion } from "../database";

// se define una funcion que en este caso solicita la informacion a la base de datos
//esta funcion automaticamente se exporta
export const ejemplo = async (req, res) => {
  // esta seria la forma en la que se solicitaria informacion a la base de datos
  /* const { rows } = await conexion.query("SELECT * FROM tabla");
  console.log(rows); */
  //se extraeria la informacion en la variable rows (esta definida asi desde la consulta)
  const rows = ['dato1','dato2']
  //se envia un objeto a la plantilla (en este caso la plantilla index)
  res.render("index", { data: rows });
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