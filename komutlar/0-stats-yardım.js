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
    .setTitle(`O'nlar Stats Komutları`)
    .setDescription('Bu yardım menüsünde yazılan komutlar anlık ve sadece bu sunucuya göre bilgi vermektedir')
    .addField("Kayıt Komutları ve Kullanımı",`> **!üye-stats** = Sunucu İçerisindeki Aktiflik ve İstatistiklerinizi Gösterir\n> **Kullanımı:** __**!üye-stats**__\n> **!yetkili-stats** = Sunucu İçerisindeki Yetkili Aktiflik ve İstatistiklerinizi Gösterir\n> **Kullanımı:** __**!yetkili-stats**__\n> **!ses-top** = Ses Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**!ses-top**__\n> **!mesaj-top** = Chat Aktifliği Sıralamasını Gösterir\n> **Kullanımı:** __**!mesaj-top**__\n> **!top-5** = Top 5 Genel Aktiflik Sıralamasını Gösterir\n> **Kullanımı:** __**!top-5**__`)
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