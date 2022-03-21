export default async (commands) => {
  //   Create a "bored" command
  commands?.create({
    name: "bored",
    description: "Replies with a cool new website for you to try out :)",
  });

  //   Create a "help" command
  commands?.create({
    name: "help",
    description: "Offers help to use The Bored Bot",
  });

  //   Create a "contribute" command
  commands?.create({
    name: "contribute",
    description:
      "Found suggestions/issues? - Open the GitHub repository of The Bored Bot",
  });
};
