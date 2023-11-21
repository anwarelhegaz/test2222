var imageContent = document.querySelector('.image-content-balat img');
    var images = [ '../images/bl01.jpg', '../images/bl02.jpg', '../images/bl03.jpg', '../images/bl04.jpg', '../images/bl05.jpg', '../images/bl06.jpg', '../images/bl07.jpg'];
    var currentIndex = 0;

    function changeImage() {
        imageContent.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds
    setInterval(changeImage, 2000);