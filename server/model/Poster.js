let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const posterSchema = new Schema(
	{
		poster: {
			type: String,
			required: true,
		},
		imdbId: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

posterSchema.index({
	id: 1,
});
module.exports = mongoose.model("Poster", posterSchema);
