const Discord = require('discord.js');

exports.run = (client, message, args) => {
 if (!message.member.roles.has('746465906623774750') && !message.member.roles.has('746465962794156193') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Yetersiz Yetki` , `<a:loading:746470616085037236> Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  
  let voiceChannels = message.guild.channels.filter(c => c.type === 'voice')
  let count = 0
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size
  
  let say = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("O'nlar Sunucu İstatistikleri")
  .addField("Genel Sunucu İstatistikleri", `> **Toplam Üye:** ${message.guild.members.size}\n> **Çevrimiçi Üye:** ${message.guild.members.filter(member => member.presence.status !== 'offline').size}\n> **Sesli Üye:** ${count}`, true)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  message.channel.send(say)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
};