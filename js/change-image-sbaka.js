var imageContentSbaka = document.querySelector('.image-content-sbaka img');
    var images = [ '../images/sba02.jpg', '../images/sba03.jpg', '../images/sba04.jpg', '../images/sba05.jpg'];
    var currentIndex = 1;

    function changeImage() {
        imageContentSbaka.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds
    setInterval(changeImage, 2000);