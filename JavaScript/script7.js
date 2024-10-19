const getProductsList = async () => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => {
      // console.log(response);
      if (response.ok) {  // if (response.status === 200){
        return response.json();
        // return response;
      } else {
        throw new Error("Failed to fetch products!");
      }
    });
}

const getProduct = async (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch products!");
      }
    });
}

const x = 10;
let y = x * 2;
// const data =  getData();
// console.log(data);
getProductsList().then(data => {
  console.log(data);
}).catch((error) => {
  console.log("Something went wrong!");
  console.log(error);
});
console.log(y);
console.log("Good Bye!");

// async function name(params) { 
// }

const loadDataV2 = async () => {
  const data = await getProductsList();
  const firstProductId = data[0].id;
  const firstProduct = await getProduct(firstProductId);
  console.log(firstProduct.description);

  const prodList = document.getElementById('products');
  data.forEach(product => {
    prodList.insertAdjacentHTML('beforeend', `
        <div style="border:1px solid black; margin:20px;">
          <h2>${product.title}</h2>
          <img width="70" src="${product.image}" alt="img"/>
        </div>
        `);
  });

  console.log("After Await!");
}

const loadData = () => {
  getProductsList().then(data => {
    const firstProductId = data[0].id;
    getProduct(firstProductId).then(product => {
      console.log(prodList.description);
    });

    const prodList = document.getElementById('products');
    data.forEach(product => {
      prodList.insertAdjacentHTML('beforeend', `
        <div style="border:1px solid black; margin:20px;">
          <h2>${product.title}</h2>
          <img width="70" src="${product.image}" alt="img"/>
        </div>
        `);
    });
  });

  console.log("After .then")
}

// const getRand = () => {
//   let rand = 0;
//   console.log("***************");
//   console.log("Calculating");
//   console.log("***************");
//   setTimeout(() => {
//     //random calculation
//     return Math.random();
//   }, 2000);
//   // for (let i = 0; i < 1000000000; i++) {rand += Math.random();}
// }

// const x = 10;
// let y = x * 2;
// const r = getRand();
// console.log(r);
// console.log(y);