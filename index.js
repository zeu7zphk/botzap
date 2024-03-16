const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Cria um cliente WhatsApp
const client = new Client();

// Evento para receber o código QR e iniciar a sessão
client.on('qr', (qr) => {
    console.log('Escaneie o QR Code usando o WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// Evento para verificar quando o cliente está pronto
client.on('ready', () => {
    console.log('Bot conectado!');
});

// Evento para receber mensagens
client.on('message', async (message) => {
    console.log('Nova mensagem recebida:', message.body);
    // Envie uma resposta automática
    await message.reply('Olá! Eu sou um bot de WhatsApp.');
});

// Inicializa o cliente WhatsApp
client.initialize();
