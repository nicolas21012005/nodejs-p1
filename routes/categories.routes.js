const express = require('express');
const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      categorie: faker.commerce.productAdjective(),
    },
    {
      categorie: faker.commerce.productAdjective(),
    },
  ])
})

router.get('/:id', (req, res) => {
  res.json([
    {
      id,
      categorie: faker.commerce.productAdjective(),
    },
  ])
})

router.get('/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json({
    categorieId,
    productId,
  });
});

module.exports = router;




