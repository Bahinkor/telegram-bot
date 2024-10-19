module.exports = ctx => {
    const newMembers = ctx.message.new_chat_members;

    newMembers.forEach(member => {
        if (member.id === ctx.botInfo.id) ctx.reply("The bot has been successfully added to the group.");
    });
}