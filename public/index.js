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

let closeBtn = document.getElementById('close-btn');
let menuBar = document.getElementById('menu-bar');
let hamburger = document.getElementById('hamburger');

closeBtn.addEventListener('click',function(){
    if(menuBar.classList.contains('absolute')){
        menuBar.classList.add('hidden')
     }

})

hamburger.addEventListener('click',function(){
    if(menuBar.classList.contains('hidden')){
        menuBar.classList.remove('hidden')
     }
     else{
         menuBar.classList.add('hidden')
     }
})