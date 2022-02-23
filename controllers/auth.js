const User = require("../models/User");

exports.register = (req, res, next) => {
	const { username, password, email } = req.body;
	try {
		const user = await User.create({
			username,
			email,
			password,
		});

		res.status(201).json({
			success: true,
			user,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
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
