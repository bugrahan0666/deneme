const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  db.add(`ban.${message.author.id}.${message.guild.id}`, 1)
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .addField(`Hatalı Kullanım` , `"Ban" Komutunu Özel Mesajlarda Kullanamazsınız` )
  .setColor("RANDOM")
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanabilmek için **"Üyeleri Yasakla"** Yetkisine Sahip Olmalısınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));;
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ban-bilgi');
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hata` , `**"ban-bilgi"** Kanalını Sunucuda Bulamadım Lütfen **"ban-bilgi"** İsimli Bir Metin Kanalı Oluşturun`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(20000));;
    if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Banlanacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000)).catch(console.error);
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Banlama Nedeninizi Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));;

  if (!message.guild.member(user).bannable) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Yöneticileri Banlayamam`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));;
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Üye Yasaklandı")
    .setDescription(`${user.username}#${user.discriminator} Kullanıcısı <@!${message.author.id}> Tarafından Sunucudan Yasaklandı \n\nYetkili ID: **${message.author.id}**\nBanlanan ID: **${user.id}**\nBan Sebebi: **${reason}**`)
    .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban","yasakla"],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};