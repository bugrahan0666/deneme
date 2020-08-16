const Discord = require("discord.js");
const bot = new Discord.Client();
const momert = require("moment");
require("moment-duration-format")
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let top10 = 1
  
  let kayıtkisi = message.guild.members
  .filter(member => !member.user.bot)
  .array()
  .sort((e, k) => {
    return (
        (db.get(`top10_${message.guild.id}_${e.user.id})`) || 0)
        (db.get(`top10_${message.guild.id}_${k.user.id})`) || 0)

    );
    })

    .slice(0,10)
  .map(member => {
    return `${top10++} <@!${member.user.id}> : ${moment.duration(db.get('top10_'+))}`
    
  })
  }   
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["top"],
  permLevel: 0
};

module.exports.help = {
  name: "top",
  description: "",
  usage: "top"
};
