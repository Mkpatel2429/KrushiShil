const mongoose = require("mongoose");
const eventData = new mongoose.Schema(
	{
        universityName:String,
        date:Date,
		title: String,
		link: String,
		description: String,
	},
	{
		collection: "eventData",
	}
);
mongoose.model("eventData", eventData, "eventData");
