const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  {
    id: 1,
    title: "Nivia Flash 2.0 Badminton Shoes for Men | Your Go-to Shoe for Pickleball, Padel, and All Court Sports | Badminton Sports Shoes | (Blue/White/Sky Blue)",
    price: 769,
    image : "https://m.media-amazon.com/images/I/71lqmpE-2gL._SX569_.jpg",
    category: "Shoes"
  },
  {
     id: 2,
    title: "ASIAN Men's Wonder-13 Sports Running Shoes…",
    price: 598,
    image : "https://m.media-amazon.com/images/I/61utX8kBDlL._SY575_.jpg",
    category: "Shoes"
  },
    {
     id: 3,
    title: "Reebok Men's Running Shoes - Stride Runner - Lightweight Training Shoes for Gym, Running and Fitness",
    price: 1379,
    image : "https://m.media-amazon.com/images/I/51Pu2MZJqtL._SY695_.jpg",
    category: "Shoes"
  },
    {
     id: 4,
    title: "Campus Men First Running Shoes",
    price: 1149,
    image : "https://m.media-amazon.com/images/I/71RiFU3KvLL._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 5,
    title: "ASIAN Men's MEXICO-11 Casual Sneaker Shoes with Synthetic Upper Lightweight Comfortable Mid Top Sneaker Shoes for Men's & Boy's",
    price: 798,
    image : "https://m.media-amazon.com/images/I/81R6YbNKOzL._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 6,
    title: "Boldfit Shoes for Man Stylish Sneakers for Man Comfortable Shoes for Men Casual Lace Up Sneakers for Men Lightweight Casual Sneaker Shoe for Boys",
    price: 1099,
    image : "https://m.media-amazon.com/images/I/51JceuUOhAL._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 7,
    title: "SPARX Mens Sd9043g Shoe",
    price: 699,
    image : "https://m.media-amazon.com/images/I/51PceyJAb1L._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 8,
    title: "Woodland Men's Leather Sneaker",
    price: 2248,
    image : "https://m.media-amazon.com/images/I/81IWsKhnzSL._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 9,
    title: "ASIAN Casual Sneaker Shoes for Men | Soft Cushioned Insole || MOSCOW-12 Sneakers for Men",
    price: 664,
    image : "https://m.media-amazon.com/images/I/71OkgU7UC7L._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 9,
    title: "New Balance Men 327 Sneakers",
    price: 5499,
    image : "https://m.media-amazon.com/images/I/61yGSyEO6fL._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 10,
    title: "Puma Mens Dazzler Sneaker",
    price: 1459,
    image : "https://m.media-amazon.com/images/I/51GOpp8rAJL._SY695_.jpg",
    category: "Shoes"
  },
      {
     id: 11,
    title: "JQR Men Signature Sneakers",
    price: 789,
    image : "https://m.media-amazon.com/images/I/71chIep9O6L._SY575_.jpg",
    category: "Shoes"
  },
      {
     id: 12,
    title: "Reebok Men's Tennis Shoe - Baseliner - White - Lightweight, Cushioned Court Shoes with Durable Non-Marking Sole, Ideal for All Court Surfaces",
    price: 2299,
    image : "https://m.media-amazon.com/images/I/51vq7Nmml2L._SY695_.jpg",
    category: "Shoes"
  },
   {
     id: 13,
    title: "Campus Men Og-35 Sneakers",
    price: 949,
    image : "https://m.media-amazon.com/images/I/61ZDv0ZLhFL._SY575_.jpg",
    category: "Shoes"
  },
   {
     id: 14,
    title: "Skechers Mens Go Run Elevate Sneaker",
    price: 3749,
    image : "https://m.media-amazon.com/images/I/81YemCSIQ-L._SX575_.jpg",
    category: "Shoes"
  },
    {
     id: 15,
    title: "Skechers Mens Sport Court 92 Sneaker",
    price: 3059,
    image : "https://m.media-amazon.com/images/I/61ajzcKxFjL._SY695_.jpg",
    category: "Shoes"
  },
  // phone 
     {
     id: 16,
    title: "Nothing Phone (3a) Lite (White, 128 GB) (8 GB RAM)",
    price: 19700,
    image : "https://m.media-amazon.com/images/I/717B2B7Hm8L._SY606_.jpg",
    category: "Mobile phone"
  },
   {
     id: 17,
    title: "Samsung Galaxy A55 5G (Awesome Navy, 12GB RAM, 256GB Storage) | AI Mobile | 50MP Main Camera (OIS) | Super HDR Video| Nightography | IP67 | Gorilla Glass Victus+ | sAMOLED | Gaming Smartphone",
    price: 29999,
    image : "https://m.media-amazon.com/images/I/71EeBkydf9L._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 18,
    title: "OnePlus Nord CE5 | MediaTek Dimensity | Massive 7100mAh Battery | Powered by OnePlus AI | 128GB 8GB | Black Infinity",
    price: 24998,
    image : "https://m.media-amazon.com/images/I/61IOa9IrlaL._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 19,
    title: "Vivo T4x 5G (Marine Blue, 128 GB) (8 GB RAM)",
    price: 16499,
    image : "https://m.media-amazon.com/images/I/41L4gDdtZkL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Mobile phone"
  },
   {
     id: 20,
    title: "Google Pixel 9a 5G (Obsidian, 8GB RAM, 256GB Storage)",
    price: 38680,
    image : "https://m.media-amazon.com/images/I/51loAyfmYXL._SX522_.jpg",
    category: "Mobile phone"
  },
   {
     id: 21,
    title: "OnePlus 15 | 12GB+256GB | Sand Storm | India's First Snapdragon® 8 Elite Gen 5 | 7300mAh Battery | Personalised AI | Game-Changing 165Hz Display | Triple 50MP Camera with 4K 120fps Dolby Vision",
    price: 72988,
    image : "https://m.media-amazon.com/images/I/616kkUbRg4L._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 22,
    title: "REDMI Note 15 Pro 5G (Carbon Black, 8GB+256GB) | 200MasterPixel OIS Camera | Dimensity 7400-Ultra | 17.3cm CrystalRes AMOLED Screen | IP66/68/69/69K | Mega 6580mAh Si/C Battery | 45W Fast Charging",
    price: 31999,
    image : "https://m.media-amazon.com/images/I/81uGa3uCO1L._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 23,
    title: "realme NARZO 90 5G (Victory Gold,8GB+128GB) | 7000mAh Biggest Battery | 60W Fastest Charging | 50MP Front & Rear AI Cameras | 4000nits Brightest Display | AI Assist | IP69 Dust & Water Resistance",
    price: 18499,
    image : "https://m.media-amazon.com/images/I/811u8KqIIVL._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 24,
    title: "iPhone Air 256 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Sky Blue",
    price: 94990,
    image : "https://m.media-amazon.com/images/I/61Ce-6B6x+L._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 25,
    title: "Samsung Galaxy S25 Ultra 5G Mobile with Galaxy AI (Titanium Gray, 12GB RAM, 256GB Storage),Titanium Frame,Ultra Gaming with Snapdragon 8 Elite,200MP Camera with ProVisual Engine,5000mAh Battery",
    price: 129999,
    image : "https://m.media-amazon.com/images/I/71L4Bb3ebvL._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 26,
    title: "iPhone 17 Pro 1 TB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Deep Blue",
    price: 174900,
    image : "https://m.media-amazon.com/images/I/618vU2qKXQL._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 27,
    title: "Apple iPhone 15 Pro Max (512 GB) - White Titanium",
    price: 154900,
    image : "https://m.media-amazon.com/images/I/81c50PU+lpL._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 28,
    title: "Samsung Galaxy S25 5G Smartphone with Galaxy AI (Icyblue, 12GB RAM, 256GB Storage), Snapdragon 8 Elite, 50 MP Camera with ProVisual Engine and 4000mAh Battery",
    price: 74999,
    image : "https://m.media-amazon.com/images/I/61p3FwE31-L._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 29,
    title: "Oppo Reno14 5G (Pearl White, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: 42999,
    image : "https://m.media-amazon.com/images/I/71qZESVTslL._SX679_.jpg",
    category: "Mobile phone"
  },
   {
     id: 30,
    title: "OnePlus 15 | 12GB+256GB | Sand Storm | India's First Snapdragon® 8 Elite Gen 5 | 7300mAh Battery | Personalised AI | Game-Changing 165Hz Display | Triple 50MP Camera with 4K 120fps Dolby Vision",
    price: 72998,
    image : "https://m.media-amazon.com/images/I/616kkUbRg4L._SX679_.jpg",
    category: "Mobile phone"
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 5000");
});