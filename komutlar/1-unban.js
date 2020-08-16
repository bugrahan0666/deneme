const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
     if (!message.member.roles.has('692842107970387984') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Yasak Kaldırma Yetkiniz Yok` , `<a:loading:692108268557828188> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:loading:692108268557828188> Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('∻ The Sky - Unban Sistemi');
    return message.author.send(ozelmesajuyari);
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find("name", "ban-bilgi");
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hata` , `<a:particals:692108121518112909> Log Kanalını Bulamıyorum`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:particals:692108121518112909> Lütfen Yasak Kaldırma Nedeninizi Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (!user)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:particals:692108121518112909> Lütfen Yasağı Kaldırılacak Kullanıcının ID Numarasını Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).catch(console.error);
  message.guild.unban(user);
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle('Yasak Kaldırıldı')
    .setDescription(`<a:beyaztik:734740326224232490> **${user.username}#${user.discriminator}** Kullanıcısı **${message.author.username}#${message.author.discriminator}** Tarafından Sunucuya Giriş Yasağı Kaldırıldı \n\n<a:particals:692108121518112909> Yetkili ID: **${message.author.id}**\n<a:particals:692108121518112909> Kullanıcı ID: **${user.id}**\n<a:particals:692108121518112909> Yasak Kaldırılma Nedeni: **${reason}**`)
    .setImage("")
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