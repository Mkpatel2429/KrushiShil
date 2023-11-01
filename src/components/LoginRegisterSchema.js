const mongoose = require("mongoose");

const LoginRegister = new mongoose.Schema(
	{
		fullname: String,
		email: {
			type: String,
			unique: true,
			sparse: true,
			validate: {
				validator: function (email) {
					return validator.isEmail(email);
				},
				message: "{VALUE} is not a valid email",
			},
		},
		password: String,
	},
	{
		collection: "LoginRegister",
	}
);

mongoose.model("LoginRegister", LoginRegister);
