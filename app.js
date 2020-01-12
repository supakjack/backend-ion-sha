var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
const usersStatusRouter = require('./routes/usersStatusRouter');
const yearsRouter = require('./routes/yearsRouter');
const termsRouter = require('./routes/termsRouter');
const educationLevelsRouter = require('./routes/educationLevelsRouter');
const classesRouter = require('./routes/classesRouter');
const coursesRouter = require('./routes/coursesRouter');
const registerStatusRouter = require('./routes/registerStatusRouter');
const registerRouter = require('./routes/registerRouter');
const applicationsStatusRouter = require('./routes/applicationsStatusRouter');
const parentStaTypeRouter = require('./routes/parentStaTypeRouter');
const parentStaTabRouter = require('./routes/parentStaTabRouter');
const applicationsRouter = require('./routes/applicationsRouter');
const profilesRouter = require('./routes/profilesRouter');
const studentTabRouter = require('./routes/studentTabRouter');
const parentTypeRouter = require('./routes/parentTypeRouter');
const addressTypeRouter = require('./routes/addressTypeRouter');
const addressRouter = require('./routes/addressRouter');
const addressTabRouter = require('./routes/addressTabRouter');
const parentTabRouter = require('./routes/parentTabRouter');
const sessionRouter = require('./routes/sessionRouter');
const loginServiceRouter = require('./routes/services/loginServicesRouter');
const newsServiceRouter = require('./routes/services/newsServiceRouter');
const listServiceRouter = require('./routes/services/listServiceRouter');
const formServiceRouter = require('./routes/services/formServiceRouter');

var app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE , PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// register the session with it's secret ID
app.use(session({ secret: 'uitisawesome' }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/usr', usersRouter);
app.use('/uss', usersStatusRouter);
app.use('/yrs', yearsRouter);
app.use('/tem', termsRouter);
app.use('/edl', educationLevelsRouter);
app.use('/cls', classesRouter);
app.use('/crs', coursesRouter);
app.use('/rgs', registerStatusRouter);
app.use('/reg', registerRouter);
app.use('/aps', applicationsStatusRouter);
app.use('/ptt', parentStaTypeRouter);
app.use('/pst', parentStaTabRouter);
app.use('/app', applicationsRouter);
app.use('/pro', profilesRouter);
app.use('/stt', studentTabRouter);
app.use('/prt', parentTypeRouter);
app.use('/art', addressTypeRouter);
app.use('/adr', addressRouter);
app.use('/adt', addressTabRouter);
app.use('/pat', parentTabRouter);
app.use('/ses', sessionRouter);
app.use('/login', loginServiceRouter);
app.use('/news', newsServiceRouter);
app.use('/list', listServiceRouter);
app.use('/form', formServiceRouter);

module.exports = app;
