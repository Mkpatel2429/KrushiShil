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
app.set("view engine", "ejs");
const jwt = require("jsonwebtoken");
const JWTToken = "dsnjikndkjnkvnkasjvndsvjnkldjnsc";
const mongoUrl =
	"mongodb+srv://pmanthan206:manthan2412@cluster0.jfmmim2.mongodb.net/?retryWrites=true&w=majority";
const nodemailer = require("nodemailer");
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

require("../Event/eventDataSchema");
const eventData = mongoose.model("eventData");
app.post("/eventData", async (req, res) => {
	const { universityName, date, title, link, description } = req.body;
	console.log(title);
	try {
		await eventData.create({
			universityName,
			date,
			title,
			link,
			description,
		});
		res.send({ status: "ok" });
		console.log("okkk");
	} catch {
		res.send({ status: "error" });
	}
});

app.get("/event/data", async (req, res) => {
	try {
		const Data = await eventData.find({});
		return res.json({ status: "ok", data: Data });
	} catch (error) {
		console.log(error);
		return res.json({ status: "error", error: "Something went wrong" });
	}
});

//Get All Seeddata for Admin Dashboard
app.get("/LatestSeeds/NewSeeds", async (req, res) => {
	try {
		const allSeed = await UniversityData.find({});
		res.send({ status: "ok", data: allSeed });
	} catch (error) {
		console.log(error);
	}
});

app.post("/deleteSeed", async (req, res) => {
	const { id } = req.body;
	try {
		UniversityData.deleteOne({ _id: id }).then((err) => {
			console.log(err);
		});
		res.send({ status: "Ok", data: "Deleted" });
	} catch (error) {
		console.log(error);
	}
});

app.get("/paginatedSeed", async (req, res) => {
	const allSeed = await UniversityData.find({});
	const page = parseInt(req.query.page);
	const limit = parseInt(req.query.limit);

	const startIndex = (page - 1) * limit;
	const lastIndex = page * limit;

	const results = {};
	results.totalSeed = allSeed.length;
	results.pageCount = Math.ceil(allSeed.length / limit);

	if (lastIndex < allSeed.length) {
		results.next = {
			page: page + 1,
		};
	}
	if (startIndex > 0) {
		results.prev = {
			page: page - 1,
		};
	}
	results.result = allSeed.slice(startIndex, lastIndex);
	res.json(results);
});

//Get All Events for Admin Dashboard

app.get("/Allevents", async (req, res) => {
	try {
		const allEvents = await eventData.find({});
		res.send({ status: "ok", data: allEvents });
	} catch (error) {
		console.log(error);
	}
});

app.post("/deleteEvents", async (req, res) => {
	const { id } = req.body;
	try {
		eventData.deleteOne({ _id: id }).then((err) => {
			console.log(err);
		});
		res.send({ status: "Ok", data: "Deleted" });
	} catch (error) {
		console.log(error);
	}
});

app.get("/paginatedEvents", async (req, res) => {
	const allEvents = await eventData.find({});
	const page = parseInt(req.query.page);
	const limit = parseInt(req.query.limit);

	const startIndex = (page - 1) * limit;
	const lastIndex = page * limit;

	const results = {};
	results.totalEvents = allEvents.length;
	results.pageCount = Math.ceil(allEvents.length / limit);

	if (lastIndex < allEvents.length) {
		results.next = {
			page: page + 1,
		};
	}
	if (startIndex > 0) {
		results.prev = {
			page: page - 1,
		};
	}
	results.result = allEvents.slice(startIndex, lastIndex);
	res.json(results);
});

//Get All data for Admin Dashboard
app.get("/getAllUser", async (req, res) => {
	try {
		const allUser = await register.find({});
		res.send({ status: "ok", data: allUser });
	} catch (error) {
		console.log(error);
	}
});

app.post("/deleteUser", async (req, res) => {
	const { id } = req.body;
	try {
		register.deleteOne({ _id: id }).then((err) => {
			console.log(err);
		});
		res.send({ status: "Ok", data: "Deleted" });
	} catch (error) {
		console.log(error);
	}
});

app.get("/paginatedUsers", async (req, res) => {
	const allUser = await register.find({});
	const page = parseInt(req.query.page);
	const limit = parseInt(req.query.limit);

	const startIndex = (page - 1) * limit;
	const lastIndex = page * limit;

	const results = {};
	results.totalUser = allUser.length;
	results.pageCount = Math.ceil(allUser.length / limit);

	if (lastIndex < allUser.length) {
		results.next = {
			page: page + 1,
		};
	}
	if (startIndex > 0) {
		results.prev = {
			page: page - 1,
		};
	}
	results.result = allUser.slice(startIndex, lastIndex);
	res.json(results);
});

