module.exports = async ctx => {
    try {
        const commandText = ctx.update.message.text;

        if (commandText.toLowerCase() === "/joke programming") {
            const res = await fetch("https://v2.jokeapi.dev/joke/Programming");
            const data = await res.json();

            if (data.type === "single") {
                return ctx.reply(data.joke);
            }

            ctx.reply(data.setup);
            return setTimeout(() => {
                ctx.reply(data.delivery);
            }, 500);
        }

        const res = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await res.json();

        if (data.type === "single") {
            return ctx.reply(data.joke);
        }

        ctx.reply(data.setup);
        setTimeout(() => {
            ctx.reply(data.delivery);
        }, 500);

    } catch (err) {
        console.log(`joke command error => ${err}`);
        return ctx.reply("fetch error");
    }
};