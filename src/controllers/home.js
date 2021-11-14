export const ejemplo = (req, res) => {
  res.render("index", { lista: ["video1", "video2", "video3"] });
};
