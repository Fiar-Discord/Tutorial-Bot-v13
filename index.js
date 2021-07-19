const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply(`Ping mu adalah ${client.ws.ping}`);
  }
});

client.login('bot_token_mu'); //replace bot_token_mu dengan bot token mu 
