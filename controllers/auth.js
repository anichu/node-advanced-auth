exports.register = (req, res, next) => {
	res.send("Register Route");
};

exports.login = (req, res, next) => {
	res.send("login Route");
};

exports.forgotpassword = (req, res, next) => {
	res.send("forgot password Route");
};

exports.resetpassword = (req, res, next) => {
	res.send("Reset password Route");
};
