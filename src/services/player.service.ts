import bsClient from "../client";

export async function getPlayer(tag: string) {
    return await bsClient.getPlayer(tag);
}