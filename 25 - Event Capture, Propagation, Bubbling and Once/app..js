const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);

    
    e.stopPropagation() //Prevent to click the parent element

    
}

divs.forEach(div => div.addEventListener('click', logText));
