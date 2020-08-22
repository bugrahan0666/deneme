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
    .setTitle(`Elyse Sunucu Kurulum Komutları`)
    .setDescription('Bu Yardım Menüsünde Sadece Sunucu Kurulum Komutları Hakkında Bilgi Verilmiştir')
    .addField("Sunucu Kurulum Paketi ve Kullanımı",`> :small_blue_diamond: **e!sunucu-kur** = İşlemleri Onayladıktan Sonra Hazır Bir Sunucu Kurar\n> **Kullanımı:** __**e!sunucu-kur**__\n> :small_orange_diamond: **e!kurallar-kur** = Hazır Sunucu Kuralları Listesi Oluşturur\n> **Kullanımı:** __**e!kurallar-kur**__\n\n\n> :purple_circle: Çok Yakında Yeni Özellikler Eklenecektir`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-yardım","sunucu-komutları","sunucu-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-işlem-yardım',
  description: 'Stats Komutlarını Gösterir',
  usage: 'sunucu-işlem-yardım'
};