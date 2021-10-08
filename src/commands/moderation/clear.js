module.exports = {
	name: "clear",
	aliases: ["c"],
	permissions: "MANAGE_MESSAGES",
	cooldown: 30,
	execute(message) {
		const date = new Date();
		let set = message.content.split(" ");

		if (!set[1]) return message.reply("Please add the amount of number!");

		if (set[1] > 99) return message.reply("Please don't over 99 message!");
		if (isNaN(set[1]))
			return message.reply("Please add the amount of number!");
		message.channel.bulkDelete(parseInt(set[1]) + 1, true);
		setTimeout(() => {
			message.channel
				.send(
					`Success Cleared the messages!\nIf other message is not cleared, I can\'t clear that because i only can clear lower 14 days!`
				)
				.then((message) => {
					message.react("👌");
				});
		}, 1000);
	},
};
