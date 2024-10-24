exports.getFiatData = async fiatName => {
    try {
        const res = await fetch(`https://api.currencylayer.com/convert?access_key=${process.env.FIAT_TOKEN}&from=${fiatName}&to=USD&amount=1`);
        const data = await res.json();

        if (!data.success) return false;

        return data.result;

    } catch (err) {
        console.log(`get fiat data controller error => ${err}`);
    }
};

exports.getIRTData = async () => {
    try {
        const res = await fetch("https://api.tetherland.com/currencies");
        const data = await res.json();

        if (data.status !== 200) return false;

        return data.data.currencies.USDT.price;

    } catch (err) {
        console.log(`get IRR data controller error => ${err}`);
    }
};