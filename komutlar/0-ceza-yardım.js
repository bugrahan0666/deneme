const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
      .setFooter('∻ The Sky');
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.roles.has('692830328699617311') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Komutu Kullanabilmek için Yetkili Olmalısınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('∻ The Sky Ceza İşlem Komutları')
    .setDescription('Bu yardım menüsünde yazılan komutları sadece **<@&735523159046094899> <@&692842107970387984> <@&693095757070204938> <@&694932619392974851> <@&692842018455683134> <@&692842065712775229>** yetkilerine sahip kişiler kullanabilir')
    .addField("Ban Sistemi Komutları ve Kullanımı",`> **.ban** = Etiketlenen Kullanıcıyı Sunucudan Yasaklar\n> **Kullanımı:** __**.ban @kullanıcı Sebebi**__\n> **.unban** = ID Eklenen Kullanıcının Yasağını Kaldırır\n> **Kullanımı:** __**.unban [Kullanıcı ID] Sebebi**__\n> **.yargı** = Etiketlenen Kullanıcıyı Kalıcı Olarak Yasaklar\n> **Kullanımı:** __**.yargı @kullanıcı Sebebi**__\n`)
    .addField("Cezalı Üye Sistemi ve Kullanımı",`> **.jail** = Etiketlenen Kullanıcıyı Cezalıya Atar\n> **Kullanımı:** __**.jail @kullanıcı Sebebi**__\n> **.unjail** = Etiketlenen Kullanıcıyı Cezalıdan Çıkarır\n> **Kullanımı:** __**.unjail @kullanıcı Sebebi**__\n`)
    .addField("Mute Sistemi ve Kullanımı",`> **.cmute** = Etiketlenen Kullanıcıya Chat Mute Atar\n> **Kullanımı:** __**.cmute @kullanıcı 5m sebebi**__\n> **.vmute** = Etiketlenen Kullanıcıya Ses Mute Atar\n> **Kullanımı:** __**.vmute @kullanıcı 5m sebebi**__\n`)
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