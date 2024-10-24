module.exports = ctx => {
    ctx.reply("/help Show help\n" +
        "/crypto x Get the price of cryptocurrency X\n" +
        "/fiat x Get the price of fiat currency X\n" +
        "/time Show the current time\n" +
        "/echo Repeat the message (requires admin access and message deletion rights in groups)\n" +
        "/meme Random meme\n" +
        "/joke Random joke\n" +
        "/joke programming Random programming joke\n" +
        "If you send it a piece of code wrapped in triple backticks, it will joke about your code and make a snarky remark.\n");
};