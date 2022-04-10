const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
	cors({
		origin: ["*"],
	})
);

app.get("/api/products", (req, res) => {
	const products = JSON.parse(fs.readFileSync("data.json"));
	res.send(products);
});

app.listen(PORT, () => {
	console.log(`Server listening on localhost:${PORT}...`);
});
