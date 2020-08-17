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
    .setTitle('ﾅ Anatolia Ceza İşlem Komutları')
    .setDescription('Bu yardım menüsünde yazılan komutları sadece **<@&744630179225403393> <@&744630180214997052> <@&744630181297127516>** yetkilerine sahip kişiler kullanabilir')
    .addField("Ban Sistemi Komutları ve Kullanımı",`> **a!ban** = Etiketlenen Kullanıcıyı Sunucudan Yasaklar\n> **Kullanımı:** __**a!ban @kullanıcı Sebebi**__\n> **a!unban** = ID Eklenen Kullanıcının Yasağını Kaldırır\n> **Kullanımı:** __**a!unban [Kullanıcı ID] Sebebi**__`)
    .addField("Cezalı Üye Sistemi ve Kullanımı",`> **a!jail** = Etiketlenen Kullanıcıyı Cezalıya Atar\n> **Kullanımı:** __**a!jail @kullanıcı Sebebi**__\n> **a!unjail** = Etiketlenen Kullanıcıyı Cezalıdan Çıkarır\n> **Kullanımı:** __**a!unjail @kullanıcı Sebebi**__\n`)
    .addField("Mute Sistemi ve Kullanımı",`> **a!cmute** = Etiketlenen Kullanıcıya Chat Mute Atar\n> **Kullanımı:** __**a!cmute @kullanıcı 5m sebebi**__\n> **a!vmute** = Etiketlenen Kullanıcıya Ses Mute Atar\n> **Kullanımı:** __**a!vmute @kullanıcı 5m sebebi**__\n`)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ceza-yardım","ceza-işlem-komutları","ceza-işlem-yardım"],
  permLevel: 0
};

exports.help = {
  name: 'ceza-işlem-yardım',
  description: 'Komutları Gösterir',
  usage: 'ceza-işlem-yardım'
};