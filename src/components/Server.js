const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const mongoUrl =
	"mongodb+srv://pmanthan206:manthan2412@cluster0.jfmmim2.mongodb.net/?retryWrites=true&w=majority";

require("./LoginRegisterSchema");

mongoose
	.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));
app.listen(5000, () => console.log("Server started on port 5000"));

//Register Request To the Server
const register = mongoose.model("LoginRegister");
app.post("/Register", async (req, res) => {
	const { fullname, email, password } = req.body;
	console.log(req.body);
	const encryptedPassword = await bcrypt.hash(password, 10);
	console.log(fullname, email, encryptedPassword);
	try {
		const OldUser = await register.findOne({ email });

		if (OldUser) {
			return res.send({ error: "User Already Exists" });
		}
		await register.create({
			fullname,
			email,
			password: encryptedPassword,
		});
		res.send({ status: "ok" });
	} catch {
		res.send({ status: "error" });
	}
});

//Login Request To the Server
app.post("/Login", async (req, res) => {
	const { email, password } = req.body;
	const LoginUser = await register.findOne({ email });
	if (!LoginUser) {
		return res.send({ message: "User Does Not Exist" });
	}
	if (bcrypt.compare(password, LoginUser.password)) {
		if (res.status(201)) {
			return res.json({ status: "ok", message: "Login Successfull" });
		} else {
			return res.json({ status: "error", message: "Login Unsuccessfull" });
		}
	}
	res.json({ status: "error", error: "Invalid Email/Password" });
});
