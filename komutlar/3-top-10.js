const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
require("moment-duration-format")
let ms = require("parse-ms");
exports.run = async (client, message, args) => {

  let sayi = 1
  let mesaj_kişi = message.guild.members
    .filter(mem => !mem.user.bot)
    .array()
    .sort((a, b) => {
      return (
        (db.get(`puan_${message.guild.id}_${b.user.id}`) || 0) -
        (db.get(`puan_${message.guild.id}_${a.user.id}`) || 0)
      );
    })
    .slice(0, 5)
    .map(member => {
      return `\n\`${sayi++}.\`  <@${member.user.id}>:  \`${db.get(
        `puan_${message.guild.id}_${member.user.id}`
      )}\``;
    });
    
   let sayi2 = 1
  let ses_kişi = message.guild.members
    .filter(mem => !mem.user.bot)
    .array()
    .sort((a, b) => {
      return (
        (db.get(`voicei_${message.guild.id}_${b.user.id}`) || 0) -
        (db.get(`voicei_${message.guild.id}_${a.user.id}`) || 0)
      );
    })
    .slice(0, 5)
    .map(member => {
      return `\n\`${sayi2++}.\`  <@${member.user.id}>:  \`\n${moment.duration(db.get('voicei_'+message.guild.id+'_'+member.user.id)).format("D [Gün] H [Saat] m [Dakika] s [Saniye]")}\``;
    });
    
  let sayi3 = 1
  let mesaj_kanal = message.guild.channels
    .array()
    .sort((a, b) => {
      return (
        (db.get(`puanc_${message.guild.id}_${b.id}`) || 0) -
        (db.get(`puanc_${message.guild.id}_${a.id}`) || 0)
      );
    })
    .map(x => {
      return `\n\`${sayi3++}.\`  <#${x.id}>:  \`${db.get(
        `puanc_${message.guild.id}_${x.id}`
      )}\``;
    })
    .slice(0, 5);
    
let sayi4 = 1
  let ses_kanal = message.guild.channels
    .array()
    .sort((a, b) => {
      return (
        (db.get(`voicec_${message.guild.id}_${b.id}`) || 0) -
        (db.get(`voicec_${message.guild.id}_${a.id}`) || 0)
      );
    })
    .map(x => {
      return `\n\`${sayi4++}.\` <#${x.id}>:  \`\n${moment.duration(db.get('voicec_'+message.guild.id+'_'+x.id)).format("D [Gün] H [Saat] m [Dakika] s [Saniye]")}\``;
    })
    .slice(0, 5);
    
  message.channel.send(
    new Discord.RichEmbed()
      .addField("Mesaj | Top 5 - Üyeler",`${mesaj_kişi}`,true)
      .addField("Ses | Top 3 - Üyeler",`${ses_kişi}`,true)
     .addBlankField()
     .addField("Mesaj | Top 5 - Kanal",`${mesaj_kanal}`,true)
      .addField("Ses | Top 5 - Kanal",`${ses_kanal}`,true)
      .setTitle(message.guild.name+' İstatistik')
      .setThumbnail(message.guild.iconURL)
      .setColor("BLUE")
    .setFooter('Developed by Salvatore')
      .setTimestamp()
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["top-10"],
  permLevel: 0
};
exports.help = {
  name: "top-10"
};
