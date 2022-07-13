addEventListener('DOMContentLoaded', () =>{

    inputs = document.querySelectorAll('.controls input');

    function handleUpdates(){
        const sufflix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + sufflix);

    }

    inputs.forEach(input => input.addEventListener('change', handleUpdates));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));

})