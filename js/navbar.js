// Carrega a navbar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    fetch('partials/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao carregar a navbar');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
           //onsole.log('Navbar loaded');

            // Função de funcionalidade da navbar
            const mobileMenu = document.getElementById('mobile-menu');
            const navbarMenu = document.querySelector('.navbar-menu');

            // Verificação inicial dos elementos
            //nsole.log('Mobile Menu:', mobileMenu);
            //nsole.log('Navbar Menu:', navbarMenu);

            if (!mobileMenu || !navbarMenu) {
                console.error('Elementos necessários não foram encontrados no DOM');
                return;
            }

            // Adiciona um event listener para o clique no botão do menu
            mobileMenu.addEventListener('click', function() {
               //onsole.log('Mobile menu button clicked');
                mobileMenu.classList.toggle('active');
                navbarMenu.classList.toggle('active');
                //nsole.log('Mobile Menu Classes:', mobileMenu.classList);
                //nsole.log('Navbar Menu Classes:', navbarMenu.classList);
            });

            // Fechar menu quando um item for clicado
            const navbarLinks = document.querySelectorAll('.navbar-links');
            navbarLinks.forEach(link => {
                link.addEventListener('click', () => {
                    //nsole.log('Navbar link clicked');
                    mobileMenu.classList.remove('active');
                    navbarMenu.classList.remove('active');
                   //onsole.log('Mobile Menu Classes:', mobileMenu.classList);
                   //onsole.log('Navbar Menu Classes:', navbarMenu.classList);
                });
            });
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('navbar-container').innerHTML =
                '<p>Erro ao carregar o menu de navegação</p>';
        });
});