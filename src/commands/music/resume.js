//const { MessageEmbed } = require("discord.js");
//const color = require("../../utils/color.json");
//
//module.exports = {
//	name: "resume",
//	aliases: ["res"],
//	async execute(message, client) {
//		const { Player } = require("discord-player");
//
//		const player = new Player(client, {
//			leaveOnEnd: true,
//			leaveOnStop: true,
//			leaveOnEmpty: true,
//			leaveOnEmptyCooldown: 5000,
//			autoSelfDeaf: true,
//			initialVolume: 50,
//			bufferingTimeout: 3000,
//		});
//
//		let queue = player.getQueue(message.guild.id);
//		queue.setPaused(false)
//		message.react("👌");
//	},
//};
//