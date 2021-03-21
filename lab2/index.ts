let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;

const channel1: any[] = [];

appStart();

function appStart(): void {
    document.body.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play.addEventListener('click', onPlayChannel1)
    getSounds();
}
function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    });
}
function getSounds(): void {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}
function onKeyDown(ev: KeyboardEvent): void {
    console.log(ev);
    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push({ key, time })
    playSound(key);
    console.log(
        channel1
    );

}

function playSound(key: string): void {
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
