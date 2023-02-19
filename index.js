const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi bot de Discord!');
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Tu app está escuchando en el puerto ' + listener.address().port);
});

client.login('MTA3NjYxMTcxMDQwMTY1NDk0NA.G-S7_b.SEkdJ3dMp8-aCUddmyZ-gVczv1jSckQw5wyGY0');