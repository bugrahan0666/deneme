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
    .setTitle(`Elyse Yardım Menüsü`)
    .setDescription('Botun Komutları Hakkında Detaylı Bilgi Almak İstiyorsanız Alt Kategorilere Bakabilirsiniz')
    .addField("Elyse Yardım Listesi",`> :small_blue_diamond: **e!moderasyon-yardım** = Moderasyon Komutları Hakkında Bilgi Verir\n\n> :small_orange_diamond: **e!sunucu-yardım** = Ayarlamalı Sunucu Sistemleri Hakkında Bilgi Verir\n\n> :small_blue_diamond: **e!stats-yardım** = İstatistik Komutları Hakkında Bilgi Verir\n\n`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","yetkili-komutları","yetkili-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'yetkili-yardım',
  description: 'Yardım Komutlarını Gösterir',
  usage: 'yetkili-yardım'
};