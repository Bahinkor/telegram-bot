const {Markup} = require("telegraf");

module.exports = ctx => {
    if (ctx.chat.type !== "private") {
        ctx.reply("bot is online.");
        return false
    }

    ctx.reply(
        "Hello friend, welcome to our robot.\nClick the button below to add the robot to the group.",
        Markup.inlineKeyboard([
            Markup.button.callback("add to group", "addToGroup"),
        ]),
    );
};