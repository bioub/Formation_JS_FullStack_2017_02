var nbs = [4, 3, 1, 2];

var result = nbs.reduce(function(acc, nb) {
    return acc + nb;
}, 0);

console.log(result);

/*
0 + 4 = 4
4 + 3 = 7
7 + 1 = 8
8 + 2 = 10
 */