const Telegraf = require ('node-telegram-bot-api')

console.log("Bot has been started.")

const bot = new Telegraf ('808586555:AAGehq0d_xYrNeQLFkC8Z2mKxul5K45HcvM', {
    polling: {
        interval : 300,
        autoStart : true,
        params: {
            timeout :10
        }
    }
})

bot.on ('message', (msg) => {
    console.log(msg)
    bot.sendMessage (msg.chat.id, 'Hi!')
})
