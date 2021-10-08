const { Client, Collection } = require("discord.js");
const { Player } = require("discord-player");

const client = new Client({
	intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
});

client.commands = new Collection();
client.cooldowns = new Collection();
client.music = new Player(client, {
	leaveOnEnd: true,
	leaveOnStop: true,
        leaveOnEmpty: true,
	leaveOnEmptyCooldown: 5000,
 	autoSelfDeaf: true,
  	initialVolume: 50,
	bufferingTimeout: 3000,
});

["event", "commands", "all"].forEach((handler) => {
	require(`./src/handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);
