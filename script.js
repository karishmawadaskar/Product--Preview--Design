function quantitychange(action) {
    const quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.innerText);

    if (action == 'inc' && quantity < 5) {
        quantity++;
    } else if (action == 'dec' && quantity > 1) {
        quantity--;
    } else {
        if (action == 'inc') {
            alert('Quantity can not be more than five');
        } else {
            alert('Quantity can not be less than one');
        }
        return;
    }

    quantityElement.innerText = quantity;
}
function changeimage(num) {
    const imageElement = document.getElementById("img");
    const colortext = document.getElementById("heading");
    const btncolor = document.getElementById("color-btn")
    if (num==1) {
        imageElement.src = "./images/fan1.webp";
        colortext.innerText = "color:ivory";
        btncolor.style.backgroundColor = "#e3ccb5";

    }
    else if (num==2) {
        imageElement.src = "./images/fan2.webp";
        colortext.innerText = "color:Brown";
        btncolor.style.backgroundColor = "rgb(88, 26, 26)";

    }
    else {
        imageElement.src = "./images/fan3.webp";
        colortext.innerText = "color:white";
        btncolor.style.backgroundColor = "rgb(201, 228, 238)";

    }
}

