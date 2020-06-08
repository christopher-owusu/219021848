const express = require('express');
const router = express.Router();
const patient = require('../people/patient')


router.get('/', (req, res)=>{
    res.render('admin')
});

router.get('/signin', (req, res)=> {
    res.render('signin.ejs');
});

router.get('/paid_patients', (req, res)=> {
    res.render('paid_patients.ejs');
});

router.post('/signin', (req, res)=>{
    const signinData = {
        firt_name: req.body.firt_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        contact_number: req.body.contact_number,
        residential_address: req.body.residential_address,
        emergency_number: req.body.emergency_number
    }
    User.findOne({firt_name: signinData.firt_name}).then((user)=>{
        if(user){
            console.log('Sorry there is a student with that ID please check if your ID is correct');
            return res.redirect('/signin')
        } else {
            patient.create(signinData).then((newUser)=>{
                res.redirect('/payment')
            })
        }
    })
});


router.get('/payment', (req, res)=>{
    patient.find({}).then((users)=>{
        res.render('payment', {
            users: users.reverse()
        })
    }).catch((error)=>{
        res.json({
            msg: `Sorrr ${error.message}`
        })
    });
})



module.exports = router;
