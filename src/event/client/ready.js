module.exports = {
	name: "ready",
	execute(client) {
		const mongoose = require("mongoose");
		const mongoURL = process.env.MONGO_URI;

		// Discord
		console.log(`[APP]Logged in as ${client.user.tag}!`);
		client.user.setActivity(process.env.STATUS_NAME, {
			type: process.env.STATUS_TYPE,
			url: process.env.STATUS_TYPE_URL,
		});
		console.log(`[APP]Loading status... (1/2)`);
		client.user.setStatus(`${process.env.PROFILE_TYPE}`);
		console.log(`[APP]Status was set correctly! (2/2)`);

		// Mongo

		if (!mongoURL)
			return console.log("[Mongoose] No MongoDB URL detected.");
		mongoose
			.connect(mongoURL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() =>
				console.log("[Mongoose] Connected to MongoDB Databases!")
			);
	},
};
