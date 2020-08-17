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
    .setTitle('ﾅ Anatolia Rol Komutları')
    .setDescription('Bu yardım menüsünde yazılan komutları sadece **<@&744630160455630900>** yetkisine sahip kişiler kullanabilir')
    .addField("Rol Komutları ve Kullanımı",`> **a!yazılım** = Etiketlenen Kullanıcıya Yazılımcı Rolü Verir\n> **Kullanımı:** __**a!yazılımcı @kullanıcı**__\n> **a!vokal** = Etiketlenen Kullanıcıya Vokal Rolü Verir\n> **Kullanımı:** __**a!vokal @kullanıcı**__\n> **a!lovers** = Etiketlenen Kullanıcıya Lovers Rolü Verir\n> **Kullanımı:** __**a!lovers @kullanıcı**__\n> **a!voiceactor** = Etiketlenen Kullanıcıya Voice Actor Rolü Verir\n> **Kullanımı:** __**a!voiceactor @kullanıcı**__\n> **a!ressam** = Etiketlenen Kullanıcıya Ressam Rolü Verir\n> **Kullanımı:** __**a!ressam @kullanıcı**__\n\n**Not:** Rol vermek istediğiniz __kullanıcının üzerinde mevcut rol var ise__ bot rolü geri alacaktır`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-yardım","rol-komutları","rol-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'rol-işlem-yardım',
  description: 'Komutları Gösterir',
  usage: 'rol-işlem-yardım'
};