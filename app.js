const {Telegraf} = require("telegraf");
const dotenv = require("dotenv");
const startCommand = require("./commands/start.command");
const helpCommand = require("./commands/help.command");
const addToGroupCommand = require("./commands/addToGroup.command");
const newGroupWelcomeMessageCommand = require("./commands/newGroupWelcomeMessage.command");
const getCryptoMoneyCommand = require("./commands/getCryptoMoney.command");
const getFiatMoneyCommand = require("./commands/getFiatMoney.command");
const dateCommand = require("./commands/date.command");
const echoCommand = require("./commands/echo.command");

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startCommand);
bot.help(helpCommand);
bot.action("addToGroup", addToGroupCommand);
bot.on("new_chat_members", newGroupWelcomeMessageCommand);
bot.hears(/^\/crypto */i, getCryptoMoneyCommand);
bot.hears(/^\/fiat */i, getFiatMoneyCommand);
bot.hears(/\/time/i, dateCommand);
bot.hears(/^\/echoo */i, echoCommand);

bot.launch()
    .then(() => console.log("Bot is running..."))
    .catch(err => `Bot failed to start, error => ${err}`);

bot.catch(err => console.log(`Bot error => ${err}`));