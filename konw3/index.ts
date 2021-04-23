// callbacki
document.body.addEventListener('click', onClick)
function onClick() {

}

// callback hell
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'plik1')
// xhr.send()
// xhr.addEventListener('load', (e)=>{
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'plik2')
//     xhr.send()
//     xhr.addEventListener('load', (e)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', 'plik3')
//         xhr.send()
//         xhr.addEventListener('load', (e)=>{
//             const xhr = new XMLHttpRequest()
//             xhr.open('GET', 'plik4')
//             xhr.send()
//             xhr.addEventListener('load', (e)=>{
//                 const xhr =
//             })
//         })
// })
// })


// Promises
// const weather = fetch('urldopogodynki');
// weather
//     .then(respObject => {
//         console.log("First .then", respObject);
//         return respObject.json();
//     })
//     .then(pogoda => 
//         console.log("Second .then", pogoda);
//     )

//  koniecPracy
//     .then(wykapSie)
//     .then(znajdzRower)
//     .then(znajdzKnajpe)
//     .then(bawSieDobrze)
//     .then(wrocBezpiecznie)
//     .catch(upsPolicja)

// // 2. Budowanie własnych Promise()
// const p = new Promise((resolve, reject) => {
//     // Promise może zostać rozwiązana lub odrzucona - nigdy obydwa przypadki
//     // rozwiązanie Promise: resolve(retVal)
//     // odrzucenie Promise: reject(retVal)
//     setTimeout(() => {
//       console.log("Promise resolved, but .then not fired..:(");
//       resolve("Promises are cool!");
//     }, 2000);
//     setTimeout(() => {
//       console.log("Promise rejected");
//       // we reject and return Error object - exception
//       reject("Promises can be rejected");
//     }, 1000);
//   });

//   p
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// const fakeWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Sun is shiniiing");
//     }, 3000);
// });

// const fakeFB = new Promise((resolve, reject) => {
//     let fb = {
//         sendPost(p) {
//             console.log(`Tom on fejsik says: ${p}`);
//         },
//     };
//     setTimeout(() => {
//         resolve(fb);
//     }, 1000);
// });

// // function gdyMamPogodeIFejsa() {

// // }

// Promise.all([fakeWeather, fakeFB])
// .then((responses) => {
//   // kolejność w tablicy jest taka sama, jak kolejność Promise w .all([])
//   console.log("Multpile Promises resolved", responses);
//   const [weather, fb] = responses;
//   fb.sendPost(weather);
// })
// .catch((errs) => {});

   // // 6. Tworzenie defaultowo rozwiązanych lub odrzuconych Promises

//    const resolved = Promise.resolve("I'm optimist!");
//    const rejected = Promise.reject("I'm pesimist");

//    function getWeather(url: string): Promise<any> {
//        if (!url) {
//            return Promise.reject(1);
//        }
//        return fetch('url');
//    }
//    getWeather('asd').then(data => console.log(data))

   // async await
// --------------------
    // 1. w dalszym ciągu zagnieżdżamy kod (wewnątrz .then) - ale już tylko jednopoziomowo
    // --------------------
    // proces do wykonania:
    // 1. pobierz dane miejscowości
    // 2. pobierz wiadomości
    // 3. pobierz pogodę
    // 4. wyswietl pobrane dane

// wersja killing me softly
        const konfiguracja = fetch("100 - miejscowosc.txt").then((d) => d.text());
        // konfiguracja.then((wynik) => {
        //   const wiadomosci = fetch("zrodlowiadomosczfejsa");
        //   wiadomosci.then((listawiadomosc) => {
        //     const pogoda = fetch("pogodadlamiejscowosci");
        //     pogoda.then((temp) => {
        //      // prawie - nie mamy tutaj zmiennych wynik i listawiadomosci!
        //      console.log(miejscowoscData, wiadomosciData, pogodaData)
        //     });
        //   });
        // });

        // konfiguracja
        //     .then((konfig) =>fetch("zrodlowiadomosczfejsa"))
        //     .then((wiadomosczfejsa) => fetch("pogodadlamiejscowosci"))
        //     .then(pogoda => console.log(wynik, wiadomosczfejsa, pogoda))

           // await
      async function asyncFn() {
          const miejscowoscData = await konfiguracja;
          const wiadomosciData = await fetch("zrodlowiadomosczfejsa");
          const pogodaData = await fetch("pogodadlamiejscowosci");
          console.log(miejscowoscData, wiadomosciData, pogodaData)
      }
    //   (async () => await asyncFn())() //IIFE
    //   Fn2()
