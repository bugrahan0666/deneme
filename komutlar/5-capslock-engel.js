const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("`Capslock Engel Sistemi`",`CapsLock Engel Sistemini Kullanmak için Sitemizi Ziyaret Edin`))
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Yetersiz Yetki",`Bu Komutu Kullanmak için Yeterli Yetkiniz Yok`))
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`, 'kapat')
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Capslock Engel Sistemi",`CapsLock Engel Sistemi Kapatıldı`))
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'aç')
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Capslock Engel Sistemi",`CapsLock Engel Sistemi Açıldı`))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel'],
  permLevel: 3
};

exports.help = {
  name: 'capslock-engelleme',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};