const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('746465906623774750') && !message.member.roles.has('746465962794156193') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Yetersiz Yetki` , `<a:loading:746470616085037236> Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Bilgi` , `<a:loading:746470616085037236> Bir Kullanıcı Etiketlemelisin!`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1]
      if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Bilgi` , `<a:loading:746470616085037236> Bir İsim Girmelisin!`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
   let yas = args[2]
      if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Bilgi` , `<a:loading:746470616085037236> Bir Yaş Girmelisin!`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());    
await member.setNickname(`${isim} | ${yas}`)
  member.addRole('746465562720338042')
  member.removeRole('746465808376529017')
  message.react('<a:tik_1:746470658804023338>')
     const kanal = message.guild.channels.find(c => c.id == "746477500649046136") 
    const embed1 = new Discord.RichEmbed() 
    .addField(`O'nlar`, `<a:kalp:746470633893920808> ${member.user} **Hoşgeldin , Seninle Beraber** \`${member.guild.memberCount}\` **Üyeye Ulaştık.**\n<a:kelebek:746470695231553546> **Sunucumuzun** \`Kurallarına\` <#746469362843648070> **Kanalından Bakabilirsin.**`)
    .setColor("RANDOM")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
  let embed = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .addField(`O'nlar`, `<a:beyaztik:746470622934335549> ${member.user} **Adlı Üyeye** <@&746465562720338042> **Rolünü Verip İsmini**  \`${isim} | ${yas}\` **Olarak Düzenledim**`).setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["üye", "kayıt", "k", "register"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'kayıt',
  description: "Kayıt Komutu",
  usage: 'kayıt isim yaş'
} 