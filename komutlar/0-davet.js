const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== 'dm') {
    const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Elyse`)
    .setDescription('Elyse Bot Gelişmiş %100 Türkçe Bir Moderasyon Botudur Tek Yapman Gereken Sunucuna Ekleyip Elyse Botu Keşfetmen :)')
    .addField("Elyse Davet",`[Tıkla](https://discord.com/oauth2/authorize?client_id=736987450722746401&scope=bot&permissions=8)`,true)
    .addField("Elyse Destek Sunucusu",`[Tıkla](https://discord.gg/jZZUKgz)`,true)
    .addField("Elyse Yapımcısı",`Salvatore ∻#7172`,true)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.sendEmbed(yardım) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet","invite"],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Davet',
  usage: 'davet'
};