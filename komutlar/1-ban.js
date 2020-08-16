const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:particals:692108121518112909> Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('∻ The Sky - Ban Sistemi');
    return message.author.sendEmbed(ozelmesajuyari);
  }
   if (!message.member.roles.has('692842107970387984') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Kullanıcı Yasaklama Yetkiniz Yok` , `<a:loading:692108268557828188> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  let modlog = guild.channels.find("name", "ban-bilgi");
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hata` , `<a:particals:692108121518112909> Log Kanalını Bulamıyorum`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:particals:692108121518112909> Lütfen Yasaklama Nedeninizi Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.mentions.users.size < 1)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:particals:692108121518112909> Yasaklanacak Kullanıcıyı Etiketleyiniz`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).catch(console.error);

  if (!message.guild.member(user).bannable)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:particals:692108121518112909> Yetkilileri Banlayamasınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  message.guild.ban(user, {reason: reason})
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle('Üye Yasaklandı')
    .setDescription(`<a:beyaztik:734740326224232490> **${user.username}#${user.discriminator}** Kullanıcısı **${message.author.username}#${message.author.discriminator}** Tarafından Sunucudan Yasaklandı \n\n<a:particals:692108121518112909> Yetkili ID: **${message.author.id}**\n<a:particals:692108121518112909> Kullanıcı ID: **${user.id}**\n<a:particals:692108121518112909> Yasak Nedeni: **${reason}**`)
    .setImage("")
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