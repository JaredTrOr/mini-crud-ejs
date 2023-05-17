const router = require('express').Router();
const {User} = require('../../database/connection');

router.get('/', async (req,res) => {
    try{
        const users = await User.findAll();
        res.render('admin/operations_users', {users});
    }catch(err){
        res.send(`Error: ${err}`);
    }   
});

router.post('/create_user', async (req,res) => {
    try{
        const {firstName, lastName, age, email, phoneNumber} = req.body;
        await User.create({
            first_name: firstName,
            last_name: lastName,
            age: age, 
            email: email,
            phone_number: phoneNumber
        });
        res.redirect('/admin');
    }catch(err) {
        res.send(`Error: ${err}`);
    }
});

module.exports = router;