const Discord = require(`discord.js`);
const db = require(`quick.db`)
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanabilmek için **"Üyeleri Yasakla"** Yetkisine Sahip Olmalısınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));;
let kişi = message.mentions.users.first()
if(!args[0]) {
const data = await db.fetch(`erkek.${message.author.id}.${message.guild.id}`)
const datae = await db.fetch(`kız.${message.author.id}.${message.guild.id}`)
const emb = new Discord.RichEmbed()
 .setTitle(`<a:nfected2:672104740397776916> **Authorized Statistics** `)
.setFooter(`${message.author.tag}`, message.author.avatarURL)
.setDescription(`<a:Infected_diamond:660546154563633152> **Aron** ${data ? data : '0'}  \n <a:Infected_diamond:660546154563633152> **Ariane** ${datae ? datae : '0'}`)
message.channel.send(emb) }
if(kişi) {
const data = await db.fetch(`erkek.${kişi.id}.${message.guild.id}`)
const datae = await db.fetch(`kız.${kişi.id}.${message.guild.id}`)
const emb = new Discord.RichEmbed()
.setTitle(`<a:nfected2:672104740397776916> **Authorized Statistics** `)
.setFooter(`${message.author.tag}`, message.author.avatarURL)
.setDescription(`<a:Infected_diamond:660546154563633152> **Aron** ${data ? data : '0'}  \n <a:Infected_diamond:660546154563633152> **Ariane** ${datae ? datae : '0'}`)
message.channel.send(emb) }
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["kayıt"],
 permLevel: 0,
};

exports.help = {
 name: 'nfec.kayıtbilgi'
};