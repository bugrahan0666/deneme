const Discord = require("discord.js");
const db = require('../modules/xenon-db.js');
exports.run = async (client, message, args, dil) => {
  db.set(`sunucular.${message.guild.id}.gcm`)
  message.channel.send("Başarılı!")
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gçm"],
  permLevel: 3
};

exports.help = {
  name: "giriş-çıkış-mesaj",
  description: "Sunucuya gelen giden kullanıcıların resimli olarak belirtlileceği kanalı belirler",
  usage: "girişçıkış <#kanal> <klasik/manzara> || girişçıkış kapat",
 
};