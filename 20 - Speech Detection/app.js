window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    // console.log(e)
    const transcript = Array.from(e.results)
        .map(results => results[0])
        .map(results => results.transcript)
        .join('');
        console.log(transcript);

    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
});


recognition.addEventListener('end', recognition.start);
recognition.start();