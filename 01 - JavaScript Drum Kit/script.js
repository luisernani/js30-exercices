document.addEventListener('DOMContentLoaded', function(){
 

    function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        
        // Stop the function from running all togethe
        if(!audio) return;

        // Rewind the start
        audio.currentTime = 0;
        audio.play();
        
        key.classList.add('playing');
    }
    
    //Animation starts
    window.addEventListener('keydown', playSound);

    //Animantion ends
    function removeTransition(e){
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));


});