module.exports = async ctx => {
    try {
        const text = ctx.update.message.text;
        const textArray = text.split(" ");
        textArray.splice(0, 1);
        const message = textArray.join(" ");
        const botData = await ctx.telegram.getChatMember(ctx.chat.id, ctx.botInfo.id);

        if (botData.status !== "administrator" && botData.status !== "creator") {
            return ctx.reply("To use this feature, the robot must be an administrator and be given access to delete messages.");
        }

        await ctx.deleteMessage();

        if (!message.trim()) return false;

        ctx.reply(message);

    } catch (err) {
        console.log(`echo command error => ${err}`);
    }
};