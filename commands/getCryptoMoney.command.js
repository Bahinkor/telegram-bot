const cryptoMoneyController = require("../controllers/cryptoMoney.controller");
const cryptoConverter = require("./../utils/cryptoConverter.util");
const getDate = require("./../utils/getDate.util");

module.exports = async ctx => {
    try {
        const text = ctx.update.message.text;
        const textArray = text.split(" ");
        const cryptoName = textArray.length > 2 ? textArray[2] : textArray[1];
        let numberCrypto = textArray.length > 2 ? +textArray[1] : 1;

        if (!numberCrypto || numberCrypto < 1) numberCrypto = 1;

        if (typeof cryptoName !== "string" || !cryptoName.trim()) {
            ctx.reply("Please enter a valid crypto name");
            return false;
        }

        const mainCryptoName = cryptoConverter(cryptoName);
        const coinData = await cryptoMoneyController.getCryptoMoneyData(mainCryptoName || cryptoName);

        if (!coinData) {
            ctx.reply("No information found! Please make sure the currency name is correct.");
            return false;
        }

        const oneCoinPrice = coinData.market_data.current_price.usd;
        const coinPrice = oneCoinPrice * numberCrypto;
        const coinRank = coinData.market_cap_rank;
        const coinPercentageChanges = coinData.market_data.price_change_percentage_24h;
        const coinChanges = Math.round(coinData.market_data.price_change_24h_in_currency.usd * 1000) / 1000;
        const UTCDate = getDate.getUTCDate();
        const IRDate = getDate.getIRDate();

        const textPattern = `💰 ${numberCrypto} ${coinData.name} = $${coinPrice}\n💵 Market Rank: ${coinRank}\n\n〽️ Percentage of changes in the last 24 hours: ${coinPercentageChanges}%\n📊 Changes in the last 24 hours: $${coinChanges}\n\n⏳ UTC Date: ${UTCDate}\n⌛ IR Date: ${IRDate}`;

        ctx.reply(textPattern);
    } catch (err) {
        console.log(`get crypto money command error => ${err}`);
        ctx.reply("server error");
    }
};