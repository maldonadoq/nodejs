const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedInI, isLoggedInII } = require('../lib/auth');

router.get('/signup', isLoggedInII, (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', isLoggedInII, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', isLoggedInII, (req, res) => {
  res.render('auth/signin');
});

router.post('/signin', isLoggedInII, (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});

router.get('/profile', isLoggedInI, (req, res) => {
  res.render('profile');
});

router.get('/logout', isLoggedInI, (req, res) => {
  req.logOut();
  res.redirect('/signin');
});

module.exports = router;