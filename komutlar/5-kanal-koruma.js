const Discord = require("discord.js");

const db = require('../modules/xenon-db.js');

var ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  let ba = args[1]; // bekleme süresi
  let ha = args[2]; // hassasiyet
  if (args[0] == "aç") {
    if (ba) {
      if (isNaN(ba))
        return message.channel.send("Bekleme Süresi Bir Sayı Olmalıdır");
      if (ha) {
        if (isNaN(ha))
          return message.channel.send("Hassasiyet Bir Sayı Olmalıdır");
        setTimeout(function() {
          db.set(`sunucular.${message.guild.id}.kanalkoruma.hassasiyet`, ha);
          setTimeout(function() {
            db.set(`sunucular.${message.guild.id}.kanalkoruma.bekleme`, ba);
            db.set(`sunucular.${message.guild.id}.kanalkoruma.tf`, true);
            message.channel.send(
              `Başarıyla bu sunucdaki kanal koruma hassasiyeti, ${ha} bekleme süresi ise ${ba} olarak ayarlandı!`
            );
          }, 100);
        }, 100);
      } else {
        return message.channel.send(
          "Hata! Lütfen Bir Hassasiyet Belirtin\n Doğru Kullanım: `p!kanalkoruma aç <bekleme süresi> <hassasiyet>`"
        );
      }
    } else {
      return message.channel.send(
        "Hata! Lütfen Bir Bekleme Süresi Belirtin\n Doğru Kullanım: `p!kanalkoruma aç <bekleme süresi> <hassasiyet>`"
      );
    }
  } else if (args[0] == "kapat") {
    db.delete(`sunucular.${message.guild.id}.kanalkoruma.tf`);
    message.channel.send("Başarıyla bu sunucudaki kanal koruma kapatıldı!");
  } else if (args[0] == "sıfırla") {
    db.set(`sunucular.${message.guild.id}.kanalkoruma.bekleme`, 20);
    db.set(`sunucular.${message.guild.id}.kanalkoruma.hassasiyet`, 5);
    message.channel.send(
      `Başarıyla bu sunucdaki kanal koruma hassasiyeti, 20 bekleme süresi ise 5 olarak ayarlandı!`
    );
  } else {
    return message.channel.send(
      "Hata! Lütfen Bir Argüman Belirtin!\n Doğru Kullanım: `p!kanalkoruma aç <bekleme süresi> <hassasiyet>`"
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "3"
};

exports.help = {
  name: "kanal-koruma",
  description: "Sunucu için kanal koruma.",
  usage: "kanal koruma",
};
