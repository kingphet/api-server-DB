const express = require('express')
const router = express.Router()
const { read, list, updete, del, add } = require('../controllers/product')

router.get('/product', list)
router.get('/product/:id', read)
router.post('/product/', add)
router.put('/product/:id', updete)
router.delete('/product/:id', del)




module.exports = router