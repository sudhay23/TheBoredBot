import { MessageEmbed } from "discord.js";
import getBoredLink from "./getBoredLink.js";

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
  } else if (commandName === "bored") {
    const [boredUrl, boredUrlTitle, boredUrlDesc] = await getBoredLink();
    const boredScreenshotLink = `http://image.thum.io/get/${boredUrl}`;
    const boredEmbed = new MessageEmbed()
      .setColor("#00fff3")
      .setAuthor({
        name: "TheBoredBot",
        iconURL: "https://i.imgur.com/GKWq2F6.jpeg",
        url: "https://top.gg/bot/954588820593049651", //TODO-CHANGE
      })
      .setTitle("TheBoredBot on Discord")
      .setURL("https://top.gg/bot/954588820593049651")
      .addFields([
        {
          name: "Check this cool website out!",
          value: `**\`${
            interaction.user.username
          }\`** got bored at _${new Date().toLocaleString()}_`,
        },
        {
          name: boredUrlTitle,
          value: `[Go to website](${boredUrl})\n${
            boredUrlDesc || "No Description"
          }`,
        },
      ])
      .setImage(boredScreenshotLink);

    interaction.reply({
      embeds: [boredEmbed],
    });
  }
};
