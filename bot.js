const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("570289147143520276")
setInterval(function() {
channel.send(`**I want Credits ,,, Plz Dont Ban me ): **`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
