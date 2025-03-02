import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

// Ensure that the OPENAI_KEY is not undefined or empty
if (!OPENAI_KEY) {
    throw new Error("OPENAI_API_KEY is missing or empty. Please set it in the .env file.");
}

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true, // Allows it to run in the browser
});

export default openai;