//video call schema
require("../server/Videocalluserschema.js");
const VCUserHistory = mongoose.model("videocallUser");
app.post("/videocallUser", async (req, res) => {
	const { email, room } = req.body;

	try {
		await VCUserHistory.create({
			email,
			room,
		});
		res.send({ status: "ok" });
		console.log("okkk");
		console.log(email, room);
	} catch {
		res.send({ status: "error" });
	}
});

app.get("/VCHistory/uservideocallData", async (req, res) => {
	try {
		const allVCHistory = await VCUserHistory.find({});
		res.send({ status: "ok", data: allVCHistory });
	} catch (error) {
		console.log(error);
	}
});

app.post("/deleteHistory", async (req, res) => {
	const { id } = req.body;
	try {
		VCUserHistory.deleteOne({ _id: id }).then((err) => {
			console.log(err);
		});
		res.send({ status: "Ok", data: "Deleted" });
	} catch (error) {
		console.log(error);
	}
});

app.get("/paginatedHistory", async (req, res) => {
	const allVCHistory = await VCUserHistory.find({});
	const page = parseInt(req.query.page);
	const limit = parseInt(req.query.limit);

	const startIndex = (page - 1) * limit;
	const lastIndex = page * limit;

	const results = {};
	results.totalUser = allVCHistory.length;
	results.pageCount = Math.ceil(allVCHistory.length / limit);

	if (lastIndex < allVCHistory.length) {
		results.next = {
			page: page + 1,
		};
	}
	if (startIndex > 0) {
		results.prev = {
			page: page - 1,
		};
	}
	results.result = allVCHistory.slice(startIndex, lastIndex);
	res.json(results);
});

//approve seed Request
require("./Seedschema.js");
const Seedschema = mongoose.model("seedData");
app.post("/approveSeed", async (req, res) => {
	const { Uname, Uid, Seedname, SeedInfo, SeedProof } = req.body;
	console.log(req.body);
	try {
		await Seedschema.create({
			Uname,
			Uid,
			Seedname,
			SeedInfo,
			SeedProof,
		});
		res.send({ status: "ok" });
		UniversityData.deleteOne({ Uid: Uid }).then((err) => {
			console.log(err);
		});
	} catch {
		res.send({ status: "error" });
	}
});

app.get("/allSeeds/approve", async (req, res) => {
	try {
		const approveSeedData = await Seedschema.find({});
		console.log(approveSeedData);
		res.send({ status: "ok", data: approveSeedData });
	} catch (error) {
		console.log(error);
	}
});

app.post("/deleteSeeds", async (req, res) => {
	const { id } = req.body;
	try {
		Seedschema.deleteOne({ _id: id }).then((err) => {
			console.log(err);
		});
		res.send({ status: "Ok", data: "Deleted" });
	} catch (error) {
		console.log(error);
	}
});

//Reset Password
app.post("/forgotPassword", async (req, res) => {
	const { email } = req.body;
	try {
		const oldUser = await register.findOne({ email });
		// console.log(oldUser);
		if (!oldUser) {
			return res.json({ status: "User Not Exists!!" });
		}
		const secret = JWTToken + oldUser.password;
		const token = (k = jwt.sign(
			{ email: oldUser.email, id: oldUser._id },
			secret,
			{
				expiresIn: "5m",
			}
		));
		const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
		console.log(link);
		var transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "pmanthan206@gmail.com",
				pass: "cwjw gxlz moud uswt",
			},
		});

		var mailOptions = {
			from: "pmanthan206@gmail.com",
			to: email,
			subject: "Reset Password",
			text: link,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log("mail");
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});
	} catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
	const { id, token } = req.params;
	console.log(req.params);
	const oldUser = await register.findOne({ _id: id });
	if (!oldUser) {
		return res.json({ status: "User Not Exists!!" });
	}
	const secret = JWTToken + oldUser.password;
	try {
		const verify = jwt.verify(token, secret);
		res.render("index", { email: verify.email, status: "Not verified" });
		console.log("verified");
	} catch (error) {
		console.log("not verified");
	}
});

app.post("/reset-password/:id/:token", async (req, res) => {
	const { id, token } = req.params;
	const { password } = req.body;
	console.log(req.params);
	const oldUser = await register.findOne({ _id: id });
	if (!oldUser) {
		return res.json({ status: "User Not Exists!!" });
	}
	const secret = JWTToken + oldUser.password;
	try {
		const verify = jwt.verify(token, secret);
		const encryPassword = await bcrypt.hash(password, 10);
		await register.updateOne(
			{
				_id: id,
			},
			{
				$set: {
					password: encryPassword,
				},
			}
		);
		res.render("index", { email: verify.email, status: "verified" });
		console.log("password is updated");
	} catch (error) {
		console.log("password is not updated");
	}
});
