const mongoose = require("mongoose");
const validator = require("validator");
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
		userType: String,
	},
	{
		collection: "LoginRegister",
	}
);
LoginRegister.pre("validate", function (next) {
	if (
		(this.userType === "Admin" && !this.email.endsWith("gov.in")) ||
		(this.userType === "University" && !this.email.endsWith("university.ac.in"))
	) {
		const error = new Error("Email id is not valid");
		next(error);
	} else {
		next();
	}
});
mongoose.model("LoginRegister", LoginRegister);
