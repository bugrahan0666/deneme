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
 if (!message.member.roles.has('746465906623774750') && !message.member.roles.has('746465962794156193') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Yetersiz Yetki` , `<a:loading:746470616085037236> Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`O'nlar Kayıt Komutları`)
    .setDescription('Bu yardım menüsünde yazılan komutları sadece **<@&746466007429677096> <@&746465962794156193> <@&746465906623774750>** yetkisine sahip kişiler kullanabilir')
    .addField("Kayıt Komutları ve Kullanımı",`> **!kayıt** = Etiketlenen Kullanıcıyı Sunucuya Kaydeder\n> **Kullanımı:** __**!kayıt @kullanıcı İsim Yaş**__\n\n> Not: Komutu Kullanırken Örnekteki Gibi Her Kelimenin Arasında 1 Boşluk Olmasına Dikkat Edin`)
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