const express = require('express');
const router = express.Router();

const Fornecedor = require('../principais/Fornecedor');

const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await Fornecedor.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await Fornecedor.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

module.exports = router;
