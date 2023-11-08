const { Events, ActivityType } = require("discord.js");

module.exports = {

        name: Events.ClientReady,
        run(client) {

            client.user.setActivity("Fortnite", {type: ActivityType.Playing})

            console.log(`${client.user.username} is online`);
        }
};