// IFFE Init Call to functions
(function init() {
    // Call image Carousel 
    imageCarousel();
}());

// Function to displays Image Carousel
function imageCarousel() {
    let i;
    let images = document.getElementsByClassName("img-slides");
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > images.length) {slideIndex = 1} 
    images[slideIndex-1].style.display = "block"; 
    setTimeout(imageCarousel, 3000); // Change image every 3 seconds
};