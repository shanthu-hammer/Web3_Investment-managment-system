import fetch from "node-fetch";

async function GettingData() {
  let da = await fetch(
    "https://bafybeibkohohwjtwhquebfrp7ru2e4pl77ceoaxjtwxdxp6dikjin7uxsa.ipfs.w3s.link/sampledata.txt"
  );
  //https://fakestoreapi.com/products
  const mydata = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: { rate: 3.6, count: 145 },
    },
  ];
  const data = await da.json();
  console.log(data);
  //for (let i = 0; i < data.length; i++) {
  //console.log(i);

  //console.log(data[i].price);
  //}

  // .then(data.json())
  // .then(console.log(data))
  // .catch(console.log(Error));
  console.log("success ");
}
GettingData();
