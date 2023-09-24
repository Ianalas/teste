function toggleMode() {
const html = document.documentElement /* document (objeto do js); documentElement ( é o que se refere ao html)*/ 

    html.classList.toggle('light')

const img = document.querySelector('#profile img')

if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png')
} else{
    img.setAttribute('src','./assets/avatar.png')
}
}