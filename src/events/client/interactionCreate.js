module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return interaction.reply("Command not found!");

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.log("FEJl ", error);
                await interaction.reply({
                    content: "Something went wrong!",
                    ephemeral: true
                });
            }
        } else console.log(`${interaction.author.tag} said: ${interaction.content}`);
    },
};