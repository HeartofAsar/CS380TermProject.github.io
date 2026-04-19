/* Keeps track of which slide is currently showing */
let slideIndex = 0;
window.addEventListener("load", function(){

    showSlides();
});





function showSlides()
{
    let i;
    /* Get all elements that use the Carousel-slides class */
    let slides = document.getElementsByClassName("Carousel-slides");
    
    if(slides.length === 0)
    {
        setTimeout(showSlides, 100);
        return;
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slideIndex++;

    /* if going past the last slide, go back to the first one */
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }

    /* Show the current slide */
    slides[slideIndex - 1].style.display = "block";

    /* Change the slide again after 3 seconds */
    setTimeout(showSlides, 3000); 
}