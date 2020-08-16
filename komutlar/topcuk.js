const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");



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
