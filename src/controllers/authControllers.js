import passport from "passport";

export const login = (req, res) => {
  res.redirect("/api/tasks");
};

export const checkAuth = (req, res, next) => {
  console.log(`inside auth/status endpoint`);
  //console.log(req.user);
  console.log(req.session);
  //console.log(req.session.id);

  if (req.user) {
    const username = req.user.displayname;
    console.log(username);
    next();
  } else {
    return res.status(401).redirect("/");
  }
};

export const logout = (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  } else {
    req.logOut((error) => {
      if (error) {
        return res.sendStatus(400);
      } else {
        res.redirect("/");
      }
    });
  }
};
