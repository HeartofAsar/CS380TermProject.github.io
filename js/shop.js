
// function to change the image when choosing different color
function itemColorChange(index, color) {
    const img = document.getElementById("product-img-" + index);
    img.src = "images/items/" + items[index].product.filename + "-" + color + ".jpg";
}