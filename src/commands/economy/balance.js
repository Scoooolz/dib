const { MessageEmbed, Message } = require("discord.js");

module.exports = {
	name: "balance",
	aliases: ["bal"],
	async execute(message, client) {
		const target = message.mentions.users.first() || message.author;
		const bal = await client.bal(target.id);
		message.reply(`${target.tag}\'s Balance: ${bal}.`);
	},
};

