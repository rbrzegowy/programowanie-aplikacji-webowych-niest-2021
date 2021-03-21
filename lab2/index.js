var clapSound;
var kickSound;
var channel1Play = [];
// interface KeyToSound {
//     [keyCode: string]: HTMLAudioElement
// }
// const mappedSounds: KeyToSound = {
//     's': clapSound,
//     'w': kickSound,
// }
// const someKey = 'w'
// mappedSounds[someKey]
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioTags();
}
function onChannel1Play() {
    channel1Play.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioTags() {
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1Play.push({ key: key, time: time });
    playSound(key);
    console.log(channel1Play);
}
function playSound(key) {
    // q - clap, w - kick
    switch (key) {
        case 'q':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'w':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
    }
}
