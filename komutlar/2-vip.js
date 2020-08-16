const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
var prefix = ayarlar.prefix;
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./log.json", "utf8"));
exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
 if (!message.member.roles.has('693095716943298701') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:discordneon:692108209946886186> Bilgilendirme` , `<a:red_1:692108234273718433> Bu Komutu Kullanmak İçin <@&693095716943298701> Yetkisine Sahip Olmalısın`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

  
  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  var rol   = message.guild.roles.get("692861256905916486")
  
if(!user) return message.reply ("**Lütfen bir kullanıcı etiketleyiniz**").then(m => m.delete(5000));

  
        if(!rol) return message.channel.send ("**Vip Rolü Yok**").then(m => m.delete(5000));


  if(!user.roles.has(rol.id)){
  
    await (user.addRole(rol.id))
    
  
   message.react('693067238613188639')
    let embed = new Discord.RichEmbed()
    .setColor(rol.color)
    .setDescription(`${user.user} Kullanıcısına <@&${rol.id}> Rolü Verildi.`)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed).then(message =>message.delete(10000))



  }
  else {
    
    await (user.removeRole(rol.id));
    
 

    
    message.react('693067238613188639')
     let embed0= new Discord.RichEmbed()
    .setColor(rol.color)
    .setDescription(`${user.user} Kullanıcısından <@&${rol.id}> Rolü Alındı.`)
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed0).then(message =>message.delete(10000))

    
  }
 
}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vip',
  description: 'vip rolü verir.',
  usage: 'vip'
};