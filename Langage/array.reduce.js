var nbs = [1, 2, 3, 4];

var result = nbs.reduce(function(acc, nb) {


    return acc + nb;
}, 0);

console.log(result);
