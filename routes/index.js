const router = require('express').Router()
// const api = require

router.use('/', (req, res)=>{ 
  res.render('homepage')
})
// router.use('/api', )

module.exports = router