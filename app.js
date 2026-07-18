
var typed = new Typed('#element', {
    strings: ['Frontend Developer .', 'CP Enthusiastic .',  'ML Developer .'],
    typeSpeed: 50,
    loop: true,
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        closeMenu();
    });
});


const navLinks = document.querySelector('.nav-links');
const hamburgerBtn = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-menu i');
const navOverlay = document.querySelector('.nav-overlay');

function toggleMenu() {
    const isActive = navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active', isActive);
    hamburgerBtn.setAttribute('aria-expanded', isActive);

    if (isActive) {
        hamburgerIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
    }
}

function closeMenu() {
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
}

// Close the mobile menu automatically if the viewport is resized to desktop width
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});



function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');

    if (theme === 'light') {
        body.classList.add('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});





document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-toggle i").classList.replace("fa-moon", "fa-sun");
    }
});


const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const loadingSpinner = document.getElementById('loadingSpinner');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

 
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

  
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (isValid) {
        submitText.textContent = 'Sending...';
        loadingSpinner.classList.remove('hidden');
        submitBtn.disabled = true;

      
        setTimeout(() => {
            submitText.textContent = 'Send';
            loadingSpinner.classList.add('hidden');
            submitBtn.disabled = false;
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.display = 'block';
            contactForm.reset();
            
           
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 3000);
        }, 2000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollItems = document.querySelectorAll('.animate-on-scroll');
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkScrollItems() {
        const triggerBottom = window.innerHeight / 5 * 4;

        scrollItems.forEach(item => {
            if (!item.classList.contains('timeline-item')) {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < triggerBottom) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            }
        });

        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.style.transitionDelay = `${index * 0.3}s`;
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
                item.style.transitionDelay = '0s';
            }
        });
    }

  
    checkScrollItems();


    window.addEventListener('scroll', checkScrollItems);
});
