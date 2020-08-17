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
    .setTitle('ﾅ Anatolia Yetkili Yardım')
    .setDescription('Yardım almak istediğiniz konu listede yer almıyorsa lütfen Üst Yönetim ile iletişime geçin')
    .addField("Yetkili Yardım Listesi",`> **a!kayıt-yardım** = Kayıt Komutları Hakkında Bilgi Verir\n\n> **a!ceza-yardım** = Ceza İşlem Komutları Hakkında Bilgi Verir\n\n> **a!stats-yardım** = İstatistik Komutları Hakkında Bilgi Verir\n\n`)
    .setImage('https://hizliresim.com/U7nlql')
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