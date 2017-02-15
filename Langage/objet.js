var Console = require('console').Console;

console.log(typeof console); // 'object'
console.log(typeof Math); // 'object'

console.log(typeof Math.sum); // 'undefined'

// Important en JS les objets sont extensibles
Math.sum = function(a, b) {
    return a + b;
};

console.log(typeof Math.sum); // 'function'

var backupRandom = Math.random;
Math.random = function() {
    return 0.5;
};
console.log(Math.random()); // 0.5
Math.random = backupRandom;

delete Math.sum;
console.log(typeof Math.sum); // 'undefined'

console.log(console instanceof Console); // true
console.log(console instanceof Object); // true

// Mauvaise pratique
var contact = new Object();
contact.prenom = 'Romain';
contact.hello = function() {
    return 'Bonjour je suis ' + this.prenom;
};

console.log(contact.hello()); // 'Bonjour je suis Romain'

// Bonne pratique pour des objets ponctuels
var contact = {
    prenom: 'Romain',
    hello: function() {
        return 'Bonjour je suis ' + this.prenom;
    }
};

console.log(contact.hello()); // 'Bonjour je suis Romain'

// Bonne pratique pour des objets récurrents
// fonction constructeur
var Contact = function(prenom) {
    this.prenom = prenom;
};

var romain = new Contact('Romain');
console.log(typeof romain); // 'object'
console.log(typeof Contact); // 'function'
console.log(romain.prenom); // 'Romain'

// Mauvaise pratique Pour les méthodes (soit dans l'objet)
var Contact = function(prenom, nom) {
    this.prenom = prenom;
    this.hello = function() {
        return 'Bonjour je suis ' + this.prenom;
    };
    this.getNom = function() {
        return nom;
    };
};

var romain = new Contact('Romain', 'Bohdanowicz');
console.log(romain.prenom); // 'Romain'
console.log(romain.hello()); // 'Bonjour je suis Romain'
console.log(romain.nom); // 'undefined'
console.log(romain.getNom()); // 'Bohdanowicz'
var eric = new Contact('Eric', 'Martin');
console.log(romain.hello === eric.hello); // false

// Bonne pratique Pour les méthodes (soit dans le prototype)
var Contact = function(prenom) {
    this.prenom = prenom;
};

Contact.getClass = function() {
    return 'Contact'
};

Contact.prototype.hello = function() {
    return 'Bonjour je suis ' + this.prenom;
};

var romain = new Contact('Romain');
console.log(romain.prenom); // 'Romain'
console.log(romain.hello()); // 'Bonjour je suis Romain'
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.toto); // undefined
console.log(Contact.getClass()); // 'Bonjour je suis Romain'
var eric = new Contact('Eric', 'Martin');
console.log(romain.hello === eric.hello); // true

// ES6 class
class Personne {
    constructor(prenom) {
        this.prenom = prenom;
    }

    hello() {
        return 'Bonjour je suis ' + this.prenom;
    }

    static getClass() {
        return 'Contact'
    }
}

class Formateur extends Personne {
    constructor(prenom, specialite) {
        super(prenom);
        this.specialite = specialite;
    }
    hello() {
        return super.hello() + ', ma spécialité est ' + this.specialite;
    }
}

console.log(typeof Personne); // 'function'
console.log(typeof Personne.prototype.hello); // 'function'