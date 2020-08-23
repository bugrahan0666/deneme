const db = require('../modules/xenon-db.js');

exports.run = async (client, message, args, dil) => {
  if (args[0] === "kapat") {
    db.delete(`sunucular.${message.guild.id}.koruma`);
    message.channel.send(
      `${client.emojiler.evet}| Koruma filtresi kapatıldı. `
    );
  } else if (args[0] === "aç") {
    db.set(`sunucular.${message.guild.id}.koruma`, `aktif`);
    message.channel.send(
      client.emojiler.evet +
        "| Koruma filtresi açıldı. "
    );
  } else return message.reply(dil.doğrukullanım);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "bot-koruma-filtresi",
  description: "Bot koruma sistemi",
  usage: "koruma",
  category: "koruma",
  help: "Sunucunuzu botlara karşı korumanızı sağlar Kullanım: p!bot-koruma-filtresi <aç/kapat>",
  de_name: 'bot-bietet-schutzfilter',
  eng_name: 'bot-protection-filter',
  de_help:'Ermöglicht es Ihnen, Ihren Server vor Bots zu schützen',
  eng_help:'Allows you to protect your server against bots.'
};
