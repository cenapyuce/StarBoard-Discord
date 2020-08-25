const Discord = require('discord.js');
const client = new Discord.Client();
let emoji = "⭐";
let emojikactaneoluncaatsınstarboarda = 3;
let StarboardKanalid = "747588502992060456";
let Token = "Your Bot Token";
let hangisunucudaolsuno = "733638411872763914";
client.on('ready', () => {
  console.log(`Giriş Yaptı!`);
});


client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.message.guild.id === hangisunucudaolsuno) {
	if (reaction.emoji.name == emoji) {
    if(reaction.count === emojikactaneoluncaatsınstarboarda) {
      const embed = new Discord.RichEmbed()
      .setTitle("StarBoard")
      .addField("Mesaj Sahibi",`${reaction.message.author.tag}`,true)
      .addField("Kanal",`<#${reaction.message.channel.id}>`,true)
      .addField("Mesaja git!",`[Tıkla](${reaction.message.url})`,true)
      .setColor("GOLD")
      client.channels.get(StarboardKanalid).send(embed)
    }
  }
  }
})
client.login(Token)
