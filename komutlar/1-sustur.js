const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısınız.`);

  let kullanici = message.mentions.members.first() || message.guild.members.get(args[0])
  let guild = message.guild
  if (!kullanici) return message.channel.send("Lütfen susturulacak kişiyi belirtiniz.")
  if(kullanici.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Benden yetkili birini susturamam.");
  if (kullanici.id === message.author.id) return message.channel.send("Kendinizi susturamazsınız.");
  let modlog = guild.channels.find('name', 'mute-bilgi');
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hata` , `**"mute-bilgi"** Kanalını Sunucuda Bulamadım Lütfen **"mute-bilgi"** İsimli Bir Metin Kanalı Oluşturun`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(20000));;
  let süre = args[1]
  if(!süre) return message.channel.send("Lütfen doğru bir zaman dilimi giriniz. Örneğin: ***!voicemute @kişi 1s/m/h/d sebep**");
  let sebep = args[2]
  if (!sebep) return message.channel.send("Lütfen bir sebep giriniz. Örneğin: ***!voicemute @kişi 1s/m/h/d sebep**");
              let embed =  new Discord.RichEmbed()
              .setTitle('Ses Mutesi Atıldı')
              .setDescription(`${kullanici} Ses Odasında Bir Yetkili Tarafından Susturuldu`)
              .addField("Ses Mute Bilgileri",`**Susturulan Kullanıcı:** ${kullanici} \n**Susturan Yetkili:** <@!${message.author.id}>\n**Ceza Süresi:** ${süre} \n**Ceza Sebebi:** ${sebep}`)
              .setFooter('Elyse Mute Sistemi')
              .setColor("RANDOM");
kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre} ms`)
              .then(() => guild.channels.get(modlog.id).sendEmbed(embed)).catch(console.error);
              setTimeout(() => {
kullanici.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
              let sembed =  new Discord.RichEmbed()
              .setTitle('Ses Mutesi Kaldırıldı')
              .setDescription(`${kullanici} Ses Mute Ceza Süresi Bitti ve Susturulması Kaldırıldı`)
              .setFooter('Elyse Mute Sistemi')
              .setColor("RANDOM");
              guild.channels.get(modlog.id).sendEmbed(sembed);

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sescezası", "sesli-sustur","sustur"],
    permLevel: 0
};

exports.help = {
    name: 'seslisustur',
    description: 'seslide sustur',
    usage: "seslisustur"
};