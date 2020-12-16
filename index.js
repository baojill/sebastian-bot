const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();

const token = process.env.TOKEN;

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg => {
    if (msg.content === "HELLO") {
        msg.reply('TINGALING CHEN IS UGLY AF');
    }
})

bot.login(token);