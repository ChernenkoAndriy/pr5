var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'meat',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'meat',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'meat',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'meat',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'vegan',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'meat',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'seafood',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'seafood',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];
for (let pizza of pizza_info){
    let new_pizza = document.createElement('div');
    let pizza_type = pizza.type==="meat"?"М'ясна піца":pizza.type==="seafood"?"Піца з морепродуктами"
        :"Веганська піца";
    new_pizza.classList.add('pizza-item')
    new_pizza.setAttribute("type", pizza.type)
    if(pizza.content.pineapple!==undefined){
        new_pizza.setAttribute("add-ons", "pineapple")
    }
    if(pizza.content.mushroom!==undefined){
        new_pizza.setAttribute("add-ons", "mushrooms")
    }
    let single = "single"
    if(pizza.small_size!==undefined && pizza.big_size!==undefined){
        single = ""
    }
    new_pizza.innerHTML = `<div class="thumbnail">
            <img src="${pizza.icon}" alt="pizza-image">
            <div class="information">
                <span class="name">
                    ${pizza.title}
                </span>
                <span class="pizza-type">
                    ${pizza_type}
                </span>
                <span class="ingredients">
                ${Object.values(pizza.content).flat().join(', ')}
                </span>
                <div class="size-info ${single}">
                </div>
            </div>
        </div>`
    let small_size = document.createElement("div")
    small_size.classList.add("size-s")
    let big_size = document.createElement("div")
    big_size.classList.add("size-l")
    let products = document.querySelector('.centralpannel');
    if(pizza.small_size!==undefined){
        small_size.innerHTML = `<div class="size">
                            <img src="assets/images/size-icon.svg"/><span>${pizza.small_size.size}</span>
                        </div>
                        <div class="weight">
                            <img src="assets/images/weight.svg"/><span>${pizza.small_size.weight}</span>
                        </div>
                        <div class="price">
                            <b>${pizza.small_size.price}</b>
                        </div>
                        <span>грн.</span>
                        <button type="button" onclick="buy_small()">
                            Купити
                        </button>`
        new_pizza.querySelector(".size-info").appendChild(small_size)
    }
    if(pizza.big_size!==undefined){
        big_size.innerHTML = `  <div class="size">
                        <img src="assets/images/size-icon.svg"/><span>${pizza.big_size.size}</span>
                    </div>
                    <div class="weight">
                        <img src="assets/images/weight.svg"/><span>${pizza.big_size.weight}</span>
                    </div>
                    <div class="price">
                        <b>${pizza.big_size.price}</b>
                    </div>
                    <span>грн.</span>
                    <button type="button" onclick="buy_large()">
                        Купити
                    </button>`
        new_pizza.querySelector(".size-info").appendChild(big_size)
    }
    if(pizza.is_new!==undefined){
        let badge = document.createElement("div")
        badge.classList.add("new")
        badge.innerHTML = `Нова`
        new_pizza.appendChild(badge)
        products.appendChild(new_pizza)
        continue
    }
    if(pizza.is_popular!==undefined){
        let badge = document.createElement("div")
        badge.classList.add("popular")
        badge.innerHTML = `Популярна`
        new_pizza.appendChild(badge)
    }
    products.appendChild(new_pizza)
}
let footer = document.createElement("footer")
footer.classList.add("footer")
footer.innerHTML = `<span>Pizza.22 - практичний проект в межах курсу JavaScript в Києво-Могилянській академії</span>
        <span>Доставка піци не здійснюється</span>
    `
