
const sciezkaGalerii = 'url("../galeria/';
const typPliku = '.jpg")';
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
    console.log(sciezkaGalerii + aktywnyObraz + typPliku);
    aktywnySlajd.style.backgroundImage = sciezkaGalerii + aktywnyObraz + typPliku
}

const zmniejszenie = () => {
    galeria.classList.add('ukrytaGaleria');
    aktywnyObraz = 0;
    aktywnySlajd.classList = '';
    aktywnySlajd.classList.add('slajd');
}

const zmianaSlajda = () => {
    aktywnySlajd.classList = '';
    aktywnySlajd.style.backgroundImage = '';
    aktywnySlajd.classList.add('slajd');
    console.log(sciezkaGalerii + aktywnyObraz + typPliku);
    aktywnySlajd.style.backgroundImage = sciezkaGalerii + aktywnyObraz + typPliku;
}

const wstecz = () => {
    if (aktywnyObraz === 1) {
        aktywnyObraz = miniatury.length;
        zmianaSlajda();
    } else {
        aktywnyObraz = aktywnyObraz - 1;
        zmianaSlajda();
    }
}

const naprzod = () => {
    if (aktywnyObraz === miniatury.length) {
        aktywnyObraz = 1;
        zmianaSlajda();
    } else {
        aktywnyObraz = aktywnyObraz + 1;
        zmianaSlajda();
    }
}

miniatury.forEach(miniatura => {
    miniatura.addEventListener("click", powiekszenie);
})

zamknij.addEventListener('click', zmniejszenie);
poprzedni.addEventListener('click', wstecz);
nastepny.addEventListener('click', naprzod);