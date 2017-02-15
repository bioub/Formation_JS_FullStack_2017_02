const readline = require('readline');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var entierAlea = getRandomIntInclusive(0, 100);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var essais = [];

var jouer = function() {

    if (essais.length) {
        console.log('Vous avez déjà joué : ', essais.join(', '));
    }

    rl.question('Quel est le nombre ? ', function answerCb(answer) {

        var entierSaisi = parseInt(answer);

        if (isNaN(entierSaisi)) {
            console.log('Erreur : il faut saisir un nombre');
            return jouer();
        }

        essais.push(entierSaisi);

        if (entierSaisi < entierAlea) {
            console.log('Trop petit');
            return jouer();
        }

        if (entierSaisi > entierAlea) {
            console.log('Trop grand');
            return jouer();
        }

        console.log('Gagné');
        rl.close();

    });


};

jouer();
