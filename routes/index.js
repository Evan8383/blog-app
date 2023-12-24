const router = require('express').Router()
// const api = require

router.get('/', (req, res)=>{ 
  res.render('homepage')
})
router.get('/signin', (req, res)=> {
  res.render('signin')
})
router.get('/signup', (req, res)=> {
  res.render('signup')
})
// router.use('/api', )

module.exports = router