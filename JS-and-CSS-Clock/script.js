document.addEventListener('DOMContentLoaded', () =>{

const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    
    const now = new Date();

    //seconds
    const seconds  = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    

    //minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    

    //hours
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    // console logs
    console.log(hour + " hour");
    console.log(minutes + " nimutes");
    console.log(seconds + " seconds");
    //console.log(secondsDegrees);
}

setInterval(setDate, 1000);

})