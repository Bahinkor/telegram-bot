const digitalCoinController = require("../controllers/digitalCoin.controller");
const cryptoConverter = require("./../utils/cryptoConverter.util");
const getDate = require("./../utils/getDate.util");

module.exports = async ctx => {
    const text = ctx.update.message.text;
    const cryptoName = text.split(" ")[1];

    if (typeof cryptoName !== "string" || !cryptoName.trim()) {
        ctx.reply("Please enter a valid crypto name");
        return false;
    }

    const mainCryptoName = cryptoConverter(cryptoName);
    const coinData = await digitalCoinController.getDigitalCoinData(mainCryptoName || cryptoName);

    if (!coinData) {
        ctx.reply("No information found! Please make sure the currency name is correct.");
        return false;
    }

    const coinPrice = coinData.market_data.current_price.usd;
    const coinRank = coinData.market_cap_rank;
    const coinPercentageChanges = coinData.market_data.price_change_percentage_24h;
    const coinChanges = Math.round(coinData.market_data.price_change_24h_in_currency.usd);
    const UTCDate = getDate.getUTCDate();
    const IRDate = getDate.getIRDate();

    const textPattern = `💰 1 ${coinData.name} = $${coinPrice}\n💵 Market Rank: ${coinRank}\n\n📍 Percentage of changes in the last 24 hours: ${coinPercentageChanges}%\n📍 Changes in the last 24 hours: $${coinChanges}\n\n🕐 UTC Date: ${UTCDate}\n🕐 IR Date: ${IRDate}`;

    ctx.reply(textPattern);
};