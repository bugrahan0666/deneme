const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json"); 
const chalk = require("chalk"); 
const moment = require("moment"); 
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs"); 
const db = require("quick.db"); 
const http = require("http"); 
const express = require("express"); 
require("./util/eventLoader")(client); 
const path = require("path"); 
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map(); 
const YouTube = require("simple-youtube-api"); 
const ytdl = require("ytdl-core"); 
const app = express(); 
app.get("/", (request, response) => {

  console.log(Date.now() + " Ping tamamdır."); 

  response.sendStatus(200); 
});
app.listen(process.env.PORT); 

setInterval(() => {

  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000); 


var prefix = ayarlar.prefix;

const log = message => {
  

  console.log(`${message}`); 
};

client.commands = new Discord.Collection(); 

client.aliases = new Discord.Collection(); 

fs.readdir("./komutlar/", (err, files) => {

  if (err) console.error(err);

  log(`${files.length} komut yüklenecek.`); 

  files.forEach(f => {

    let props = require(`./komutlar/${f}`);

    log(`Yüklenen komut: ${props.help.name}.`); 

    client.commands.set(props.help.name, props); 

    props.conf.aliases.forEach(alias => {

      client.aliases.set(alias, props.help.name);
    }); 
  });
}); 

client.reload = command => {
 

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command); 

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias); 
      });
      client.commands.set(command, cmd); 

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name); 
      }); 

      resolve(); 
    } catch (e) {

      reject(e);
    } 
  }); 
}; 

client.load = command => {


  return new Promise((resolve, reject) => {

    try {

      let cmd = require(`./komutlar/${command}`);

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);
      });

      resolve();
    } catch (e) {

      reject(e);
    }
  }); 
};

client.unload = command => {
  

  return new Promise((resolve, reject) => {

    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]; 

      let cmd = require(`./komutlar/${command}`); 

      client.commands.delete(command); 

      client.aliases.forEach((cmd, alias) => {
        

        if (cmd === command) client.aliases.delete(alias); 
      }); 

      resolve(); 
    } catch (e) {
      

      reject(e); 
    } 
  });
};


client.elevation = message => {
 

  if (!message.guild) {


    return; 
  }
  let permlvl = 0; 

  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;

  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;

  if (message.author.id === ayarlar.sahip) permlvl = 4; 

  return permlvl; 
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g; 

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
}); 


client.on("error", e => {

  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.login(ayarlar.token);


//---------------------SUNUCU KURMA-------------------------///
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Hata",`Sunucu Zaten Ayarlanmış`).setFooter('Elyse - Sunucu Kurma Sistemi'))
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Bilgi",`Sunucu Kurma İşleminin Başlamasını Onaylıyorsanız **kabul** Yazarak İşlemi Başlatabilirsiniz`).setFooter('Elyse - Sunucu Kurma Sistemi'))
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').addField("Yetersiz Yetki",`Bu Komutu Kullanmak için Yeterli Yetkiye Sahip Değilsiniz`).setFooter('Elyse - Sunucu Kurma Sistemi'));
      message.channel.awaitMessages(response => response.content === 'kabul', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
        
         message.guild.owner.send(new Discord.RichEmbed().setColor('RANDOM').addField("Bilgi",`Sunucunuz Kuruluyor Lütfen Bekleyin! Bu İşlem Biraz Zaman Alabilir...`).setFooter('Elyse - Sunucu Kurma Sistemi'))
       message.guild.channels.forEach(function(kan) {
       message.guild.roles.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 
        
        
   message.guild.createChannel('Bilgilendirme', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])


        
 message.guild.createChannel('kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bilgilendirme")));
 message.guild.createChannel('duyurular', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "Bilgilendirme")));
       message.guild.createChannel('bilgilendirme', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bilgilendirme")));
             message.guild.createChannel('sayaç', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "Bilgilendirme")));
            message.guild.createChannel('gelen-giden', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bilgilendirme")));
        

       }) 
       .then((collected) => {
        message.guild.createChannel('Genel Metin Kanalları', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`genel-sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Metin Kanalları")));
     message.guild.createChannel(`bot-komut`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Metin Kanalları")));
     message.guild.createChannel(`galeri`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Metin Kanalları")));
     message.guild.createChannel(`sosyal-medya`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Metin Kanalları")));
     message.guild.createChannel(`kelime-türetmece`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Metin Kanalları")))
        
        
        
        
        

    message.guild.createChannel('Genel Ses Kanalları', 'category', [{
      id: message.guild.id,
    }]);

  message.guild.createChannel(`Sohbet Odası 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Ses Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   message.guild.createChannel(`Sohbet Odası 2`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Ses Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   message.guild.createChannel(`Müzik Odası 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Ses Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   message.guild.createChannel(`Müzik Odası 2`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Ses Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
           message.guild.createChannel(`Film Dizi Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Genel Ses Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})



        
        
      message.guild.createChannel('Oyun Kanalları', 'category', [{
      id: message.guild.id,
    }]);

  message.guild.createChannel(`CS:GO 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   message.guild.createChannel(`CS:GO 2`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   message.guild.createChannel(`League of Legends 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
   message.guild.createChannel(`League of Legends 2`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
                  message.guild.createChannel(`Valorant 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
                  message.guild.createChannel(`Valorant 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone"); 
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
           message.guild.createChannel(`Zula 1`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
          message.guild.createChannel(`Zula 2`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");   
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
          message.guild.createChannel(`Minecraft`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "Oyun Kanalları")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
       message.guild.owner.send(new Discord.RichEmbed().setColor('RANDOM').addField("İşlem Başarılı",`Sunucunuz Başarılı Bir Şekilde Kuruldu Kalan Ayarlamaları Yapmak için **e!sunucu-yardım** Yazarak Yardım Alabilirsiniz`).setFooter('Elyse - Sunucu Kurma Sistemi'))
     
            })   
}
});


//---------------------SUNUCU KURMA SON-------------------------///

