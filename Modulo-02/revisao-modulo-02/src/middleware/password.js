const checkPassword = (req, res, next) => {
  const { password } = req.query;

  if (password === "cubos") {
    next();
  }

  return res.status(401).json();
};

module.exports = {
  checkPassword,
};
