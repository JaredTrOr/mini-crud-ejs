const router = require('express').Router();
const adminRouter = require('./api/admin_router');

router.get('/', (req,res) => {
    res.render('index');
});

router.use('/admin', adminRouter);

module.exports = router;