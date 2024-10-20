const fiatMoneyController = require("./../controllers/fiatMoney.controller");
const fiatConverter = require("./../utils/fiatConverter.util");
const getDate = require("../utils/getDate.util");

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
        const oneFiatData = await fiatMoneyController.getFiatData(mainFiatName || fiatName);
        const oneIRTData = await fiatMoneyController.getIRTData();

        if (!oneFiatData || !oneIRTData) {
            ctx.reply("No information found! Please make sure the currency name is correct.");
            return false;
        }

        const fiatPrice = Math.round(oneFiatData * numberFiat * 100) / 100;
        const IRTPrice = Math.round(fiatPrice * oneIRTData).toLocaleString();
        const UTCDate = getDate.getUTCDate();
        const IRDate = getDate.getIRDate();

        const textPattern = `💰 ${numberFiat} ${fiatName.toUpperCase()} = $${fiatPrice}\n💵 ${numberFiat} ${fiatName.toUpperCase()} to IRT = ${IRTPrice}\n\n⏳ UTC Date: ${UTCDate}\n⌛ IR Date: ${IRDate}`;

        ctx.reply(textPattern);

    } catch (err) {
        console.log(`get fiat money command error => ${err}`);
        ctx.reply("server error");
    }
};