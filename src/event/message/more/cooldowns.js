module.exports = (client, message, args, commandName, command, prefix, Collection) => {
    const { cooldowns } = client;
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 1) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime =
				timestamps.get(message.author.id) + cooldownAmount;
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				const timeLeftEmbed = new MessageEmbed()
					.setColor(color.warn)
					.setDescription(
						`Sorry!, but please wait ${timeLeft.toFixed(
							1
						)} seconds to run this commands again!`
					)
					.setTimestamp()
					.setFooter(
						`Requested By ${message.author.tag}`,
						message.author.displayAvatarURL()
					);
				return message
					.reply({ embeds: [timeLeftEmbed] })
					.then((sent) => {
						setTimeout(() => {
							sent.delete();
						}, 5000);
					});
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}