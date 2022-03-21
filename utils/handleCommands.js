import { MessageEmbed } from "discord.js";

export default async (interaction, commandName, options) => {
  if (commandName === "help") {
    interaction.reply({
      content: "HELP_TODO",
      ephemeral: true,
    });
  } else if (commandName === "contribute") {
    const contributeEmbed = new MessageEmbed()
      .setColor("#00ffa7")
      .setTitle("TheBoredBot on GitHub")
      .setURL("https://github.com/sudhay23/TheBoredBot") //TODO-MakePublic
      .setAuthor({
        name: "TheBoredBot",
        iconURL: "https://i.imgur.com/GKWq2F6.jpeg",
        url: "https://top.gg/bot/954588820593049651", //TODO-CHANGE
      })
      .addFields({
        name: "Awesome..You wished to contribute 🎉🥳",
        value:
          "Head to our GitHub repository and open some issues as you like ;)",
      })
      .setImage("https://i.imgur.com/7jPIDbZ.jpeg");

    interaction.reply({
      embeds: [contributeEmbed],
    });
  }
};
