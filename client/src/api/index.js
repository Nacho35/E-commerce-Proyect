const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.delete("/clear-cart", (req, res) => {
	fs.readFile("db.json", "utf8", (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send("Error reading JSON file");
			return;
		}

		const jsonData = JSON.parse(data);

		jsonData.cart = [];

		fs.writeFile("db.json", JSON.stringify(jsonData), (err) => {
			if (err) {
				console.log(err);
				res.status(500).send("Error deleting cart");
				return;
			}
			res.status(200).send("Cart deleted successfully");
		});
	});
});

app.listen(8080, () => {
	console.log("Server running on 8080");
});
