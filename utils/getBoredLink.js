import cheerio from "cheerio";
import axios from "axios";

const getBoredLink = async () => {
  const { data } = await axios.get("https://www.boredbutton.com/random");
  let $ = cheerio.load(data);
  const boredUrl = $("iframe").attr("src");

  const { data: randomLinkData } = await axios.get(boredUrl);
  $ = cheerio.load(randomLinkData);
  const boredUrlTitle = $("title").text();
  const boredUrlDesc = $("meta[name='description']").attr("content");

  return [boredUrl, boredUrlTitle, boredUrlDesc];
};

export default getBoredLink;
