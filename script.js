// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active navigation state
const sections = document.querySelectorAll('section');
const navIcons = document.querySelectorAll('.nav-icon');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navIcons.forEach(icon => {
        icon.classList.remove('active');
        if (icon.getAttribute('href') === `#${current}`) {
            icon.classList.add('active');
        }
    });
});

// Copy email function
function copyEmail() {
    const email = 'aditya09313@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Contact form is disabled. Please email directly at aditya09313@gmail.com');
}
