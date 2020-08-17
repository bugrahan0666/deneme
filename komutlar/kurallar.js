const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(``)
    .setFooter('ﾅ A  N  A T O L İ A');
      message.delete()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kkk'],
  permLevel: 0
};

exports.help = {
  name: 'kkk',
  description: 'Pingi gösterir.',
  usage: 'kkk'
};