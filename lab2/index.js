var hihatSound;
var clapSound;
var channel1 = [];
appStart();
function appStart() {
    document.body.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play.addEventListener('click', onPlayChannel1);
    getSounds();
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getSounds() {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'a':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
    }
}
