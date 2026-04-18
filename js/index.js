/* Keeps track of which slide is currently showing */
let slideIndex = 0;

/* Start the slideshow as soon as the page loads this script */
showSlides();

/* 
   this function hides every carousel slide,
   then shows one slide at a time in order
*/
function showSlides()
{
    let i;

    /* Get all elements that use the Carousel-slides class */
    let slides = document.getElementsByClassName("Carousel-slides");

    /* hide every slide first */
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    /* move to the next slide */
    slideIndex++;

    /* if going past the last slide, go back to the first one */
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }

    /* Show the current slide */
    slides[slideIndex - 1].style.display = "block";

    /* Change the slide again after 2 seconds */
}