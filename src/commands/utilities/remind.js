const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");

module.exports = {
	name: "remind",
	cooldown: 30,
	execute(message, client) {
		let set = message.content.split(" | ");
		let time = 0;
		if (set[1]) {
			if (set[1].includes("s")) {
				time = 1000 * parseInt(set[1].replace("s", ""));
			} else if (set[1].includes("m")) {
				time = 1000 * 60 * parseInt(set[1].replace("m", ""));
			} else if (set[1].includes("h")) {
				time = 1000 * 60 * 60 * parseInt(set[1].replace("h", ""));
			}
		} else {
			const remindHelpEmbed = new MessageEmbed()
				.setTitle(`Remind Commands`)
				.setColor(color.info)
				.setDescription(`A commands to set reminder/timer.`)
				.addFields(
					{
						name: "Commands",
						value: `\`\`\`,remind | <time> | <description>\`\`\``,
					},
					{
						name: "More",
						value: `<time> = The time for want to set.\n \`\`\`(s = seconds, m = minutes, h = hours.)\`\`\`\n<description> = Set the timer name.`,
					}
				)
				.setTimestamp()
				.setFooter(
					`Requested By ${message.author.tag}`,
					message.author.displayAvatarURL()
				);
			message.reply({ embeds: [remindHelpEmbed] });
		}

		if (set[2]) {
			message.reply(`Reminder was set.`);
			setTimeout(() => {
				const remindTimerEmbed = new MessageEmbed()
					.setAuthor(`Hey! ${message.author.tag}, A timer has ended!`)
					.setColor(color.info)
					.setDescription(`Description: \`\`\`${set[2]}\`\`\``)
					.setTimestamp()
					.setFooter(
						`Requested By ${message.author.tag}`,
						message.author.displayAvatarURL()
					);
				message.channel.send({ embeds: [remindTimerEmbed], ephemeral: true});
			}, time);
		}
	},
};
