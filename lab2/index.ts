let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;

const channel1: any[] = [];

appStart();
function appStart(): void {
    document.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
}
function onChannel1Play(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function getAudioElements() {
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({ key, time })
    playSound(key);
    console.log(channel1);
}
function playSound(key: string): void {
    switch (key) {
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 's':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
    }
}
