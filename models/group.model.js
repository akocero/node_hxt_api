const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			unique: [true, "Name already excist"],
		},
		leaders: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Character",
			},
		],
		description: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
