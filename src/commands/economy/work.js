module.exports = {
	name: "work",
	cooldown: 300,
	async execute(message, client) {
		const jobs = [
			"Programer",
			"Builder",
			"Waiter",
			"Bus Driver",
			"Chef",
			"Mechanic",
			"Doctor",
		];
		const jobIndex = Math.floor(Math.random() * jobs.length);
		const coins = Math.floor(Math.random() * 200) + 1;

		client.add(message.author.id, coins)
        message.reply(
            `You worked as **${jobs[jobIndex]}** and get **${coins}** coins!`
        );
	},
};
