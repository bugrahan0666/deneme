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
    .setTitle(`Elyse Destek Komutları`)
    .setDescription('Bu Yardım Menüsünde Destek Komutları Hakkında Bilgi Verilmiştir')
    .addField("Destek Komutları ve Kullanımı",`> :small_blue_diamond: **e!hata-bildir** = Komutu Kullarak Bot ile İlgili Sorunları Rapor Edebilirsiniz\n> **Kullanımı:** __**e!hata-bildir [Sorununuz]**__\n> :small_orange_diamond: **e!istek** = ID'si Yazılan Kullanıcının Yasağını Kaldırır\n> **Kullanımı:** __**e!unban ID Sebebi**__\n> :small_blue_diamond: **e!sustur** = Etiketlenen Kullanıcıyı Sunucuda Susturur\n> **Kullanımı:** __**e!sustur @kullanıcı 5m Sebebi**__\n> Not: 5m Yerine Yazdığınız Sayı Kadar Mute Atar Örnek 10m -> 10 Dakika\n> :small_orange_diamond: **e!userinfo** = Etiketlenen Kullanıcı Hakkında Bilgi Verir\n> **Kullanımı:** __**e!userinfo @kullanıcı**__\n> :small_blue_diamond: **e!çek** = Etiketlenen Kullanıcı Bulunduğunuz Kanala Taşır\n> **Kullanımı:** __**e!çek @kullanıcı**__\n> :small_orange_diamond: **e!kick** = Etiketlenen Kullanıcıyı Sunucudan Atar\n> **Kullanımı:** __**e!kick @kullanıcı**__\n> :small_blue_diamond: **e!sil** = İstenilen Sayı Kadar Mesaj Siler\n> **Kullanımı:** __**e!sil 100**__`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["destek-yardım","destek-komutları","destek-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'destek-işlem-yardım',
  description: 'Moderasyon Komutlarını Gösterir',
  usage: 'destek-işlem-yardım'
};