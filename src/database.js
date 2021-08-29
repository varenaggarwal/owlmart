import categoryRacquets from "./components/Homepage/images/racquets.jpg";
import categoryBalls from "./components/Homepage/images/balls.jpg";
import categoryShoes from "./components/Homepage/images/shoes.jpg";
import categoryStrings from "./components/Homepage/images/strings.jpg";

export const coupons = [
  { coupon: "NEW USER", off: 500, minOrder: 2000 },
  { coupon: "NEW YEAR OFFER", off: 1000, minOrder: 5000 },
];

export const brands = ["Wilson", "Prince", "Head", "Babolat"];
export const categories = ["Racquets", "Shoes", "Balls", "Strings"];

// export const featuredBrands = [
//   { name: "Wilson", img: brand1 },
//   { name: "Prince", img: brand2 },
//   { name: "Head", img: brand3 },
//   { name: "Babolat", img: brand4 },
// ];

export const featuredCategories = [
  { name: "Racquets", img: categoryRacquets },
  { name: "Shoes", img: categoryShoes },
  { name: "Balls", img: categoryBalls },
  { name: "Strings", img: categoryStrings },
];

export const statesInCountryWise = {
  India: [
    "Maharashtra",
    "Gujrat",
    "Madhya Pradesh",
    "West Bengal",
    "Bihar",
    "Rajasthan",
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
  ],
  Australia: [
    "New South Wales",
    "Queensland",
    "South Australia",
    "Tasmania",
    "Victoria",
    "Western Australia",
  ],
};
export const countries = Object.keys(statesInCountryWise);
