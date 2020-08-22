const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
require("moment-duration-format")
let ms = require("parse-ms");
exports.run = async (client, message, args) => {

    //////////////////////////////////////////////////
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
    .slice(0, 10)
    .map(member => {
      return `\n\`${sayi2++}.\`  <@${member.user.id}>:  \`${moment.duration(db.get('voicei_'+message.guild.id+'_'+member.user.id)).format("D [Gün] H [Saat] m [Dakika] s [Saniye]")}\``;
    });
    
  message.channel.send(
    new Discord.RichEmbed()
      .setTitle(`${message.guild.name} Ses Top 10 Listesi`)
    .setDescription(`${ses_kişi}`)
      .setColor("RANDOM")
      .setFooter('Elyse Stats')
      .setTimestamp()
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sestop","ses-top"],
  permLevel: 0
};
exports.help = {
  name: "sestops"
};
