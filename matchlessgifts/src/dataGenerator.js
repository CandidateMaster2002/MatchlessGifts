const details = [
  "Bold and Comfy Everyday Tee",
  "Sleek Timepiece for Modern Style",
  "Elevate Your Shoe Game",
  "Luxurious Denim for Trendsetters",
  "Vibrant Tee for Street Chic",
  "Precision in Every Tick",
  "Step Into Comfort and Style",
  "Distinctive Denim Elegance",
  "Effortless Style with Every Step",
  "Casual Elegance Redefined",
  "Timeless Appeal, Modern Design",
  "Unleash Your Casual Vibe",
  "Urban Charm in Every Stitch",
  "Dapper Denim for Urban Souls",
  "Effortlessly Stylish Everyday Tee",
  "Timeless Classic for Your Wrist",
  "Comfort Meets Fashion in Shoes",
  "Chic Denim Upgrade for You",
  "Casual Elegance for the Bold",
  "Stylish Steps, All Day Comfort",
  "Simplicity Redefined in Denim",
  "Infinite Style with Every Step",
  "Casual Chic Tee for All",
  "Timeless Elegance on Your Wrist",
  "Elevate Your Look with Shoes",
  "Denim Love, Every Stitch Matters",
  "Street-Ready Tee, Your Way",
  "Modern Charm Wrapped in Denim",
  "Step Out in Style and Comfort",
  // ... (repeat for the remaining items)
];

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function generateRandomName() {
  const animals = ['Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe', 'Monkey', 'Penguin', 'Kangaroo', 'Panda', 'Zebra'];
  const fruits = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Kiwi', 'Mango', 'Orange', 'Peach', 'Pear', 'Strawberry'];
  const sweets = ['Candy', 'Chocolate', 'Cookie', 'Donut', 'Ice Cream', 'Muffin', 'Pudding', 'Sorbet', 'Truffle', 'Waffle'];
  const randomCategory = getRandomItem([animals, fruits, sweets]);
  const randomName = getRandomItem(randomCategory);
  return randomName;
}

function generateRandomData() {
  const rows = [];
  const usedNames = new Set();
  for (let i = 1; i <= 60; i++) {
    const category = getRandomItem(['Shoes', 'Watches', 'Tshirts', 'Jeans']);
    const img_url =
      category === 'Shoes' ? 'src/assets/white_shoes.webp' :
      category === 'Watches' ? 'src/assets/goldenwatches.jpeg' :
      category === 'Jeans' ? 'src/assets/jeans.webp' :
      'src/assets/greytshirt.jpeg';

    let name;
    do {
      name = generateRandomName();
    } while (usedNames.has(name));
    usedNames.add(name);

    const row = `(${i}, '${getRandomItem(['Adidas', 'Nike', 'Puma', 'Reebok', 'Converse', 'Fastrack'])}', ` +
                `'${category}', ` +
                `'${getRandomItem(details)}', ` +
                `'${img_url}', ` +
                `'${name}', ` +
                `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000}, ` +
                `${Math.floor(Math.random() * (4500 - 200 + 1)) + 200})`;

    rows.push(row);
  }
  return rows.join(',\n');
}

const insertQuery = `INSERT INTO product (id, brand, category, details, img_url, name, original_price, price)
VALUES
${generateRandomData()};`;

console.log(insertQuery);




// const items = [];

// // Function to generate an item
// const generateItem = (id, category, img_url) => {
//   const brands = ["Adidas", "Nike", "Puma", "Reebok", "Converse","Fastrack"];
//   const descriptions = [
//     "Bold and Comfy Everyday Tee",
//     "Sleek Timepiece for Modern Style",
//     "Elevate Your Shoe Game",
//     "Luxurious Denim for Trendsetters",
//     "Vibrant Tee for Street Chic",
//     "Precision in Every Tick",
//     "Step Into Comfort and Style",
//     "Distinctive Denim Elegance",
//     "Effortless Style with Every Step",
//     "Casual Elegance Redefined",
//     "Timeless Appeal, Modern Design",
//     "Unleash Your Casual Vibe",
//     "Urban Charm in Every Stitch",
//     "Dapper Denim for Urban Souls",
//     "Effortlessly Stylish Everyday Tee",
//     "Timeless Classic for Your Wrist",
//     "Comfort Meets Fashion in Shoes",
//     "Chic Denim Upgrade for You",
//     "Casual Elegance for the Bold",
//     "Stylish Steps, All Day Comfort",
//     "Simplicity Redefined in Denim",
//     "Infinite Style with Every Step",
//     "Casual Chic Tee for All",
//     "Timeless Elegance on Your Wrist",
//     "Elevate Your Look with Shoes",
//     "Denim Love, Every Stitch Matters",
//     "Street-Ready Tee, Your Way",
//     "Modern Charm Wrapped in Denim",
//     "Step Out in Style and Comfort",
//     // ... (repeat for the remaining items)
//   ];
//   const randomBrand = brands[Math.floor(Math.random() * brands.length)];
//   const randomDescr=descriptions[Math.floor(Math.random() * descriptions.length)];
 
 
  
//   return {
//     id: id.toString(),
//     name: `${randomBrand} ${category.charAt(0).toUpperCase()}${category.slice(1)} Item ${id}`,
//     brand: randomBrand,
//     category: category,
//     description: randomDescr,
//     original_price:Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000,
//     rating: (Math.random() * (5 - 1) + 1).toFixed(1),
//     no_of_reviews: Math.floor(Math.random() * 10000) + 1,
//     no_of_ratings: Math.floor(Math.random() * 50000) + 1,
//     discount: `${((Math.random() * 90) + 1).toFixed(2)}%`, // Random discount percentage
//     img_url: img_url,
//   };
// };

// // Generate T-Shirts
// for (let i = 1; i <= 13; i++) {
//   items.push(generateItem(i, "tshirt", "/home/beehyv/LearnReact/matchlessgifts/src/assets/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.webp"));
// }

// // Generate Watches
// for (let i = 14; i <= 26; i++) {
//   items.push(generateItem(i, "watch", "/home/beehyv/LearnReact/matchlessgifts/src/assets/g715-casio-original-imag5jsrbzfjqmeb.webp"));
// }

// // Generate Shoes
// for (let i = 27; i <= 39; i++) {
//   items.push(generateItem(i, "shoes", "/home/beehyv/LearnReact/matchlessgifts/src/assets/8-5089-8-server-brown-original-imagrnqaygfghm3g.webp"));
// }

// // Generate Jeans
// for (let i = 40; i <= 52; i++) {
//   items.push(generateItem(i, "jeans", "/home/beehyv/LearnReact/matchlessgifts/src/assets/-original-imagt6zh6gsq2hw8.webp"));
// }

// console.log(items);



