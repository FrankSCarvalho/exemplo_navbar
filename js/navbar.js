document.addEventListener('DOMContentLoaded', function(){
    const mobileMenu = document.getElementById('mobile-menu')
    const navbarMenu = document.querySelector('.navbar-menu')

    mobileMenu.addEventListener('click', function(){
        mobileMenu.classList.toggle('active')
        navbarMenu.classList.toggle('active')
    })

    //Fechar menu quando um item for clicado
    const navbarLinks = document.querySelectorAll('.navbar-links')
    navbarLinks.forEach(link =>{
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active')
            navbarMenu.classList.remove('active')
        })
    })
})