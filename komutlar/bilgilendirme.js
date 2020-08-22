const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**O'NLAR - BİLGİLENDİRME**

<a:unlem:746470597265064026> ● Sunucuya Giriş Yapabilmeniz için Öncelikle Ses Teyit Vermelisiniz

<a:unlem:746470597265064026> ● Kaydınızın Yapılması için 16 Yaşın Üstünde Olmalısınız

<a:unlem:746470597265064026> ● Sunucuya Girdikten Sonra Kurallar Kanalını Mutlaka Okuyunuz


<a:raptiye:746470603153997875> ● Yardım Almak İstediğiniz Bir Konu Olursa <@&746466007429677096> ve <@&746465906623774750> Yetkililerinden Yardım Alabilirsiniz

<a:kelebek:746470695231553546> İyi Eğlenceler...`)
    .setFooter(`O'nlar | İlkay Alpgiray`);
      message.delete()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgilendirme'],
  permLevel: 0
};

exports.help = {
  name: 'kkkekkke',
  description: 'Bilgilendirme',
  usage: 'kkkekkkke'
};