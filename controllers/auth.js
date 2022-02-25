const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
	const { username, password, email } = req.body;
	try {
		const user = await User.create({
			username,
			email,
			password,
		});

		// return res.status(201).json({
		// 	success: true,
		// 	user,
		// });
		sendToken(user, 201, res);
	} catch (err) {
		next(err);
	}
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new ErrorResponse("Please provide email and password", 400));
	}

	try {
		const user = await User.findOne({ email }).select("+password");

		if (!user) {
			return next(new ErrorResponse("Invalid credentials", 401));
		}

		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			return next(new ErrorResponse("Invalid credentials", 401));
		}

		sendToken(user, 200, res);
	} catch (err) {
		next(err);
	}
};

exports.forgotpassword = (req, res, next) => {
	res.send("forgot password Route");
};

exports.resetpassword = (req, res, next) => {
	res.send("Reset password Route");
};

const sendToken = (user, statusCode, res) => {
	const token = user.getSignedToken();
	res.status(statusCode).json({ success: true, token });
};
