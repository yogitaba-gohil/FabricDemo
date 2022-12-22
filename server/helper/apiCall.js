var axios = require("axios");

const axiosRequest = (method, path, params = "", body = "") => {
	return new Promise((resolve, reject) => {
		const FULL_URL = path;

		if (method === "GET") {
			axios
				.get(FULL_URL, { params: params })
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		} else if (method === "POST") {
			console.log(
				"FULL_URL, { params: params }, { body }",
				FULL_URL,
				{ params: params },
				{ body }
			);
			axios
				.post(FULL_URL, body, { params: params })
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		} else if (method === "PUT") {
			axios
				.put(FULL_URL, body)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		} else if (method === "DELETE") {
			axios
				.delete(FULL_URL)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
};

module.exports = axiosRequest;
