const fetchValidator = (req, res, next) => {
	console.log('req', req)
	const { fetchApi } = req.body;
	if (fetchApi) {
		next();
	} else {
		res.json({ success: false, message: "please click the button" });
	}
};
module.exports = fetchValidator;
