/* 
   shanges the product image when the user chooses a different color
   the image id is based on the product index
*/
function itemColorChange(index, color) {
    const img = document.getElementById("product-img-" + index);
    img.src = "images/items/" + items[index].product.filename + "-" + color + ".jpg";
}

/* 
   builds and displays only the items that match the chosen filters
*/
function displayItems() {

    /* this string will hold all of the product card HTML */
    let output = "";

    /* reads the state of each filter checkbox */
    let electronicsChecked = document.getElementById("filter-electronics").checked;
    let computersChecked = document.getElementById("filter-computers").checked;
    let gamingChecked = document.getElementById("filter-gaming").checked;

    let under50Checked = document.getElementById("filter-under50").checked;
    let between50and200Checked = document.getElementById("filter-50to200").checked;
    let over200Checked = document.getElementById("filter-over200").checked;

    let rating5Checked = document.getElementById("filter-rating5").checked;
    let rating4Checked = document.getElementById("filter-rating4").checked;

    // check every product in the items array //
    for (let i = 0; i < items.length; i++) {

        // start by assuming the item should be shown //
        let showItem = true;

        // CATEGORY FILTER //
        if (electronicsChecked || computersChecked || gamingChecked) {
            showItem = false;

            if (electronicsChecked && items[i].product.category == "Electronics") {
                showItem = true;
            }

            if (computersChecked && items[i].product.category == "Computers & Laptops") {
                showItem = true;
            }

            if (gamingChecked && items[i].product.category == "Gaming & Entertainment") {
                showItem = true;
            }
        }

        //PRICE FILTER //
        if (showItem && (under50Checked || between50and200Checked || over200Checked)) {
            showItem = false;

            if (under50Checked && items[i].product.price < 50) {
                showItem = true;
            }

            if (between50and200Checked && items[i].product.price >= 50 && items[i].product.price <= 200) {
                showItem = true;
            }

            if (over200Checked && items[i].product.price > 200) {
                showItem = true;
            }
        }

        //RATING FILTER //
        if (showItem && (rating5Checked || rating4Checked)) {
            showItem = false;

            if (rating5Checked && items[i].product.rating == 5) {
                showItem = true;
            }

            if (rating4Checked && items[i].product.rating >= 4) {
                showItem = true;
            }
        }

        //BUILD CARD ONLY IF ITEM PASSES FILTERS//
        if (showItem) {

            /* Bestseller label */
            let bestsellerText = "";
            if (items[i].product.bestseller) {
                bestsellerText = "<div class='card-bestseller'>Best Seller</div>";
            }

            /* Rating stars */
            let ratingText = "";
            if (items[i].product.rating == 1) {
                ratingText = "<p class='card-rating'>★</p>";
            }
            else if (items[i].product.rating == 2) {
                ratingText = "<p class='card-rating'>★★</p>";
            }
            else if (items[i].product.rating == 3) {
                ratingText = "<p class='card-rating'>★★★</p>";
            }
            else if (items[i].product.rating == 4) {
                ratingText = "<p class='card-rating'>★★★★</p>";
            }
            else if (items[i].product.rating == 5) {
                ratingText = "<p class='card-rating'>★★★★★</p>";
            }

            //  color radio buttons
            let colorsText = "";

            if (items[i].product.colors.length > 0) {
                for (let j = 0; j < items[i].product.colors.length; j++) {
                    let color = items[i].product.colors[j];

                    if (j == 0) {
                        colorsText = colorsText + "<label>" + "<input type='radio' name='color-" +
                         items[i].product.id + "' value='" + color +
                          "'checked onchange=\"itemColorChange(" + i + ", '" + color + "')\">" +
                                color +
                            "</label>";
                    }
                    else {
                        colorsText = colorsText +
                            "<label>" +
                                "<input type='radio' name='color-" + items[i].product.id + "' value='" + color + "' onchange=\"itemColorChange(" + i + ", '" + color + "')\">" +
                                color +
                            "</label>";
                    }
                }
            }

            //add this product card to the output 
            output = output +
                "<div class='shop-card'>" +
                    bestsellerText +
                    "<div class='card-img-box'>" +
                        "<img id='product-img-" + i + "' src='images/items/" + items[i].product.filename + "-" + items[i].product.colors[0] + ".jpg' class='item-img' alt='" + items[i].product.title + "'>" +
                    "</div>" +
                    "<div class='card-body'>" +
                        "<h3 class='card-title'>" + items[i].product.title + "</h3>" +
                        "<p class='card-price'>$" + items[i].product.price + "</p>" +
                        ratingText +
                        "<p class='card-info'>Brand: " + items[i].product.brand + "</p>" +
                        "<p class='card-info'>In stock: " + items[i].product.itemsLeft + "</p>" +
                        "<p class='card-info'>Category: " + items[i].product.category + "</p>" +
                        "<div class='card-colors'>" +
                            "<p class='card-info'>Color:</p>" +
                            "<p class='card-info'>" + colorsText + "</p>" +
                        "</div>" +
                        "<button class='card-button'>Add to cart</button>" +
                    "</div>" +
                "</div>";
        }
    }

    //put the final HTML into the products-list area 
    document.getElementById("products-list").innerHTML = output;
}

/* 
   wait until the page loads, then connect each filter checkbox
   to the displayItems function
*/
window.addEventListener("load", function () {

    document.getElementById("filter-electronics").addEventListener("change", displayItems);
    document.getElementById("filter-computers").addEventListener("change", displayItems);
    document.getElementById("filter-gaming").addEventListener("change", displayItems);

    document.getElementById("filter-under50").addEventListener("change", displayItems);
    document.getElementById("filter-50to200").addEventListener("change", displayItems);
    document.getElementById("filter-over200").addEventListener("change", displayItems);

    document.getElementById("filter-rating5").addEventListener("change", displayItems);
    document.getElementById("filter-rating4").addEventListener("change", displayItems);

    //show all products when the page first load 
    displayItems();
});