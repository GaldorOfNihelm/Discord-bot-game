const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({commandPrefix : '@', owner : "144454900107968512"});
//const Token = 'insert token here';

bot.registry.registerGroup('soldiers', 'Soldiers');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/Commands');

bot.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
  });
  





bot.login(Token);