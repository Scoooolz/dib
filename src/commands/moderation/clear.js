module.exports = {
	name: "clear",
	aliases: ["c"],
	permissions: "MANAGE_MESSAGES",
	cooldown: 30,
	execute(message) {
		let set = message.content.split(" ");

		if (!set[1]) return message.reply({ content: "Please add the amount of number!", ephemeral: true });

		if (set[1] > 99) return message.reply({ content: "Please don't over 99 message!", ephemeral: true });
		if (isNaN(set[1]))
			return message.reply({ content: "Please add the amount of number!", ephemeral: true});
		message.channel.bulkDelete(parseInt(set[1]) + 1, true);
		setTimeout(() => {
			message.channel.send({ content: `Success Cleared the messages!\nIf other message is not cleared, I can\'t clear that because i only can clear lower 14 days!`, ephemeral: true })
		}, 1000);
	},
};
