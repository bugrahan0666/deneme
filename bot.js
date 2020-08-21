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


//........MESAJ ISTATISTIK........//

client.on("message", async message => {
  if (message.author.bot === false) {
    await db.add(`puan_${message.guild.id}_${message.author.id}`, 1); 

    await db.add(`puanc_${message.guild.id}_${message.channel.id}`, 1); 

    await db.add(`puanuc_${message.author.id}_${message.channel.id}`, 1);
  }
});

//........SES ISTATISTIK........//

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  if (!oldMember.user.bot) {
    let oldChannel = oldMember.voiceChannel; 

    let newChannel = newMember.voiceChannel;

    if (oldChannel === undefined && newChannel !== undefined) {
      db.set(`girisses.${oldMember.user.id}.${oldMember.guild.id}`, Date.now());
    } else if (newChannel === undefined) {
      let ilksessüre = await db.fetch(
        `girisses.${oldMember.user.id}.${oldMember.guild.id}`
      ); 

      let time = Date.now() - ilksessüre;
      await db.add(
        "voicei_" + oldMember.guild.id + "_" + oldMember.user.id,
        time
      ); 

      await db.add(
        "voicec_" + oldMember.guild.id + "_" + oldMember.voiceChannelID,
        time
      ); 

      await db.add(
        "voiceuc_" + oldMember.user.id + "_" + oldMember.voiceChannelID,

        time
      ); 
    }
  }
}); 


//salvatore sa as
client.on("message", async msg => {
  if (msg.content == "sa") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "sea") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "selam") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "selamun aleyküm") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "Selam") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "Sa") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});


client.on("guildMemberAdd", (member, message) => {
  if (member.guild.id !== "746454241366769746") return; //SUNUCU İD
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  let eskiisim = member.user.username;
  const id = "746475814123470899"; //MESAJIN GİDECEĞİ KANAL İD
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();
   let zaman1 = new Date().getTime() - user.createdAt.getTime()
   const gecen = moment.duration(zaman1).format(` YY [Yıl] DD [Gün] HH [Saat] mm [Dakika] ss [Saniye]`) 
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (gün < 10) kontrol = "Şüpheli <a:unlem:746470597265064026>";
  if (gün > 10) kontrol = "Güvenli <a:tik_1:746470658804023338>";
  const hg = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(member.user.avatarURL) 
  .setTitle(`O'nlar Sunucusuna Hoşgeldiniz`)
  .setDescription(`<a:kelebek:746470695231553546> Sunucumuza Hoşgeldin ${member.toString()} Seninle Beraber ${member.guild.memberCount} Kişiyiz

<a:beyaztik:746470622934335549> Kaydının Yapılması için Sesli Odaya Gelip Teyit Vermen Gerekli

<a:yildiz1:746470692635279420> <@&746465906623774750> Rolündeki Yetkililer Seninle İlgilenecektir

> Kullanıcı Bilgileri
<a:discord:746470697651666944> Hesap Kuruluş Tarihi: **${moment(user.createdAt).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(user.createdAt).format("YYYY HH:mm:ss")}**
<a:discord:746470697651666944> Hesap Açılalı: **${gecen}** Olmuş
<a:discord:746470697651666944> Bu Kullanıcı: **${kontrol}**`)
  channel.send(hg)
});




//bot dm hoşgeldin mesajı
client.on("guildMemberAdd", async (member, message, args) => {
  try {
    let aresMessage = new Discord.RichEmbed();
    await member.addRole("746465808376529017");//kayıtsız
    await member.addRole("746465808376529017");//kayıtsız
    await member.setNickname(`${member.user.username}`);
    await client.channels
      .get("746465808376529017")//kanal
      .send(
        `<a:tac:692108149984854157> **WELCOME TO ⋈ THE SKY** <a:tac:692108149984854157>\n\n<a:kebelek:693103182578057286> **Sunucumuza Hoşgeldin** ${member}, **Seninle Beraber **\`${member.guild.memberCount}\` **Kişiyiz!**\n\n**<a:yildiz1:692394627260481556> Kaydının Yapılması için Sesli Odaya Gelip Teyit Vermen Gerekli**\n\n**<a:ates:692108616743780385> <@&693111236036132937> Rolündeki Yetkililer Seninle İlgilenecektir**\n\n<a:raptiye:692839119792898199> <#692396339300008018> **Kanalından Kuralları Okumayı Unutma**`,
        new Discord.Attachment(
          "https://cdn.discordapp.com/attachments/692698508448366672/700405263299117117/ezgif-4-04b1206c6d54.gif"
        )
      );
    if (!member.roles.has("746465808376529017")) {
      member.addRole("746465808376529017");
    }
  } catch (err) {
    console.log(err);
  }
});