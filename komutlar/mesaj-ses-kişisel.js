const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
require("moment-duration-format")
exports.run = async (client, message, args) => {
  let simdikitarih = moment.utc(message.createdAt).format('DD MM YYYY');
        let user = message.mentions.users.first() || message.author;
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = message.guild.members.get(user.id).user.presence.game || "``Oynadığı Bir Oyun Yok``"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.dctarih = moment.utc(message.guild.members.get(user.id).user.createdAt).format('**DD** MMMM **YYYY** **[Saat:]** __**HH:mm:ss**__')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(message.guild.members.get(user.id).joinedAt).format('**DD** MMMM **YYYY** **[Saat:]** __**HH:mm:ss**__')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
  const us = message.mentions.users.first() || client.users.get(args[0]) || message.author

  const puan = await db.get("puan_" + message.guild.id + "_" + us.id);

  let sayi22 = 1;
  let top3c = message.guild.channels
    .array()
    .sort((a, b) => {
      return (
        (db.get(`puanuc_${us.id}_${b.id}`) || 0) -
        (db.get(`puanuc_${us.id}_${a.id}`) || 0)
      );
    })
    .map(x => {
      return `\n${sayi22++}.  <#${x.id}>:  \`${db.get(
        `puanuc_${us.id}_${x.id}`
      ) || 0}\``;
    })
    .slice(0, 3);
    
   let sayi4 = 1
  let top4c = message.guild.channels
    .array()
    .sort((a, b) => {
      return (
        (db.get(`voiceuc_${us.id}_${b.id}`) || 0) -
        (db.get(`voiceuc_${us.id}_${a.id}`) || 0)
      );
    })
    .map(x => {
      return `\n\`${sayi4++}.\` <#${x.id}>:  \`${moment.duration(db.get('voiceuc_'+us.id+'_'+x.id)).format("D [Gün] H [Saat] m [Dakika] s [Saniye]")}\``;
    })
    .slice(0, 3);
    
    const sess = await db.get('voicei_'+message.guild.id+'_'+us.id)
    const ses = moment.duration(sess).format("D [Gün] H [Saat] m [Dakika]");
  const embed = new Discord.RichEmbed()
    .setTitle(`${us.username} İSTATİSTİKLERİ`)
    .setTimestamp()
    .setThumbnail(us.avatarURL || message.author.avatarURL)
    .setFooter(client.user.username)
    .setDescription(`**Mesaj İstatistikleri:** \`${puan}\`\n**En Çok Mesaj Attığı 3 Kanal**${top3c}\n\n**Seste Kalma Süresi:** \`${ses}\`\n**En Çok Seste Durduğu 3 Kanal**${top4c}`)
    .addField("Mesaj İstatistikleri",`> Toplam Mesaj: **${puan}**\n`)
    .setDescription(`Bu Listede Gösterilen Oranlar Toplam ve Anlık Olarak Gösterilmektedir

Kullanıcı: ${message.author.tag}
Kullanıcı ID: ${message.author.id}
Hesap Kuruluş Tarihi: ${userinfo.dctarih}
Sunucuya Giriş Tarihi: ${userinfo.dctarihkatilma}
`)
  .addBlankField()
  .addField("Aktif Olduğu Ses Kanalları"`${top4c}`,true)
  .addField("Aktif Olduğu Metin Kanalları"`${top3c}`,true)
  .addField("Toplam İstatistikler"`Toplam Ses: ${ses} \nToplam Mesaj: **${puan}**\n`,true)
  .addField("Aktif Olduğu Metin Kanalları"`${top3c}`,true)
  .setColor("GREEN");
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mesaj",
  description: "İstediğiniz kişinin istatistiklerini verir",
  usage: "mesaj & mesaj <@kişi-etiket>"
};
