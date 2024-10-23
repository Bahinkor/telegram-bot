module.exports = async ctx => {
    try {
        const res = await fetch("https://www.reddit.com/r/memes/random/.json", {
            method: "GET",
            headers: {
                "User-Agent": "Reddit Bot",
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (res.status === 200) {
            const memeTitle = data[0].data.children[0].data.title;
            const memeImage = data[0].data.children[0].data.url_overridden_by_dest;

            ctx.sendPhoto(memeImage, {
                caption: memeTitle,
            });
        }

    } catch (err) {
        console.log(`meme command error => ${err}`);
        return ctx.reply("fetch error");
    }
};