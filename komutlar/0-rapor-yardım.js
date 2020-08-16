const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('∻ The Sky');
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.roles.has('692830328699617311') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanabilmek için Yetkili Olmalısınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('∻ The Sky Rapor Komutları')
    .setDescription('Bu yardım menüsünde yazılan komutları sadece yetkililer kullanabilir')
    .addField("Rapor Komutları ve Kullanımı",`> **.bildir** = Komuttan Sonra Yazdığınız Sorunu Destek Ekibine İletir\n> **Kullanımı:** __**.bildir [Sorununuz]**__\n> **.izin** = Toplantılara Katılamayacaksanız Komutu Kullanarak Bildirebilirsiniz\n> **Kullanımı:** __**.izin [Sebebi]**__`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rapor-yardım","rapor-komutları","rapor-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'rapor-işlem-yardım',
  description: 'Komutları Gösterir',
  usage: 'rapor-işlem-yardım'
};