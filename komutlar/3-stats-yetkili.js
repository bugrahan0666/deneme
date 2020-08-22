const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
require("moment-duration-format")
exports.run = async (client, message, args, tools) => {        
   if (!message.member.roles.has('746465906623774750') && !message.member.roles.has('746465962794156193') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:746470597265064026> Yetersiz Yetki` , `<a:loading:746470616085037236> Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
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
    .slice(0, 5);
    
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
    .slice(0, 5);
    
    const sess = await db.get('voicei_'+message.guild.id+'_'+us.id)
    const ses = moment.duration(sess).format("D [Gün] H [Saat] m [Dakika]");
  let kişi = message.mentions.users.first()
        if(!args[0]) {
        const data = await db.fetch(`erkek.${message.author.id}.${message.guild.id}`)
        const datae = await db.fetch(`kız.${message.author.id}.${message.guild.id}`)
        let ceza = message.mentions.users.first()
        if(!args[0]) {
        const dataee = await db.fetch(`ban.${message.author.id}.${message.guild.id}`)
        const dataeee = await db.fetch(`unban.${message.author.id}.${message.guild.id}`)
        if(!args[0]) {
        const datajail = await db.fetch(`jail.${message.author.id}.${message.guild.id}`)
        const dataunjail = await db.fetch(`unjail.${message.author.id}.${message.guild.id}`)
        if(!args[0]) {
        const dataeeea = await db.fetch(`vmute.${message.author.id}.${message.guild.id}`)
        const data1 = await db.fetch(`cmute.${message.author.id}.${message.guild.id}`)
        
        let simdikitarih = moment.utc(message.createdAt).format('DD MM YYYY');
        let user = message.mentions.users.first() || message.author;
        let userinfo = {};
        userinfo.id = user.id;
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

    const embed = new Discord.RichEmbed()
    .setTitle(`O'nlar İstatistik`)
    .setTimestamp()
    .setThumbnail(us.avatarURL || message.author.avatarURL)
    .setDescription(`Bu Listede Gösterilen Oranlar Toplam ve Anlık Olarak Gösterilmektedir

Kullanıcı: **${message.author.tag}**
Kullanıcı ID: **${message.author.id}**
Hesap Kuruluş Tarihi: ${userinfo.dctarih}
Sunucuya Giriş Tarihi: ${userinfo.dctarihkatilma}`) 
  .addBlankField()
  .addField("Aktif Olduğu Ses Kanalları (5)",`${top4c}`)
  .addField("Aktif Olduğu Metin Kanalları (5)",`${top3c}`)
  .addField("Aktiflik İstatistikleri",`Toplam Ses: **${ses}** \nToplam Mesaj: **${puan}**`,true)
  .addField("Attığı Ban ve Unban İstatistikleri",`Toplam Ban: **${dataee ? dataee : '0'}**\nToplam Unban: **${dataeee ? dataeee : '0'}**`,true)
  .setFooter(`O'nlar İstatistik / Developed by Salvatore'`)
  .setColor("RANDOM");
  message.channel.send(embed)
}
  }
    }
      }
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkili-stats","yetkili-aktifliğim","yetkili-stats",],
  permLevel: 0
};

exports.help = {
  name: "yetkili-stats",
  description: "İstediğiniz kişinin istatistiklerini verir",
  usage: "yetkili-stats"
};
