let money = 1000;
let materials = 0;
let energy = 0;

const products = [
    {
        id: 1,
        name: "Battery Pack",
        price: 200
    },
    {
        id: 2,
        name: "Solar Energy",
        price: 350
    },
    {
        id: 3,
        name: "Electric Box",
        price: 500
    }
];

function updateUI() {

    document.getElementById("money").innerText = money;

    document.getElementById("materials").innerText = materials;

    document.getElementById("energy").innerText = energy;
}

function buyMaterial() {

    if (money >= 100) {

        money -= 100;

        materials += 10;

        updateUI();

    } else {

        alert("Not enough money!");
    }
}

function produceEnergy() {

    if (materials >= 5) {

        materials -= 5;

        energy += 20;

        updateUI();

    } else {

        alert("Need more materials!");
    }
}

function showProducts() {

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach((product, index) => {

        container.innerHTML += `
        
        <div class="product">

            <h3>${product.name}</h3>

            <p>Price: $${product.price}</p>

            <button class="buy-btn"
            onclick="buyProduct(${product.price})">
                Buy
            </button>

            <br>

            <button class="delete-btn"
            onclick="deleteProduct(${index})">
                Delete
            </button>

        </div>
        
        `;
    });
}

function buyProduct(price) {

    if (money >= price) {

        money -= price;

        updateUI();

        alert("Product Purchased!");

    } else {

        alert("Not enough money!");
    }
}

function deleteProduct(index) {

    products.splice(index, 1);

    showProducts();
}

showProducts();

updateUI();