const router = require('express').Router();
const adminRouter = require('./api/admin_router');

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/login', (req,res) => {
    res.render('login')
});

router.get('/sign-up', (req,res) => {
    res.render('sign-up')
});

router.use('/admin', adminRouter);

module.exports = router;