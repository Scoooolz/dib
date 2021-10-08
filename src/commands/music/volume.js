//const { MessageEmbed } = require("discord.js");
//const color = require("../../utils/color.json");
//
//module.exports = {
//	name: "volume",
//	aliases: ["vol", "v"],
//	async execute(message, client, args) {
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
//		let amount = parseInt(args[1]);
//		queue.setVolume(amount);
//		message.channel.send(`Volume Set to \`${amount}\`.`);
//	},
//};
