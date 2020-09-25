const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('756473321008267384') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(` • | **${ayarlar.prefix}davetsistemi** : Davet Sistemi Hakkında Bütün Bilgileri Listelersiniz.\n • | **${ayarlar.prefix}moderasyon** : Yetkililerin Kullanabileceği Komutları Listelersiniz.\n • | **${ayarlar.prefix}sistem** : Kullanabileceğiniz Gelişmiş Sistem Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}bot** : Bot Hakkında Ve Diğer Kategori Komutlarını Görürsünüz.\n • | **${ayarlar.prefix}premium** : Premium Komutlarını Listelersiniz.`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=728090205038444605&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/p6kkkMr)`)
        .setFooter(`Phentos | Varsayılan Prefix : p!`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};