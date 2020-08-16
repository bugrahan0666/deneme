const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let top10 = 1
  
  let kayıtkisi = message.guild.members
  .filter(member => !member.user.bot)
  .array()
  .sort((e,k) => {
    return{
        db.add(`ban.${message.author.id}.${message.guild.id}`, 1)

      
    }
    
    
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
