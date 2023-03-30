window.addEventListener('DOMContentLoaded', ()=> {

    const timesNodes = Array.from(document.querySelectorAll('[data-time'));

    console.log(timesNodes);

    const seconds = timesNodes
        .map(nodes => nodes.dataset.time)
        .map(timeCode => {
            const [mins, secs] = timeCode.split(':').map(parseFloat);
            return (mins * 60) + secs;
        })
        .reduce((total, vidSeconds) => total + vidSeconds);

    // console.log(seconds)
    
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const minutes = Math.floor(secondsLeft / 60);

    secondsLeft = secondsLeft % 60;

    console.log(`The Total is ${hours} hours, ${minutes} minutes and ${secondsLeft} seconds`);

})