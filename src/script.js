const track = document.querySelector('.carrosel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const container = track.parentElement;
 
let currentIndex = 0;

function getCarouselMetrics() {
    
    let slideDistance = slides[0].getBoundingClientRect().width;
    
    if (slides.length > 1) {
        slideDistance = slides[1].offsetLeft - slides[0].offsetLeft;
    }
 
    
    const containerWidth = container.getBoundingClientRect().width;
    
    const visibleSlides = Math.floor(containerWidth / slideDistance);
    
    const maxIndex = Math.max(0, slides.length - visibleSlides);
 
    
    return { slideDistance, maxIndex };
}
 
function updateCarousel() {
    
    if (slides.length === 0) return;
 
    
    const { slideDistance, maxIndex } = getCarouselMetrics();

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    track.style.transform = `translateX(-${currentIndex * slideDistance}px)`;
}

nextButton.addEventListener('click',() => {
    const { maxIndex } = getCarouselMetrics();
    
    currentIndex++;

    if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    updateCarousel();
});

prevButton.addEventListener('click',() => {
    const { maxIndex } = getCarouselMetrics();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    updateCarousel();
});

window.addEventListener('resize', updateCarousel);



updateCarousel();


const campoCPF = document.querySelector("")
const formulario = document.querySelector("")
const mensagemErro = document.querySelector("")

campoCPF.addEventListener('input', function(e) {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/(\d{3}) (\d)/, '$1.$2');
    v = v.replace(/(\d{3}) (\d)/, '$1.$2');
    v = v.replace(/(\d{3}) (\d{1,2})$/, '$1-$2');
    e.target.value  = v;
});

formulario.addEventListener('submit', function(evento) {
    if (!validarCPF(campoCPF.value)) {
        evento.preventDefault();
        mensagemErro.textContent = 'CPF inválido! verifique os números.';
    }
})