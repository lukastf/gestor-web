const express = require('express');
const router = express.Router();
const TipoPagamento = require('../auxiliares/TipoPagamento');
const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await TipoPagamento.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await TipoPagamento.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

router.post('/:idAllow', async (req, res, next) => {

  const tipoPagamento = new TipoPagamento(req.body, req.params);
  const post = await tipoPagamento.post();

  if (post) res.sendStatus(200);
  else res.sendStatus(400);

});

router.put('/:idAllow', async (req, res, next) => {

  const tipoPagamento = new TipoPagamento(req.body, req.params);
  const put = await tipoPagamento.put();

  if (put) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', async (req, res, next) => {

  const tipoPagamento = new TipoPagamento(req.params, req.params);
  const del = await tipoPagamento.delete();

  if (del) res.sendStatus(200);
  else res.sendStatus(400);

});

module.exports = router;