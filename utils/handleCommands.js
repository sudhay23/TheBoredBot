import { MessageEmbed } from "discord.js";
import getBoredLink from "./getBoredLink.js";

export default async (interaction, commandName, options) => {
  if (commandName === "help") {
    await interaction.deferReply({
      ephemeral: true,
    });

    await interaction.editReply({
      content: `
      **TheBoredBot**
      A bot that kills boredom giving you new websites to explore. Inspired by and courtesy of BoredButton
      
      **[Invite me to another server](https://discord.com/api/oauth2/authorize?client_id=955456643745845288&permissions=534723950656&scope=applications.commands%20bot)**
      
      ***What it can do?***
       - Anybody of the server can use the \`/bored\` command and the bot gives you one cool website to check out which you may never have seen before

      ***Help Command*** - \`/help\`
       - Shows this help message
       
      ***Contribute Command*** - \`/contribute\`
       - Shows a link to our GitHub Repository

      `,
    });
  } else if (commandName === "contribute") {
    const contributeEmbed = new MessageEmbed()
      .setColor("#00ffa7")
      .setTitle("TheBoredBot on GitHub")
      .setURL("https://github.com/sudhay23/TheBoredBot")
      .setAuthor({
        name: "TheBoredBot",
        iconURL: "https://i.imgur.com/GKWq2F6.jpeg",
        url: "https://top.gg/bot/955456643745845288",
      })
      .addFields({
        name: "Awesome..You wished to contribute 🎉🥳",
        value:
          "Head to our GitHub repository and open some issues as you like ;)",
      })
      .setImage("https://i.imgur.com/7jPIDbZ.jpeg");

    await interaction.deferReply({
      ephemeral: false,
    });

    await interaction.editReply({
      embeds: [contributeEmbed],
    });
  } else if (commandName === "bored") {
    await interaction.deferReply({
      ephemeral: false,
    });
    const [boredUrl, boredUrlTitle, boredUrlDesc] = await getBoredLink();
    const boredScreenshotLink = `http://image.thum.io/get/${boredUrl}`;
    const boredEmbed = new MessageEmbed()
      .setColor("#00fff3")
      .setAuthor({
        name: "TheBoredBot",
        iconURL: "https://i.imgur.com/GKWq2F6.jpeg",
        url: "https://top.gg/bot/955456643745845288",
      })
      .setTitle("TheBoredBot on Discord")
      .setURL("https://top.gg/bot/955456643745845288")
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

    await interaction.editReply({
      embeds: [boredEmbed],
    });
  }
};
