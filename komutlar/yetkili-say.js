const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    let sunucu = "756241474148106360";
    let yetkili = message.guild.roles.get("756241739093770302").members;
  const embed = new Discord.RichEmbed()
    .addField("Sunucuda Bulunan Yetkili Sayısı ", `${yetkili.size}`)
    .setFooter(client.user.username, message.guild.iconURL);
  message.channel.sendEmbed(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili-say',
  description: 'Yetkilileri Sayar',
  usage: 'yetkili-say'
};