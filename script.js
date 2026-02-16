// Navbar Transition on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'bg-white', 'shadow-sm');
        navbar.classList.remove('navbar-dark', 'bg-transparent');
    } else {
        navbar.classList.remove('scrolled', 'bg-white', 'shadow-sm');
        // Optional: Add logic here if you want it transparent at top
    }
});

// Number Counter Animation
const statsSection = document.querySelector('.stats-box');
let started = false; // Function started ? No

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight > statsSection.offsetTop && !started) {
        const stats = document.querySelectorAll('.stat-item h2');
        stats.forEach(stat => {
            let startValue = 0;
            let endValue = parseInt(stat.getAttribute('data-val'));
            let duration = 2000;
            let counter = setInterval(() => {
                startValue += Math.ceil(endValue / (duration / 20));
                stat.textContent = startValue;
                if (startValue >= endValue) {
                    stat.textContent = endValue + "+";
                    clearInterval(counter);
                }
            }, 20);
        });
        started = true;
    }
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
