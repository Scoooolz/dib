const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");

module.exports = {
	name: "play",
	aliases: ["p"],
	async execute(message, client, args) {
		let guildQueue = client.player.getQueue(message.guild.id);
		const command = message.content.toLowerCase();
		if (
			command.includes("youtu") &&
			command.includes("/") &&
			command.includes("playlist")
		) {
			let queue = client.player.createQueue(message.guild.id);
			await queue.join(message.member.voice.channel);
			let song = await queue.play(args.join(" ")).catch((_) => {
				if (!guildQueue) queue.stop();
			});
			message.reply(`Now playing: ${song}!`)
		} else {
			let queue = client.player.createQueue(message.guild.id);
			await queue.join(message.member.voice.channel);
			let song = await queue.play(args.join(" ")).catch((_) => {
				if (!guildQueue) queue.stop();
			});
			message.reply(`Now playing: ${song}!`)
		}
	},
};
