document.addEventListener('DOMContentLoaded', function() {
    const pressed = [];
    const secretCode = 'gamarei';

    window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.slice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)){
        cornify_add();
        console.log('you did it')
    }
    })
});