const fiatMoneyController = require("./../controllers/fiatMoney.controller");
const fiatConverter = require("./../utils/fiatConverter.util");

module.exports = async ctx => {
    try {
        const text = ctx.update.message.text;
        const textArray = text.split(" ");
        const fiatName = textArray.length > 2 ? textArray[2] : textArray[1];
        let numberFiat = textArray.length > 2 ? +textArray[1] : 1;

        if (!numberFiat || numberFiat < 1) numberFiat = 1;

        if (typeof fiatName !== "string" || !fiatName.trim()) {
            ctx.reply("Please enter a valid crypto name");
            return false;
        }

        const mainFiatName = fiatConverter(fiatName);
        const fiatData = await fiatMoneyController.getFiatData(mainFiatName || fiatName);
        const IRRData = await fiatMoneyController.getIRRData();

        ctx.reply(`fiat: ${fiatData} | irr: ${IRRData}`);

    } catch (err) {
        console.log(`get fiat money command error => ${err}`);
        ctx.reply("server error");
    }
};