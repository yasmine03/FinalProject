var headerEl = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', function() {
    window.scrollY > 0 ? headerEl.classList.add('header-bg') : headerEl.classList.remove('header-bg');
});