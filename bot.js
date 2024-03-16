const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    console.log('QR Code gerado. Escaneie-o com o seu celular:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Conexão bem-sucedida! Bot está pronto para ser usado.');
});

client.on('message', message => {
    console.log('Mensagem recebida:', message.body);
    // Adicione sua lógica para processar a mensagem e enviar uma resposta aqui
});

client.initialize();
