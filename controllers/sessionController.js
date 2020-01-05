exports.login = (req, res, next) => {
  req.session.username = req.body.username;
  req.session.password = req.body.password;
  res.json(req.session);
};

exports.check = (req, res, next) => {
  if (req.session.username) {
    res.json(req.session);
  } else {
    res.json('not have session user login');
  }
};

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.json(req.session);
    }
  });
};

