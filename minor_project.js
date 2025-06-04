let currentSlide = 0;
let container = null;
let slides = null;
let totalSlides = 0;

// Function to initialize slider elements
function initializeSlider() {
    container = document.querySelector('.container');
    slides = document.querySelectorAll('.page');
    totalSlides = slides.length;
}

// Function to show a specific slide
function showSlide(index) {
    if (!container || totalSlides === 0) return;
    const translateValue = -index * 100;
    container.style.transform = `translateX(${translateValue}vw)`;
}

// Function to move to the next slide
function nextSlide() {
    if (!container || totalSlides === 0) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
function startSlider() {
    if (container && totalSlides > 0) {
        showSlide(currentSlide); // Show first slide immediately
        setInterval(nextSlide, 5000);
    } else {
        console.error('Slider failed to start: Container or slides not found.');
    }
}

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }
});

// News Board Functionality
const newsItems = [
    { text: "College event on campus!", isNew: true, label: "NEW" },
    { text: "New courses available", isNew: true, label: "UPDATE" },
    { text: "Upcoming placement interviews", isNew: false }
];

function updateNewsBoard() {
    const newsList = document.getElementById('news-list');
    if (newsList) {
        newsList.innerHTML = '';

        newsItems.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            if (item.isNew) {
                newsItem.classList.add('new');
                newsItem.innerHTML = `<p><span class="new-label">${item.label}:</span> ${item.text}</p>`;
            } else {
                newsItem.innerHTML = `<p>${item.text}</p>`;
            }
            newsList.appendChild(newsItem);
        });
    }
}

// Recruiters Slider Enhancement
function initializeRecruitersSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        sliderTrack.addEventListener('click', () => {
            const isPaused = sliderTrack.style.animationPlayState === 'paused';
            sliderTrack.style.animationPlayState = isPaused ? 'running' : 'paused';
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    updateNewsBoard();
    initializeSlider();
    startSlider();
    initializeRecruitersSlider();
});
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9396fc235f6a4552',t:'MTc0NjE4MzMxMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();