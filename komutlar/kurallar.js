const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`ﾅ A N A T O L İ A - SUNUCU KURALLARI

<a:dikkat:697499533516603545> ● Pub odalarda vs kesinlikle troll yasaktır

<a:dikkat:697499533516603545> ● Odalarda Kışkırtma kesinlikle yasaktır

<a:dikkat:697499533516603545> ● Pub odalarda küfür kesinlikle yasaktır

<a:dikkat:697499533516603545> ● Pub odalarda şarkı açmak vs yasaktır

<a:dikkat:697499533516603545> ● Reklam her türlü yasaktır

<a:dikkat:697499533516603545> ● +18 içerik,şiddet içerimli şeyler paylaşmak yasaktır

<a:dikkat:697499533516603545> ● Sunucuya katılan her üyenin kuralları okuması şarttır

<a:dikkat:697499533516603545> ● Kişisel kavgalarınızı sorunlarınızı sunucuya taşımak yasaktır

<a:dikkat:697499533516603545> ● Her hangi bir olay yaşandığında sorun çözmeye çıkılması şarttır

<a:dikkat:697499533516603545> ● Sunucu odalarında ses kayıtı almak yasaktır

<a:dikkat:697499533516603545> ● Genel chatta, CapsLock,Spam,Flood,Yasaktır

**SİZLERİ SEVİYORUZ BU KURALLARA LÜTFEN UYALIM AKSİ TAKTİR DE İŞLEM UYGULAMAK ZORUNDA KALIRIZ**`)
    .setFooter('ﾅ A  N  A T O L İ A');
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