const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
	if (message.body === 'oi') {
		// reply back "pong" directly to the message
		message.reply('ola boa tarde');
	}

    if (message.body === 'boa noite') {
		// reply back "pong" directly to the message
		message.reply('ola como posso ajudar');
	}
});


client.initialize();
