const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  
     if (!message.member.roles.has('744630179225403393') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Yetersiz Yetki` , `<a:yukleniyor:741424786433114172> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('ﾅ Anatolia - Unban Sistemi');
    return message.author.send(ozelmesajuyari);
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find("name", "ban-log");
     db.add(`unban.${message.author.id}.${message.guild.id}`, 1)
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hata` , `<a:yukleniyor:741424786433114172> Log Kanalını Bulamıyorum`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Yasak Kaldırma Nedeninizi Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (!user)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Yasağı Kaldırılacak Kullanıcının ID Numarasını Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).catch(console.error);
  message.guild.unban(user);
  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`<@!${message.author.id}> Tarafından **${reason}** Sebebiyle Bir Yasak Kaldırıldı`)
  return guild.channels.get(modlog.id).send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban", "banac", "banaç", "bankaldır"],
  permLevel: 0
};

exports.help = {
  name: "unban",
  description: "İstediğiniz kişinin banını kaldırır.",
  usage: "unban [user] [reason]"
};