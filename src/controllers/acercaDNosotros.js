export const acercaDNosotros = async (req, res) => {
  res.render("acercaDNosotros", {
    login: req.session.loggedin,
    name: req.session.name,
  });
};
