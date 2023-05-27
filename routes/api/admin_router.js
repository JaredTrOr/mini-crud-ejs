const router = require('express').Router();
const {User} = require('../../database/connection');

router.get('/', async (req,res) => {
    try{
        const users = await User.findAll();
        res.render('admin/operations_users', {users});
    }catch(err){
        
    }   
});

router.post('/create_user', async (req,res) => {
    try{
        console.log(req.body);
        await User.create(req.body);
        res.redirect('/admin');
    }catch(err) {
        
    }
});

router.delete('/delete_user/:id', async (req,res) => {
    try{
        await User.destroy({where: {id: req.params.id}});
        console.log('User deleted succesfuly');
        res.json({success: true, msg: '/admin'});
    }catch(err) {
        res.json({success: false, msg: 'Something went wrong...'});
    }
});

module.exports = router;