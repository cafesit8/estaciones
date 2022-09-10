
const videos = document.querySelectorAll('.video');
const content = document.querySelectorAll('#content');
const circle = document.querySelectorAll('.circle');
const options = document.querySelectorAll('#a');
const icon = document.getElementById('icon');
const list = document.getElementById('list')
// let activa = 1;

let sliderNav = function(manual){

    circle.forEach(circle=>{
        circle.classList.remove('active')
    })

    content.forEach(content=>{
        content.classList.remove('active')
    })

    videos.forEach(video=>{
        video.classList.remove('active')
    })

    circle[manual].classList.add('active');
    videos[manual].classList.add('active');
    content[manual].classList.add('active');
}

circle.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        sliderNav(i)
    })
})

let Headers = (active)=>{
    options.forEach(btn=>{
        btn.classList.remove('active')

    })

    options[active].classList.add('active')
    list.classList.remove('active')
    icon.classList.remove('open')
    icon.src = 'recursos/hamburguer.png'
}

options.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        Headers(i)
    })
})

icon.addEventListener('click', ()=>{
    icon.classList.toggle('open')
    list.classList.toggle('active')
    if(icon.src.includes('recursos/hamburguer.png')){
        icon.src = 'recursos/close.png'
    }else{
        icon.src = 'recursos/hamburguer.png'
    }
})

