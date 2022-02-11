const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();

const lightbox = document.createElement('div')
lightbox.id='lightbox'
document.body.appendChild(lightbox)

const images = document.querySelector('img')
images.forEach(Image => {
    images.addEventListener('click', e =>{
        lightbox.classList.add('active')
    })
})
