import { config } from "dotenv";
import getBoredLink from "./utils/getBoredLink.js";
import createCommands from "./utils/createCommands.js";
import handleCommands from "./utils/handleCommands.js";
import DiscordJS, { Intents } from "discord.js";

//Load Dotenv
config();

// Create Bot Client
const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

// On ready handler
client.on("ready", () => {
  console.log("The bot is ready...");

  //Sample Guild Command for testing
  const guildId = process.env.DEMO_GUILD_ID;
  const guild = client.guilds.cache.get(guildId);
  let commands;

  if (guild) {
    //   Testing Guild specific commands
    console.log("In Development...");
    commands = guild.commands;
  } else {
    //   Production: Public commands on all active guilds
    console.log("In Production...");
    commands = client.application?.commands;
  }

  //   Create commands offered by the bot
  createCommands(commands);

  //   Listen for interactions
  client.on("interactionCreate", async (interaction) => {
    try {
      if (interaction.isCommand()) {
        const { commandName, options } = interaction;
        await handleCommands(interaction, commandName, options);
      } else {
        // Nothing to handle for now
        return;
      }
    } catch (error) {
      console.error("Something happened...", error);
    }
  });
});

// Login the client ==> Bot made Online
client.login(process.env.DISCORD_BOT_TOKEN);

// SANDBOX

// console.log(await getBoredLink());
