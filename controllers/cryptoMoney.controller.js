exports.getCryptoMoneyData = async (cryptoName) => {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/${cryptoName.toLowerCase()}`;
        const options = {
            method: "GET", headers: {
                accept: "application/json",
                "x-cg-pro-api-key": process.env.COIN_GECKO_TOKEN,
            },
        };

        const res = await fetch(url, options);
        if (res.status !== 200) return null;

        const data = await res.json();
        return data;

    } catch (err) {
        console.log(`getDigitalCoinData error => ${err}`);
    }
};