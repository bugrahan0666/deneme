const Discord = require('discord.js');//GamerWolf

exports.run = async (client, message, args) => {//GamerWolf
//GamerWolf
let kayityetkili = '756248067669360811' // KAYIT YETKİLİSİ İD //
let ver = '756250050757263450' // VERİLECEK ROL ID 1 //
let al = '756255623422673058' // ALINACAK ROL ID//
let tag = '☮' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN

  if(!message.member.roles.has(kayityetkili)) //GamerWolf
  if(!message.member.hasPermission("ADMINISTRATOR"))//GamerWolf
  return message.channel.send(`Bu Komutu Sadece Ayarlanmış Yetkililer Kullanabilir. :x:`);//GamerWolf
  let member = message.mentions.members.first()//GamerWolf
  let isim = args.slice(1).join(" | ")//GamerWolf
  if (!member) return message.channel.send('**Bir Üye Etiketlemelisin :x:**')//GamerWolf
  if (!isim) return message.channel.send('**Bir İsim Yazmalısın :x:**')//GamerWolf
  
  setTimeout(function(){//GamerWolf
  member.setNickname(`${tag}${isim}`)//GamerWolf
  },500)//GamerWolf//GamerWolf//GamerWolf
  setTimeout(function(){//GamerWolf//GamerWolf//GamerWolf//GamerWolf
  member.addRole(ver)//GamerWolf//GamerWolf//GamerWolf//GamerWolf
  },500)//GamerWolf//GamerWolf//GamerWolf
  setTimeout(function(){//GamerWolf//GamerWolf//GamerWolf
  member.removeRole(al)//GamerWolf//GamerWolf//GamerWolf//GamerWolf//GamerWolf
  },500)//GamerWolf//GamerWolf//GamerWolf//GamerWolf
 //GamerWolf//GamerWolf//GamerWolf
  const emoji = client.emojis.find(emoji => emoji.name === "");//GamerWolf
 let embed = new Discord.RichEmbed()//GamerWolf
 //GamerWolf

}; 

exports.conf = { //GamerWolf
  enabled: true, //GamerWolf
  guildOnly: true, //GamerWolf
  aliases: ['erkek'], //GamerWolf
  permLevel: 0
}
exports.help = { //GamerWolf
  name: 'e',//GamerWolf
  description: "kayıt etme komutu.",//GamerWolf
  usage: 'e <yeni nick>'//GamerWolf//GamerWolf//GamerWolf
}