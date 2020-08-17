const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require("quick.db")

exports.run = async (client ,message ,args) => {
   if (!message.member.roles.has('744630180214997052') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Yetersiz Yetki` , `<a:yukleniyor:741424786433114172> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
    let kullanıcı = message.mentions.members.first()
        if(!kullanıcı)
             return message.channel.send(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Cezalıdan Çıkarılacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
let cezlaırol = message.guild.roles.get("744630200842584114"); //Cezalı Rol Id
let kayıtsızrol = message.guild.roles.get("744630193217601627"); // Kayıtsız Rol Id
if(!cezlaırol) return message.guild.owner.send(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hata` , `<a:yukleniyor:741424786433114172> Sunucuda Cezalı Rolünü Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
if(!kayıtsızrol) return message.guild.owner.send(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hata` , `<a:yukleniyor:741424786433114172> Sunucuda Kayıtsız Rolünü Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
db.add(`unjail.${message.author.id}.${message.guild.id}`, 1)
let member = message.guild.member(kullanıcı)
await member.addRole(kayıtsızrol) // 
await member.removeRole(cezlaırol)
await member.removeRole("744630201572392970")

let kanal = message.guild.channels.find('name' , 'jail-log')
    if(!kanal) return message.guild.owner.send(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hata` , `<a:yukleniyor:741424786433114172> Sunucuda Cezalı Log Kanalını Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  const unjail = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${kullanıcı} Adlı Kullanıcı ${message.author} Tarafından Cezalıdan Çıkartıldı`)
.setFooter(message.author.tag , message.author.avatarURL)
kanal.send(unjail)

const dcs = new Discord.RichEmbed()
.setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription(`${kullanıcı} Adlı Kullanıcı Cezalıdan Çıkartıldı`) 
  .setFooter(`ﾅ Anatolia`)
  .setColor("RANDOM")
  .setTimestamp()
message.channel.send(dcs)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unjail","uncezalı","unkarantina"],
  permLevel: 0
};

exports.help = {
  name: "unjail",
  description: "Belirtiniz Kullanıyı Cezalıdan Kaldırır!",
  usage: "unjail <kullanıcı>"
};