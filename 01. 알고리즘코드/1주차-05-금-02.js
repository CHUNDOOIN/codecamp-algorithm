const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

let myBuyPrice = 0;

for (let i = 0; i < myShopping.length; i++) {
  if (myShopping[i].category === "의류") {
    myBuyPrice = myBuyPrice + myShopping[i].price;
  }
}

let myClass = "";

if (myBuyPrice >= 50000) {
  myClass = "Gold";
} else if (50000 > myBuyPrice && myBuyPrice >= 30000) {
  myClass = "Silver";
} else {
  myClass = "Bronze";
}

let myBuyItem = 0;

for (let i = 0; i < myShopping.length; i++) {
  if (myShopping[i].category === "의류") {
    myBuyItem = myBuyItem + 1;
  }
}

console.log(
  `의류를 구매한 횟수는 총 ${myBuyItem}회 금액은 ${myBuyPrice}원이며 등급은 ${myClass}입니다.`
);
