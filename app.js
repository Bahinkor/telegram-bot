const {Telegraf} = require('telegraf');
const dotenv = require("dotenv");
const digitalCoinController = require("./controllers/digitalCoin.controller");
const startCommand = require("./commands/start.command");

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startCommand);

bot.action("addToGroup", ctx => {
    ctx.reply(`added to group:\nhttps://t.me/${process.env.BOT_ID}?startgroup=true`);
});

bot.on("new_chat_members", ctx => {
    const newMembers = ctx.message.new_chat_members;

    newMembers.forEach(member => {
        if (member.id === ctx.botInfo.id) ctx.reply("The bot has been successfully added to the group.");
    });
});

bot.on("message", async ctx => {
    const text = ctx.update.message.text;
    const coinData = await digitalCoinController.getDigitalCoinData(text);

    if (!coinData) {
        ctx.reply("No information found! Please make sure the currency name is correct.");
        return false;
    }

    const coinPrice = coinData.market_data.current_price.usd;

    ctx.reply(`${coinPrice}$`);
});

bot.launch()
    .then(() => console.log("Bot is running..."))
    .catch(err => `Bot failed to start, error => ${err}`);

bot.catch(err => console.log(`Bot error => ${err}`));