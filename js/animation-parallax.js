// parallax ////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollButton = document.querySelectorAll(".scroll-bottom");
scrollButton.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));


// toggle icon Navbar ////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

// Remove nav on scroll ////////////////////
window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


// Whats and phone Float

var whatsappFloat = document.querySelector('.whats-float');
var phoneFloat = document.querySelector('.phone-float');

window.addEventListener('scroll', function () {
    // Check if the user has scrolled 50 pixels or more
    if (window.scrollY > 150) {
        whatsappFloat.classList.add('visible');
        phoneFloat.classList.add('visible');
    } else {
        whatsappFloat.classList.remove('visible');
        phoneFloat.classList.remove('visible');
    }
});





// var imageContent = document.querySelector('.image-content-nkasha img');
//     var images = [ '../images/nk01.jpg', '../images/nk02.jpg', '../images/nk03.jpg', '../images/nk04.jpg', '../images/nk05.jpg', '../images/nk06.jpg'];
//     var currentIndex = 0;

//     function changeImage() {
//         imageContent.src = images[currentIndex];
//         currentIndex = (currentIndex + 1) % images.length;
//     }

//     // Change image every 3 seconds
//     setInterval(changeImage, 3000);
    
// var imageContent = document.querySelector('.image-content-balat img');
//     var images = [ '../images/bl01.jpg', '../images/bl01.jpg', '../images/bl03.jpg', '../images/bl04.jpg', '../images/bl05.jpg', '../images/bl06.jpg', '../images/bl07.jpg'];
//     var currentIndex = 0;

//     function changeImage() {
//         imageContent.src = images[currentIndex];
//         currentIndex = (currentIndex + 1) % images.length;
//     }

//     // Change image every 3 seconds
//     setInterval(changeImage, 3000);
