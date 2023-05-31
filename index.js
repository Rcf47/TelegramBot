const TelegramApi = require('node-telegram-bot-api')
const token = require('./.token')

const bot = new TelegramApi(token, { polling: true })
