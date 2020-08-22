const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  msg.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Elyse İstatistik').addField("Genel İstatistikler",`> Toplam Kullanıcı: **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**\n> Toplam Sunucu: **${client.guilds.size.toLocaleString()}**\n> Toplam Kanal: **${client.channels.size.toLocaleString()}**`).addField("Sürüm Bilgi",`> Discord.JS Sürümü: **v${Discord.version}**\n> Bellek Kullanımı: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`).addField("Aktiflik ve Ping",`> Çalışma Süresi: **${duration}**\n> Ping: **${client.ping}**`).setFooter('Elyse İstatistik'));
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