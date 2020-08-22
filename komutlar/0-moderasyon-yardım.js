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
    .setTitle(`Elyse Moderasyon Komutları`)
    .setDescription('Bu Yardım Menüsünde Sadece Moderasyon Komutları Hakkında Bilgi Verilmiştir')
    .addField("Moderasyon Komutları ve Kullanımı",`> **!ban** = Etiketlenen Kullanıcıyı Sunucudan Yasaklar\n> **Kullanımı:** __**!ban @kullanıcı Sebebi**__\n> **!unban** = ID'si Yazılan Kullanıcının Yasağını Kaldırır\n> **Kullanımı:** __**!unban ID Sebebi**__\n> **!sustur** = Etiketlenen Kullanıcıyı Sunucuda Susturur\n> **Kullanımı:** __**!sustur @kullanıcı 5m Sebebi**__\nNn\n> Not: Komutu Kullanırken Örnekteki Gibi Her Kelimenin Arasında 1 Boşluk Olmasına Dikkat Edin`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon-yardım","moderasyon-komutları","moderasyon-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon-işlem-yardım',
  description: 'Moderasyon Komutlarını Gösterir',
  usage: 'moderasyon-işlem-yardım'
};