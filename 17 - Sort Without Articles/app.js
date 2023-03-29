function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

window.addEventListener('DOMContentLoaded', ()=> {

    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    

    const sortBands = bands.sort(function (a, b){
        if(strip(a) > strip(b)){
            return 1
        }else{
            return -1
        }
    })
    console.log(sortBands);
    // console.log(strip('The Plot in You'));

    document.querySelector('#bands').innerHTML = sortBands.map(band => `<li>${band}</li>`).join('');
});