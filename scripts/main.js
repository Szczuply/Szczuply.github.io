const abilitiesButton = document.querySelector('#abilitiesButton')
const homeButton = document.querySelector('#homeButton')
const aboutButton = document.querySelector('#aboutButton')
const portfolioButton = document.querySelector('#portfolioButton')
const contactButton = document.querySelector('#contactButton')
const activator = document.querySelector('#nav-barActivator')
const NavBar = document.querySelector('.nav-bar')


homeButton.addEventListener(`click`, () =>{
    document.querySelector('.container .header').scrollIntoView();
    NavBar.classList.toggle('open')
})

aboutButton.addEventListener(`click`, () =>{
    document.querySelector('.about').scrollIntoView();
    NavBar.classList.toggle('open')
})

portfolioButton.addEventListener(`click`, () =>{
    document.querySelector('.portfolio').scrollIntoView();
    NavBar.classList.toggle('open')
})

contactButton.addEventListener(`click`, () =>{
    document.querySelector('.contact').scrollIntoView();
    NavBar.classList.toggle('open')
})

activator.addEventListener('click', ()=>{
    NavBar.classList.toggle('open')
})



abilitiesButton.addEventListener('click', () => {
        document.querySelector('#html').classList.add('active')
        document.querySelector('#css').classList.add('active')
        document.querySelector('#js').classList.add('active')
})

function DarkModeToggle(){
    document.body.classList.toggle("dark-mode")
}

