module.exports = (client, message, args, commandName, command, prefix) => {
	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			const noPerms = new MessageEmbed()
				.setColor(color.warn)
				.setDescription(
					`Sorry!, but you dont have the required permissions to run this commands!`
				)
				.setTimestamp()
				.setFooter(
					`Requested By ${message.author.tag}`,
					message.author.displayAvatarURL()
				);
			return message.reply({ embeds: [noPerms] }).then((sent) => {
				setTimeout(() => {
					sent.delete();
				}, 5000);
			});
		}
	}
};
