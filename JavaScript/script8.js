const product = {
    id: 101,
    title: "Elegant Backpack, Fits 15 Laptops",
    price: 180,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
        rate: 4.1,
        count: 70
    }
};

console.log(product);
const prodStr = JSON.stringify(product);
console.log(prodStr);
console.log("Hello World");

console.log('==================================');
const strData = `
{"id":101,"title":"Elegant Backpack, Fits 15 Laptops",
"price":180,
"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category":"men's clothing",
"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":4.1,"count":70}}
`;
console.log(strData);
const res = JSON.parse(strData);
res.price = 500;
console.log(res);

let counters = {
    name: "Ahmad",
    counter1: 0,
    counter2: 0
}

const printCounters = () => {
    document.getElementById("counter-value1").innerHTML = counters.counter1;
    document.getElementById("counter-value2").innerHTML = counters.counter2;
}

const increaseCounter1 = () => {
    counters.counter1++;
    printCounters();
    saveData();
}

const increaseCounter2 = () => {
    counters.counter2 += 10;
    printCounters();
    saveData();
}

const saveData = () => {
    localStorage.setItem("countersObj", JSON.stringify(counters));
}

const resetCounters = () => {
    // localStorage.clear(); // Clear all storage
    localStorage.removeItem("countersObj");
    counters = {
        name: "Ahmad",
        counter1: 0,
        counter2: 0
    }
    printCounters();
}

const loadData = () => {
    const res = localStorage.getItem("countersObj");
    if (res !== null) {
        counters = JSON.parse(res);
    }
    printCounters();
}