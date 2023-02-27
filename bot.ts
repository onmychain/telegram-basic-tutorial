import { Bot } from "grammy";
import dotenv from "dotenv";

// import token from .env file
dotenv.config()
const token = String(process.env.TOKEN)

const bot = new Bot(token)

bot.command("chat_id", ctx => ctx.reply("`" + ctx.chat.id.toString() + "`", { parse_mode: "MarkdownV2"}))

bot.start();
