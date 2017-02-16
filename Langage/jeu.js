const readline = require('readline');
const random = require('./random');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var Jeu = function() {
    this.entierAlea = random.getIntInclusive(0, 100);
    this.essais = [];
};

Jeu.prototype.jouer = function() {

    if (this.essais.length) {
        console.log('Vous avez déjà joué : ', this.essais.join(', '));
    }


    rl.question('Quel est le nombre ? ', answer => {

        var entierSaisi = parseInt(answer);

        if (isNaN(entierSaisi)) {
            console.log('Erreur : il faut saisir un nombre');
            return this.jouer();
        }

        this.essais.push(entierSaisi);

        if (entierSaisi < this.entierAlea) {
            console.log('Trop petit');
            return this.jouer();
        }

        if (entierSaisi > this.entierAlea) {
            console.log('Trop grand');
            return this.jouer();
        }

        console.log('Gagné');
        rl.close();

    });


};

module.exports = Jeu;