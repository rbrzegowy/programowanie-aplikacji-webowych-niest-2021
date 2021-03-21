let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;

const channel1Play: any[] = [];

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
function appStart(): void {
    document.addEventListener('keypress', onKeyPress);
    const btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play)
    getAudioTags();
}
function onChannel1Play() {
    channel1Play.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function getAudioTags(): void {
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
}

function onKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    channel1Play.push({ key, time })
    playSound(key);

    console.log(channel1Play)
}

function playSound(key: string): void {
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