document.querySelector(".centralpannel").appendChild(footer)
document.querySelector('.pizzas-amount').textContent = pizza_info.length
let total = document.querySelector(".sidepannel .cart-title span span")
let total_sum = document.querySelector(".sidepannel .buy-section .sum")
let all_pizzas = 8
class Pizza{
    constructor(name, large, quantity, price, image, weight) {
        this.name = name
        this.large = large
        this.quantity = quantity
        this.price = price
        this.image = image
        this.weight = weight
    }
}
let pizza_ordered = []
function downloadLocal(){
        pizza_ordered = JSON.parse(localStorage.getItem('pizzaList'))
        let disabled
        let name
        let quantity
        let weight
        let img
        let price
        let new_order
        let size
        let total_ordered = 0
        let total_price = 0
        let list = JSON.parse(localStorage.getItem('pizzaList'))
        for (let item of list){
            total_ordered += parseInt(item.quantity)
            total_price += parseInt(item.quantity)*parseInt(item.price)
            name = item.name
            if(item.large){
                name += " (Велика)"
                size = 40
            }
            else{
                name+=" (Мала)"
                size = 30
            }
            disabled = parseInt(item.quantity)===1?"disabled":""
            weight = item.weight
            quantity = item.quantity
            price = item.price
            img = item.image
            new_order = document.createElement('div')
            new_order.classList.add("ordered-item")
            new_order.innerHTML = `<div class="details">
            <span class="pizza-name">${name}</span>
            <div class="order-info">
                <div class="size">
                    <img src="assets/images/size-icon.svg"/><span>${size}</span>
                </div>
                <div class="weight">
                    <img src="assets/images/weight.svg"/><span>${weight}</span>
                </div>
            </div>
            <form class="control-panel">
                <span>${price}грн</span>
                <div class="amount-control">
                    <button type="button" class="minus ${disabled}" onclick="reduce()">
                        -
                    </button>
                    <span class="amount">${quantity}</span>
                    <button type="button" class="plus" onclick="increase()">
                        +
                    </button>
                </div>
                <button type="button" class="delete" onclick="remove()">
                        x
                </button>
            </form>
            </div>
            <div class="order-picture">
                <img src=${img}>
            </div>
        </div>
    `
            document.querySelector(".boughtlist").appendChild(new_order)
        }
        total.textContent = total_ordered
        total_sum.textContent = total_price + "грн"
    }
if(localStorage.getItem("pizzaList")!==null){
    downloadLocal()
}
function filter_pizza(element) {
    const filters = document.querySelector(".filters").getElementsByTagName("span");
    for (let filter of filters) {
        filter.classList.remove("chosen");
    }
    element.classList.add("chosen");
    let all_pizzas = 0;
    const filter = element.classList[0].trim();
    const pizzas = document.getElementsByClassName("pizza-item");
    const filterPizzas = (attribute, value) => {
        for (let pizza of pizzas) {
            if (pizza.getAttribute(attribute) === value) {
                pizza.style.display = "inline-block";
                all_pizzas += 1;
            } else {
                pizza.style.display = "none";
            }
        }
    };
    switch (filter) {
        case 'meat':
        case 'seafood':
        case 'vegan':
            filterPizzas('type', filter);
            break;
        case 'mushrooms':
        case 'pineapple':
            filterPizzas('add-ons', filter);
            break;
        case 'all':
        default:
            for (let pizza of pizzas) {
                pizza.style.display = "inline-block";
                all_pizzas += 1;
            }
            break;
    }
    document.querySelector(".pizza-filters .pizzas-amount").textContent = all_pizzas;
}
document.querySelectorAll('.filters span').forEach(function(element) {
    element.addEventListener('click', function() {
        filter_pizza(this);
    });
});
document.querySelector('.clearCart').addEventListener('click', function() {
    clear_orders();
});

function increase() {
    let order = event.target.closest(".ordered-item");
    let quantity = order.querySelector(".amount");
    let nameSize = order.querySelector(".pizza-name").textContent.split(" ");
    let name = nameSize.slice(0, -1).join(" ");
    let size = nameSize.slice(-1)[0];

    for (let pizza of pizza_ordered) {
        if (pizza.name === name && ((pizza.large && size === "(Велика)") || (!pizza.large && size === "(Мала)"))) {
            pizza.quantity++;
        }
    }

    let amount = parseInt(quantity.textContent);
    quantity.textContent = amount + 1;
    total.textContent = parseInt(total.textContent) + 1;

    order.querySelector(".minus").classList.remove('disabled');

    let price = parseInt(order.querySelector(".control-panel span").textContent.slice(0, -3));
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) + price) + "грн";

    localStorage.setItem("pizzaList", JSON.stringify(pizza_ordered));
}

function reduce() {
    let order = event.target.closest(".ordered-item");
    let quantity = order.querySelector(".amount");
    let amount = parseInt(quantity.textContent);
    let nameSize = order.querySelector(".pizza-name").textContent.split(" ");
    let name = nameSize.slice(0, -1).join(" ");
    let size = nameSize.slice(-1)[0];

    for (let pizza of pizza_ordered) {
        if (pizza.name === name && ((pizza.large && size === "(Велика)") || (!pizza.large && size === "(Мала)"))) {
            pizza.quantity--;
            break;
        }
    }

    quantity.textContent = amount - 1;
    total.textContent = parseInt(total.textContent) - 1;

    if (parseInt(quantity.textContent) === 1) {
        order.querySelector(".minus").classList.add('disabled');
    }

    let price = parseInt(order.querySelector(".control-panel span").textContent.slice(0, -3));
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) - price) + "грн";

    localStorage.setItem("pizzaList", JSON.stringify(pizza_ordered));
}




