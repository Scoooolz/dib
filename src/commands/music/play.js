const { MessageEmbed } = require("discord.js");
const color = require("../../utils/color.json");

module.exports = {
	name: "play",
	aliases: ["p"],
	async execute(message, client, args) {
        	let voiceChannel = message.member.voice.channel;
		if (!voiceChannel)
			return message.reply({ content: `Sorry!, but please join a voice channel to set a music!`, ephemeral: true });

		let search_Song = args.join(" ")
		if (!search_Song) {
			return message.reply({ content: `Sorry!, but please add an music title or music link for set a music!`, ephemeral: true});
		} else if(search_Song.includes('/') && search_Song.includes('youtu') && search_Song.includes('playlist')) {
			return message.reply({ content: 'Sorry!, but the music is beta and can\'t play playlist.', ephemeral: true })
		}

    
		let queue = client.music.createQueue(message.guild.id, {
			metadata: {
				channel: message.channel,
			},
		});
    
		// verify vc connection
		try {
			if (!queue.connection) await queue.connect(voiceChannel);
		} catch {
			queue.destroy();
			return await message.reply({
				content: "Could not join your voice channel!",
				ephemeral: true,
			});
		}

		let song = await client.music
		.search(search_Song, {
				requestedBy: message.author,
			})
			.then((x) => x.tracks[0]);

		if (!song) return message.reply({ content: `I can\'t find \`${search_Song}\`.`, ephemeral: true });

		queue.play(song);

		message.reply({
			content: `⏱️ | Loading track **${song.title}**!`,
		});
	},
};
