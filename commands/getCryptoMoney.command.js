const digitalCoinController = require("../controllers/digitalCoin.controller");

module.exports = async ctx => {
    const text = ctx.update.message.text;
    const coinData = await digitalCoinController.getDigitalCoinData(text);

    if (!coinData) {
        ctx.reply("No information found! Please make sure the currency name is correct.");
        return false;
    }

    const coinPrice = coinData.market_data.current_price.usd;

    ctx.reply(`${coinPrice}$`);
};