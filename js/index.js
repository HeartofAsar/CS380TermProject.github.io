let carouselIndex = 0;
showslides(carouselIndex);

//Next/Prev controls
function plusSlides(n)
{
    showslides(carouselIndex += n);
}

//Image controls
function currentslide(n)
{
    showslides(carouselIndex = n);
}

function showslides(n)
{
    let slides = document.getElementsByClassName("carousel-slides");
    let dots = document.getElementsByClassName("dot");
    
    if(n > slides.length)
    {
        carouselIndex = 1;
    }

    if(n < 1)
    {
        carouselIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(let j = 0; j < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "" );
    }

    slides[carouselIndex-1].style.display = "block";
    dots[carouselIndex-1].className += " active";

}