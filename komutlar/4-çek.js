
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
     if (!message.member.roles.has('693171229703667722') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Yetersiz Yetki` , `<a:loading:692108268557828188> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

  
    if (!message.member.voiceChannel) { return message.channel.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> İşlem Başarısız` , `<a:loading:692108268557828188> Bir Ses Kanalında Olmanız Gerekiyor`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()); }
  let kullanıcı = message.mentions.users.first()
                                                                              
  if (!kullanıcı) return message.channel.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:loading:692108268557828188> Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

    let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  if(!member.voiceChannel) return message.channel.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:loading:692108268557828188> Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

const voiceChannel = message.member.voiceChannel.id;
if(!voiceChannel) return
  member.setVoiceChannel(voiceChannel);
   message.react('636990852362928158')
   const voiceChannel1 = message.member.voiceChannel.name;
  let embed= new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(message.author+" **Tarafından** "+kullanıcı+" **Kullanıcısı** `"+voiceChannel1+"`** Sesli Kanalına Çekildi.**")
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
   .setTimestamp()  
    message.channel.send(embed).then(m =>m.delete(10000))
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek","taşı"],
  kategori: "çek",
  permLevel: 0
}
exports.help = {
  name: 'çek',
  description: " ",
  usage: 'çek'
}