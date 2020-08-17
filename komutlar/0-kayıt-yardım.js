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
    .addField("Kayıt Komutları ve Kullanımı",`> **a!kız** = Etiketlenen Kullanıcıyı Sunucuya Kız Olarak Kaydeder\n> **Kullanımı:** __**a!kız @kullanıcı İsim Yaş**__\n> **a!erkek** = Etiketlenen Kullanıcıyı Sunucuya Erkek Olarak Kaydeder\n> **Kullanımı:** __**a!erkek @kullanıcı İsim Yaş**__`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-yardım","kayıt-komutları","kayıt-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-işlem-yardım',
  description: 'Komutları Gösterir',
  usage: 'kayıt-işlem-yardım'
};