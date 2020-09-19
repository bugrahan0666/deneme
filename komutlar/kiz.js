//Alt yapı tamamen Tynx ekibinin kurucularından olan Savcı'ya aittir. Lütfen çalmayın. Telif hakları tamamen bize aittir. Alt yapıyı geliştirip tanıtmak isterseniz lütfen bizden izin alın. İyi günler.

const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
  var kayitsiz = ayarlar.kayitsiz
  var kiz = ayarlar.kiz
  var logkanali = ayarlar.log
  var sembol = ayarlar.tag
  var teyitci = ayarlar.teyitci
  var sunucuadi = ayarlar.sunucuadi;
  var footer = `© ${sunucuadi}` 
  
  const kayıtlı = message.guild.roles.find(r => r.id === kiz);
  const misafir = message.guild.roles.find(r => r.id === kayitsiz);
  const log = message.guild.channels.find(c => c.id === logkanali);
  const tag = sembol;
  
  if(!message.member.roles.array().filter(r => r.id === teyitci)[0]) {
    return message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle(`${sembol} ${sunucuadi} - Kayıt Sistemi`).setDescription(`_Üzgünüm, bu komutu kullanabilmek için <@&${teyitci}> rolüne sahip olmanız gerekiyor._`).setTimestamp().setFooter(footer));
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
 
      if(!member) return message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle(`${sembol} ${sunucuadi} - Kayıt Sistemi`).setDescription('_Kullanıcıyı etiketlemeyi unuttunuz!_').setTimestamp().setFooter(footer))
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle(`${sembol} ${sunucuadi} - Kayıt Sistemi`).setDescription('_Bir isim girmeyi unuttunuz!_').setTimestamp().setFooter(footer))
      if(!yas) return message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle(`${sembol} ${sunucuadi} - Kayıt Sistemi`).setDescription('_Bir yaş girmeyi unuttunuz!_').setTimestamp().setFooter(footer))
    c.addRole(kayıtlı)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setTitle(`${sembol} ${sunucuadi} - Kayıt Sistemi`)
    .setDescription(`_${member} adlı kullanıcı <@${message.author.id}> tarafından \`${tag} ${nick} | ${yas}\` ismiyle, <@&${kiz}> olarak kayıt edildi!_`)
    .setFooter(footer)
    .setTimestamp()
    .setColor("GOLD")
    log.send(embed)
      message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle(`${sembol} ${sunucuadi} - Kayıt Sistemi`).setDescription(`_${member} adlı kullanıcı <@${message.author.id}> tarafından <@&${kiz}> olarak kayıt edildi!_ `).setTimestamp().setFooter(footer))
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız", "k", "female"],
  permLevel: 0
};

exports.help = {
  name: "kız",
  description: "",
  usage: ""
};