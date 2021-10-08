const { Client, MessageEmbed, Message, Collection } = require("discord.js");
const color = require("../../utils/color.json");
const prefix = process.env.PREFIX;

module.exports = {
	name: "messageCreate",
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {args} args
	 */
	async execute(message, client) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();
		const command =
			client.commands.get(commandName) ||
			client.commands.find(
				(cmd) => cmd.aliases && cmd.aliases.includes(commandName)
			);

		if (!command) return;

		["cooldowns", "permissions"].forEach((more) => {
			require(`./more/${more}`)(client, message, args, commandName, command, prefix, Collection);
		});

		try {
			command.execute(message, client, args, commandName);
		} catch (error) {
			console.warn(error);
			const errorEmbed = new MessageEmbed()
				.setColor(color.error)
				.setDescription(
					`Sorry!, but error happened while trying to run this commands.`
				)
				.addFields({
					name: "Error:",
					value: `\`\`\`${error}\`\`\``,
				})
				.setTimestamp()
				.setFooter(
					`Requested By ${message.author.tag}`,
					message.author.displayAvatarURL()
				);
			message.reply({ embeds: [errorEmbed] }).then((sent) => {
				setTimeout(() => {
					sent.delete();
				}, 5000);
			});
		}
	},
};
