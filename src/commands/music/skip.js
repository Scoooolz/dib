const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");

module.exports = {
    name: "skip",
    async execute(message, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.skip();
        message.reply({ content: "Success to skip.", ephermal: true });
    }
}
