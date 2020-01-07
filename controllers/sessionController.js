exports.login = (req, res, next) => {
  console.log(req.body);
  req.session.username = req.body.username;
  req.session.password = req.body.password;
  console.log(req.session);
  res.json(req.session);
};

exports.set = (req, res, next) => {
  console.log(req.params);
  req.session.username = req.params.username;
  req.session.password = req.params.password;
  console.log(req.session);
  res.json(req.session);
};

exports.check = (req, res, next) => {
  console.log(req.session);

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

