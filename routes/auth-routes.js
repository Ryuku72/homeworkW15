const router = require('express').Router();
const passport = require('passport');

router.use(passport.session());

router.get('/', (req, res) => {
    res.render('login', { user: req.user });
});

// auth with google+
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

// callback route for google to redirect to 
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    res.redirect('/members')
});



module.exports = router;
