const Discord = require('discord.js');

 exports.run = (client, message, args) => {
     if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
   
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`).then(m => m.delete(10000));

   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x: yazı yazman gerek :x:`)).then(m => m.delete(5000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Bot', client.user.avatarURL)

       .setDescription(`Lütfen 2 adet şık birden seçmeyiniz...`)
       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {
       

         message.react(':white_check_mark:');

         message.react(':x:');
       
       

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 1,

};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '-oylama <oylamaismi>'
};