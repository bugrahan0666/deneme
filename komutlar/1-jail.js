const Discord = require('discord.js');
const db = require("quick.db")
const moment = require('moment')
require("moment-duration-format")
exports.run = async (client, message, args) => {
   if (!message.member.roles.has('693095757070204938') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:unlem:693080241282744391> Kullanıcı Yasaklama Yetkiniz Yok` , `<a:loading:692108268557828188> Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed() .setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir Sebep Yazınız.").then(m => m.delete(5000));
  
          message.react("EMOJİ ID");
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) //DCS EKİPİ
let simdikitarih = moment.utc(message.createdAt).format('DD MM YYYY');
        let user = message.mentions.users.first() || message.author;
        let userinfo = {};
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.dctarih = moment.utc(message.guild.members.get(user.id).message.createdAt).format('**DD** MMMM **YYYY** **[Saat:]** __**HH:mm:ss**__')
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
   
})
  member.addRole('692111658356834304')
     const kanal = message.guild.channels.find(c => c.id == "744746754058223687") // DCS EKİPİ
    const embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.tag , message.author.avatarURL)
    .setDescription(`<@!${kullanıcı.id}> Kullanıcısı <@!${message.author.id}> Tarafından Cezalıya Atıldı\nSebep: **${reason}**\nSaat: ${userinfo.dctarih}`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} Adlı Kişiye <@&692111658356834304> Rolü Verildi \n Yetkili: ${message.author.tag}\nSebep: **${reason}** `) 
  .setFooter(`∻ THE SKY`)
  .setColor("RANDOM")
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1));
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır","cezalı","karantina"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebebe'
}