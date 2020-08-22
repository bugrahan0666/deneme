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
    .setDescription('Bu Yardım Menüsünde Sadece İstatistik Komutları Hakkında Bilgi Verilmiştir')
    .addField("Stats Komutları ve Kullanımı",`> :small_blue_diamond: **e!stats** = Sunucu İçerisindeki Aktiflik ve İstatistiklerinizi Gösterir\n> **Kullanımı:** __**e!stats**__\n> :small_orange_diamond: **e!ses-top** = Ses Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**e!ses-top**__\n> :small_blue_diamond: **e!mesaj-top** = Chat Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**e!mesaj-top**__`)
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
  description: 'Stats Komutlarını Gösterir',
  usage: 'stats-işlem-yardım'
};