module.exports = {
	name: "remove",
	aliases: ["rmv"],
	async execute(message, client) {
		let set = message.content.split(" ");
        const member = message.author.id

		if(client.bal(member) < 0) return message.reply("Sorry!, but your balance is lower than 0!");
        if(client.bal(member) > set[1]) return message.reply("Sorry!, but please don\'t set higher than your balance!");
        if(isNaN(set[1])) return message.reply("Sorry!, but please set the number!")
        
		client.rmv(member, parseInt(set[1]));
		message.reply(`Success to remove your \`${set[1]}\` Balance!`);
	},
};
