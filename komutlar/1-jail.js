const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
   if (!message.member.roles.has('693095757070204938') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Kullanıcı Yasaklama Yetkiniz Yok` , `<a:loading:692108268557828188> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed() .setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir Sebep Yazınız.").then(m => m.delete(5000));
          message.react("EMOJİ ID");
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) //DCS EKİPİ

   
})
  member.addRole('692111658356834304')
     const kanal = message.guild.channels.find(c => c.id == "705900521097134193") // DCS EKİPİ
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} Kişisi **${reason}** Sebebiyle Jaile Atıldı!`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} Adlı Kişiye <@&692111658356834304> Rolü Verildi \n Yetkili: ${message.author.tag}\nSebep: **${reason}** `) 
  .setFooter(`∻ THE SKY`)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete(5000000));
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır","cezalı","karantina"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebe'
}