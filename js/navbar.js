// Espera o DOM estar completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    // Seleciona o botão do menu mobile
    const mobileMenu = document.getElementById('mobile-menu')
    // Seleciona o menu de navegação
    const navbarMenu = document.querySelector('.navbar-menu')

    // Adiciona um event listener para o clique no botão do menu
    mobileMenu.addEventListener('click', function(){
        // Alterna a classe 'active' no botão (para animação do ícone)
        mobileMenu.classList.toggle('active')
        // Alterna a classe 'active' no menu (para mostrar/esconder)
        navbarMenu.classList.toggle('active')
    })

    //Fechar menu quando um item for clicado
    // Seleciona todos os links do menu
    const navbarLinks = document.querySelectorAll('.navbar-links')
    // Adiciona event listener para cada link
    navbarLinks.forEach(link =>{
        link.addEventListener('click', () => {
            // Quando um link é clicado, remove as classes 'active'
            mobileMenu.classList.remove('active')
            navbarMenu.classList.remove('active')
            // Isso fecha o menu mobile após selecionar um item
        })
    })
})