const TeleramBot = require ('node-telegram-bot-api')

const TOKEN = '808586555:AAGehq0d_xYrNeQLFkC8Z2mKxul5K45HcvM'

const bot = new TeleramBot ("TOKEN", {polling : true})

bot.on ('message', (msg) => {
    console.log (msg)
    bot.sendMessage (msg.chat.id, 'Hi!')
})