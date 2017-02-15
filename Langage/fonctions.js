// Module :
// 1 fonction par fichier qui créée une portée de fichier
// IIFE : Immediately Invoked Function Expression
(function() {

}());


(function () {

    var sum = function (a, b) {
        return a + b;
    };

    console.log(sum(1, 2)); // 3
    console.log(sum('1', 2)); // '12'
    console.log(sum(1, 2, 3, 4, 5)); // 3
    console.log(sum(1)); // NaN

    var sum = function (a, b) {

        if (a === undefined || b === undefined) {
            throw new Error('a et b obligatoires');
        }

        return a + b;
    };

    try {
        sum(1);
    }
    catch (e) {
        console.error(e.message);
    }
    finally {

    }

    var sum = function (a, b) {
        var result = a + b;

        for (var i=2; i<arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    };

    console.log(sum(1, 2, 3, 4, 5)); // 15

    var sum = function (a, b) {

        b = b || 0;

        return a + b;
    };

    console.log(sum(1)); // 1

// Portée
    var prenom = 'Romain';

    var hello = function() {
        // on a accès à la variable prénom qui est dans la
        // portée du dessus
        console.log('Bonjour ' + prenom);
    };

    hello();

    // closure (portée)
    var logClosure = function(msg) {
        return function() {
            console.log(msg);
        };
    };

    var logHello = logClosure('Hello');
    logHello();

    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    for (var i=0; i<3; i++) {
        setTimeout(logClosure(i), 1000);
    }


}());