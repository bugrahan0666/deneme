const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**${message.guild.name} - Sunucu Kuralları**

<a:unlem:746470597265064026> ● Reklam Yapmak Yasaktır

<a:unlem:746470597265064026> ● Küfür ve Hakaret Söylemleri Yasaktır

<a:unlem:746470597265064026> ● Chatte Flood Yapmak, Spam Yapmak, Capslock Açık Yazı Yazmak Yasaktır

<a:unlem:746470597265064026> ● Yasaklı (Cinsel, Kan, Vahşet) İçeriklerinin Paylaşımı Yasaktır

<a:unlem:746470597265064026> ● Ailevi ve Milli Değerlere Hakaret Yasaktır

<a:unlem:746470597265064026> ● Din, Dil, Irk Ayrımı Yapmak Yasaktır

<a:unlem:746470597265064026> ● Siyaset Yapmak Kesinlikle Yasaktır

<a:unlem:746470597265064026> ● Ses/Metin Kanallarında İnsanları Trollemek, Rahatsız Etmek Yasaktır

<a:unlem:746470597265064026> ● Kişisel Sorunlarınızı Sunucuya Yansıtmak Yasaktır

<a:unlem:746470597265064026> ● Metin Kanallarının Amacı Dışında Kullanımı Yasaktır

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