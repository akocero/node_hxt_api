const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const isValidNenType = (val) => {
	let valid = true;
	const nen_types = [
		"enhancement",
		"manipulation",
		"emission",
		"specialization",
		"conjuration",
		"transmutation",
		"unknown",
	];

	val.forEach((item) => {
		item = item.toLowerCase();
		if (!nen_types.includes(item)) {
			valid = false;
		}
	});

	return valid;
};

const characterSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			unique: [true, "Name already excist"],
		},
		also_known_as: {
			type: Array,
		},
		gender: {
			type: String,
			required: [true, "Gender is required"],
		},
		nen_type: {
			type: Array,
			validate: [isValidNenType, "Nen-type is not valid"],
		},
		image: {
			type: String,
		},
		image: {
			public_id: String,
			secure_url: String,
			width: Number,
			height: Number,
		},
		abilities: {
			type: Array,
		},
		japanese_name: {
			type: String,
		},
		affiliations: {
			type: Array,
		},
		professions: {
			type: Array,
			required: [true, "Profession is required"],
		},
		state: {
			type: String,
			required: [true, "State is required"],
		},
		relatives: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Character",
			},
		],
		details: {
			type: String,
		},
		hunter_star: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
