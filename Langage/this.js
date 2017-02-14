var hello = function(msg) {
    this.log('Hello ' + msg);
};

hello.call(console, 'Romain');
hello.apply(console, ['Romain']);
var helloConsole = hello.bind(console);
helloConsole('Romain');