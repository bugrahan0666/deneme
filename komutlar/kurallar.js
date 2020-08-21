const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`O'NLAR - SUNUCU KURALLARI

<a:unlem:746470597265064026> ● Küfür ve Hakaret Söylemleri Yasaktır

<a:unlem:746470597265064026> ● Chatte Flood Yapmak, Spam Yapmak, Capslock Açık Yazı Yazmak Yasaktır

<a:unlem:746470597265064026> ● Yasaklı (Cinsel, Kan, Vahşet) İçeriklerinin Paylaşımı Yasaktır

<a:unlem:746470597265064026> ● Ailevi Değerlere ve Milli Değerlere Hakaret Yasaktır

<a:unlem:746470597265064026> ● Din, Dil, Irk Ayrımı Yapmak Yasaktır

<a:unlem:746470597265064026> ● Siyaset Yapmak Kesinlikle Yasaktır

<a:unlem:746470597265064026> ● Ses/Metin Kanallarında İnsanları Trollemek, Rahatsız Etmek Yasaktır

<a:unlem:746470597265064026> ● Kişisel Sorunlarınızı Sunucuya Yansıtmak Yasaktır

<a:unlem:746470597265064026> ● Metin Kanallarının Amacı Dışında Kullanımı Yasaktır


<a:raptiye:746470603153997875> ● Sunucu Kurallarına Uymayan veya Sizleri Rahatsız Eden Şahısları <@!746465962794156193>  <@!> Yetkililerine Bildirerek Yardım Alabilirsiniz

**SİZLERİ SEVİYORUZ BU KURALLARA LÜTFEN UYALIM AKSİ TAKTİR DE İŞLEM UYGULAMAK ZORUNDA KALIRIZ**`)
    .setFooter(`O'nlar | İlkay Alpgiray`);
      message.delete()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kkkkkkkk'],
  permLevel: 0
};

exports.help = {
  name: 'kkkkkk',
  description: 'Kurallar',
  usage: 'kkkkkkk'
};