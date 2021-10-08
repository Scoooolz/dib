const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");
const info = require("../../utils/info.json");

module.exports = {
	name: "info",
	async execute(message, client, commandName) {
		let set = message.content.split(" ");

		if (set[1]) {
			if (set[1].includes("bot")) {
				const botEmbed = new MessageEmbed()
					.setColor(color.info)
					.setDescription(
						`Hello! ${message.author.tag}, My name is ${client.user.tag}!`
					)
					.addFields(
						{
							name: "Created",
							value: `${info.created}`,
						},
						{
							name: "Version",
							value: `${info.version}`,
						},
						{
							name: "Description",
							value: `${info.desc}`,
						}
					)
					.setTimestamp()
					.setFooter(
						`Requested By ${message.author.tag}`,
						message.author.displayAvatarURL(),
						{ dynamic: true }
					);
				message.reply({ embeds: [botEmbed] });
			}
		}
	},
};
