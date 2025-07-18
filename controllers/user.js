const User = require('../models/user');

module.exports.renderRegistrationForm = (req, res) => {
    res.render('users/register')
};

module.exports.registerUser = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to YelpCamp');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login')
};

module.exports.loginUser = async (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectURL = res.locals.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectURL);
};

module.exports.logoutUser = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Logged out successfully!');
        res.redirect('/campgrounds');
    });
};