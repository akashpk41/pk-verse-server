import "dotenv/config";
import { StreamChat } from "stream-chat";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
if (!apiKey || !apiSecret) {
  console.error("Stream API key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData
  } catch (err) {
    console.log(`Error in createStreamUser `, err.message);
  }
};


// TODO: DO IT LATER
export const generateStreamToken = (userId) => {}