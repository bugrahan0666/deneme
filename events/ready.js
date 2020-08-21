const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  setInterval(function() {}, 8000);
  client.user.setPresence({
    game: {
      name: `Developed by Salvatore`,
      type: "WATCHING"
    },
    status: "dnd"
  });
  console.log(`[BOT]: Giriş Yaptı! Komutlar Yüklendi! Salvatore Aittir!`);
};
