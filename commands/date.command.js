const getDate = require("./../utils/getDate.util");

module.exports = ctx => {
    const UTCDate = getDate.getUTCDate();
    const IRDate = getDate.getIRDate();
    const textPattern = `🌐 UTC Time: ${UTCDate}\n🚩 IR Time: ${IRDate}`;

    ctx.reply(textPattern);
};