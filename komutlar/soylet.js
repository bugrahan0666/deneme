const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{
    if(message.deletable) message.delete();
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanmak için gerekli yetkin yok!");
  
    let rixnuxmesaj = args.join(" ")
    
    if(!rixnuxmesaj) return message.channel.send("Lütfen yazdırmak istediğiniz şeyi yazın!").then(x => x.delete({timeout: 3000}));
  
    message.channel.send(rixnuxmesaj)
};
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['de','yaz']
};
 
exports.help = {
 name: 'söyle',
 description: 'İstediğiniz şeyi bota yazdırır.',
 usage: '!söyle <mesaj>'
};