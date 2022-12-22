const posterValidator = (req, res, next) => {
	const { poster, imdbId } = req.body;
	if (poster && imdbId) {
		next();
	} else if (!poster) {
		res.json({ success: false, message: "no poster..Please add" });
	} else if (!imdbId) {
		res.json({ success: false, message: "no id" });
	} else {
		res.json({ success: false, message: "some thing went wrong" });
	}
};
module.exports = posterValidator;
