const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
require("moment-duration-format")
let ms = require("parse-ms");
exports.run = async (client, message, args) => {

    //////////////////////////////////////////////////
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
    .slice(0, 10)
    .map(member => {
      return `\n\`${sayi++}.\`  <@${member.user.id}>:  \`${db.get(
        `puan_${message.guild.id}_${member.user.id}`
      )}\``;
    });
    

  message.channel.send(
    new Discord.RichEmbed()
      .setTitle('Mesaj Top 10')
      .addField("TOP 10 MESAJ AKTİFLİĞİ",`${mesaj_kişi}`)
      .setColor("RANDOM")
      .setFooter('Developed by Salvatore')
      .setTimestamp()
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mesajtop","mesaj-top"],
  permLevel: 0
};
exports.help = {
  name: "mesajtops"
};
