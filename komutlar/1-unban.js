const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  
 if (!message.member.roles.has('746465906623774750') && !message.member.roles.has('746465962794156193') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Yetersiz Yetki` , `<a:loading:746470616085037236> Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (!message.guild) {
   const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp() 
      .addField(`<a:unlem:746470597265064026> Hatalı Kullanım` , `<a:loading:746470616085037236> Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
    return message.author.sendEmbed(ozelmesajuyari);
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find("name", "ban-bilgi");
     db.add(`unban.${message.author.id}.${message.guild.id}`, 1)
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Hata` , `<a:loading:746470616085037236> Log Kanalını Bulamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Hatalı Kullanım` , `<a:loading:746470616085037236> Lütfen Yasak Kaldırma Nedeninizi Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (!user)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Hatalı Kullanım` , `<a:loading:746470616085037236> Lütfen Yasağı Kaldırılacak Kullanıcının ID Numarasını Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).catch(console.error);
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