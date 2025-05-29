/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-container, .certificates-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/

document.querySelectorAll('.slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        prevBtn.blur();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        nextBtn.blur();
    });

    showImage(currentIndex);
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".clickable-img").forEach(img => {
        img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.getAttribute("data-full");
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
        modal.style.display = "none";
        }
}
function sendMail() { 
    let params = { 
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value, 
        phone: document.getElementById("phone").value,    
        subject: document.getElementById("subject").value,  
        message: document.getElementById("message").value, 
    };
    emailjs.send("service_841mvyu", "template_q4kmmt6", params)
        .then(() => alert("Email Sent!"))
        .catch(err => console.error(err));
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    sendMail();
});
