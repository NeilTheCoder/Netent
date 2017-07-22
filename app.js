const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./settings.json');

bot.on('ready', () => {
    console.log(`=============================\n\nClient Username: ${bot.user.username}\nClient ID: ${bot.user.id}\nBot Owner: ${bot.users.get(config.ownerID).username}\nBot Prefix: ${config.prefix}\nBot Default Command: ${config.prefix}help\nBot Current Version: 1.0.1\n\n=============================`)
})

bot.on('message', netent => {
let args = netent.content.split(' ').slice(1);
    if(netent.content.startsWith(config.prefix + 'ping')) {
        netent.channel.send(`**Done pinging! The Roundtrip took about __${Math.round(bot.ping)}__ ms ! :ping_pong:**`)
    } else
    if(netent.content.startsWith(config.prefix + 'setgame')) {
    let game = args.join(' ');
        if(netent.author.id !== config.ownerID)
            return netent.channel.send(`**You don't have the correct Access Rights! :no_entry_sign:**`);
        bot.user.setGame(game).then(()  => netent.channel.send(`**Changed my game to ${game}!**`));
    } else
    if(netent.content.startsWith(config.prefix + 'help')) {
        netent.channel.send(`__${netent.author.username}__: Check your DMS!\nDo \`\n${config.prefix}invite\`\ to get my Invite!`).then(() => netent.author.send(`**\`\`\`\<====> -Help Message Page 1- <====>\n\n${config.prefix}ping - Ping!\n${config.prefix}help - Shows this message!\`\`\`\n${bot.user.username} was made in the Discord.js Library!\nOur Support Server Invite: https://discord.gg/9KAZxHM**`));
    } else
    if(netent.content.startsWith(config.prefix + 'kick')) {
        let user = netent.mentions.users.first();
            let reason = args.slice(1).join(' ');
                var member = netent.guild.member(user);
    if(!netent.member.hasPermission('KICK_MEMBERS'))
        return netent.channel.send(`**Access Denied! :no_entry_sign:\nMissing the Permissions \`\Kick Members\`\**`);
    if(!user)
        return netent.channel.send(`**Please specify a User!**`);
    if(!reason)
        return netent.channel.send(`**Please apply a Reason for the Kick!**`)
        netent.channel.send(`**\`\`\`\Kicked User ${user.tag},\nResponsible for the Kick: ${netent.author.tag}\nReason: ${reason}\`\`\`\**`)
    member.kick()
    } else
    if(netent.content.startsWith(config.prefix + 'ban')) {
    var user = netent.mentions.users.first();
        if(!netent.member.hasPermission('BAN_MEMBERS'))
        return netent.channel.send(`**Access Denied! :no_entry_sign:\nMissing the Permissions \`\Ban Members\`\**`);
    if(!user)
        return netent.channel.send(`**Please specify a User!**`);
    if(!reason)
        return netent.channel.send(`**Please apply a Reason for the Ban!**`)
        netent.channel.send(`**Banned User ${user.tag}, well it was about time!\nResponsible for the Ban: ${netent.author.tag}\nReason: ${reason}**`)
        member.ban()
    } else
    if(netent.content.startsWith(config.prefix + 'shutdown')) {
        if(netent.author.id !== config.ownerID)
            return netent.channel.send(`**You don't have the correct Access Rights! :no_entry_sign:**`);
        netent.channel.send(`**Shutdown was triggered!\nShutting down... :wave:**`).then(() => bot.user.setStatus('invisible').then(() => process.exit(0)));
    }
});

bot.login(config.token);

// Bot = The Bot
// User = User being mentioned
// Author = You!
// Netent = the Message
