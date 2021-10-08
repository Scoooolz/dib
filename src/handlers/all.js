module.exports = (client, Discord) => {
	// DotENV
	if (process.env.NODE_ENV !== `production`) {
		require("dotenv").config();
	}
	// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

	// Economy
	const schema = require("../mongodb/money.js");
	client.bal = (id) =>
		new Promise(async (ful) => {
			const data = await schema.findOne({ id });
			if (!data) return ful(0);
			ful(data.coins);
		});

	client.add = (id, coins) => {
		schema.findOne({ id }, async (err, data) => {
			if (err) throw err;
			if (data) {
				data.coins += coins;
			} else {
				data = new schema({ id, coins });
			}
			data.save();
		});
	};

	client.rmv = (id, coins) => {
		schema.findOne({ id }, async (err, data) => {
			if (err) throw err;
			if (data) {
				data.coins -= coins;
			} else {
				data = new schema({ id, coins: -coins });
			}
			data.save();
		});
	};
	// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
	
	client.music.on("trackStart", (queue, track) => queue.metadata.channel.send(`🎶 | Now playing **${track.title}**!`))
};
