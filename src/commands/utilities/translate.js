const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");
const translate = require("translate-google");

module.exports = {
	name: "translate",
	aliases: ["tl", "trans"],
	async execute(message, client) {
		const args = message.content.split(" ");
		const text = message.content.replace(args[0], "");
		if (!args[1] || args[1] === "")
			return message.reply(
				"Sorry!, but please add a text to be translated!"
			);
		
		const loadingTranslate = new MessageEmbed()
		.setDescription(`Loading Translate...`)
		.setColor(color.lblurple)
		message.reply({ embeds: [loadingTranslate] }).then((send) => {
			translate(text, { to: "en" }).then((res) => {
				const response = new MessageEmbed()
					.setAuthor("Translate to english.")
					.setDescription(`${res}`)
					.setColor(color.lblurple)
					.setTimestamp()
					.setFooter(
						`Requested By ${message.author.tag}`,
						message.author.displayAvatarURL(),
						{ dynamic: true }
					);
				send.edit({ embeds: [response] });
			});
		});
	},
};
