const fetchValidator = (req, res, next) => {
	const { fetchApi } = req.body;
	if (fetchApi) {
		next();
	} else {
		res.json({ success: false, message: "please click the button" });
	}
};
module.exports = fetchValidator;
