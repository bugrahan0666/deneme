const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
const db = require("quick.db")
 if (!message.member.roles.has("756248067669360811")) return message.reply('Bu komutu kullanabilmek için <@&756248067669360811> rolüne sahip olmalısın.');
let member = message.mentions.members.first();
let isim = args.slice(1).join(" | ");
let tag = "π"
if (!member) return message.channel.send("Bir Üye Etiketle!");
if (!isim) return message.channel.send("Bir Isim Yaz!");
member.setNickname(`${tag} ${isim}`);
member.setNickname(`${tag} ${isim}`);
member.addRole("756250050757263450")
  member.removeRole("756255623422673058")

   message.react("✅")
const embed = new Discord.RichEmbed()




.addField(`Phentos`,
`\nKayıt Edilen Kullanıcı: ${member.user} \n\nKayıt Eden: \`${message.author.username}\`\n\n Verilen Roller <@&756250050757263450>`)
client.channels.get('756257487279227051').send(embed)
}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['man','e'],
permLevel: 0
};
exports.help = {
name: "erkek",
description: "Phentos Erkek Kayıt",
usage: "Phentos Kayıt"
};
