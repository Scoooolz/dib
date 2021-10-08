const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color");

module.exports = {
	name: "double",
	aliases: ["gambledumble", "doubleornothing"],
	async execute(message, client) {
		const args = message.content.split(" ");
             
		const help = new MessageEmbed()
			.setTitle("Double or Nothing")
			.setDescription("If you luck. You can get 2X coins of your amount!")
			.setColor(color.dblurple)
			.addFields({
				name: "Help",
				value: "`,double <amount>`",
			});

		if (!args[1] || args[1] === "")
			return message.reply({ embeds: [help] });
		if (isNaN(args[1])) {
			return message.reply(
				"Sorry!, but please specify a amount to be double!"
			);
		} else {
		    if(args[1] < 1) return message.reply("Sorry, but please don\'t set to under 0!")
		}

		const amountToBet = Math.floor(parseInt(args[1]));

		if ((await client.bal(message.author.id)) < amountToBet)
			return message.reply(
				"Sorry!, but you have insufficient balance to make this bet!"
			);

		function random() {
			const num = Math.floor(Math.random() * 2);
			return num === 1;
		}
		if (random() === true) {
			const winAmount = amountToBet * 2;
			message.reply(`Good Luck!, You doubled your **${amountToBet}** coins to **${winAmount}** coins!`);
			client.add(message.author.id, winAmount);
		} else {
			message.reply(
				`Sorry!, but you lose your **${amountToBet}** coins. Better luck next time!`
			);
			client.rmv(message.author.id, amountToBet);
		}
	},
};
