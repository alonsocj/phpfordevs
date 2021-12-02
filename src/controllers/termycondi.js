export const terminos_condiciones = async (req, res) => {
  //Renderiza la vista termycondi.ejs
  res.render("termycondi", {
    login: req.session.loggedin,
    name: req.session.name,
  });
};
