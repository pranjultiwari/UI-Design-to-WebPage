// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn(`⚠️ Target element "${targetId}" not found.`);
        }
    });
});

// Lightbox effect for gallery images
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // prevent multiple lightboxes
        if (document.getElementById('lightbox')) return;

        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        lightbox.appendChild(imgElement);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Dark mode toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.innerText = 'Toggle Dark Mode';
toggleDarkMode.style.position = 'fixed';
toggleDarkMode.style.bottom = '20px';
toggleDarkMode.style.right = '20px';
toggleDarkMode.style.zIndex = '1000';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
