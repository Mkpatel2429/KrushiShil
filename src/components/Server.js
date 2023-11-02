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
const jwt = require("jsonwebtoken");
const JWTToken = "dsnjikndkjnkvnkasjvndsvjnkldjnsc";
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
	const { fullname, email, password, userType } = req.body;
	console.log(req.body);
	const encryptedPassword = await bcrypt.hash(password, 10);
	// console.log(fullname, email, encryptedPassword);
	try {
		const OldUser = await register.findOne({ email });

		if (OldUser) {
			return res.send({ error: "User Already Exists" });
		}
		await register.create({
			fullname,
			email,
			password: encryptedPassword,
			userType,
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
		const token = jwt.sign({ email: LoginUser.email }, JWTToken);
		console.log(token);
		if (res.status(201)) {
			return res.json({
				status: "ok",
				data: token,
			});
		} else {
			return res.json({ status: "error", message: "Login Unsuccessfull" });
		}
	}
	res.json({ status: "error", error: "Invalid Email/Password" });
});

//Get Request To the Server
app.post("/userData", async (req, res) => {
	const { token } = req.body;
	try {
		const decode = jwt.verify(token, JWTToken, (err, res) => {
			if (err) {
				return "Token is expired";
			}
			return res;
		});
		if (decode == "Token is expired") {
			return res.send({ status: "error", error: "Token is expired" });
		}
		const useremail = decode.email;
		register
			.findOne({ email: useremail })
			.then((data) => {
				res.send({ status: "ok", data: data });
			})
			.catch((err) => {
				res.send({ status: "error", data: err });
			});
	} catch (error) {}
});

require("./Universityschema");
const UniversityData = mongoose.model("universityData");

app.post("/universityData", async (req, res) => {
	const { Uname, Uid, Seedname, SeedInfo, SeedProof } = req.body;
	try {
		await UniversityData.create({
			Uname,
			Uid,
			Seedname,
			SeedInfo,
			SeedProof,
		});
		res.send({ status: "ok" });
	} catch {
		res.send({ status: "error" });
	}
});

app.get("/Data", async (req, res) => {
	try {
		const SeedsData = await UniversityData.find({});
		return res.json({ status: "ok", data: SeedsData });
	} catch (error) {
		console.log(error);
		return res.json({ status: "error", error: "Something went wrong" });
	}
});
