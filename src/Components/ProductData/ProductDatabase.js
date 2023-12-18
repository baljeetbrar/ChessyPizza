const productsDatabase = [
    {

        // Burgers Database

      "id": 1,
      "img": "https://i.ibb.co/tLTzdhk/31b59f3f69f4d08a724cf8d59a639910.jpg",
      "name": "Classic Cheeseburger",
      "description": "Juicy beef patty with cheddar cheese, lettuce, and tomato on a sesame seed bun.",
      "price": 8.99,
      "category": "Burgers",
      "vegetarian": false
    },
    {
      "id": 2,
      "img": "https://i.ibb.co/v3GMK1G/f4cfbfcd8e22dca514fe205f3df99e1b.jpg",
      "name": "Bacon BBQ Burger",
      "description": "Beef burger topped with crispy bacon, cheddar cheese, and BBQ sauce.",
      "price": 10.99,
      "category": "Burgers",
      "vegetarian": false
    },
    {
      "id": 3,
      "img": "https://i.ibb.co/tQSGQ0P/ff5f4e62a7f6ce38b380899795b219e2.jpg",
      "name": "Veggie Burger",
      "description": "Vegetarian burger patty with lettuce, tomato, and pickles on a whole wheat bun.",
      "price": 9.99,
      "category": "Burgers",
      "vegetarian": true
    },
    {
      "id": 4,
      "img": "https://i.ibb.co/dD1bFKY/ca012915e390516707f99591ccbe74e2.jpg",
      "name": "Double Cheese Deluxe",
      "description": "Double beef patties with Swiss and American cheese, lettuce, and mayo.",
      "price": 12.99,
      "category": "Burgers",
      "vegetarian": false
    },
    {
      "id": 5,
      "img": "https://i.ibb.co/tLTzdhk/31b59f3f69f4d08a724cf8d59a639910.jpg",
      "name": "Spicy Jalapeno Burger",
      "description": "Beef patty with jalapenos, pepper jack cheese, lettuce, and spicy mayo.",
      "price": 11.99,
      "category": "Burgers",
      "vegetarian": false
    },
    {
      "id": 6,
      "img": "https://i.ibb.co/dD1bFKY/ca012915e390516707f99591ccbe74e2.jpg",
      "name": "Mushroom Swiss Burger",
      "description": "Beef patty with sautéed mushrooms, Swiss cheese, and garlic aioli.",
      "price": 11.99,
      "category": "Burgers",
      "vegetarian": false
    },
    {
      "id": 7,
      "img": "https://i.ibb.co/tQSGQ0P/ff5f4e62a7f6ce38b380899795b219e2.jpg",
      "name": "California Turkey Burger",
      "description": "Grilled turkey patty with avocado, lettuce, and tomato on a multigrain bun.",
      "price": 10.99,
      "category": "Burgers",
      "vegetarian": false
    },
    {
      "id": 8,
      "img": "https://i.ibb.co/v3GMK1G/f4cfbfcd8e22dca514fe205f3df99e1b.jpg",
      "name": "Black Bean Veggie Burger",
      "description": "Vegetarian black bean patty with guacamole, lettuce, and salsa.",
      "price": 9.99,
      "category": "Burgers",
      "vegetarian": true
    },
    {
      "id": 9,
      "img": "https://i.ibb.co/dD1bFKY/ca012915e390516707f99591ccbe74e2.jpg",
      "name": "Pesto Chicken Burger",
      "description": "Grilled chicken breast with pesto, sun-dried tomatoes, and mozzarella.",
      "price": 12.99,
      "category": "Burgers",
      "vegetarian": false
    },


    // Pizzas

        {
        "id": 11,
        "img": "https://i.ibb.co/Pj5BGcD/pizza-1.png",
        "name": "Margherita Pizza",
        "description": "Classic Margherita pizza with fresh tomatoes, mozzarella, and basil.",
        "price": 12.99,
        "category": "Pizzas",
        "vegetarian": true
    },
    {
        "id": 12,
        "img": "https://i.ibb.co/YdpKdtk/reservation-pizza.png",
        "name": "Pepperoni Pizza",
        "description": "Classic Pepperoni pizza with tomato sauce, mozzarella, and pepperoni slices.",
        "price": 14.99,
        "category": "Pizzas",
        "vegetarian": false
    },
    {
        "id": 13,
        "img": "https://i.ibb.co/rczBMQf/pizza-3.png",
        "name": "Vegetarian Supreme",
        "description": "Loaded with assorted vegetables, tomato sauce, and mozzarella cheese.",
        "price": 13.99,
        "category": "Pizzas",
        "vegetarian": true
    },
    {
        "id": 14,
        "img": "https://i.ibb.co/3CmGKdw/pizza-4.png",
        "name": "Meat Lover's Pizza",
        "description": "For the carnivores - pepperoni, sausage, bacon, and ground beef.",
        "price": 16.99,
        "category": "Pizzas",
        "vegetarian": false
    },
    {
        "id": 15,
        "img": "https://i.ibb.co/jgvCKGx/pizza-2.png",
        "name": "BBQ Chicken Pizza",
        "description": "Grilled chicken, red onions, and BBQ sauce on a pizza base.",
        "price": 15.99,
        "category": "Pizzas",
        "vegetarian": false
    },
    {
        "id": 16,
        "img": "https://i.ibb.co/Ld557Sg/our-story.png",
        "name": "Pesto Delight",
        "description": "Pesto sauce, cherry tomatoes, fresh mozzarella, and basil.",
        "price": 13.99,
        "category": "Pizzas",
        "vegetarian": true
    },
    {
        "id": 17,
        "img": "https://i.ibb.co/mNxG9vX/banner-img-bottom.png",
        "name": "Hawaiian Paradise",
        "description": "Classic Hawaiian with ham, pineapple, and mozzarella cheese.",
        "price": 14.99,
        "category": "Pizzas",
        "vegetarian": false
    },
    {
        "id": 18,
        "img": "https://i.ibb.co/Pj5BGcD/pizza-1.png",
        "name": "Mushroom Lovers",
        "description": "A fungi feast with assorted mushrooms and mozzarella.",
        "price": 13.99,
        "category": "Pizzas",
        "vegetarian": true
    },
    {
        "id": 19,
        "img": "https://i.ibb.co/Pj5BGcD/pizza-1.png",
        "name": "Buffalo Chicken",
        "description": "Spicy buffalo chicken, blue cheese, and celery on a pizza.",
        "price": 15.99,
        "category": "Pizzas",
        "vegetarian": false
    },
    {
        "id": 20,
        "img": "https://i.ibb.co/Ld557Sg/our-story.png",
        "name": "Four Cheese Delight",
        "description": "Mozzarella, cheddar, feta, and parmesan on a crispy crust.",
        "price": 14.99,
        "category": "Pizzas",
        "vegetarian": true
    },
    // Salads

    {
        "id": 21,
        "img": "https://i.ibb.co/XDWy2B5/product-8.png",
        "name": "Classic Caesar Salad",
        "description": "Crisp romaine lettuce, garlic croutons, parmesan cheese, and Caesar dressing.",
        "price": 9.99,
        "category": "Salads",
        "vegetarian": false
    },
    {
        "id": 22,
        "img": "https://i.ibb.co/D4FYpTH/salads-3.png",
        "name": "Mediterranean Chickpea Salad",
        "description": "Chickpeas, cherry tomatoes, cucumbers, olives, and feta cheese with Greek dressing.",
        "price": 11.99,
        "category": "Salads",
        "vegetarian": true
    },
    {
        "id": 23,
        "img": "https://i.ibb.co/YBNJh0z/salads-1.png",
        "name": "Grilled Chicken Caesar",
        "description": "Grilled chicken breast on a bed of Caesar salad with croutons and parmesan.",
        "price": 12.99,
        "category": "Salads",
        "vegetarian": false
    },
    {
        "id": 24,
        "img": "https://i.ibb.co/89K8mQN/salads-2.png",
        "name": "Caprese Salad",
        "description": "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
        "price": 10.99,
        "category": "Salads",
        "vegetarian": true
    },
    {
        "id": 25,
        "img": "https://i.ibb.co/89K8mQN/salads-2.png",
        "name": "Southwest Chicken Salad",
        "description": "Grilled chicken, corn, black beans, avocado, and tortilla strips with chipotle ranch.",
        "price": 13.99,
        "category": "Salads",
        "vegetarian": false
    },
    {
        "id": 26,
        "img": "https://i.ibb.co/YBNJh0z/salads-1.png",
        "name": "Greek Salad",
        "description": "Crisp lettuce, tomatoes, cucumber, feta cheese, olives, and Greek dressing.",
        "price": 10.99,
        "category": "Salads",
        "vegetarian": true
    },
    {
        "id": 27,
        "img": "https://i.ibb.co/D4FYpTH/salads-3.png",
        "name": "Asian Sesame Chicken Salad",
        "description": "Shredded chicken, mixed greens, mandarin oranges, and sesame dressing.",
        "price": 12.99,
        "category": "Salads",
        "vegetarian": false
    },
    {
        "id": 28,
        "img": "https://i.ibb.co/XDWy2B5/product-8.png",
        "name": "Quinoa and Avocado Salad",
        "description": "Quinoa, avocado, cherry tomatoes, and cilantro with lime vinaigrette.",
        "price": 11.99,
        "category": "Salads",
        "vegetarian": true
    },
   
    // Pasta
        {
        "id": 31,
        "img": "https://i.ibb.co/ZX7QDPV/product-7-1.png",
        "name": "Spaghetti Bolognese",
        "description": "Classic Italian spaghetti with rich meat sauce and parmesan cheese.",
        "price": 12.99,
        "category": "Pasta",
        "vegetarian": false
    },
    {
        "id": 32,
        "img": "https://i.ibb.co/PGrXBzr/product-7-300x300.png",
        "name": "Vegetarian Alfredo",
        "description": "Fettuccine pasta with creamy Alfredo sauce, mushrooms, and broccoli.",
        "price": 11.99,
        "category": "Pasta",
        "vegetarian": true
    },
    {
        "id": 33,
        "img": "https://i.ibb.co/CQgj4NL/SEA-FOOD-PASTA.png",
        "name": "Chicken Pesto Penne",
        "description": "Penne pasta with grilled chicken, cherry tomatoes, and basil pesto.",
        "price": 13.99,
        "category": "Pasta",
        "vegetarian": false
    },
    {
        "id": 34,
        "img": "https://i.ibb.co/D5MMh0F/product-2-300x300.png",
        "name": "Spinach and Ricotta Stuffed Shells",
        "description": "Jumbo pasta shells filled with spinach and ricotta, baked in marinara sauce.",
        "price": 10.99,
        "category": "Pasta",
        "vegetarian": true
    },
    {
        "id": 35,
        "img": "https://i.ibb.co/CQgj4NL/SEA-FOOD-PASTA.png",
        "name": "Shrimp Scampi Linguine",
        "description": "Linguine pasta with shrimp, garlic, lemon, and white wine sauce.",
        "price": 14.99,
        "category": "Pasta",
        "vegetarian": false
    },
    
    // Deserts

     {
    "id": 41,
    "img": "https://i.ibb.co/x1bLTgf/d-05.png",
    "name": "Classic Chocolate Cake",
    "description": "Rich chocolate cake with layers of velvety chocolate frosting.",
    "price": 15.99,
    "category": "Desserts",
    "vegetarian": true
  },
  {
    "id": 42,
    "img": "https://i.ibb.co/ZMsxj9C/d-4.png",
    "name": "Vanilla Bean Ice Cream",
    "description": "Creamy vanilla bean ice cream with a sprinkle of chocolate shavings.",
    "price": 8.99,
    "category": "Desserts",
    "vegetarian": true
  },
  {
    "id": 43,
    "img": "https://i.ibb.co/6Dx9Ks2/d-1.png",
    "name": "Strawberry Cheesecake",
    "description": "Delicious cheesecake topped with fresh strawberries and strawberry glaze.",
    "price": 12.99,
    "category": "Desserts",
    "vegetarian": true
  },
  {
    "id": 44,
    "img": "https://i.ibb.co/gVZ4Cs1/COOKIES.png",
    "name": "Molten Lava Cake",
    "description": "Warm chocolate lava cake with a gooey, molten center.",
    "price": 14.99,
    "category": "Desserts",
    "vegetarian": true
  },
  {
    "id": 45,
    "img": "https://i.ibb.co/6Dx9Ks2/d-1.png",
    "name": "Strawberry Cheesecake",
    "description": "Delicious cheesecake topped with fresh strawberries and strawberry glaze.",
    "price": 12.99,
    "category": "Desserts",
    "vegetarian": true
  }

  ];

  export default productsDatabase;
