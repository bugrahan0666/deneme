const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has('kayıtçı rol id') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komudu kullanmak için yetkin yeterli değil.').then(m => m.delete(5000));

  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let member = message.guild.member(user)
  if (!user) return message.channel.send('Bir üye belirtmelisin.')

  let isim = args[1];
  if(!isim) return message.channel.send('Bir isim belirtmelisin.')
  let yaş = Number (args[2]);
  if(!yaş) return message.channel.send('Bir yaş belirtmelisin.')
  let sayi = db.get(`erkeks_${message.author.id}`)
  
  if (!member.roles.has('erkek rol id')) {
    member.addRole('erkek rolü id')
    member.addRole('ikinci erkek rol id')
    member.removeRole('kayıtsız rol id')
    member.setNickname(`✦ ${isim} | ${yaş}`)
    db.add(`erkeks_${message.author.id}`, +1)
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${user} adlı üye **erkek** olarak sunucumuza kaydedilmiştir.`).setFooter(`${message.author.tag}, toplam ${sayi || '1'} erkek kaydın mevcut.`).setTimestamp().setColor("BLACK"))
  }else{
    message.reply('Bu kişi zaten sunucumuza **erkek** olarak kaydedilmiş.')
  }

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['e'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'erkek',
    description: '',
    usage: ''
  };