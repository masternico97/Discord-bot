const Discord = require('discord.js');
const auth = require('./config.json');

const client = new Discord.Client();

client.login(auth.token);

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    // Nuestro bot necesita saber si ejecutará un
    // Escuchará los mensajes que empiecen con 'auth.prefix'
    if (message.content.substring(0, 1) == auth.prefix) {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch (cmd) {
            case 'hola':
                message.channel.send('¡Saludos '+message.author.username+' ¿Qué tal todo?');
                break;

            case 'server':
                message.channel.send('Nombre del servidor: '+message.guild.name+'\nNumero de miembros: '+message.guild.memberCount);
                break;

            case 'd4':
                var d4 = Math.round(Math.random()*4);
                message.channel.send('Tirando el :game_die:\nResultado del d4: '+d4);
                break;

            case 'd6':
                var d6 = Math.round(Math.random()*6);
                message.channel.send('Tirando el :game_die:\nResultado del d6: '+d6);
                break;

            case 'd8':
                var d8 = Math.round(Math.random()*8);
                message.channel.send('Tirando el :game_die:\nResultado del d8: '+d8);
                break;

            case 'd10':
                var d10 = Math.round(Math.random()*10);
                message.channel.send('Tirando el :game_die:\nResultado del d10: '+d10);
                break;

            case 'd12':
                var d12 = Math.round(Math.random()*12);
                message.channel.send('Tirando el :game_die:\nResultado del d12: '+d12);
                break;

            case 'd20':
                var d20 = Math.round(Math.random()*20);
                message.channel.send('Tirando el :game_die:\nResultado del d20: '+d20);
                break;
                
            case 'd100':
                var d100 = Math.round(Math.random()*100);
                message.channel.send('Tirando el :game_die:\nResultado del d100: '+d100);
                break;

            case 'españita':
                message.channel.send(':flag_es::flag_es::flag_es::flag_es::flag_es::flag_es:'+
                                     ':flag_es::flag_es::flag_es::flag_es::flag_es::flag_es:');
                break;
                           
            case 'comandos':
                message.channel.send('Comandos:\n' +
                                    ':wave: *hola: El bot te saluda\n' +
                                    ':busts_in_silhouette: *server: Muestra información del servidor\n' +
                                    ':game_die: *d4: Tira un d4\n' +
                                    ':game_die: *d6: Tira un d6\n' +
                                    ':game_die: *d8: Tira un d8\n' +
                                    ':game_die: *d10: Tira un d10\n' +
                                    ':game_die: *d12: Tira un d12\n' +
                                    ':game_die: *d20: Tira un d20\n' +
                                    ':game_die: *d100: Tira un d100\n' +
                                    ':gear: *comandos: ¿Enserio no sabes que hace este comando?');
                break;
        }
    }
});