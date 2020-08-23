const Discord = require('discord.js');
const db = require('quick.db');
const {stripIndents} = require('common-tags');

exports.run = async (client, message, args) => {
  var p24 = client.ping
  try {
	const embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsinin silinip botun yeni bir sunucu kurmasını onaylıyor musunuz?')
	.setFooter('10 saniye içinde "evet" yazarsanız onaylamış olursunuz. 10 saniye içinde yazmazsanız işlem iptal edilir')
	message.channel.send({embed: embed})
	 message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.guild.channels.forEach((kanal) => {
          	kanal.delete()
          })
           setTimeout(() => {
          message.guild.roles.forEach((rol) => {
          	rol.delete()
          })
      }, 5000)
     
     const embedd = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsinin silinip botun yeni bir sunucu kurmasını onayladınız! Sunucu kuruluyor bu işlem biraz zaman alabilir.')
	message.author.send({embed: embedd})

    let every = message.guild.roles.find(r => r.name === '@everyone')

    //Kategoriler
    message.guild.createChannel('Bilgilendirme', 'category').then(bilgi => {
    message.guild.createChannel('Metin Kanalları', 'category').then(toplum => {
    message.guild.createChannel('Kayıtlar', 'category').then(kayitlar => {
    message.guild.createChannel('Ses Kanalları', 'category').then(sesli => {


    //Kanallar
    setTimeout(() => {
    	message.guild.createChannel('kurallar', 'text').then(kurallar => {
    	kurallar.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
    })
    	message.guild.createChannel('duyurular', 'text').then(duyurular => {
    })
     message.guild.createChannel('destek', 'text').then(destek => {
    	destek.setParent(toplum.id)
    })
    }, 5000)

    setTimeout(() => {
    	message.guild.createChannel('komut-kullanım', 'text').then(komutlar => {
    })
      
    }, 5000)

    setTimeout(() => {
    	message.guild.createChannel('gelen-giden', 'text').then(gc => {
    	gc.setParent(kayitlar.id)
    	gc.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
    })
      
    	message.guild.createChannel('sayaç', 'text').then(sayac => {
    	sayac.setParent(kayitlar.id)
      
          sayac.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
    	db.set(`sKanal_${message.guild.id}`, sayac.id)
    	db.set(`sayac_${message.guild.id}`, message.guild.members.size+100)
    })
      message.guild.createChannel('oto-rol', 'text').then(otor => {
    	otor.setParent(kayitlar.id)

          otor.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
    	db.set(`otoRK_${message.guild.id}`, otor.id)
    	db.set(`otoR_${message.guild.id}`, otor.id)
      
    })
   	message.guild.createChannel('resimli-hoşgeldin', 'text').then(gcc => {
    	gcc.setParent(kayitlar.id)
         gcc.overwritePermissions(every, {
           
    		SEND_MESSAGES: false
    	})
    })
      
    	message.guild.createChannel('moderasyon-kayıtları', 'text').then(log => {
    	log.setParent(kayitlar.id)
             log.overwritePermissions(every, {
                VIEW_CHANNEL: false,
                		SEND_MESSAGES: false
               
    	
    	})
       
    })
      	message.guild.createChannel('güvenlik', 'text').then(guvenlik => {
    	guvenlik.setParent(kayitlar.id)

          guvenlik.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
          
    })
    }, 10000)

    setTimeout(() => {
    	message.guild.createChannel('Sohbet Odası', 'voice').then(shbt => {
    	shbt.setParent(sesli.id)
    })
    	message.guild.createChannel('Sohbet Odası - 2', 'voice').then(shbt2 => {
    	shbt2.setParent(sesli.id)
    })
    	message.guild.createChannel('Sohbet Odası - 3', 'voice').then(oyn => {
    	oyn.setParent(sesli.id)
    })
 
    }, 15000)

    })})})})
      
    setTimeout(() => {
      	message.guild.createRole({
        name: '🔑',
        color: '#EFEBE9',
        permissions: [
          
            "ADMINISTRATOR",
           "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ],
   
      }).then(d =>  message.guild.owner.addRole(d.id))
    	message.guild.createRole({
        name: 'Kurucu',
        color: 'BLACK',
        permissions: [
          
            "ADMINISTRATOR",
    ],
    hoist: true
      }).then(d =>  message.guild.owner.addRole(d.id))
      message.guild.createRole({
        name: 'Yönetici',
        color: '00bdff',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ],
    hoist: true
      })
      message.guild.createRole({
        name: 'Moderator',
        color: '00ff08',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ],
    hoist: true
      })
       message.guild.createRole({
      	name: 'Destek Ekibi',
      	color: 'RED',
      	mentionable: true,
         hoist: true
      }).then(d => {
      db.set(`destekR_${message.guild.id}`, d.id)
    })
      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffb6',
        hoist: true,
      })


      message.guild.createRole({
        name: 'Üye',
        color: 'caf7fc',
        hoist: true,
      }).then(d =>  db.set(`otoR_${message.guild.id}`, d.id,    message.guild.members.forEach(async (every) => {
 every.addRole(d.id)})))
                                                                                              
      
    
message.guild.createRole({
        name: 'Bot',
        color: 'ff8100',
         hoist: true,
      })
    const embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsi başarıyla silindi! Ve sunucu kurulumu tamamlandı! Eğer en yukarıda kanallar var ise onlar buglu kanallardır, Paniğe kapılmanıza gerek yok.')
	message.author.send({embed: embed})
    }, 20000)
        })
        .catch(() => {
        	message.channel.send('`10 saniye` geçerek kanalları, kategorileri ve rolleri silme işlemi iptal edildi!')
        });
    
  } catch (err) {
    
  }
  
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['sunucukurulum', 'sunucu-kur', 'sunucukur'],
	permLevel: 4,
	kategori: 'moderasyon'
};

exports.help = {
	name: 'sunucu-kurulum',
	description: 'Sunucunuzu sıfırlar ve tekrardan botun ayarlarını ayarlayarak gerekli rolleri, kanalları, kategorileri oluşturarak sunucu kurar.',
	usage: ''
};