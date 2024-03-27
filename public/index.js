window.addEventListener('scroll', function() {
    let enNav = document.getElementById('en-nav');
    let scrollPosition = window.scrollY;

    // Adjust this threshold as needed
    let threshold = 100;

    if (scrollPosition > threshold) {
        enNav.classList.add('hidden');
    } else {
        enNav.classList.remove('hidden');
    }
});
