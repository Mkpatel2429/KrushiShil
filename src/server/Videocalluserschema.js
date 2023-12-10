const mongoose = require("mongoose");
const videocallUser = new mongoose.Schema(
	{
		email: String,
		room: Number,
	},
	{
		collection: "videocallUser",
	}
);
mongoose.model("videocallUser", videocallUser, "videocallUser");
