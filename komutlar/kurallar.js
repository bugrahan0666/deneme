const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**O'NLAR - SUNUCU KURALLARI**

<a:unlem:746470597265064026> ● Küfür ve Hakaret Söylemleri Yasaktır

<a:unlem:746470597265064026> ● Chatte Flood Yapmak, Spam Yapmak, Capslock Açık Yazı Yazmak Yasaktır

<a:unlem:746470597265064026> ● Yasaklı (Cinsel, Kan, Vahşet) İçeriklerinin Paylaşımı Yasaktır

<a:unlem:746470597265064026> ● Ailevi Değerlere ve Milli Değerlere Hakaret Yasaktır

<a:unlem:746470597265064026> ● Din, Dil, Irk Ayrımı Yapmak Yasaktır

<a:unlem:746470597265064026> ● Siyaset Yapmak Kesinlikle Yasaktır

<a:unlem:746470597265064026> ● Ses/Metin Kanallarında İnsanları Trollemek, Rahatsız Etmek Yasaktır

<a:unlem:746470597265064026> ● Kişisel Sorunlarınızı Sunucuya Yansıtmak Yasaktır

<a:unlem:746470597265064026> ● Metin Kanallarının Amacı Dışında Kullanımı Yasaktır


<a:raptiye:746470603153997875> ● Sunucu Kurallarına __Uymayan__ veya __Sizleri Rahatsız Eden__ Şahısları <@&746466007429677096> ve <@&746465906623774750> Yetkililerine Bildirerek Yardım Alabilirsiniz

**Sizleri Seviyoruz Kurallara Uyalım Aksi Takdir de Kullanıcılara Uygulanan Cezalardan Sorumluluk Kabul Etmiyoruz**`)
    .setFooter(`O'nlar | İlkay Alpgiray`);
      message.delete()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurallarrrrrrrrerr'],
  permLevel: 0
};

exports.help = {
  name: 'kkkkkk',
  description: 'Kurallar',
  usage: 'kkkkkkk'
};