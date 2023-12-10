const mongoose = require("mongoose");
const Seedschema = new mongoose.Schema(
	{
		Uname: String,
		Uid: String,
		Seedname: String,
		SeedInfo: String,
		SeedProof: String,
	},
	{
		collection: "seedData",
	}
);
mongoose.model("seedData", Seedschema, "seedData");
