const miniatury = document.querySelectorAll('.miniatura');
const galeria = document.getElementById("galeria");
const zamknij = document.getElementById('zamknij');
const aktywnySlajd = document.getElementById("slajd");
const poprzedni = document.querySelector('.wstecz');
const nastepny = document.querySelector('.naprzod');
let aktywnyObraz = 0;

const powiekszenie = (e) => {
    aktywnyObraz = parseInt(e.target.dataset.indexNumber);
    console.log(aktywnyObraz);
    galeria.classList.remove('ukrytaGaleria');
    aktywnySlajd.classList.add('s' + aktywnyObraz);
}

miniatury.forEach(miniatura => {
    miniatura.addEventListener("click", powiekszenie);
})

const zmniejszenie = () => {
    galeria.classList.add('ukrytaGaleria');
    aktywnyObraz = 0;
    aktywnySlajd.classList = '';
    aktywnySlajd.classList.add('slajd');
}

const wstecz = () => {
    if (aktywnyObraz === 1) {
        aktywnyObraz = 6;
        aktywnySlajd.classList = '';
        aktywnySlajd.classList.add('slajd');
        aktywnySlajd.classList.add('s' + aktywnyObraz);
    } else {
        aktywnyObraz = aktywnyObraz - 1;
        aktywnySlajd.classList = '';
        aktywnySlajd.classList.add('slajd');
        aktywnySlajd.classList.add('s' + aktywnyObraz);
    }
}

const naprzod = () => {
    if (aktywnyObraz === 6) {
        aktywnyObraz = 1;
        aktywnySlajd.classList = '';
        aktywnySlajd.classList.add('slajd');
        aktywnySlajd.classList.add('s' + aktywnyObraz);
    } else {
        aktywnyObraz = aktywnyObraz + 1;
        aktywnySlajd.classList = '';
        aktywnySlajd.classList.add('slajd');
        aktywnySlajd.classList.add('s' + aktywnyObraz);
    }
}

zamknij.addEventListener('click', zmniejszenie);
poprzedni.addEventListener('click', wstecz);
nastepny.addEventListener('click', naprzod);