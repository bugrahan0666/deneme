const Discord = require("discord.js");
const db = require('../modules/xenon-db.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `Bu komutu kullanmak için yeterli izne sahip değilsin.`
    );

  let prefix = ayarlar.prefix;

  let arguman = args[0];

  if (!arguman)
    return message.channel.send(
      `<:XMARK:666359344778182659> Lütfen bir bot id yazın. (Giriş izni iptal etmek için \`${prefix}giriş-izni iptal <botid>\`**`
    );

  if (arguman === "iptal") {
    db.delete(`botİzinli_${args[1]}`);
    message.channel.send(
      `\`${args[1]}\` IDsine sahip botun giriş izni iptal **edildi!**`
    );
  } else {
    const embed = new Discord.RichEmbed()
      .setTitle(`<::_Angry_PLUR:666359330987180042> Uyarı`)
      .setColor("#7289da")
      .setDescription(
        `\`${arguman}\` IDsine sahip botun sunucunuza giriş verilmesini onaylıyor iseniz **onaylıyorum** yazın.`
      )
      .setFooter(`30 Saniye içerisinde cevap vermez iseniz iptal olacaktır!`);
    message.channel.send(embed);
    var filtre = m => m.author.id === message.author.id;
    message.channel
      .awaitMessages(filtre, { max: 1, time: 30000, errors: ["time"] })
      .then(collected => {
        if (
          collected.first().content === "onaylıyorum" ||
          collected.first().content === "evet"
        ) {
          db.set(`botİzinli_${arguman}`, "İzinli");
          message.channel.send(
            `\`${arguman}\` IDsine sahip bot **doğrulandı!** Sunucuya **eklenebilir!**`
          );
        }
      });
  }
};
exports.conf = {
  guildOnly: true,
  enabled: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "giriş-izni",
  description: "Sunucuyu botlara karşı koruyan sistem. (Kullanmanızı öneririz)",
  usage: "giriş-izni <botid>",
  category: "koruma",
  help:"Sunucunuzu botlara karşı korumanızı sağlar Kullanım: p!giriş-izni <botid>",
  de_name: 'passierschein',
  eng_name: 'entry-permit',
  de_help:'Es schützt Ihren Server vor Bots.',
  eng_help:'It protects your server from bots.'
  
};
