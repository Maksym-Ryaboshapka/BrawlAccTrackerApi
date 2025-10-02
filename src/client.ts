import {Client} from "brawl-api-wrapper";
import {BS_TOKEN} from "./config";

const bsClient = new Client(BS_TOKEN);
export default bsClient;