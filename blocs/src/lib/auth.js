module.exports = {
	isLoggedInI(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}

		return res.redirect('/signin'); 
	},
	isLoggedInII(req, res, next){
		if(req.isAuthenticated()){
			return res.redirect('/profile');
		}

		return next();
	}
};