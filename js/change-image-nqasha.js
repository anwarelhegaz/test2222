var imageContent = document.querySelector('.image-content-nkasha img');
    var images = [ '../images/nk01.jpg', '../images/nk02.jpg', '../images/nk03.jpg', '../images/nk04.jpg', '../images/nk05.jpg', '../images/nk06.jpg'];
    var currentIndex = 0;

    function changeImage() {
        imageContent.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds
    setInterval(changeImage, 2000);