const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**${message.guild.name} - Sunucu Kuralları**

:exclamation: ● Reklam Yapmak Yasaktır

:exclamation: ● Küfür ve Hakaret Söylemleri Yasaktır

:exclamation: ● Chatte Flood Yapmak, Spam Yapmak, Capslock Açık Yazı Yazmak Yasaktır

:exclamation: ● Yasaklı (Cinsel, Kan, Vahşet) İçeriklerinin Paylaşımı Yasaktır

:exclamation: ● Ailevi ve Milli Değerlere Hakaret Yasaktır

:exclamation: ● Din, Dil, Irk Ayrımı Yapmak Yasaktır

:exclamation: ● Siyaset Yapmak Kesinlikle Yasaktır

:exclamation: ● Ses/Metin Kanallarında İnsanları Trollemek, Rahatsız Etmek Yasaktır

:exclamation: ● Kişisel Sorunlarınızı Sunucuya Yansıtmak Yasaktır

:exclamation: ● Metin Kanallarının Amacı Dışında Kullanımı Yasaktır

`)
      message.delete()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurallar-kur'],
  permLevel: 0
};

exports.help = {
  name: 'kurallar-kur',
  description: 'Kurallar',
  usage: 'kurallar-kur'
};