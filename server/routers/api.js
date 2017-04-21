let router = require('express').Router()
let memoCon = require('../controllers/memo')

router.post('/memo',memoCon.create)
router.get('/memo',memoCon.views)
router.get('/memo/:id',memoCon.view)
router.put('/memo/:id',memoCon.update)
router.delete('/memo/:id',memoCon.delete)

module.exports=router
