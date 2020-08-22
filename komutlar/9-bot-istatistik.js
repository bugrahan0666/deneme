const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  msg.channel.sendCode(new Discord.RichEmbed()
                       .setTitle('Elyse İstatistik')
                       .setDescriptiom(`
• Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalışma süresi   :: ${duration}
• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular        :: ${client.guilds.size.toLocaleString()}
• Kanallar         :: ${client.channels.size.toLocaleString()}
• Discord.JS sürüm :: v${Discord.version}
• Ping             :: ${client.ping}`))
  .addField("Genel İstatistikler",`> Toplam Kullanıcı: **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};