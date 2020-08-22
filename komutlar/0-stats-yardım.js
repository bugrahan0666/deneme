const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Elyse Stats Komutları`)
    .setDescription('Bu Yardım Menüsünde Sadece İstatistikler için Bilgi Verilmiştir')
    .addField("Stats Komutları ve Kullanımı",`> **!stats** = Sunucu İçerisindeki Aktiflik ve İstatistiklerinizi Gösterir\n> **Kullanımı:** __**!üye-stats**__\n> **!ses-top** = Ses Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**!ses-top**__\n> **!mesaj-top** = Chat Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**!mesaj-top**__`)
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