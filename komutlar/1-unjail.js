const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client ,message ,args) => {
   if (!message.member.roles.has('694932619392974851') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Kullanıcı Yasaklama Yetkiniz Yok` , `<a:loading:692108268557828188> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
    let kullanıcı = message.mentions.members.first()
        if(!kullanıcı)
             return message.channel.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hatalı Kullanım` , `<a:loading:692108268557828188> Lütfen Cezalıdan Çıkarılacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
let cezlaırol = message.guild.roles.get("CEZALI ROL ID"); //Cezalı Rol Id
let kayıtsızrol = message.guild.roles.get("KAYITSIZ ROL ID"); // Kayıtsız Rol Id
if(!cezlaırol) return message.guild.owner.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hata` , `<a:loading:692108268557828188> Sunucuda Cezalı Rolünü Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
if(!kayıtsızrol) return message.guild.owner.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hata` , `<a:loading:692108268557828188> Sunucuda Kayıtsız Rolünü Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

let member = message.guild.member(kullanıcı)
await member.addRole(kayıtsızrol) // 
await member.removeRole(cezlaırol)

let kanal = message.guild.channels.find('name' , 'cezalı-üye-bilgi')
    if(!kanal) return message.guild.owner.send(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Hata` , `<a:loading:692108268557828188> Sunucuda Cezalı Log Kanalını Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
const unjail = new Discord.RichEmbed()
.setTitle('Başarılı :)')
.setDescription(`Başarıyla ${message.author} adlı yetkili ${kullanıcı} adlı kullanıcıyı jailden cıkartdı.`)
.setFooter('DCS EKİBİ')
kanal.send(unjail)

const dcs = new Discord.RichEmbed()
.setTitle('Başarılı :)')
.setDescription(`Başarıyla ${kullanıcı} adlı kullanıcı jailden cıkartıldı.`)
.setFooter('DCS EKİBİ')
message.channel.send(dcs)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "unjail",
  description: "Belirtiniz Kullanıyı Cezalıdan Kaldırır!",
  usage: "unjail <kullanıcı>"
};