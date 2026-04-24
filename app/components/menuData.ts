export type Badge = {
  label: string;
  type: "gold" | "orange" | "red" | "darkred" | "green";
};

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  badges: Badge[];
  image: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    label: "Signature Burgers",
    icon: "🍔",
    subtitle: "Served with lettuce, tomato, onion & pickles on a toasted brioche bun",
    items: [
      {
        name: "Classic BurgerDude",
        price: "$13.99",
        description: "1/2 lb beef patty, American cheese, crisp lettuce, vine-ripened tomato, red onion, pickles, secret BurgerDudes sauce",
        badges: [
          { label: "Signature", type: "gold" },
          { label: "Most Popular", type: "orange" },
        ],
        image: "https://i.ibb.co.com/TMkgc699/Classic-Burger-Dude.jpg",
      },
      {
        name: "Double Dude Deluxe",
        price: "$16.99",
        description: "Two 1/2 lb beef patties, double American cheese, bacon, grilled onions, signature sauce",
        badges: [{ label: "Fan Favorite", type: "orange" }],
        image: "https://i.ibb.co.com/RTK5cZj0/Double-Dude-Deluxe.jpg",
      },
      {
        name: "BBQ Bacon Blitz",
        price: "$15.99",
        description: "Beef patty, smoky BBQ sauce, crispy bacon, sharp cheddar, beer-battered onion rings",
        badges: [{ label: "Bestseller", type: "orange" }],
        image: "https://i.ibb.co.com/DfyWhhQL/BBQ-Bacon-Blitz.jpg",
      },
      {
        name: "Mushroom Swiss Dude",
        price: "$14.99",
        description: "Beef patty, sautéed mushrooms, melted Swiss cheese, caramelized onions, creamy garlic aioli",
        badges: [],
        image: "https://i.ibb.co.com/jPmHKs5G/3d8cd01e-66ff-4112-a915-d740e50ac0c3.jpg",
      },
      
      {
        name: "California Avocado Dude",
        price: "$17.99",
        description: "Beef patty, creamy avocado slices, crispy bacon, pepper jack cheese, spring mix, ranch dressing",
        badges: [],
        image: "https://i.ibb.co.com/ZzqfthdQ/a45d9f5d-c08a-4d4e-9625-3280ad8210a5.jpg",
      },
      {
        name: "The Fort Worth Philly Cheesesteak",
        price: "$14.99",
        description: "Thinly sliced ribeye steak, grilled onions, and melted Cheez Whiz on a toasted hoagie. The original!",
        badges: [{ label: "New", type: "green" }],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/b9d061ae-4cda-48fb-b117-8899189b4158.jpeg",
      },
      {
        name: "Classic Hot Link",
        price: "$13.99",
        description: "Grilled spicy beef hot link with mustard, grilled onions, and pickles on a toasted hoagie roll",
        badges: [],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/99cc18cd-45db-4294-b2d6-ebafff20bbfc.jpeg",
      },
      {
        name: "Loaded Hot Link",
        price: "$14.99",
        description: "Two hot links topped with steak, shredded cheddar cheese, diced onions, and jalapeños on a fresh roll",
        badges: [],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/0b22882f-617a-4c28-8073-521df97c7274.jpeg",
      },
      {
        name: "BBQ Hot Link",
        price: "$13.99",
        description: "Grilled hot link smothered in smoky BBQ sauce, topped with coleslaw and crispy onion straws",
        badges: [{ label: "Premium", type: "gold" }],
        image: "https://i.ibb.co.com/5WCxwDDS/Hot-chorizo-links.jpg",
      },
      {
        name: "Loaded Fries",
        price: "$14.99",
        description: "Cheese sauce, bacon, green onions",
        badges: [{ label: "Premium", type: "gold" }],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/8134c752-83dc-4a2f-8638-ce18f759cba2.jpeg",
      },

       {
        name: "Pepsi",
        price: "$1.99",
        description: "Enjoy with food, Best deal",
        badges: [{ label: "Premium", type: "gold" }],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/d15f69cf-309a-4a50-9678-7efc23a5334b.jpeg",
      },

      {
        name: "Sprite",
        price: "$1.99",
        description: "Enjoy with food, Best deal",
        badges: [{ label: "Premium", type: "gold" }],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/b1effaad-38ae-45f4-89ab-7bdf97fd446b.jpeg",
      },


      {
        name: "Strawberry",
        price: "$1.99",
        description: "Enjoy with food, Strawberry Fanta",
        badges: [{ label: "Premium", type: "gold" }],
        image: "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=984,height=534,quality=60,format=auto/menu-photos/184727f4-f7dd-4ed7-8af2-789aa3175136.jpeg",
      },




    ],
  },
  {
    id: "cheesesteak",
    label: "Philly Cheesesteaks",
    icon: "🥩",
    subtitle: "Authentic style with thinly sliced ribeye on a fresh hoagie roll",
    items: [
      {
        name: "Classic Philly Cheesesteak",
        price: "$13.99",
        description: "Thinly sliced ribeye steak, grilled onions, melted Cheez Whiz on toasted hoagie",
        badges: [{ label: "Authentic", type: "gold" }],
        image: "https://images.unsplash.com/photo-1612392061787-2a8540c87ca8?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Provolone Philly",
        price: "$14.49",
        description: "Premium ribeye, melted provolone, sautéed onions, bell peppers on hoagie roll",
        badges: [],
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Mushroom Cheesesteak",
        price: "$14.99",
        description: "Shaved ribeye, sautéed mushrooms, grilled onions, white American cheese, garlic aioli",
        badges: [],
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Buffalo Chicken Cheesesteak",
        price: "$13.99",
        description: "Grilled chicken breast, buffalo sauce, melted provolone, ranch dressing, celery slaw",
        badges: [{ label: "Spicy", type: "red" }],
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Pizza Steak",
        price: "$14.99",
        description: "Ribeye steak, marinara sauce, melted mozzarella, pepperoni, Italian seasoning",
        badges: [{ label: "Unique", type: "orange" }],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Bacon Ranch Cheesesteak",
        price: "$15.49",
        description: "Shaved steak, crispy bacon, grilled onions, American cheese, creamy ranch dressing",
        badges: [],
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "hotlink",
    label: "Hot Link Sandwiches",
    icon: "🌭",
    subtitle: "Spicy beef hot links grilled to perfection",
    items: [
      {
        name: "Classic Hot Link",
        price: "$10.99",
        description: "Grilled spicy beef hot link, mustard, grilled onions, pickles on toasted hoagie roll",
        badges: [{ label: "Spicy", type: "red" }],
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Loaded Hot Link",
        price: "$12.99",
        description: "Two hot links, chili, shredded cheddar cheese, diced onions, jalapeños on fresh roll",
        badges: [{ label: "Extra Spicy", type: "darkred" }],
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "BBQ Hot Link",
        price: "$11.99",
        description: "Grilled hot link, smoky BBQ sauce, coleslaw, crispy onion straws",
        badges: [],
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Philly-Style Hot Link",
        price: "$13.49",
        description: "Sliced hot links, grilled peppers, onions, melted cheese whiz",
        badges: [
          { label: "New", type: "green" },
          { label: "Spicy", type: "red" },
        ],
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "chicken",
    label: "Fried Chicken",
    icon: "🍗",
    subtitle: "Crispy, juicy, and perfectly seasoned",
    items: [
      {
        name: "Crispy Chicken Sandwich",
        price: "$12.99",
        description: "Hand-breaded crispy chicken breast, pickles, lettuce, mayo on toasted brioche bun",
        badges: [{ label: "Bestseller", type: "orange" }],
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Spicy Chicken Sandwich",
        price: "$13.49",
        description: "Crispy chicken, Nashville hot sauce, pickles, coleslaw, comeback sauce",
        badges: [{ label: "Extra Spicy", type: "darkred" }],
        image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Honey Butter Chicken",
        price: "$13.99",
        description: "Fried chicken, sweet honey butter, pickles, mayo on soft bun",
        badges: [],
        image: "https://images.unsplash.com/photo-1597933471913-b4513c4bffa5?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Buffalo Chicken Sandwich",
        price: "$13.49",
        description: "Crispy chicken, buffalo sauce, blue cheese or ranch, lettuce, tomato",
        badges: [{ label: "Spicy", type: "red" }],
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "BBQ Chicken Sandwich",
        price: "$13.99",
        description: "Fried chicken breast, BBQ sauce, cheddar cheese, bacon, crispy onion rings",
        badges: [],
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Chicken Tenders (5pc)",
        price: "$11.99",
        description: "Five crispy chicken tenders — choice of dipping sauce: honey mustard, BBQ, ranch, or buffalo",
        badges: [],
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Fried Chicken Wings (8pc)",
        price: "$12.99",
        description: "Eight jumbo wings — choice of sauce: buffalo, BBQ, honey garlic, lemon pepper, or dry rub",
        badges: [],
        image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Chicken & Waffles",
        price: "$14.99",
        description: "Crispy fried chicken tenders on golden Belgian waffle, maple syrup and honey butter",
        badges: [{ label: "Signature", type: "gold" }],
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides & Extras",
    icon: "🍟",
    items: [
      {
        name: "Classic Fries",
        price: "$4.49",
        description: "Crispy golden fries with sea salt",
        badges: [],
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Loaded Fries",
        price: "$6.99",
        description: "Cheese sauce, bacon, green onions",
        badges: [],
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Sweet Potato Fries",
        price: "$5.49",
        description: "With chipotle mayo dip",
        badges: [],
        image: "https://images.unsplash.com/photo-1623238913973-21e45cbc6a2e?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Onion Rings",
        price: "$5.49",
        description: "Beer-battered with ranch",
        badges: [],
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Coleslaw",
        price: "$3.99",
        description: "Creamy or vinegar-based",
        badges: [],
        image: "https://images.unsplash.com/photo-1607116667981-ff148a4b3b59?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Mac & Cheese",
        price: "$5.99",
        description: "Creamy three-cheese blend",
        badges: [],
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Corn on the Cob",
        price: "$4.49",
        description: "Buttered and seasoned",
        badges: [],
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Mashed Potatoes",
        price: "$4.99",
        description: "Creamy with gravy",
        badges: [],
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80&auto=format&fit=crop",
      },
      {
        name: "Jalapeño Poppers",
        price: "$6.99",
        description: "Cream cheese filled (6pc)",
        badges: [{ label: "Spicy", type: "red" }],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "drinks",
    label: "Beverages",
    icon: "🥤",
    items: [
      { name: "Fountain Drinks", price: "$2.99", description: "Coke, Diet Coke, Sprite, Dr Pepper & more", badges: [], image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80&auto=format&fit=crop" },
      { name: "Fresh Lemonade", price: "$3.99", description: "Hand-squeezed, refreshingly cold", badges: [], image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80&auto=format&fit=crop" },
      { name: "Sweet Tea", price: "$2.99", description: "Southern style, perfectly sweetened", badges: [], image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80&auto=format&fit=crop" },
      { name: "Unsweet Tea", price: "$2.99", description: "Classic unsweetened iced tea", badges: [], image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80&auto=format&fit=crop" },
      { name: "Chocolate Shake", price: "$5.99", description: "Rich, creamy chocolate milkshake", badges: [], image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80&auto=format&fit=crop" },
      { name: "Strawberry Shake", price: "$5.99", description: "Fresh strawberry milkshake", badges: [], image: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=400&q=80&auto=format&fit=crop" },
      { name: "Vanilla Shake", price: "$5.99", description: "Classic creamy vanilla shake", badges: [], image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80&auto=format&fit=crop" },
      { name: "Oreo Shake", price: "$6.49", description: "Blended Oreo cookie milkshake", badges: [], image: "https://images.unsplash.com/photo-1621481926060-0a39d87e3d6b?w=400&q=80&auto=format&fit=crop" },
    ],
  },
];
