const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");
const moment = require("moment");

module.exports = {
	name: "userinfo",
	aliases: ["ui", "user", "u"],
	cooldown: 10,
	execute(message, client) {
		const target = message.mentions.users.first() || message.author;
		const member = message.guild.members.cache.get(target.id);

		const response = new MessageEmbed()
			.setAuthor(
				`${target.tag}`,
				target.displayAvatarURL({ format: "png", dynamic: true })
			)
			.setThumbnail(
				target.displayAvatarURL({ format: "png", dynamic: true })
			)
			.setColor(color.dblurple)
			.addFields(
				{
					name: "User ID",
					value: `${target.id}`,
				},
				{
					name: "Roles",
					value: `${member.roles.cache
						.map((r) => r)
						.join("\n")
						.replace("@everyone", "\n")}`,
				},
				{
					name: "Member Joined Server",
					value: `${moment(member.joinedAt).format(
						"Do MMMM YYYY, h:mm:ss a"
					)}\n **-** ${moment(member.joinedAt)
						.startOf("day")
						.fromNow()}`,
				},
				{
					name: "Discord Account Created",
					value: `${moment(target.createdAt).format(
						"Do MMMM YYYY, h:mm:ss a"
					)}\n **-** ${moment(target.createdAt)
						.startOf("day")
						.fromNow()}`,
				}
			)
			.setTimestamp()
			.setFooter(
				`Requested By ${message.author.tag}`,
				message.author.displayAvatarURL(),
				{ dynamic: true }
			);
		message.reply({ embeds: [response] });
	},
};
