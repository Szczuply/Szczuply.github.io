const abilitiesButton = document.querySelector('#abilitiesButton')



abilitiesButton.addEventListener('click', () => {
        document.querySelector('#html').classList.add('active')
        document.querySelector('#css').classList.add('active')
        document.querySelector('#js').classList.add('active')
})

function DarkModeToggle(){
    document.body.classList.toggle("dark-mode")
}