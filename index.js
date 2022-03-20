import { config } from "dotenv";
import getBoredLink from "./utils/getBoredLink.js";

//Load Dotenv
config();

console.log(await getBoredLink());
