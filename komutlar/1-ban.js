const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('∻ The Sky - Ban Sistemi');
    return message.author.sendEmbed(ozelmesajuyari);
  }
   if (!message.member.roles.has('744630179225403393') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Kullanıcı Yasaklama Yetkiniz Yok` , `<a:yukleniyor:741424786433114172> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  let modlog = guild.channels.find("name", "ban-log");
  db.add(`ban.${message.author.id}.${message.guild.id}`, 1)
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hata` , `<a:yukleniyor:741424786433114172> Log Kanalını Bulamıyorum`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Yasaklama Nedeninizi Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.mentions.users.size < 1)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Yasaklanacak Kullanıcıyı Etiketleyiniz`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).catch(console.error);

  if (!message.guild.member(user).bannable)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Yetkilileri Banlayamasınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  message.guild.ban(user, {reason: reason})
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`<@!${user.id}> Adlı Kullanıcı <@!${message.author.id}> Tarafından **${reason}** Sebebiyle Sunucudan Yasaklandı`)
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban","yasakla","banla"],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "İstediğiniz kişiyi banlar.",
  usage: "ban [kullanıcı] [sebep]"
};