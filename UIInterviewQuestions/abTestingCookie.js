function getRandomInt(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;

}

var random = getRandomInt(1, 100);

if (random <= 50) {
    document.cookie = "DriftPlaybook=A"
} else {
    document.cookie = "DriftPlaybook=B"
}
    