const Discord = require("discord.js"); 
const db = require('quick.db'); 
exports.run = (client, message, args) => { 
var toplam = db.fetch(`toplamKayit_${message.author.id}`) 
const erkek = message.guild.roles.find(r => r.id === "756250692330455160"); 
  const misafir = message.guild.roles.find(r => r.id === "756255623422673058"); 
  const log = message.guild.channels.find(c => c.id === "756257487279227051"); 
  const tag = "π"; 
  if(!message.member.roles.array().filter(r => r.id === "756248067669360811")[0]) 
  { return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Kayıt Sorumlusu Olman Gerekli!**"); } 
  else { let member = message.mentions.users.first() || client.users.get(args.join(' ')) 
  if(!member) return message.channel.send("Bir kullanıcı girin.") 
          if(member.roles.array().filter(r => r.id === "756250050757263450")[0]) 
  { return message.channel.send("**Zaten katıtlı! **"); } 
        //ESKİYE NASI DÖNCEZ :dd
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
        const embed = new Discord.RichEmbed()
.setAuthor("Phentos Kayıt Sistemi | Kadın Kayıt Yapıldı") 
.addField(`<a:phentoselmas:758830318987378688> Kaydı yapılan\n`, `${c.user.tag}`) 
.addField(`<a:phentoselmas:758830318987378688> Kaydı yapan\n`, `${message.author.tag}`) 
.addField(`<a:phentoselmas:758830318987378688> Yeni isim\n`, `${tag} ${nick} , ${yas}`) 
        .addField(`<a:phentoselmas:758830318987378688> Toplam Kayıt\n`, toplam || 0) 
        .setFooter("Phentos Kayıt Sistemi | Developed By Phentos") .setColor("RANDOM") 
        log.send(embed)
        
 } } 
exports.conf = { enabled: true, guildOnly: false, aliases: ["e"], permLevel: 0 }; 
exports.help = { name: "k", description: "k", usage: "k" };