import moment from 'moment';

export default class Horloge {
    constructor(containerElt) {
        this.containerElt = containerElt;
    }
    update() {
        this.containerElt.innerHTML = moment().format('HH:mm:ss');
    }
    start() {
        setInterval(this.update.bind(this), 1000);
    }
}

