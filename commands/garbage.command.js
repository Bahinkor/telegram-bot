module.exports = ctx => {
    const entities = ctx.update.message.entities;

    if (!entities) return false;

    if (entities[0].type === "pre") {
        return ctx.reply(`Your code is garbage.\n\n- Linus Torvalds`, {
            reply_to_message_id: ctx.message.message_id,
        });
    }
};