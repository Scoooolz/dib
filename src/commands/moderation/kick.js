module.exports = {
	name: "kick",
	aliases: ["k"],
	permissions: "KICK_MEMBERS",
	cooldowns: 10,
	async execute(message) {
		message.reply(`Sorry! but i am can't kick right now. i am is beta!`);
	},
};
