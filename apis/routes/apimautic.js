/**
 * Router Mautic
 */
const express = require('express') 
const router = express.Router()
//const checkOrigin = require('../middleware/origin')
const mautic = require('../controllers/mautic/apimautic')

router.get('/:id', mautic.listUser);

router.get('/', mautic.saludo)

router.post('/creat', mautic.createUser)

module.exports = router