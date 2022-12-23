var express = require("express");
var router = express.Router();
var axiosRequest = require("../helper/apiCall");
var fetchValidator = require("../validator/fetchValidator");
/**
 * ADMIN ROUTES
 */

router.post("/", fetchValidator, async (req, res) => {
	console.log('req', req)
	const { fetchApi } = req.body;
	let url;
	if (fetchApi == 1) {
		url = "http://www.omdbapi.com/?s=Matrix&apikey=720c3666";
		// console.log("PATH ", path);
	} else if (fetchApi == 2) {
		url = "http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666";
	} else if (fetchApi == 3) {
		url = "http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666";
	} else {
		url = "";
	}

	axiosRequest("GET", url)
		.then((response) => {
			console.log("response : ", response.data);
			res.json({
				success: true,
				data: response?.data,
			});
		})
		.catch((e) => {
			res.json({
				success: false,
				data: e?.response?.data,
				message: "no results found",
			});
		});
});

module.exports = router;
