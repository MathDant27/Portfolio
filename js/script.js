document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center">
            <button class="absolute top-4 right-4 text-white text-2xl">&times;</button>
            <nav class="text-center">
                <a href="#home" class="block text-white text-xl py-3 hover:text-indigo-400 transition-colors">Início</a>
                <a href="#about" class="block text-white text-xl py-3 hover:text-indigo-400 transition-colors">Sobre</a>
                <a href="#skills" class="block text-white text-xl py-3 hover:text-indigo-400 transition-colors">Habilidades</a>
                <a href="#experience" class="block text-white text-xl py-3 hover:text-indigo-400 transition-colors">Experiência</a>
                <a href="#projects" class="block text-white text-xl py-3 hover:text-indigo-400 transition-colors">Projetos</a>
                <a href="#contact" class="block text-white text-xl py-3 hover:text-indigo-400 transition-colors">Contato</a>
            </nav>
        </div>
    `;

    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(0)';
    });

    mobileMenu.querySelector('button').addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(100%)';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.transform = 'translateX(100%)';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso.`);

        // Reset form
        contactForm.reset();
    });
    // Animações de scroll reveal
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('animate-active');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    // Executar uma vez quando a página carrega
    setTimeout(animateOnScroll, 300);
});

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 },
        },
        "opacity": {
            "value": 0.4,
            "random": true,
            "anim": { "enable": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": { "opacity": 0.5 }
            },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});