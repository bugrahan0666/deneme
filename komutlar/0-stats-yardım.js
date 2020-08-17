const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('ﾅ Anatolia');
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.roles.has('744630182975111250') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanabilmek için Yetkili Olmalısınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('ﾅ Anatolia Kayıt Komutları')
    .setDescription('Bu yardım menüsünde yazılan komutları sadece **<@&744630182433914920>** yetkisine sahip kişiler kullanabilir')
    .addField("Kayıt Komutları ve Kullanımı",`> **a!stats** = Sunucu İçerisindeki Aktiflik ve İstatistiklerinizi Gösterir\n> **Kullanımı:** __**a!stats**__\n> **a!ses-top** = Ses Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**a!ses-top**__`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats-yardım","stats-komutları","stats-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'stats-işlem-yardım',
  description: 'Komutları Gösterir',
  usage: 'stats-işlem-yardım'
};