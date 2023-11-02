const mongoose = require("mongoose");
const universityData = new mongoose.Schema(
	{
		Uname: String,
		Uid: String,
		Seedname: String,
		SeedInfo: String,
		SeedProof: String,
	},
	{
		collection: "universityData",
	}
);
mongoose.model("universityData", universityData, "universityData");
