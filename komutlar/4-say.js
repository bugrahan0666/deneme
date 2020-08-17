const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.roles.has('744630179225403393') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Yetersiz Yetki` , `<a:yukleniyor:741424786433114172> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

  
  let voiceChannels = message.guild.channels.filter(c => c.type === 'voice')
  let count = 0
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size

  let kız = message.guild.roles.find(x => x.id === '744630189673283706')
  let erkek = message.guild.roles.find(x => x.id === '744630191812378815')
  let taglı = message.guild.roles.find(x => x.id === '744630194698190968')
  let booster = message.guild.roles.find(x => x.id === '744630188285100203')
  let vip = message.guild.roles.find(x => x.id === '744630188788154471')
  let kayıtsız = message.guild.roles.find(x => x.id === '744630193217601627')
  let sponsor = message.guild.roles.find(x => x.id === '744630175681085450')
  let cezalı = message.guild.roles.find(x => x.id === '744630200842584114')
  let sesmute = message.guild.roles.find(x => x.id === '744630202293813359')
  let chatmute = message.guild.roles.find(x => x.id === '744630203258634340')


  let say = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("ﾅ Anatolia Sunucu İstatistikleri")
  .addField("Genel Sunucu İstatistikleri", `> **Toplam Üye:** ${message.guild.members.size}\n> **Çevrimiçi Üye:** ${message.guild.members.filter(member => member.presence.status !== 'offline').size}\n> **Sesli Üye:** ${count}`, true)
  .addField("Sunucudaki User İstatistikleri",`> **Toplam Kız Üye:** ${kız.members.size}\n> **Toplam Erkek Üye:** ${erkek.members.size}\n> **Toplam Taglı Üye:** ${taglı.members.size}\n> **Toplam Vip Üye:** ${vip.members.size}\n> **Toplam Kayıtsız Üye:** ${kayıtsız.members.size}`)
  .addField("Sponsor ve Destekçiler",`> **Toplam Sponsor:** ${sponsor.members.size}\n> **Toplam Booster:** ${booster.members.size}`)
  .addField("Cezalı ve Muteliler",`> **Toplam Cezalı:** ${cezalı.members.size}\n> **Toplam Ses Muteli:** ${sesmute.members.size}\n> **Toplam Chat Muteli:** ${chatmute.members.size}`)
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