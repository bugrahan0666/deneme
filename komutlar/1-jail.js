const Discord = require('discord.js');
const db = require("quick.db")
const moment = require('moment')
require("moment-duration-format")
exports.run = async (client, message, args) => {
   if (!message.member.roles.has('744630180214997052') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Yetersiz Yetki` , `<a:yukleniyor:741424786433114172> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Cezalıya Atılacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Cezalıya Atılma Sebebini Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
  
          message.react("EMOJİ ID");
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) 
   
})
  member.addRole('744630200842584114')//CEZALI ROL
     const kanal = message.guild.channels.find(c => c.id == "745014529502740632") //LOG KANALI
       db.add(`jail.${message.author.id}.${message.guild.id}`, 1)
    const embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.tag , message.author.avatarURL)
    .setDescription(`<@!${kullanıcı.id}> Adlı Kullanıcı <@!${message.author.id}> Tarafından Cezalıya Atıldı\nSebep: **${reason}**`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  let embed = new Discord.RichEmbed() 
  .setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription(`${kullanıcı} Adlı Kullanıcı **${reason}** Sebebiyle Cezalıya Atıldı`) 
  .setFooter(`ﾅ Anatolia`)
  .setColor("RANDOM")
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1));
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır","cezalı","karantina"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: 'jail @etiket Sebebi'
}