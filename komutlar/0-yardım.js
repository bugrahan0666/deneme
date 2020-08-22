const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('Onlar');
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`O'nlar Yardım Menüsü`)
    .setDescription('Yardım almak istediğiniz konu (bot ile ilgili) listede yer almıyorsa lütfen <@!463000494164672512> ile iletişime geçin')
    .addField("Yardım Listesi",`> **!kayıt-yardım** = Kayıt Komutları Hakkında Bilgi Verir\n\n> **!stats-yardım** = İstatistik Komutları Hakkında Bilgi Verir\n\n`)
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
  description: 'Komutları Gösterir',
  usage: 'yetkili-yardım'
};