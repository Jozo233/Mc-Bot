const mineflayer = require('mineflayer');
const sleep = require('util').promisify(setTimeout);

const startBot = () => {
    const bot = mineflayer.createBot({
        host: process.env.IP,
        username: process.env.NAME,
    })

    bot.on('login', async() => {
        console.log('Bot se připojil!');

        await sleep(10000);

        bot.end();
    })

    bot.on('kicked', () => startBot());
    bot.on('error', () => startBot());
}

setInterval(() => {
    startBot();
}, 30000)

startBot();
