const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

const usuariosRouter = require('./routes/usuarios');
const fornecedoresRouter = require('./routes/fornecedores');

const admCartaoFornecedorRouter = require('./routes/admCartaoFornecedores');
const tecnologiasRouter = require('./routes/tecnologias');

const bancosRouter = require('./routes/bancos');
const ramosAtividadeRouter = require('./routes/ramosAtividade');
const tiposOperacaoRouter = require('./routes/tiposOperacao');
const tiposDocumentoRouter = require('./routes/tiposDocumento');
const tiposCartaoRouter = require('./routes/tiposCartao');
const origensRouter = require('./routes/origens');
const tiposPagamentoRouter = require('./routes/tiposPagamento');
const sugestoesRouter = require('./routes/sugestoes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  //res.header("Access-Control-Allow-Origin", "https://easeshopp.com.br:86");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Allow", "GET,HEAD,PUT,PATCH,POST,DELETE");

  //pegar usuarios automaticamente
  //usuariosMultiAuto(req, res);

  next();
});

app.use('/', indexRouter);
app.use('/login', loginRouter);

// principal
app.use('/usuarios', usuariosRouter);
app.use('/fornecedores', fornecedoresRouter);

app.use('/admCartaoFornecedor', admCartaoFornecedorRouter);
app.use('/tecnologias', tecnologiasRouter);

//auxiliar
app.use('/bancos', bancosRouter);
app.use('/ramosAtividade', ramosAtividadeRouter);
app.use('/tiposOperacao', tiposOperacaoRouter);
app.use('/tiposDocumento', tiposDocumentoRouter);
app.use('/tiposCartao', tiposCartaoRouter);
app.use('/origens', origensRouter);
app.use('/tiposPagamento', tiposPagamentoRouter);
app.use('/sugestoes', sugestoesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
