const showImg = () => {
    img.src = arraySrc[i];
    i = (i < arraySrc.length - 1) ? i + 1 : 0;
}
const interval = () => {
    setInterval(showImg, 2500);
}
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -25;
        grande.style.transform = `translateX(${ operacion }%)`;

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');

    })
})
let boton_wpp = document.getElementById("boton_wpp");
boton_wpp.innerHTML += `<a href="https://api.whatsapp.com/send?phone=+5492994181952" class="btn-wsp" target="_blank"><img src="icono/WhatsApp-logo.png" class="btn-wsp" alt="">
</a> `

</footer>`