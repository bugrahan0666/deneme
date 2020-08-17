const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`ﾅ A N A T O L İ A - SUNUCU KURALLARI

● Pub odalarda vs kesinlikle troll yasaktır

● Odalarda Kışkırtma kesinlikle yasaktır

● Pub odalarda küfür kesinlikle yasaktır

● Pub odalarda şarkı açmak vs yasaktır

● Reklam her türlü yasaktır

●+18 içerik,şiddet içerimli şeyler paylaşmak yasaktır

● Sunucuya katılan her üyenin kuralları okuması şarttır

● Kişisel kavgalarınızı sorunlarınızı sunucuya taşımak yasaktır

● Her hangi bir olay yaşandığında sorun çözmeye çıkılması şarttır

● Sunucu odalarında ses kayıtı almak yasaktır

● Genel chatta, CapsLock,Spam,Flood,Yasaktır

**SİZLERİ SEVİYORUZ BU KURALLARA LÜTFEN UYALIM AKSİ TAKTİR DE İŞLEM UYGULAMAK ZORUNDA KALIRIZ**`)
    .setFooter('ﾅ A  N  A T O L İ A');
      message.delete()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kkk'],
  permLevel: 0
};

exports.help = {
  name: 'kkk',
  description: 'Pingi gösterir.',
  usage: 'kkk'
};