const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require("ms");
const db = require("quick.db")
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

  if(!message.member.roles.get("744630181297127516") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Yetersiz Yetki` , `<a:yukleniyor:741424786433114172> Yeterli Yetkiniz Olmadığı için Bu Komutu Kullanamazsınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));

  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!user) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Bir Kullanıcı Etiketlemelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));
   if(user.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Bilgi` , `<a:yukleniyor:741424786433114172> Yöneticileri Susturamazsın`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));
    
    db.add(`cmute.${message.author.id}.${message.guild.id}`, 1)
    var muterole = message.guild.roles.get("744630203258634340")
    
     var ceza = message.guild.roles.get("744630200842584114")
        

    if(!muterole) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Bilgi` , `<a:yukleniyor:741424786433114172> Chat Mute Rolü Yok`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));
    var muteTime = args[1];
    
    if(!muteTime) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Mute Süresini Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));
    let reason = args.slice(2).join(" ")
    
    if(!reason) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:697499533516603545> Hatalı Kullanım` , `<a:yukleniyor:741424786433114172> Lütfen Susturma Sebebini Yazınız`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(5000));

       if(user.voiceChannel){
  user.setVoiceChannel(null).catch(e => console.log("Bağlantı Kesma Yetkim Yok"))
  }
  
  await (user.addRole(muterole.id));

    db.set(`muteses_${user.id}`, Date.now());

 db.set(`mutesessüre_${user.id}`, ms(muteTime));
  message.react('?')
  
  db.add(`meteceza_${user.user.id}`,1)        
   
  let sayı = await db.fetch(`meteceza_${user.user.id}`)
   
let banlimiti = 7
  db.add(`cmute.${message.author.id}.${message.guild.id}`, 1)
let banaralıgı = 604800000

  var tarih = Date.now() 

  if(sayı === 1){
    
   db.set(`metecezatarih_${user.user.id}`,tarih)   
  
  }

   let ilkbantarihi =  await db.fetch(`metecezatarih_${user.user.id}`)
   
if(sayı>banlimiti && tarih-ilkbantarihi <=banaralıgı) {
  
  user.addRole(ceza.id);
  
  message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Bilgi` , `<a:yukleniyor:741424786433114172> Bu Kullanıcıya 1 Hafta İçerisinde 4'den Fazla Ses Mutesi Atıldığı <@&692111658356834304> Rolü Verirdi.`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(20000));
  
}
  console.log(user.user.id)
  if(tarih-ilkbantarihi >=banaralıgı){
    
    db.set(`meteceza_${user.user.id}`,0)
    db.set(`metecezatarih_${user.user.id}`,0)
    
 

  message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Bilgi` , `<a:yukleniyor:741424786433114172> Bu Kullanıcının İlk Mute Verilme Zamanından 1 Hafta Geçtiği İçin Ceza Sayısı Sıfırlandı`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(20000));
    
       db.add(`meteceza_${user.user.id}`,1)
    db.set(`metecezatarih_${user.user.id}`,Date.now())
    
  }
  
    setTimeout(function(){
      
             if(user.voiceChannel){
  user.setVoiceChannel(null).catch(e => console.log("Bağlantı Sesme Yetkim Yok"))
  }
      
      if(!user.roles.get(muterole.id)) return
       user.removeRoles([muterole.id]);
      
          db.delete(`muteses_${user.id}`);
  setTimeout(function(){
    db.delete(`mutesessüre_${user.id}`);
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${user} Adlı Kullanıcının **${süre}** Chat Mute Süresi Doldu`)
   .setFooter('ﾅ A  N  A T O L İ A')
  .setTimestamp()  

    let sChannel = message.guild.channels.get("744630289782931478")
    if(!sChannel) return
    sChannel.send(embed)
  },1000)
    },  ms(muteTime));
let süre =muteTime
.replace(/y/g, " Yıl")
.replace(/d/g, " Gün")
.replace(/h/g, " Saat")
.replace(/m/g, " Dakika")
.replace(/s/g, " Saniye")
    let embed = new Discord.RichEmbed()
    .setColor("RED")
     .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${user} Adlı Kullanıcıya **${reason}** Sebebiyle **${süre}** Chat Mutesi Atıldı`)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    let sChannel = message.guild.channels.get("744630289782931478")
    if(!sChannel) return
    sChannel.send(embed)


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cmute","chatmute","kanalmute","mute","chat-mute"],
  permLevel: 0
};

exports.help = {
  name: 'chatmute',
  description: 'kullanıcıyı susturur.',
  usage: '(a!tempmute <@user> Ceza Sürüsi Ceza Nedeni) Seklinde Kullanılır.>'
};
