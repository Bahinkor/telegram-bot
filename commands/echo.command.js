module.exports = async ctx => {
    try {
        const text = ctx.update.message.text;
        const textArray = text.split(" ");
        textArray.splice(0, 1);
        const message = textArray.join(" ");

        await ctx.deleteMessage();

        if (!message.trim()) return false;

        ctx.reply(message);

    } catch (err) {
        console.log(`echo command error => ${err}`);
    }
};