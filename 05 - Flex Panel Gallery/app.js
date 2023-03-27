document.addEventListener('DOMContentLoaded', function() {
    


    const panel = document.querySelectorAll(".panel");

    function toggleOpen(){
      this.classList.toggle('open');
    }
    function toggleActive(e){
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
    }

    panel.forEach(panel => panel.addEventListener("mouseover", toggleOpen));
    panel.forEach(panel => panel.addEventListener('mouseout', toggleOpen));
    panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});