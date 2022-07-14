const express = require('express');
const router = express.Router();
const TipoOperacao = require('../auxiliares/TipoOperacao');
const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await TipoOperacao.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await TipoOperacao.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

router.post('/:idAllow', async (req, res, next) => {

  const tipoOperacao = new TipoOperacao(req.body, req.params);
  const post = await tipoOperacao.post();

  if (post) res.sendStatus(200);
  else res.sendStatus(400);

});

router.put('/:idAllow', async (req, res, next) => {

  const tipoOperacao = new TipoOperacao(req.body, req.params);
  const put = await tipoOperacao.put();

  if (put) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', async (req, res, next) => {

  const tipoOperacao = new TipoOperacao(req.params, req.params);
  const del = await tipoOperacao.delete();

  if (del) res.sendStatus(200);
  else res.sendStatus(400);

});

module.exports = router;
