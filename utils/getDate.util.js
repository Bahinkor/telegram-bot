exports.getUTCDate = () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const hour = now.getUTCHours();
    const minute = now.getUTCMinutes();

    const date = `${year}/${month}/${day} | ${hour}:${minute}`;
    return date;
};

exports.getIRDate = () => {
    const now = new Date();
    const IRDate = now.toLocaleDateString("fa-IR", {timeZone: "Asia/Tehran"});
    const IRHours = now.getHours().toLocaleString("fa-IR");
    const IRMinutes = now.getMinutes().toLocaleString("fa-IR");

    const date = `${IRDate} | ${IRHours}:${IRMinutes}`;
    return date;
};