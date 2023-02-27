import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config()
const token = String(process.env.TOKEN)

const bot = new Bot(token)

bot.command("chat_id", ctx => ctx.reply(ctx.chat.id.toString()))

bot.start();
