var express = require("express");
var router = express.Router();
var fetchController = require("../controller/fetchData");
var postController = require("../controller/sendData");
/**
 * ADMIN ROUTES
 */

router.use("/fetch", fetchController);
router.use("/post", postController);

router.use("/heart-bit", (req, res, next) => {
	res.json({
		success: true,
		message: "Fabric backend works fine!!!",
	});
});

module.exports = router;
