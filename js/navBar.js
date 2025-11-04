function toggleMenu() {
  const menuMobile = document.querySelector('.menu-mobile');
  menuMobile.classList.toggle('active');
}

// Fecha o menu mobile quando clicar fora (área à direita) e com Esc
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');    // botão hamburguer
  const menuMobile = document.getElementById('menu-mobile');   // sidebar

  if (!menuToggle || !menuMobile) return;

  // Garante que a função toggleMenu exista para o onclick inline
  window.toggleMenu = window.toggleMenu || function toggleMenu() {
    menuMobile.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  };

  function closeMenu() {
    menuMobile.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  // Fecha só se o menu estiver aberto e o clique for fora do menu e do botão
  document.addEventListener('pointerdown', (e) => {
    if (!menuMobile.classList.contains('active')) return;

    // se clicou dentro do menu ou no botão, não fecha
    if (menuMobile.contains(e.target) || menuToggle.contains(e.target)) return;

    // opcional: só fechar se o clique ocorreu à direita da borda do menu
    const menuRect = menuMobile.getBoundingClientRect();
    if (e.clientX > menuRect.right - 1) {
      closeMenu();
    }
  }, { passive: true });

  // Fecha com a tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuMobile.classList.contains('active')) {
      closeMenu();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuMobile = document.getElementById('menu-mobile');
    const header = document.querySelector('header');
    let backdrop;

    // Criar backdrop para o menu mobile
    function createBackdrop() {
        backdrop = document.createElement('div');
        backdrop.className = 'menu-backdrop';
        document.body.appendChild(backdrop);

        // Fechar menu ao clicar no backdrop
        backdrop.addEventListener('click', () => {
            closeMenu();
        });
    }
    createBackdrop();

    // Função para abrir/fechar o menu
    function toggleMenu() {
        const isOpen = menuMobile.classList.contains('active');
        
        if (!isOpen) {
            // Abrindo o menu
            menuMobile.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden'; // Previne rolagem
        } else {
            // Fechando o menu
            closeMenu();
        }
    }

    function closeMenu() {
        menuMobile.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = ''; // Restaura rolagem
    }

    // Atribuir ao window para usar no onclick do HTML
    window.toggleMenu = toggleMenu;

    // Fechar com Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuMobile.classList.contains('active')) {
            closeMenu();
        }
    });

    // Scroll suave para links do menu
    const menuLinks = document.querySelectorAll('header a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                closeMenu(); // Fecha o menu se estiver aberto
                
                // Scroll suave com offset para o header fixo
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});