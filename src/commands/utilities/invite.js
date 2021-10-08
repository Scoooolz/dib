const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");

module.exports = {
	name: "invite",
	execute(message, client) {
		const inviteEmbed = new MessageEmbed()
			.setTitle(`Invite`)
			.setColor(color.info)
			.setDescription(`You can invite me to your server!`)
			.addFields({
				name: "Invite Link",
				value: `https://discord.com/oauth2/authorize?client_id=882139348986916875&scope=bot%20applications.commands&permissions=8589934591`,
			})
			.setTimestamp()
			.setFooter(
				`Requested By ${message.author.tag}`,
				message.author.displayAvatarURL()
			);
		message.reply({ embeds: [inviteEmbed] });
	},
};
