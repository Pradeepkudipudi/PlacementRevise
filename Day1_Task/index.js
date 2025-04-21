let Products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 19.95,
    description: " the forest. d sleeve, your everyday",
    category: "men's clothing",

    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 220.3,
    description:
      "three-button henley placket ,neckline includes a three-button placket.",
    category: "men's clothing",

    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 25.99,
    description: "great or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",

    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

if (Products.length > 0) {
  NoOfproducts = 0;
  let totalprice = 0;
  let purchasingItems = [];

  Products.map((item) => {
    NoOfproducts++;
    totalprice += item.price;
    purchasingItems.push(item.title);
  });

  if (totalprice >= 120) {
    let discount = (7 / 100) * totalprice;

    const AfterDiscounted = totalprice - discount;
    let Tax = (4 / 100) * AfterDiscounted;

    let FinalBill = AfterDiscounted + Tax;

    let Obj = {}; // defined in outer scope

    setTimeout(() => {
      Obj.Purchased = purchasingItems;
      Obj.NoOfProducts = NoOfproducts;
      Obj.discount = Math.floor(discount);
      Obj.totalprice = FinalBill;

      console.log(Obj);
    }, 1000);
  } else {
    Tax = (4 / 100) * totalprice;

    FinalBill = totalprice + Tax;

    let Obj = {}; // defined in outer scope

    setTimeout(() => {
      Obj.Purchased = purchasingItems;
      Obj.NoOfProducts = NoOfproducts;
      Obj.totalprice = FinalBill;

      console.log(Obj);
    }, 1000);
  }
} else {
  console.log("your cart is empty");
}
