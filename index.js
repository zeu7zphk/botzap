// index.js

const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const readline = require('readline');

const client = new Client();

client.on('qr', (qr) => {
    console.log('Escaneie o QR Code usando o WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot conectado!');
});

client.on('message', async (message) => {
    if (message.body.toLowerCase() === 'run.px') {
        const numbers = await getInput('Digite os números dos participantes separados por vírgula: ');
        const groupName = await getInput('Digite o nome do grupo: ');
        const description = await getInput('Digite a descrição do grupo: ');

        try {
            const group = await client.createGroup(groupName, numbers.split(','), description);
            console.log('Grupo criado:', group.id._serialized);
            message.reply('Grupo criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar grupo:', error);
            message.reply('Erro ao criar grupo.');
        }
    }
});

function getInput(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

client.initialize();
