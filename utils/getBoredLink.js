import cheerio from "cheerio";
import axios from "axios";

const getBoredLink = async () => {
  const { data } = await axios.get("https://www.boredbutton.com/random");
  const $ = cheerio.load(data);
  const boredUrl = $("iframe").attr("src");
  return boredUrl;
};

export default getBoredLink;
