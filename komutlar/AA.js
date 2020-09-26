const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has('kayıtçı rol id') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komudu kullanmak için yetkin yeterli değil.').then(m => m.delete(5000));

  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let member = message.guild.member(user)
  if (!user) return message.channel.send('Bir üye belirtmelisin.')

  let isim = args[1];
  if(!isim) return message.channel.send('Bir isim belirtmelisin.')
  let yaş = Number (args[2]);
  if(!yaş) return message.channel.send('Bir yaş belirtmelisin.')
  let sayi = db.get(`erkeks_${message.author.id}`)
  
  if (member.roles.has('756250050757263450')) {
       message.reply('Bu kişi zaten sunucumuza **erkek** olarak kaydedilmiş.')


}
else {  
  setTimeout(()=>{
 member.addRole('756250050757263450')
    
  },400)
setTimeout(()=>{
 
    member.removeRole('756255623422673058')
   
  },500)
setTimeout(()=>{
  member.setNickname(`✦ ${isim} | ${yaş}`)
},600)
    //tamamdır
    db.add(`erkeks_${message.author.id}`, +1)
  const embed = new Discord.RichEmbed() .setAuthor("Phentos Kayıt Sistemi | Erkek Kayıt Yapıldı") .addField(`<a:phentoselmas:758830318987378688> Kaydı yapılan\n`, `${member.user.tag}`) 
        .addField(`<a:phentoselmas:758830318987378688> Kaydı yapan\n`, `${message.author.tag}`) 
        .addField(`<a:phentoselmas:758830318987378688> Yeni isim\n`, `✦ ${isim} , ${yaş}`) 
        
   message.channel.send(new Discord.RichEmbed().addField(`<a:phentoselmas:758830318987378688> Kaydı yapan\n`, `${message.author.tag}`) 
        .addField(`<a:phentoselmas:758830318987378688> Yeni isim\n`, `✦ ${isim} , ${yaş}`).setAuthor("Phentos Kayıt Sistemi | Erkek Kayıt Yapıldı") .addField(`<a:phentoselmas:758830318987378688> Kaydı yapılan\n`, `${member.user.tag}`).setFooter(`${message.author.tag}, toplam ${sayi || '1'} erkek kaydın mevcut.`).setTimestamp().setColor("GREEN")  )
 }

  

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['erkek'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'erkek',
    description: '',
    usage: ''
  };