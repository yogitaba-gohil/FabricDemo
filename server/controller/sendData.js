var express = require("express");
var router = express.Router();
var Poster = require("../model/Poster");
var posterValidator = require("../validator/posterValidator");
/**
 * ADMIN ROUTES
 */

router.post("/", posterValidator, async (req, res) => {
	const { poster, imdbId } = req.body;
	const foundData = await Poster.findOne({ imdbId });
	if (!foundData) {
		const data = { poster, imdbId };
		await new Poster(data)
			.save()
			.then(() => res.json({ success: true, message: "send" }))
			.catch((err) => {
				console.log("err", err);
				res.json({ success: false, message: "not send" });
			});
	} else {
		res.json({
			success: false,
			data: null,
			message: "already exists",
		});
	}
});

module.exports = router;
