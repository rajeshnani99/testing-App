/** @format */

const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
	{
		chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
		readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
		users: Array,
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Messages", messageSchema);
