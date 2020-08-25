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
 const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;
	const { d: data } = event;
	const anto = client.users.get(data.user_id);
	const channel = client.channels.get(data.channel_id) || await anto.createDM();
	if (channel.messages.has(data.message_id)) return;
	const message = await channel.fetchMessage(data.message_id);
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	const reaction = message.reactions.get(emojiKey);
	client.emit(events[event.t], reaction, anto);
});


client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.message.guild.id === hangisunucudaolsuno) {
	if (reaction.emoji.name == emoji) {
    if(reaction.count === emojikactaneoluncaatsınstarboarda) {
	    if(raction.message.attachments.size > 0) {
       const embed = new Discord.RichEmbed()
      .setTitle("StarBoard")
      .addField("Mesaj Sahibi",`${reaction.message.author.tag}`,true)
      .addField("Kanal",`<#${reaction.message.channel.id}>`,true)
      .addField("Mesaja git!",`[Tıkla](${reaction.message.url})`,true)
      .setColor("GOLD")
      .setImage(reaction.message.attachments.first().url)
       client.channels.get(StarboardKanalid).send(embed)
} else {
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
  }
})
client.login(Token)
