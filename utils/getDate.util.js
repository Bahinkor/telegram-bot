module.exports = () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();
    const hour = now.getUTCHours();
    const minute = now.getUTCMinutes();

    const date = `${year}-${month}-${day} ${hour}:${minute}`;
    return date;
};