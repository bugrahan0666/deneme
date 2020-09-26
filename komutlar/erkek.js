const Discord = require("discord.js"); 
const db = require('quick.db'); 
exports.run = (client, message, args) => { 
var toplam = db.fetch(`toplamKayit_${message.author.id}`) 
const erkek = message.guild.roles.find(r => r.id === "756250050757263450"); 
  const misafir = message.guild.roles.find(r => r.id === "756255623422673058"); 
  const log = message.guild.channels.find(c => c.id === "756257487279227051"); 
  const tag = "π"; 
  if(!message.member.roles.array().filter(r => r.id === "756248067669360811")[0]) 
  { return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Kayıt Sorumlusu Olman Gerekli!**"); } 
  else { let member = message.mentions.users.first() || client.users.get(args.join(' ')) 
  if(!member) return message.channel.send("Bir kullanıcı girin.") 
        const c = message.guild.member(member) 
        const nick = args[1]; 
        const yas = args[2]; if(!nick) 
          return message.channel.send("Bir isim girin.") 
        if(!yas) return message.channel.send("Bir yaş girin.") 
        c.addRole(erkek) 
        c.removeRole(misafir) 
        c.setNickname(`${tag} ${nick} | ${yas}`) 
      db.add(`erkekKayit_${message.author.id}`, 1) 
        db.add(`toplamKayit_${message.author.id}`, 1) 
        const embed = new Discord.RichEmbed() .setAuthor("Phentos Kayıt Sistemi | Erkek Kayıt Yapıldı") .addField(`<a:phentoselmas:758830318987378688> Kaydı yapılan\n`, `${c.user.tag}`) 
        .addField(`<a:phentoselmas:758830318987378688> Kaydı yapan\n`, `${message.author.tag}`) 
        .addField(`<a:phentoselmas:758830318987378688> Yeni isim\n`, `${tag} ${nick} , ${yas}`) 
        .addField(`<a:phentoselmas:758830318987378688> Toplam Kayıt\n`, toplam || 0) 
        db.add(`erkeks_${message.author.id}`, +1)
          let sayi = db.get(`erkeks_${message.author.id}`)
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${member} adlı üye **erkek** olarak sunucumuza kaydedilmiştir.`).setFooter(`${message.author.tag}, toplam ${sayi || '1'} erkek kaydın mevcut.`).setTimestamp().setColor("BLACK"))
        log.send(embed) } } 
exports.conf = { enabled: true, guildOnly: false, aliases: ["eee"], permLevel: 0 }; 
exports.help = { name: "eee", description: "e", usage: "e" };