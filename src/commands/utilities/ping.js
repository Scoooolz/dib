const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");
const mongoose = require("mongoose");

module.exports = {
	name: "ping",
	aliases: ["status", "stats", "information"],
	async execute(message, client) {
		let totalSeconds = client.uptime / 1000;
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);

		const Response = new MessageEmbed()
			.setColor(color.lblurple)
			.setTitle(`**Bot Status**`)
			.addFields(
				{
					name: "Client",
					value: "🟢 Online!",
				},
				{
					name: "Database",
					value: `${switchTo(mongoose.connection.readyState)}`,
				},
				{
					name: "Client Ping",
					value: `\`${client.ws.ping}ms\``,
				},
				{
					name: "Message Ping",
					value: `\`${
						Date.now() - parseInt(message.createdTimestamp)
					}ms\``,
				},
				{
					name: "Uptime",
					value: `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds.`,
				}
			)
			.setTimestamp()
			.setFooter(
				`Requested By ${message.author.tag}`,
				message.author.displayAvatarURL(),
				{ dynamic: true }
			);

		message.reply({ embeds: [Response] });
	},
};

function switchTo(val) {
	var status = " ";
	switch (val) {
		case 0:
			status = `🔴 Disconnected!`;
			break;
		case 1:
			status = `🟢 Connected!`;
			break;
		case 2:
			status = `🟠 Connecting!`;
			break;
		case 3:
			status = `🟠 Disconnecting!`;
			break;
	}
	return status;
}
