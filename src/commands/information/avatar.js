const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");

module.exports = {
	name: "avatar",
	aliases: ["ava", "pfp", "av"],
	cooldown: 10,
	execute(message, client) {
		const target = message.mentions.users.first() || message.author;
		const response = new MessageEmbed()
			.setColor(color.lblurple)
			.setAuthor(`${target.tag}\'s Avatar`)
			.setImage(
				target.displayAvatarURL({
					dynamic: true,
					format: "png",
					size: 4096,
				})
			)
			.addFields({
				name: "URL",
				value: `${target.displayAvatarURL({
					format: "png",
					dynamic: true,
				})}`,
			})
			.setTimestamp()
			.setFooter(
				`Requested By ${message.author.tag}`,
				message.author.displayAvatarURL(),
				{ dynamic: true }
			);
		message.reply({ embeds: [response] });
	},
};
