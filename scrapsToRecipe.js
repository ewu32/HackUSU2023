// Budget imports
// Recipe ingredients from data.json
let data = [
  {
    "recipe": "Lemon Parsley Pasta",
    "listOfIngredients": [
      "thin spaghetti",
      "fresh lemon",
      "garlic",
      "fresh parsley",
      "black pepper",
      "olive oil",
      "butter",
      "Parmesan",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/lemon-parsley-pasta/"
  },
  {
    "recipe": "Valentines Day Cookies",
    "listOfIngredients": [
      "salted butter",
      "sugar",
      "vanilla",
      "eggs",
      "all-purpose flour",
      "baking powder",
      "melting chocolate"
    ],
    "url": "https://www.budgetbytes.com/valentines-day-cookies/"
  },
  {
    "recipe": "Loaded Potato Soup",
    "listOfIngredients": [
      "bacon",
      "yellow onion",
      "garlic",
      "butter",
      "all-purpose flour",
      "chicken broth",
      "milk",
      "russet potatoes",
      "smoked paprika",
      "cayenne pepper",
      "salt",
      "black pepper",
      "sour cream",
      "cheddar cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/loaded-potato-soup/"
  },
  {
    "recipe": "Tomato & Roasted Red Pepper Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "butter",
      "all-purpose flour",
      "roasted red peppers",
      "crushed tomatoes",
      "dried basil",
      "dried thyme",
      "black pepper",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/roasted-red-pepper-tomato-soup/"
  },
  {
    "recipe": "Easy Dumpling Soup",
    "listOfIngredients": [
      "vegetable broth",
      "soy sauce",
      "toasted sesame oil",
      "fish sauce",
      "green onion",
      "frozen dumplings",
      "fresh spinach",
      "sesame seeds",
      "Sichuan Chili Crisp"
    ],
    "url": "https://www.budgetbytes.com/easy-dumpling-soup/"
  },
  {
    "recipe": "Flourless Peanut Butter Cookies",
    "listOfIngredients": [
      "natural peanut butter",
      "granulated sugar",
      "powdered sugar",
      "eggs",
      "vanilla extract",
      "baking powder"
    ],
    "url": "https://www.budgetbytes.com/flourless-peanut-butter-cookies/"
  },
  {
    "recipe": "White Chocolate Strawberry Scones",
    "listOfIngredients": [
      "all-purpose flour",
      "granulated sugar",
      "baking powder",
      "salt",
      "cold butter",
      "strawberries",
      "white chocolate chips",
      "eggs",
      "milk",
      "vanilla extract",
      "powdered sugar"
    ],
    "url": "https://www.budgetbytes.com/strawberry-white-chocolate-scones/"
  },
  {
    "recipe": "Lentil Bolognese",
    "listOfIngredients": [
      "yellow onion",
      "carrots",
      "celery",
      "cooking oil",
      "garlic",
      "crushed red pepper",
      "walnuts",
      "uncooked red lentils",
      "crushed tomatoes",
      "tomato paste",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "sugar",
      "salt",
      "black pepper",
      "vegetable broth",
      "full-fat coconut milk"
    ],
    "url": "https://www.budgetbytes.com/lentil-bolognese/"
  },
  {
    "recipe": "Easy Minestrone Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "carrots",
      "olive oil",
      "tomato paste",
      "tomatoes",
      "kidney beans",
      "chickpeas",
      "Italian seasoning",
      "vegetable broth",
      "zucchini",
      "frozen green beans",
      "lemon juice",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/easy-vegetarian-minestrone/"
  },
  {
    "recipe": "Tartar-like Sauce",
    "listOfIngredients": [
      "light mayonnaise",
      "fat free plain yogurt",
      "dill pickle",
      "dijon mustard",
      "lemon juice",
      "dry dill"
    ],
    "url": "https://www.budgetbytes.com/tartar-like-sauce/"
  },
  {
    "recipe": "Weeknight Black Bean Chili",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "turkey",
      "black beans",
      "tomatoes with green chiles",
      "tomato paste",
      "chili powder",
      "cumin",
      "smoked paprika",
      "dried oregano",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/weeknight-black-bean-chili/"
  },
  {
    "recipe": "Sweet Potato Tortilla Soup",
    "listOfIngredients": [
      "cooking oil",
      "yellow onion",
      "garlic",
      "chili powder",
      "cumin",
      "cayenne pepper",
      "masa harina",
      "vegetable broth",
      "tomato paste",
      "tomatoes",
      "black beans",
      "sweet potato",
      "frozen corn kernels",
      "Optional toppings: cilantro"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-tortilla-soup/"
  },
  {
    "recipe": "Salsa Chicken Casserole",
    "listOfIngredients": [
      "uncooked long grain white rice",
      "frozen corn kernels",
      "black beans",
      "salsa",
      "chicken broth",
      "chili powder",
      "dried oregano",
      "chicken breast",
      "shredded cheddar cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/salsa-chicken-casserole/"
  },
  {
    "recipe": "Jalapeno Popper Mac & Cheese",
    "listOfIngredients": [
      "uncooked elbow macaroni",
      "vegetable oil",
      "garlic",
      "milk",
      "cream cheese",
      "parmesan",
      "sour cream",
      "jalapenos",
      "green chiles",
      "salt",
      "shredded pepper jack cheese"
    ],
    "url": "https://www.budgetbytes.com/jalapeno-popper-mac-cheese/"
  },
  {
    "recipe": "slow cooker jerk chicken",
    "listOfIngredients": [
      "chicken",
      "molasses",
      "vegetable oil",
      "soy sauce",
      "garlic",
      "fresh ginger",
      "cinnamon",
      "allspice",
      "thyme",
      "nutmeg",
      "onion",
      "orange",
      "serrano"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-jerk-chicken/"
  },
  {
    "recipe": "Honey Wheat Pizza Dough",
    "listOfIngredients": [
      "wheat flour",
      "all purpose flour",
      "water",
      "honey",
      "yeast",
      "olive oil",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/honey-wheat-pizza-dough/"
  },
  {
    "recipe": "Chai Concentrate",
    "listOfIngredients": [
      "black tea",
      "sticks cinnamon",
      "fresh ginger",
      "cloves",
      "vanilla",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/chai-concentrate/"
  },
  {
    "recipe": "Sticky Ginger Chicken Wings",
    "listOfIngredients": [
      "chicken wings",
      "cooking oil",
      "honey",
      "soy sauce",
      "chili garlic sauce",
      "toasted sesame oil",
      "rice vinegar",
      "garlic",
      "fresh ginger",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/sticky-ginger-chicken-wings/"
  },
  {
    "recipe": "Vegetable Tofu Scramble",
    "listOfIngredients": [
      "firm",
      "mushrooms",
      "cooking oil",
      "garlic powder",
      "black pepper",
      "frozen onions and peppers",
      "frozen spinach",
      "nutritional yeast",
      "salt",
      "salsa"
    ],
    "url": "https://www.budgetbytes.com/vegetable-tofu-scramble/"
  },
  {
    "recipe": "zesty tomato & artichoke pasta",
    "listOfIngredients": [
      "Sun Dried Tomato Sauce",
      "bow tie pasta",
      "fresh spinach",
      "artichoke hearts",
      "parmesan"
    ],
    "url": "https://www.budgetbytes.com/zesty-tomato-artichoke-pasta/"
  },
  {
    "recipe": "Simple portobella pasta",
    "listOfIngredients": [
      "portobella mushroom caps",
      "olive oil",
      "red wine vinegar",
      "rigatoni",
      "garlic",
      "dried thyme",
      "parmesan",
      "salt and pepper",
      "flat leaf parsley"
    ],
    "url": "https://www.budgetbytes.com/simple-portobella-pasta/"
  },
  {
    "recipe": "Red Wine Cranberry Sauce",
    "listOfIngredients": [
      "fresh cranberries",
      "granulated sugar",
      "water",
      "orange",
      "lime",
      "red wine",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/red-wine-cranberry-sauce/"
  },
  {
    "recipe": "Holiday Wild Rice Dressing",
    "listOfIngredients": [
      "butternut squash",
      "olive oil",
      "dried sage",
      "butter",
      "seasoning mix",
      "wild rice mix",
      "long grain white rice",
      "water",
      "chicken base",
      "fresh thyme",
      "dried cranberries",
      "walnuts",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/holiday-wild-rice-dressing/"
  },
  {
    "recipe": "French Toast",
    "listOfIngredients": [
      "stale bread",
      "eggs",
      "milk",
      "vanilla extract",
      "cinnamon",
      "salt",
      "butter",
      "cooking oil",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/french-toast/"
  },
  {
    "recipe": "Small Batch Deviled Eggs",
    "listOfIngredients": [
      "eggs",
      "mayonnaise",
      "Dijon mustard",
      "seasoning salt"
    ],
    "url": "https://www.budgetbytes.com/small-batch-deviled-eggs/"
  },
  {
    "recipe": "Cucumber Tomato and Onion Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "dried oregano",
      "salt",
      "Black pepper",
      "Roma tomatoes",
      "cucumber",
      "red onion"
    ],
    "url": "https://www.budgetbytes.com/simple-tomato-cucumber-salad/"
  },
  {
    "recipe": "Curry Roasted Carrots",
    "listOfIngredients": [
      "carrots",
      "olive oil",
      "curry powder",
      "salt",
      "Handful fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/curry-roasted-carrots/"
  },
  {
    "recipe": "Parmesan & Pepper Kale Pasta",
    "listOfIngredients": [
      "butter",
      "garlic",
      "button mushrooms",
      "kale",
      "chicken broth",
      "pasta",
      "salt",
      "Parmesan",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/parmesan-pepper-kale-pasta/"
  },
  {
    "recipe": "Cilantro Lime Rice",
    "listOfIngredients": [
      "long grain white rice",
      "chicken broth",
      "fresh cilantro",
      "lime",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/cilantro-lime-rice/"
  },
  {
    "recipe": "Tropical Yogurt Parfaits",
    "listOfIngredients": [
      "rolled oats",
      "yogurt",
      "bananas",
      "pineapple chunks juice",
      "mango",
      "shredded coconut"
    ],
    "url": "https://www.budgetbytes.com/tropical-yogurt-parfaits/"
  },
  {
    "recipe": "Southwest Tortilla Baked Eggs",
    "listOfIngredients": [
      "olive oil",
      "flour tortilla",
      "shredded cheddar cheese",
      "red bell pepper",
      "green chiles",
      "eggs",
      "salt",
      "pepper",
      "salsa",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/southwest-tortilla-baked-eggs/"
  },
  {
    "recipe": "Lemon Tahini Dressing",
    "listOfIngredients": [
      "tahini",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/lemon-tahini-dressing/"
  },
  {
    "recipe": "Autumn Fruit and Nut Oatmeal",
    "listOfIngredients": [
      "apple",
      "butter",
      "cinnamon",
      "cloves",
      "water",
      "old-fashioned rolled oats",
      "salt",
      "dried cranberries",
      "walnuts",
      "maple syrup"
    ],
    "url": "https://www.budgetbytes.com/autumn-fruit-and-nut-oatmeal/"
  },
  {
    "recipe": "Avocado and Tomato Salad",
    "listOfIngredients": [
      "avocados",
      "tomatoes",
      "red onion",
      "garlic",
      "jalapeno",
      "cilantro",
      "olive oil",
      "lime",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/guacamole-salad/"
  },
  {
    "recipe": "Banana Pudding",
    "listOfIngredients": [
      "vanilla wafers",
      "bananas",
      "vanilla pudding"
    ],
    "url": "https://www.budgetbytes.com/banana-pudding-recipe/"
  },
  {
    "recipe": "Singapore Noodles",
    "listOfIngredients": [
      "rice vermicelli noodles",
      "hot curry powder",
      "garlic",
      "fresh ginger",
      "vegetable oil",
      "bok choy",
      "carrots",
      "bean sprouts",
      "green onions",
      "soy sauce",
      "sesame oil",
      "chili garlic sauce"
    ],
    "url": "https://www.budgetbytes.com/singapore-noodles/"
  },
  {
    "recipe": "Nutty Caramel Corn",
    "listOfIngredients": [
      "vegetable oil",
      "popcorn kernels",
      "granulated sugar",
      "butter",
      "salt",
      "water",
      "baking soda",
      "cayenne",
      "honey roasted peanuts"
    ],
    "url": "https://www.budgetbytes.com/nutty-caramel-corn/"
  },
  {
    "recipe": "Easy Egg Salad",
    "listOfIngredients": [
      "eggs",
      "mayonnaise",
      "dill relish",
      "Dijon mustard",
      "lemon juice",
      "salt",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-egg-salad/"
  },
  {
    "recipe": "Salsa Poached Eggs",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "fire-roasted diced tomatoes",
      "green chiles",
      "tomato paste",
      "cumin",
      "cayenne",
      "salt",
      "black pepper",
      "water",
      "eggs",
      "green onions",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/salsa-poached-eggs-grits/"
  },
  {
    "recipe": "Taco Salad Skillet",
    "listOfIngredients": [
      "cooking oil",
      "beef",
      "chili powder blend",
      "cumin",
      "dried oregano",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "black beans",
      "frozen corn kernels",
      "shredded cheddar cheese",
      "broken tortilla chips",
      "iceberg lettuce",
      "tomato",
      "green onions",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/taco-salad-skillet/"
  },
  {
    "recipe": "Creamy Avocado Dressing",
    "listOfIngredients": [
      "avocado",
      "sour cream",
      "garlic",
      "salt",
      "fresh lime juice",
      "fresh cilantro",
      "water"
    ],
    "url": "https://www.budgetbytes.com/creamy-avocado-dressing-2/"
  },
  {
    "recipe": "Lemon Pepper Zucchini",
    "listOfIngredients": [
      "zucchini",
      "lemon pepper seasoning",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/lemon-pepper-zucchini/"
  },
  {
    "recipe": "Bread Pudding",
    "listOfIngredients": [
      "butter",
      "day-old bread",
      "eggs",
      "half and half",
      "sugar",
      "cinnamon",
      "vanilla extract",
      "salt",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/bread-pudding/"
  },
  {
    "recipe": "sriracha caramel corn",
    "listOfIngredients": [
      "vegetable oil",
      "popcorn kernels",
      "water",
      "granulated sugar",
      "butter",
      "salt",
      "baking soda",
      "sriracha hot sauce"
    ],
    "url": "https://www.budgetbytes.com/sriracha-caramel-corn/"
  },
  {
    "recipe": "Navy Bean Soup with Smoked Sausage and Spinach",
    "listOfIngredients": [
      "olive oil",
      "smoked sausage",
      "onion",
      "garlic",
      "carrots",
      "celery",
      "dry navy beans",
      "bay leaf",
      "dried thyme",
      "dried rosemary",
      "black pepper",
      "water",
      "fresh baby spinach",
      "salt",
      "apple cider vinegar"
    ],
    "url": "https://www.budgetbytes.com/navy-bean-soup-with-sausage-spinach/"
  },
  {
    "recipe": "Vanilla Pudding",
    "listOfIngredients": [
      "sugar",
      "corn starch",
      "milk",
      "egg yolks",
      "vanilla extract",
      "salted butter"
    ],
    "url": "https://www.budgetbytes.com/vanilla-pudding/"
  },
  {
    "recipe": "Pumpkin Cream Cheese Spread",
    "listOfIngredients": [
      "cream cheese",
      "pumpkin puree",
      "brown sugar",
      "vanilla",
      "cinnamon",
      "pumpkin pie spice"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-cream-cheese-spread/"
  },
  {
    "recipe": "southwest breakfast scramble",
    "listOfIngredients": [
      "eggs",
      "butter",
      "black beans",
      "tortilla strips",
      "salsa",
      "shredded cheese",
      "fresh cilantro",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/southwest-breakfast-scramble/"
  },
  {
    "recipe": "Blackberry Sage Pork Chops",
    "listOfIngredients": [
      "thin center cut pork chops",
      "salt and pepper",
      "olive oil",
      "blackberry jam",
      "butter",
      "balsamic vinegar",
      "water",
      "dried sage",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/blackberry-sage-pork-chops/"
  },
  {
    "recipe": "Balsamic Chicken Thighs",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "balsamic vinegar",
      "brown sugar",
      "soy sauce",
      "Freshly cracked black pepper",
      "boneless skinless chicken thighs",
      "Fresh parsley for garnish"
    ],
    "url": "https://www.budgetbytes.com/balsamic-chicken-thighs/"
  },
  {
    "recipe": "Chocolate Cayenne Crinkles",
    "listOfIngredients": [
      "powdered sugar",
      "unsweetened cocoa powder",
      "cornstarch",
      "salt",
      "cayenne pepper",
      "egg whites",
      "eggs",
      "vanilla extract",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/chocolate-cayenne-crinkles/"
  },
  {
    "recipe": "Moroccan Lentil and Vegetable Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "celery",
      "cumin",
      "turmeric",
      "cinnamon",
      "cayenne pepper",
      "chickpeas",
      "tomatoes",
      "frozen cauliflower florets",
      "vegetable broth",
      "brown lentils",
      "bay leaf"
    ],
    "url": "https://www.budgetbytes.com/moroccan-lentil-vegetable-stew/"
  },
  {
    "recipe": "Turkey Taco Salad",
    "listOfIngredients": [
      "avocado",
      "sour cream",
      "garlic",
      "salt",
      "fresh lime juice",
      "fresh cilantro",
      "water",
      "olive oil",
      "turkey",
      "taco seasoning",
      "romaine lettuce",
      "frozen corn",
      "black beans",
      "grape tomatoes",
      "jalapeno",
      "shredded cheddar"
    ],
    "url": "https://www.budgetbytes.com/turkey-taco-salad/"
  },
  {
    "recipe": "Buffalo Chicken Dip",
    "listOfIngredients": [
      "Frank's RedHot Sauce",
      "butter",
      "garlic powder",
      "cream cheese",
      "buttermilk ranch dressing",
      "cooked chicken",
      "crumbled blue cheese"
    ],
    "url": "https://www.budgetbytes.com/easy-buffalo-chicken-dip/"
  },
  {
    "recipe": "Zucchini Slice",
    "listOfIngredients": [
      "butter",
      "bacon",
      "yellow onion",
      "eggs",
      "shredded cheddar cheese",
      "self-rising flour",
      "olive oil",
      "zucchini",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/zucchini-slice/"
  },
  {
    "recipe": "Chai Spiced Scones",
    "listOfIngredients": [
      "all-purpose flour",
      "sugar",
      "salt",
      "baking powder",
      "cinnamon",
      "ginger",
      "cloves",
      "cardamom",
      "cold butter",
      "milk",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/chai-spiced-scones/"
  },
  {
    "recipe": "Spinach Artichoke Pasta",
    "listOfIngredients": [
      "bowtie pasta",
      "quartered artichoke hearts",
      "frozen chopped spinach",
      "garlic",
      "olive oil",
      "cream cheese",
      "sour cream",
      "white wine",
      "milk",
      "Parmesan",
      "Few hot sauce",
      "crushed red pepper",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/spinach-artichoke-pasta/"
  },
  {
    "recipe": "Nature's Candy",
    "listOfIngredients": [
      "sweet potato",
      "apples",
      "olive oil",
      "cinnamon",
      "dried basil"
    ],
    "url": "https://www.budgetbytes.com/natures-candy/"
  },
  {
    "recipe": "Avocado Breakfast Pita",
    "listOfIngredients": [
      "round pita pocket",
      "eggs",
      "handful baby spinach",
      "avocado",
      "sriracha hot sauce",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/avocado-breakfast-pita/"
  },
  {
    "recipe": "Coconut Lentils",
    "listOfIngredients": [
      "red lentils",
      "garlic",
      "salt",
      "turmeric",
      "light coconut milk",
      "water"
    ],
    "url": "https://www.budgetbytes.com/coconut-lentils/"
  },
  {
    "recipe": "Toasted Coconut Oat Bran",
    "listOfIngredients": [
      "unsweetened shredded coconut",
      "light coconut milk",
      "water",
      "oat bran",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/toasted-coconut-oat-bran/"
  },
  {
    "recipe": "Fudge Brownie Pots (for two)",
    "listOfIngredients": [
      "butter",
      "granulated sugar",
      "vanilla",
      "eggs",
      "all-purpose flour",
      "unsweetened cocoa powder",
      "baking powder",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/fudge-brownie-pots-for-two/"
  },
  {
    "recipe": "Skillet Potatoes and Green Beans",
    "listOfIngredients": [
      "red creamer potatoes",
      "fresh green beans",
      "olive oil",
      "garlic",
      "salt",
      "dried oregano",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/skillet-potatoes-and-green-beans/"
  },
  {
    "recipe": "Roasted Red Pepper Hummus Wraps",
    "listOfIngredients": [
      "chickpeas",
      "lemon juice",
      "tahini",
      "olive oil",
      "cumin",
      "garlic powder",
      "salt",
      "water",
      "roasted red peppers",
      "cucumber",
      "feta",
      "pitas",
      "baby spinach"
    ],
    "url": "https://www.budgetbytes.com/roasted-red-pepper-hummus-wraps/"
  },
  {
    "recipe": "Sriracha Deviled Eggs",
    "listOfIngredients": [
      "eggs",
      "mayonnaise",
      "Sriracha hot sauce",
      "garlic powder",
      "smoked paprika",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/sriracha-deviled-eggs/"
  },
  {
    "recipe": "Peanut Butter S'mores Pots",
    "listOfIngredients": [
      "graham crackers",
      "butter",
      "sugar",
      "peanut butter",
      "milk chocolate chips",
      "marshmallows"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-smores-pots/"
  },
  {
    "recipe": "Roasted Red Pepper and Feta Frittata",
    "listOfIngredients": [
      "cooking oil",
      "garlic",
      "baby spinach",
      "roasted red peppers",
      "feta",
      "salt and pepper",
      "crushed red pepper",
      "eggs",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/roasted-red-pepper-and-feta-frittata/"
  },
  {
    "recipe": "Saucy Southwest Shredded Beef",
    "listOfIngredients": [
      "tomato paste",
      "garlic",
      "chili powder",
      "cumin",
      "oregano",
      "cayenne pepper",
      "brown sugar",
      "cornstarch",
      "beef broth",
      "boneless beef rump",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/saucy-southwest-shredded-beef/"
  },
  {
    "recipe": "Parmesan Garlic Pretzel Bites",
    "listOfIngredients": [
      "water",
      "active dry yeast",
      "sugar",
      "all-purpose flour",
      "salt",
      "baking soda",
      "eggs",
      "Parmesan",
      "garlic powder",
      "Black pepper",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/parmesan-garlic-pretzel-bites/"
  },
  {
    "recipe": "Crunchy Cranberry Sauce",
    "listOfIngredients": [
      "granulated sugar",
      "water",
      "ozfresh cranberries",
      "lemon juice",
      "cinnamon",
      "envelope plain gelatin",
      "stalks celery",
      "apple",
      "walnut"
    ],
    "url": "https://www.budgetbytes.com/crunchy-cranberry-sauce/"
  },
  {
    "recipe": "Creamy Vegetable Wild Rice Soup",
    "listOfIngredients": [
      "baby bella mushrooms",
      "olive oil",
      "garlic",
      "yellow onion",
      "celery",
      "carrots",
      "dried thyme",
      "dried sage",
      "wild rice blend",
      "vegetable broth",
      "full-fat coconut milk"
    ],
    "url": "https://www.budgetbytes.com/creamy-vegetable-wild-rice-soup-vegan/"
  },
  {
    "recipe": "Apple Walnut Stuffing",
    "listOfIngredients": [
      "butter",
      "yellow onion",
      "celery",
      "apples",
      "dried sage",
      "water",
      "stuffing mix",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/apple-walnut-stuffing/"
  },
  {
    "recipe": "Air Fryer Cinnamon Toast",
    "listOfIngredients": [
      "bread",
      "salted butter",
      "vanilla extract",
      "sugar",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/air-fryer-cinnamon-toast/"
  },
  {
    "recipe": "Honey Chipotle Chicken",
    "listOfIngredients": [
      "chipotle peppers adobo sauce",
      "honey",
      "lime juice",
      "garlic",
      "salt",
      "cooking oil",
      "boneless",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/honey-chipotle-chicken/"
  },
  {
    "recipe": "Honey Mustard Chicken Salad",
    "listOfIngredients": [
      "large",
      "stalks celery",
      "dried cranberries",
      "mayonnaise",
      "honey",
      "dijon mustard",
      "apple cider vinegar",
      "salt",
      "garlic powder",
      "paprika"
    ],
    "url": "https://www.budgetbytes.com/honey-mustard-chicken-salad/"
  },
  {
    "recipe": "Sriracha Hummus",
    "listOfIngredients": [
      "chickpeas",
      "olive oil",
      "lemon juice",
      "tahini",
      "garlic",
      "salt",
      "cumin",
      "Sriracha"
    ],
    "url": "https://www.budgetbytes.com/sriracha-hummus/"
  },
  {
    "recipe": "One Pot Beef Taco Pasta",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "beef",
      "taco seasoning",
      "tomatoes",
      "green chiles",
      "pasta shells",
      "beef broth",
      "shredded cheddar cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/beef-taco-pasta/"
  },
  {
    "recipe": "Kale Chicken Caesar Wraps",
    "listOfIngredients": [
      "lacinato kale",
      "chickpeas",
      "carrots",
      "rotisserie chicken",
      "Parmesan",
      "Freshly cracked black pepper",
      "creamy Caesar dressing",
      "tortillas"
    ],
    "url": "https://www.budgetbytes.com/chicken-kale-caesar-wraps/"
  },
  {
    "recipe": "Garden Vegetable Lasagna Roll Ups",
    "listOfIngredients": [
      "lasagna noodles",
      "cooking oil",
      "garlic",
      "yellow onion",
      "button mushrooms",
      "zucchini",
      "carrots",
      "dried oregano",
      "salt and pepper",
      "ricotta cheese",
      "shredded mozzarella",
      "Parmesan",
      "pasta sauce"
    ],
    "url": "https://www.budgetbytes.com/garden-vegetable-lasagna-roll-ups/"
  },
  {
    "recipe": "Vegetarian Sweet Potato Tacos with Lime Crema",
    "listOfIngredients": [
      "sour cream",
      "fresh lime",
      "salt",
      "garlic",
      "olive oil",
      "sweet potato",
      "black beans",
      "cumin",
      "salt and pepper",
      "green onions",
      "fresh cilantro",
      "tortillas"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-tacos-with-lime-crema/"
  },
  {
    "recipe": "Butternut Squash Salad",
    "listOfIngredients": [
      "butternut squash",
      "olive oil",
      "salt",
      "pepper",
      "maple syrup",
      "apple cider vinegar",
      "Dijon mustard",
      "garlic powder",
      "black pepper",
      "spring mix",
      "dried cranberries",
      "pecans",
      "goat cheese"
    ],
    "url": "https://www.budgetbytes.com/butternut-squash-salad/"
  },
  {
    "recipe": "Gingerbread Coffee Creamer",
    "listOfIngredients": [
      "half and half",
      "molasses",
      "vanilla extract",
      "ginger",
      "cloves",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/gingerbread-coffee-creamer/"
  },
  {
    "recipe": "Herb Roasted Pork Tenderloin",
    "listOfIngredients": [
      "garlic",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "black pepper",
      "salt",
      "olive oil",
      "pork tenderloin"
    ],
    "url": "https://www.budgetbytes.com/herb-roasted-pork-loin/"
  },
  {
    "recipe": "Homemade Whipped Cream",
    "listOfIngredients": [
      "granulated sugar",
      "vanilla extract",
      "cold heavy cream"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-homemade-whipped-cream/"
  },
  {
    "recipe": "Mediterranean Tuna Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "lemon juice",
      "dried oregano",
      "salt",
      "black pepper",
      "English cucumber",
      "grape tomatoes",
      "red onion",
      "fresh parsley",
      "cannellini beans",
      "chunk light tuna",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-tuna-salad/"
  },
  {
    "recipe": "Chipotle Butternut Squash and Quinoa Salad",
    "listOfIngredients": [
      "quinoa",
      "butternut squash",
      "cooking oil",
      "salt",
      "frozen corn",
      "black beans",
      "parsley",
      "cilantro",
      "garlic",
      "olive oil",
      "red wine vinegar",
      "dried oregano",
      "cumin",
      "chipotle powder"
    ],
    "url": "https://www.budgetbytes.com/chipotle-butternut-squash-and-quinoa-salad/"
  },
  {
    "recipe": "Maple Roasted Sweet Potatoes with Pecans",
    "listOfIngredients": [
      "sweet potatoes",
      "butter",
      "brown sugar",
      "maple syrup",
      "cinnamon",
      "cloves",
      "salt",
      "pecans"
    ],
    "url": "https://www.budgetbytes.com/maple-roasted-sweet-potatoes-with-pecans/"
  },
  {
    "recipe": "Carrot & Orzo Salad",
    "listOfIngredients": [
      "carrots",
      "olive oil",
      "cumin",
      "salt",
      "pepper",
      "uncooked orzo",
      "fresh parsley",
      "feta cheese",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/carrot-orzo-salad/"
  },
  {
    "recipe": "Spicy Sausage and Broccoli Pasta",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "crushed red pepper",
      "Italian sausage",
      "frozen broccoli florets",
      "bow tie pasta",
      "smoked gouda",
      "shredded Italian cheese",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/spicy-sausage-broccoli-pasta/"
  },
  {
    "recipe": "Lemon Pudding Cakes for Two",
    "listOfIngredients": [
      "eggs",
      "salt",
      "butter",
      "flour",
      "sugar",
      "lemon",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/lemon-pudding-cakes-for-two/"
  },
  {
    "recipe": "Easy Taco Rice",
    "listOfIngredients": [
      "cooking oil",
      "onion",
      "garlic",
      "long grain white rice",
      "chili powder",
      "cumin",
      "oregano",
      "water",
      "salt",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/easy-taco-rice/"
  },
  {
    "recipe": "Baked Oatmeal",
    "listOfIngredients": [
      "peaches",
      "blueberries",
      "milk",
      "plain yogurt",
      "eggs",
      "brown sugar",
      "old-fashioned oats",
      "baking powder",
      "baking soda",
      "salt",
      "ginger",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/baked-oatmeal/"
  },
  {
    "recipe": "15-Minute Vegetable Curry",
    "listOfIngredients": [
      "frozen mixed vegetables",
      "vegetable broth",
      "coconut milk",
      "curry powder",
      "dried ground ginger",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/15-minute-vegetable-curry/"
  },
  {
    "recipe": "Broccoli Sambal",
    "listOfIngredients": [
      "broccoli",
      "vegetable oil",
      "sesame oil",
      "sambal",
      "brown sugar",
      "garlic",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/broccoli-sambal/"
  },
  {
    "recipe": "Sheet Pan BBQ Meatballs",
    "listOfIngredients": [
      "turkey",
      "eggs",
      "breadcrumbs",
      "BBQ sauce",
      "garlic powder",
      "smoked paprika",
      "salt",
      "pineapple",
      "yellow onion",
      "red bell pepper",
      "cooking oil",
      "green onions",
      "long grain white rice"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-bbq-meatballs/"
  },
  {
    "recipe": "Smoky Parmesan Roasted Cauliflower",
    "listOfIngredients": [
      "smoked paprika",
      "dried oregano",
      "garlic powder",
      "salt",
      "Black pepper",
      "Parmesan",
      "olive oil",
      "cauliflower"
    ],
    "url": "https://www.budgetbytes.com/smoky-parmesan-roasted-cauliflower/"
  },
  {
    "recipe": "Fresh Apple Pie Scones",
    "listOfIngredients": [
      "eggs",
      "unsweetened apple sauce",
      "lemon juice",
      "sugar",
      "apple",
      "all-purpose flour",
      "salt",
      "baking powder",
      "cinnamon",
      "ginger",
      "cold butter",
      "powdered sugar",
      "water"
    ],
    "url": "https://www.budgetbytes.com/apple-pie-scones/"
  },
  {
    "recipe": "Butternut Squash Soup",
    "listOfIngredients": [
      "butternut squash",
      "yellow onion",
      "olive oil",
      "salt",
      "pepper",
      "chicken broth",
      "nutmeg",
      "rubbed sage",
      "heavy cream"
    ],
    "url": "https://www.budgetbytes.com/butternut-squash-soup/"
  },
  {
    "recipe": "Homemade Lasagna",
    "listOfIngredients": [
      "Italian sausage",
      "yellow onion",
      "crushed tomatoes",
      "tomato paste",
      "Italian seasoning",
      "milk ricotta",
      "shredded Italian cheese blend",
      "eggs",
      "black pepper",
      "lasagna noodles",
      "shredded mozzarella",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/easy-homemade-lasagna/"
  },
  {
    "recipe": "Mini Pumpkin Pies",
    "listOfIngredients": [
      "Countryside Creamery Salted Butter",
      "Happy Farms Cream Cheese",
      "Baker's Corner All Purpose Flour",
      "Baker's Corner Granulated Sugar",
      "Baker’s Corner 100% Pure Canned Pumpkin",
      "Baker's Corner Evaporated Milk",
      "Simply Nature Grade A Organic Cage Free Brown Eggs",
      "Baker's Corner Brown Sugar",
      "Stonemill Ground Cinnamon",
      "Stonemill Ground Ginger",
      "Stonemill Ground Nutmeg",
      "Stonemill Salt"
    ],
    "url": "https://www.budgetbytes.com/mini-pumpkin-pies/"
  },
  {
    "recipe": "Curry Roasted Vegetable Bowls",
    "listOfIngredients": [
      "long grain brown rice",
      "cauliflower",
      "carrots",
      "red onion",
      "frozen peas",
      "olive oil",
      "curry powder",
      "salt",
      "tahini",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne"
    ],
    "url": "https://www.budgetbytes.com/curry-roasted-vegetable-bowls/"
  },
  {
    "recipe": "Hot Corn Dip",
    "listOfIngredients": [
      "red bell pepper",
      "jalapeno",
      "garlic",
      "green onions",
      "butter",
      "frozen corn",
      "cream cheese",
      "sour cream",
      "mayonnaise",
      "cumin",
      "hot sauce",
      "pepper jack cheese",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/hot-corn-dip/"
  },
  {
    "recipe": "Tomato Basil Vinaigrette",
    "listOfIngredients": [
      "tomato paste",
      "red wine vinegar",
      "dried basil",
      "garlic powder",
      "sugar",
      "salt",
      "black pepper",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/tomato-basil-vinaigrette/"
  },
  {
    "recipe": "Maple Brown Butter Pumpkin Pie",
    "listOfIngredients": [
      "butter",
      "maple syrup",
      "brown sugar",
      "cinnamon",
      "ginger",
      "cloves",
      "salt",
      "eggs",
      "pumpkin puree",
      "evaporated milk",
      "unbaked 9- deep dish pie crust"
    ],
    "url": "https://www.budgetbytes.com/maple-brown-butter-pumpkin-pie/"
  },
  {
    "recipe": "Cinnamon Pecan Cauli Oats",
    "listOfIngredients": [
      "rolled oats",
      "riced cauliflower",
      "butter",
      "cinnamon",
      "salt",
      "milk",
      "water",
      "brown sugar",
      "pecans"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-pecan-cauli-oats/"
  },
  {
    "recipe": "Creamy Tomato Pasta with Sausage",
    "listOfIngredients": [
      "Italian sausage",
      "garlic",
      "tomato paste",
      "crushed tomatoes",
      "Italian seasoning blend",
      "water",
      "pasta",
      "heavy cream",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/creamy-tomato-pasta-with-sausage/"
  },
  {
    "recipe": "Chili Rubbed Pulled Pork",
    "listOfIngredients": [
      "boneless pork butt",
      "chili powder",
      "smoked paprika",
      "cayenne pepper",
      "garlic powder",
      "onion powder",
      "salt",
      "Freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/chili-rubbed-pulled-pork/"
  },
  {
    "recipe": "Yogurt Marinated Chicken",
    "listOfIngredients": [
      "plain yogurt",
      "garlic",
      "lemon juice",
      "cinnamon",
      "dried oregano",
      "salt",
      "nutmeg",
      "cloves",
      "boneless",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/yogurt-marinated-chicken/"
  },
  {
    "recipe": "Baked Ravioli",
    "listOfIngredients": [
      "Italian sausage",
      "yellow onion",
      "crushed tomatoes",
      "tomato paste",
      "Italian seasoning",
      "frozen cheese ravioli",
      "shredded mozzarella",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/baked-ravioli/"
  },
  {
    "recipe": "Tilapia Fish Sticks",
    "listOfIngredients": [
      "tilapia filets",
      "all-purpose flour",
      "cajun seasoning",
      "eggs",
      "panko breadcrumbs",
      "vegetable oil"
    ],
    "url": "https://www.budgetbytes.com/tilapia-fish-sticks/"
  },
  {
    "recipe": "Quick BBQ Chicken",
    "listOfIngredients": [
      "smoked paprika",
      "garlic powder",
      "salt",
      "black pepper",
      "boneless",
      "cooking oil",
      "BBQ sauce"
    ],
    "url": "https://www.budgetbytes.com/quick-bbq-chicken/"
  },
  {
    "recipe": "Caramelized Banana and Peanut Butter Quesadilla",
    "listOfIngredients": [
      "ripe banana",
      "flour tortilla",
      "peanut butter",
      "butter",
      "brown sugar",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/caramelized-banana-and-peanut-butter-quesadilla/"
  },
  {
    "recipe": "Pumpkin Spice Granola",
    "listOfIngredients": [
      "solidpumpkin puree",
      "brown sugar",
      "vegetable oil",
      "honey",
      "vanilla extract",
      "pumpkin pie spice",
      "salt",
      "old fashioned rolled oats",
      "dried cranberries",
      "raw unsalted sunflower seeds"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-spice-granola/"
  },
  {
    "recipe": "Apple Pie Baked Oatmeal",
    "listOfIngredients": [
      "apples",
      "lemon juice",
      "brown sugar",
      "corn starch",
      "cinnamon",
      "cloves",
      "eggs",
      "unsweetened applesauce",
      "vanilla extract",
      "salt",
      "baking powder",
      "milk",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/apple-pie-baked-oatmeal/"
  },
  {
    "recipe": "Candied Almonds",
    "listOfIngredients": [
      "shelled almonds",
      "brown sugar",
      "white sugar",
      "cinnamon",
      "salt",
      "egg whites",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/candied-almonds/"
  },
  {
    "recipe": "Lemon Herb Egg Salad",
    "listOfIngredients": [
      "hard boiled eggs",
      "mayonnaise",
      "lemon juice",
      "dijon mustard",
      "fresh",
      "salt",
      "cranks fresh cracked pepper"
    ],
    "url": "https://www.budgetbytes.com/lemon-herb-egg-salad/"
  },
  {
    "recipe": "Pineapple Ginger Lassi",
    "listOfIngredients": [
      "plain yogurt",
      "pineapple chunks with juice",
      "fresh ginger",
      "honey",
      "ice cubes"
    ],
    "url": "https://www.budgetbytes.com/pineapple-ginger-lassi/"
  },
  {
    "recipe": "Kale & Chorizo Frittata",
    "listOfIngredients": [
      "Mexican style chorizo",
      "kale",
      "eggs",
      "milk",
      "parmesan",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/kale-chorizo-frittata/"
  },
  {
    "recipe": "Chili Cheese Beef n Mac",
    "listOfIngredients": [
      "olive oil",
      "beef",
      "garlic",
      "onion",
      "all-purpose flour",
      "chili powder",
      "smoked paprika",
      "dried oregano",
      "tomato sauce",
      "beef broth",
      "dry macaroni",
      "shredded sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/chili-cheese-beef-n-mac/"
  },
  {
    "recipe": "Honey Spice Chicken Thighs",
    "listOfIngredients": [
      "chicken thighs",
      "honey",
      "cider vinegar",
      "chili powder",
      "garlic powder",
      "smoked paprika",
      "cumin",
      "cayenne pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/honey-spice-chicken-thighs/"
  },
  {
    "recipe": "Spinach and Mushroom Quesadillas",
    "listOfIngredients": [
      "mushrooms",
      "cooking oil",
      "garlic powder",
      "salt",
      "black pepper",
      "crushed red pepper",
      "frozen chopped spinach",
      "mozzarella",
      "sour cream",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/spinach-and-mushroom-quesadillas/"
  },
  {
    "recipe": "Double Chocolate Overnight Oats",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "chia seeds",
      "unsweetened cocoa powder",
      "brown sugar",
      "mini chocolate chips",
      "salt",
      "milk",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/double-chocolate-overnight-oats/"
  },
  {
    "recipe": "Cheddar Drop Biscuits",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "baking powder",
      "garlic powder",
      "sugar",
      "cheddar cheese",
      "green onions",
      "heavy whipping cream"
    ],
    "url": "https://www.budgetbytes.com/cheddar-drop-biscuits/"
  },
  {
    "recipe": "Parmesan Portobello Orzo",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "baby portobello mushrooms",
      "salt and pepper",
      "uncooked orzo",
      "chicken broth",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/parmesan-portobello-orzo/"
  },
  {
    "recipe": "Turkey and Wild Rice Soup",
    "listOfIngredients": [
      "yellow onion",
      "carrots",
      "celery",
      "garlic",
      "butter",
      "mushrooms",
      "all-purpose flour",
      "wild rice blend",
      "dried thyme",
      "rubbed sage",
      "black pepper",
      "vegetable broth",
      "cooked turkey",
      "heavy cream",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/turkey-and-wild-rice-soup/"
  },
  {
    "recipe": "Spam Stir Fry Noodles",
    "listOfIngredients": [
      "luncheon meat",
      "frozen stir fry vegetables",
      "instant ramen",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/dollar-store-dinners-spam-stir-fry-noodles/"
  },
  {
    "recipe": "Peanut Butter Blossoms",
    "listOfIngredients": [
      "chocolate kisses",
      "salted butter",
      "peanut butter",
      "granulated sugar",
      "light brown sugar",
      "eggs",
      "vanilla extract",
      "all-purpose flour",
      "baking powder"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-blossoms/"
  },
  {
    "recipe": "Swedish Meatballs",
    "listOfIngredients": [
      "plain breadcrumbs",
      "nutmeg",
      "allspice",
      "garlic powder",
      "salt",
      "pork",
      "beef",
      "eggs",
      "butter",
      "all-purpose flour",
      "beef broth",
      "Worcestershire sauce",
      "heavy cream",
      "black pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/swedish-meatballs/"
  },
  {
    "recipe": "Sugar Cookies",
    "listOfIngredients": [
      "salted butter",
      "sugar",
      "vanilla",
      "eggs",
      "all-purpose flour",
      "baking powder",
      "powdered sugar",
      "cream of tartar",
      "egg whites"
    ],
    "url": "https://www.budgetbytes.com/sugar-cookies/"
  },
  {
    "recipe": "No Bake Pretzel Peanut Butter Bars",
    "listOfIngredients": [
      "graham cracker crumbs",
      "butter",
      "peanut butter",
      "powdered sugar",
      "chocolate chips",
      "mini pretzels"
    ],
    "url": "https://www.budgetbytes.com/no-bake-pretzel-peanut-butter-bars/"
  },
  {
    "recipe": "Coconut Chicken Strips with Sweet Chili Sauce",
    "listOfIngredients": [
      "boneless",
      "salt",
      "all-purpose flour",
      "eggs",
      "coconut milk",
      "panko breadcrumbs",
      "sweetened flaked coconut",
      "cooking oil",
      "sweet chili sauce"
    ],
    "url": "https://www.budgetbytes.com/coconut-chicken-w-sweet-chili-dipping-sauce/"
  },
  {
    "recipe": "Balsamic Roasted Vegetables",
    "listOfIngredients": [
      "olive oil",
      "balsamic vinegar",
      "brown sugar",
      "soy sauce",
      "Dijon mustard",
      "dried basil",
      "black pepper",
      "mushrooms",
      "red onion",
      "carrots",
      "parsnips",
      "radishes",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/balsamic-roasted-vegetables/"
  },
  {
    "recipe": "Spinach Rice with Feta",
    "listOfIngredients": [
      "frozen chopped spinach",
      "garlic",
      "butter",
      "long grain white rice",
      "salt",
      "water",
      "lemon juice",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/spinach-rice-with-feta/"
  },
  {
    "recipe": "Cheesy Sausage Pasta",
    "listOfIngredients": [
      "yellow onion",
      "smoked sausage",
      "cooking oil",
      "tomatoes with green chiles",
      "wide egg noodles",
      "chicken broth",
      "fresh spinach",
      "shredded Monterey Jack",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/creamy-spinach-sausage-pasta/"
  },
  {
    "recipe": "blueberry mug muffin",
    "listOfIngredients": [
      "flour",
      "brown sugar",
      "baking powder",
      "salt",
      "cinnamon",
      "butter",
      "milk",
      "frozen blueberries"
    ],
    "url": "https://www.budgetbytes.com/blueberry-mug-muffin/"
  },
  {
    "recipe": "Spiced Chickpea Tostadas",
    "listOfIngredients": [
      "sour cream",
      "lime",
      "garlic",
      "salt",
      "chickpeas",
      "cooking oil",
      "chili powder",
      "smoked paprika",
      "cumin",
      "cayenne pepper",
      "dried oregano",
      "garlic powder",
      "black pepper",
      "tostadas",
      "guacamole",
      "radishes",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/spiced-chickpea-tostadas/"
  },
  {
    "recipe": "Bacon Pizza with Caramelized Pineapple",
    "listOfIngredients": [
      "bacon",
      "pineapple chunks juice",
      "brown sugar",
      "pizza dough",
      "pizza sauce",
      "shredded Monterrey Jack cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/bacon-caramelized-pineapple-pizza/"
  },
  {
    "recipe": "Maple Dijon Chicken Thighs",
    "listOfIngredients": [
      "Dijon mustard",
      "real maple syrup",
      "olive oil",
      "soy sauce",
      "garlic",
      "dried rosemary",
      "boneless skinless chicken thighs"
    ],
    "url": "https://www.budgetbytes.com/maple-dijon-chicken/"
  },
  {
    "recipe": "Brown Butter Soda Bread",
    "listOfIngredients": [
      "milk",
      "lemon juice",
      "all-purpose flour",
      "wheat flour",
      "old-fashioned oats",
      "sugar",
      "dried rosemary",
      "black pepper",
      "baking powder",
      "baking soda",
      "salt",
      "butter",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/brown-butter-soda-bread/"
  },
  {
    "recipe": "Dilly Vegetable Dip",
    "listOfIngredients": [
      "sour cream",
      "lemon pepper",
      "salt",
      "garlic powder",
      "fresh dill"
    ],
    "url": "https://www.budgetbytes.com/dilly-vegetable-dip/"
  },
  {
    "recipe": "Choco-coconut Granola",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "shredded coconut",
      "almonds",
      "vegetable oil",
      "brown sugar",
      "honey",
      "salt",
      "vanilla extract",
      "unsweetened cocoa powder",
      "water"
    ],
    "url": "https://www.budgetbytes.com/choco-coconut-granola/"
  },
  {
    "recipe": "Apple Nut Quinoa",
    "listOfIngredients": [
      "uncooked quinoa",
      "apple juice",
      "salt",
      "cinnamon",
      "cloves",
      "apple",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/apple-nut-quinoa/"
  },
  {
    "recipe": "Joe's Special (my way)",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "beef",
      "dried oregano",
      "salt",
      "worcestershire sauce",
      "frozen chopped spinach",
      "eggs",
      "feta cheese",
      "parmesan"
    ],
    "url": "https://www.budgetbytes.com/joes-special-my-way/"
  },
  {
    "recipe": "Orange Molasses Pork Chops",
    "listOfIngredients": [
      "chops thick-cut pork chops",
      "molasses",
      "orange juice concentrate",
      "apple cider vinegar",
      "dijon mustard",
      "garlic powder",
      "salt",
      "vegetable oil"
    ],
    "url": "https://www.budgetbytes.com/orange-molasses-pork-chops/"
  },
  {
    "recipe": "Slow Cooker Sesame Beef",
    "listOfIngredients": [
      "soy sauce",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "toasted sesame oil",
      "beef roast",
      "green onions",
      "cornstarch",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-sesame-beef/"
  },
  {
    "recipe": "Pasta with Sausage and Peppers",
    "listOfIngredients": [
      "Italian sausage links",
      "cooking oil",
      "red bell pepper",
      "yellow onion",
      "pasta sauce",
      "dried basil",
      "dried oregano",
      "crushed red pepper",
      "penne pasta",
      "feta",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/pasta-with-sausage-and-peppers/"
  },
  {
    "recipe": "Spinach Tortellini Skillet",
    "listOfIngredients": [
      "garlic",
      "olive oil",
      "petite diced tomatoes",
      "dried basil",
      "dried oregano",
      "Black pepper",
      "cream cheese",
      "frozen cheese tortellini",
      "fresh spinach",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/spinach-tortellini-skillet/"
  },
  {
    "recipe": "Baked Ginger Salmon",
    "listOfIngredients": [
      "fresh ginger",
      "garlic",
      "brown sugar",
      "soy sauce",
      "toasted sesame oil",
      "fresh salmon"
    ],
    "url": "https://www.budgetbytes.com/ginger-salmon/"
  },
  {
    "recipe": "Chocolate Molasses Cookies",
    "listOfIngredients": [
      "all-purpose flour",
      "ginger",
      "cloves",
      "nutmeg",
      "unsweetened cocoa powder",
      "baking powder",
      "butter",
      "fresh grated ginger",
      "brown sugar",
      "molasses",
      "semi-sweet chocolate",
      "granulated sugar"
    ],
    "url": "https://www.budgetbytes.com/chocolate-gingersnaps/"
  },
  {
    "recipe": "Bruschetta",
    "listOfIngredients": [
      "plum tomatoes",
      "salt",
      "baguette",
      "olive oil",
      "garlic",
      "fresh basil leaves",
      "coarse ground black pepper",
      "balsamic vinegar"
    ],
    "url": "https://www.budgetbytes.com/bruschetta/"
  },
  {
    "recipe": "Broccoli Pasta Salad with Tomato Vinaigrette",
    "listOfIngredients": [
      "tomato paste",
      "red wine vinegar",
      "dried basil",
      "garlic powder",
      "sugar",
      "salt",
      "black pepper",
      "olive oil",
      "rotini pasta",
      "broccoli",
      "red onion",
      "unsalted sunflower seeds",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/broccoli-pasta-salad-with-tomato-vinaigrette/"
  },
  {
    "recipe": "Easy Pumpkin Chili",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "olive oil",
      "beef",
      "kidney beans",
      "black beans",
      "petite diced tomatoes",
      "pumpkin puree",
      "tomato paste",
      "water",
      "chili powder",
      "smoked paprika",
      "cumin",
      "garlic powder",
      "onion powder",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/easy-pumpkin-chili/"
  },
  {
    "recipe": "Succotash",
    "listOfIngredients": [
      "yellow onion",
      "butter",
      "frozen lima beans",
      "frozen sweet corn",
      "chicken broth",
      "dried thyme",
      "black pepper",
      "salt",
      "tomato",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/succotash/"
  },
  {
    "recipe": "Lime Crema",
    "listOfIngredients": [
      "sour cream",
      "lime",
      "garlic",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/lime-crema/"
  },
  {
    "recipe": "Sesame Ginger Dressing",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "neutral oil",
      "rice vinegar",
      "soy sauce",
      "honey",
      "tahini",
      "toasted sesame oil"
    ],
    "url": "https://www.budgetbytes.com/sesame-ginger-dressing/"
  },
  {
    "recipe": "Blackened Cabbage with Chipotle Mayo",
    "listOfIngredients": [
      "green cabbage",
      "high smoke point cooking oil",
      "salt and pepper",
      "mayonnaise",
      "chipotle powder",
      "garlic powder",
      "salt",
      "lemon juice",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/blackened-cabbage-chipotle-mayo/"
  },
  {
    "recipe": "Cabbage and Cranberry Salad",
    "listOfIngredients": [
      "purple cabbage",
      "dried cranberries",
      "sunflower seeds",
      "feta",
      "champagne vinaigrette"
    ],
    "url": "https://www.budgetbytes.com/cabbage-and-cranberry-salad/"
  },
  {
    "recipe": "Baba Ganoush",
    "listOfIngredients": [
      "eggplant",
      "roasted garlic",
      "fresh lemon",
      "tahini",
      "paprika",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/baba-ganoush/"
  },
  {
    "recipe": "Spicy Hawaiian Pizza",
    "listOfIngredients": [
      "pizza dough",
      "pizza sauce",
      "shredded monterey jack",
      "pineapple pieces",
      "ham",
      "jalapeno"
    ],
    "url": "https://www.budgetbytes.com/spicy-hawaiian-pizza/"
  },
  {
    "recipe": "Dal Nirvana",
    "listOfIngredients": [
      "dry brown lentils",
      "crushed",
      "garlic",
      "fresh ginger",
      "cayenne pepper",
      "cumin",
      "butter",
      "salt and pepper",
      "evaporated milk",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/dal-nirvana/"
  },
  {
    "recipe": "Flour Tortillas v.2.0 (low fat)",
    "listOfIngredients": [
      "wheat flour",
      "all-purpose flour",
      "salt",
      "baking powder",
      "vegetable oil",
      "water"
    ],
    "url": "https://www.budgetbytes.com/flour-tortillas-v-2-0-low-fat/"
  },
  {
    "recipe": "Grits 'n Greens",
    "listOfIngredients": [
      "quick cooking grits",
      "butter",
      "collard greens",
      "eggs",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/grits-n-greens/"
  },
  {
    "recipe": "Chili Cheese Cornbread",
    "listOfIngredients": [
      "Corn bread /muffin mix",
      "eggs",
      "milk",
      "chili powder",
      "frozen corn kernels",
      "shredded cheddar"
    ],
    "url": "https://www.budgetbytes.com/chili-cheese-cornbread/"
  },
  {
    "recipe": "Bacon Bean and Potato Soup",
    "listOfIngredients": [
      "dry navy beans",
      "bacon",
      "garlic",
      "yellow onion",
      "carrots",
      "celery",
      "potatoes",
      "chicken broth",
      "tomato sauce",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/bacon-bean-potato-soup/"
  },
  {
    "recipe": "Parsley Pesto Pasta with Blistered Tomatoes",
    "listOfIngredients": [
      "fresh parsley",
      "Parmesan",
      "garlic",
      "salt",
      "fresh lemon",
      "olive oil",
      "grape tomatoes",
      "salt and pepper",
      "pasta",
      "fried eggs"
    ],
    "url": "https://www.budgetbytes.com/parsley-pesto-pasta-with-blistered-tomatoes/"
  },
  {
    "recipe": "White Pizza with Parsley Pesto Drizzle",
    "listOfIngredients": [
      "olive oil",
      "garlic powder",
      "fresh parsley leaves",
      "garlic",
      "Parmesan",
      "salt",
      "Black pepper",
      "red pepper flakes",
      "lemon juice",
      "pizza dough",
      "fresh mozzarella",
      "Roma tomatoes"
    ],
    "url": "https://www.budgetbytes.com/white-pizza-with-parsley-pesto-drizzle/"
  },
  {
    "recipe": "Mediterranean Tuna Pasta",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "anchovy filets",
      "or crushed tomatoes",
      "kalamata olives",
      "dried basil",
      "crushed red pepper",
      "salt",
      "black pepper",
      "squash",
      "tuna steaks",
      "fresh parsley",
      "pasta"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-tuna-pasta/"
  },
  {
    "recipe": "Apricot Dijon Pork Chops",
    "listOfIngredients": [
      "thin cut pork chops",
      "olive oil",
      "apricot preserves",
      "dijon mustard",
      "apple cider vinegar",
      "garlic powder",
      "water",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/apricot-dijon-pork-chops/"
  },
  {
    "recipe": "Yellow Jasmine Rice",
    "listOfIngredients": [
      "butter",
      "garlic",
      "turmeric",
      "cumin",
      "cinnamon",
      "uncooked long grain jasmine rice",
      "chicken broth",
      "bay leaf"
    ],
    "url": "https://www.budgetbytes.com/yellow-jasmine-rice/"
  },
  {
    "recipe": "Kung Pao Chicken",
    "listOfIngredients": [
      "chicken breast",
      "vegetable oil",
      "soy sauce",
      "rice wine",
      "corn starch",
      "brown sugar",
      "sambal",
      "garlic",
      "sesame oil",
      "green onions",
      "bell pepper",
      "carrots",
      "roasted unsalted peanuts",
      "uncooked jasmine rice"
    ],
    "url": "https://www.budgetbytes.com/kung-pao-chicken/"
  },
  {
    "recipe": "Cumin Lime Coleslaw",
    "listOfIngredients": [
      "mayonnaise",
      "fresh lime juice",
      "cumin",
      "salt",
      "cayenne pepper",
      "sugar",
      "green cabbage",
      "carrots",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/cumin-lime-coleslaw/"
  },
  {
    "recipe": "Chicken Nachos",
    "listOfIngredients": [
      "taco seasoning",
      "boneless",
      "cooking oil",
      "corn tortilla chips",
      "shredded Mexican cheese blend",
      "jalapeno",
      "green onions",
      "fresh cilantro",
      "avocado",
      "lime",
      "sour cream",
      "crumbled queso fresco"
    ],
    "url": "https://www.budgetbytes.com/chicken-nachos/"
  },
  {
    "recipe": "Tuna Noodle Casserole",
    "listOfIngredients": [
      "yellow onion",
      "butter",
      "mushrooms",
      "salt",
      "pepper",
      "all-purpose flour",
      "milk",
      "vegetable",
      "cream cheese",
      "frozen peas",
      "wide egg noodles",
      "breadcrumbs",
      "Parmesan",
      "chunk light tuna"
    ],
    "url": "https://www.budgetbytes.com/tuna-noodle-casserole/"
  },
  {
    "recipe": "Mujaddara",
    "listOfIngredients": [
      "olive oil",
      "yellow onions",
      "cumin",
      "allspice",
      "cloves",
      "vegetable broth",
      "long grain white rice",
      "brown lentils"
    ],
    "url": "https://www.budgetbytes.com/mujaddara/"
  },
  {
    "recipe": "Mushroom and Spinach Pasta with Ricotta",
    "listOfIngredients": [
      "bowtie pasta",
      "baby bella mushrooms",
      "olive oil",
      "butter",
      "garlic",
      "fresh spinach",
      "salt and pepper",
      "milk ricotta",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/mushroom-and-spinach-pasta-with-ricotta/"
  },
  {
    "recipe": "Unstuffed Bell Peppers",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "bell peppers",
      "olive oil",
      "beef",
      "tomatoes",
      "long grain white rice",
      "dried basil",
      "dried oregano",
      "black pepper",
      "beef broth",
      "tomato sauce",
      "Worcestershire sauce",
      "shredded mozzarella",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/unstuffed-bell-peppers/"
  },
  {
    "recipe": "Spicy Peanut Butter Ramen",
    "listOfIngredients": [
      "natural-style peanut butter",
      "chili garlic sauce",
      "soy sauce",
      "brown sugar",
      "instant ramen",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/spicy-peanut-butter-ramen/"
  },
  {
    "recipe": "Chocolate Mousse",
    "listOfIngredients": [
      "dark",
      "heavy whipping cream",
      "egg whites",
      "powdered sugar"
    ],
    "url": "https://www.budgetbytes.com/chocolate-mousse/"
  },
  {
    "recipe": "How To Make Sour Cream",
    "listOfIngredients": [
      "heavy cream",
      "vinegar"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-sour-cream/"
  },
  {
    "recipe": "Pumpkin Bread Pudding",
    "listOfIngredients": [
      "loaf french bread",
      "raisins",
      "pumpkin puree",
      "packed brown sugar",
      "eggs",
      "pumpkin pie spice",
      "cinnamon",
      "vanilla",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-bread-pudding/"
  },
  {
    "recipe": "Parsley Salad with Almonds and Apricots",
    "listOfIngredients": [
      "cooked and cooled bulgur",
      "flat leaf parsley",
      "almonds",
      "dried apricots",
      "olive oil",
      "vegetable",
      "apple cider vinegar",
      "garlic",
      "Dijon mustard",
      "sugar",
      "dried basil",
      "salt + black pepper"
    ],
    "url": "https://www.budgetbytes.com/parsley-salad-almonds-apricots/"
  },
  {
    "recipe": "Pesto Cheese Toast",
    "listOfIngredients": [
      "bread",
      "pesto",
      "Roma tomato",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/pesto-cheese-toast/"
  },
  {
    "recipe": "Creamed Spinach Baked Eggs",
    "listOfIngredients": [
      "butter",
      "garlic",
      "all-purpose flour",
      "milk",
      "salt",
      "nutmeg",
      "Black pepper",
      "Parmesan",
      "frozen chopped spinach",
      "eggs",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/creamed-spinach-baked-eggs/"
  },
  {
    "recipe": "Crunchy Cabbage Salad",
    "listOfIngredients": [
      "shredded purple cabbage",
      "carrots",
      "green onions",
      "fresh cilantro",
      "peanuts",
      "neutral salad oil",
      "rice vinegar",
      "soy sauce",
      "honey",
      "tahini",
      "toasted sesame oil",
      "garlic",
      "fresh ginger"
    ],
    "url": "https://www.budgetbytes.com/crunchy-asian-salad/"
  },
  {
    "recipe": "Creamy Black Bean Taquitos",
    "listOfIngredients": [
      "cream cheese",
      "black beans",
      "green chiles",
      "green onions",
      "hot sauce",
      "garlic powder",
      "salt",
      "corn tortillas",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/creamy-black-bean-taquitos/"
  },
  {
    "recipe": "Chipotle Mashed Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "milk",
      "butter",
      "brown sugar",
      "peppers chipotle peppers adobo",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/chipotle-mashed-sweet-potatoes/"
  },
  {
    "recipe": "Polvorones",
    "listOfIngredients": [
      "butter",
      "powdered sugar",
      "vanilla extract",
      "flour",
      "cinnamon",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/polvorones/"
  },
  {
    "recipe": "Cranberry Walnut Bread",
    "listOfIngredients": [
      "wheat flour",
      "bread flour",
      "salt",
      "instant yeast",
      "walnuts",
      "dried cranberries",
      "water",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/cranberry-walnut-bread/"
  },
  {
    "recipe": "Gingerbread Baked Oatmeal",
    "listOfIngredients": [
      "dark molasses",
      "brown sugar",
      "eggs",
      "salt",
      "baking powder",
      "cinnamon",
      "ginger",
      "cloves",
      "milk",
      "old-fashioned oats"
    ],
    "url": "https://www.budgetbytes.com/gingerbread-baked-oatmeal/"
  },
  {
    "recipe": "Cherry Almond Smoothie",
    "listOfIngredients": [
      "frozen riced cauliflower",
      "frozen banana",
      "frozen sweet cherries",
      "almond butter",
      "cinnamon",
      "almond milk"
    ],
    "url": "https://www.budgetbytes.com/cherry-almond-smoothie/"
  },
  {
    "recipe": "Slow Cooker Potato Soup",
    "listOfIngredients": [
      "yellow onion",
      "stalks celery",
      "carrots",
      "garlic",
      "potatoes",
      "chicken broth",
      "cracked pepper",
      "milk",
      "all-purpose flour",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-potato-soup/"
  },
  {
    "recipe": "Collard Greens",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "smoked ham hock",
      "chicken broth",
      "collard greens",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/collard-greens/"
  },
  {
    "recipe": "Shredded Taco Beef",
    "listOfIngredients": [
      "boneless beef shoulder roast",
      "chili powder",
      "cumin",
      "oregano",
      "crushed red pepper",
      "salt",
      "garlic"
    ],
    "url": "https://www.budgetbytes.com/shredded-taco-beef/"
  },
  {
    "recipe": "Roasted Poblano and Sweet Potato Salad",
    "listOfIngredients": [
      "sweet potatoes",
      "poblano peppers",
      "black beans",
      "frozen corn kernels",
      "red onion",
      "lime",
      "olive oil",
      "fresh cilantro",
      "cumin",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/roasted-poblano-and-sweet-potato-salad/"
  },
  {
    "recipe": "Sweet Potato Enchiladas",
    "listOfIngredients": [
      "Roasted Poblano and Sweet Potato Salad",
      "fajita size flour tortillas",
      "enchilada sauce",
      "shredded cheddar"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-enchiladas/"
  },
  {
    "recipe": "Gingerbread Steel-cut Oats",
    "listOfIngredients": [
      "uncooked steel-cut oats",
      "salt",
      "cinnamon",
      "ginger",
      "nutmeg",
      "cloves",
      "dark molasses",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/gingerbread-steel-cut-oats/"
  },
  {
    "recipe": "Easy American Goulash",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "bell peppers",
      "beef",
      "red wine",
      "tomatoes",
      "tomato sauce",
      "soy sauce",
      "bay leaves",
      "dried oregano",
      "dried basil",
      "crushed red pepper",
      "water",
      "elbow macaroni",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/goulash/"
  },
  {
    "recipe": "Raisin Spice Bread",
    "listOfIngredients": [
      "wheat flour",
      "all-purpose flour",
      "brown sugar",
      "salt",
      "instant",
      "cinnamon",
      "ginger",
      "cloves",
      "raisins",
      "water"
    ],
    "url": "https://www.budgetbytes.com/raisin-spice-bread/"
  },
  {
    "recipe": "Thai Chicken Pizza",
    "listOfIngredients": [
      "naan",
      "hoisin sauce",
      "peanut butter",
      "fresh ginger",
      "sriracha hot sauce",
      "chicken breast",
      "shredded mozzarella",
      "red bell pepper",
      "red onion",
      "fresh cilantro",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/thai-chicken-pizza/"
  },
  {
    "recipe": "Sweet Potato Grits",
    "listOfIngredients": [
      "sweet potato",
      "water",
      "salt",
      "uncooked yellow grits",
      "milk",
      "butter",
      "cinnamon",
      "nutmeg"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-grits/"
  },
  {
    "recipe": "No Sugar Added Blueberry Almond Overnight Oats",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "chia seeds",
      "almonds",
      "nutmeg",
      "unsweetened applesauce",
      "blueberries",
      "milk",
      "almond extract"
    ],
    "url": "https://www.budgetbytes.com/no-sugar-added-blueberry-almond-overnight-oats/"
  },
  {
    "recipe": "Marinated White Beans",
    "listOfIngredients": [
      "butter beans",
      "fresh parsley",
      "olive oil",
      "lemon juice",
      "garlic",
      "dried oregano",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/marinated-white-beans/"
  },
  {
    "recipe": "Spicy Coconut and Pumpkin Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "cumin",
      "crushed red pepper",
      "pumpkin puree",
      "coconut milk",
      "chicken broth",
      "salt and pepper",
      "fresh cilantro",
      "plain yogurt",
      "Sriracha",
      "pumpkin seeds"
    ],
    "url": "https://www.budgetbytes.com/spicy-coconut-pumpkin-soup/"
  },
  {
    "recipe": "Mini Dark Chocolate Pecan Pies",
    "listOfIngredients": [
      "salted butter",
      "cream cheese",
      "all-purpose flour",
      "sugar",
      "dark chocolate",
      "eggs",
      "brown sugar",
      "melted butter",
      "vanilla extract",
      "pecan"
    ],
    "url": "https://www.budgetbytes.com/mini-dark-chocolate-pecan-pies/"
  },
  {
    "recipe": "Air Fryer Chicken Thighs",
    "listOfIngredients": [
      "cornstarch",
      "smoked paprika",
      "garlic powder",
      "onion powder",
      "dried oregano",
      "cayenne pepper",
      "salt",
      "Black pepper",
      "bone-in",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/air-fryer-chicken-thighs/"
  },
  {
    "recipe": "Spinach Pie",
    "listOfIngredients": [
      "puff pastry",
      "frozen chopped spinach",
      "yellow onion",
      "garlic",
      "olive oil",
      "cottage cheese",
      "Parmesan",
      "nutmeg",
      "salt",
      "black pepper",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/spinach-pie/"
  },
  {
    "recipe": "Sesame Roasted Green Beans",
    "listOfIngredients": [
      "green beans",
      "cooking oil",
      "soy sauce",
      "garlic",
      "toasted sesame oil",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/sesame-roasted-green-beans/"
  },
  {
    "recipe": "Spicy Italian Flat Bread",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "instant",
      "water",
      "cornmeal",
      "olive oil",
      "Italian seasoning blend",
      "quartered artichoke hearts",
      "red onion",
      "salami",
      "smoked provolone",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/spicy-italian-flat-bread/"
  },
  {
    "recipe": "Homemade Alfredo Sauce",
    "listOfIngredients": [
      "salted butter",
      "garlic",
      "heavy cream",
      "Italian seasoning",
      "salt",
      "black pepper",
      "Parmesan cheese"
    ],
    "url": "https://www.budgetbytes.com/homemade-alfredo-sauce/"
  },
  {
    "recipe": "How to Make a Frittata",
    "listOfIngredients": [
      "eggs",
      "milk",
      "salt",
      "pepper",
      "cooking oil",
      "yellow onion",
      "fresh spinach",
      "grape tomatoes",
      "crumbled feta"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-a-frittata/"
  },
  {
    "recipe": "Banh Mi Bowls",
    "listOfIngredients": [
      "carrots",
      "onion",
      "rice vinegar",
      "white sugar",
      "salt",
      "water",
      "pork",
      "eggs",
      "plain breadcrumbs",
      "garlic",
      "fresh ginger",
      "soy sauce",
      "green onions",
      "cooked jasmine rice",
      "cucumber",
      "jalapenos",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/banh-mi-bowls/"
  },
  {
    "recipe": "Curried Tofu Salad",
    "listOfIngredients": [
      "mayonnaise",
      "plain Greek yogurt",
      "lemon juice",
      "Dijon mustard",
      "honey",
      "curry powder",
      "salt",
      "cilantro",
      "extra firm tofu"
    ],
    "url": "https://www.budgetbytes.com/curried-tofu-salad/"
  },
  {
    "recipe": "Tomato Lentil Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "carrots",
      "garlic",
      "russet potato",
      "tomato paste",
      "stewed tomatoes",
      "brown lentils",
      "paprika",
      "dried basil",
      "dried oregano",
      "black pepper",
      "vegetable broth",
      "soy sauce"
    ],
    "url": "https://www.budgetbytes.com/tomato-lentil-soup/"
  },
  {
    "recipe": "Tortilla Baked Eggs",
    "listOfIngredients": [
      "olive oil",
      "flour tortilla",
      "fresh spinach",
      "eggs",
      "salt",
      "black pepper",
      "grape tomatoes",
      "shredded cheddar",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/tortilla-baked-eggs/"
  },
  {
    "recipe": "Cobb Salad Meal Prep",
    "listOfIngredients": [
      "boneless",
      "salt and pepper",
      "smoked paprika",
      "cooking oil",
      "eggs",
      "bacon",
      "chickpeas",
      "grape tomatoes",
      "cheddar",
      "spring mix",
      "salad dressing"
    ],
    "url": "https://www.budgetbytes.com/cobb-salad-meal-prep/"
  },
  {
    "recipe": "Easy Egg Drop Soup",
    "listOfIngredients": [
      "mushrooms",
      "green onions",
      "fresh grated ginger",
      "cooking oil",
      "chicken broth",
      "water",
      "soy sauce",
      "cornstarch",
      "eggs",
      "fresh baby spinach"
    ],
    "url": "https://www.budgetbytes.com/easy-egg-drop-soup/"
  },
  {
    "recipe": "Mediterranean Coleslaw",
    "listOfIngredients": [
      "olive oil",
      "lemon juice",
      "garlic powder",
      "dried oregano",
      "salt",
      "black pepper",
      "coleslaw mix",
      "red bell pepper",
      "parsley",
      "black olives",
      "banana pepper rings",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-coleslaw/"
  },
  {
    "recipe": "BBQ Chicken Kebabs",
    "listOfIngredients": [
      "red onions",
      "fresh pineapple",
      "Simply Nature Organic Chicken Breasts",
      "cooking oil",
      "smoked paprika",
      "sweet paprika",
      "garlic powder",
      "salt",
      "black pepper",
      "Burman's Original BBQ Sauce",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/bbq-chicken-kebabs/"
  },
  {
    "recipe": "Loaded Smashed Potatoes",
    "listOfIngredients": [
      "baby potatoes",
      "salt",
      "olive oil",
      "everything bagel seasoning",
      "shredded cheddar",
      "sour cream",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/loaded-smashed-potatoes/"
  },
  {
    "recipe": "Garlic Marinated Chicken",
    "listOfIngredients": [
      "olive oil",
      "lemon juice",
      "garlic",
      "dried oregano",
      "salt",
      "Black pepper",
      "boneless skinless chicken thighs"
    ],
    "url": "https://www.budgetbytes.com/garlic-marinated-chicken/"
  },
  {
    "recipe": "Scallion Herb Cream Cheese Spread",
    "listOfIngredients": [
      "cream cheese",
      "fresh parsley",
      "fresh cilantro",
      "green onion",
      "garlic powder",
      "salt",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/scallion-herb-cream-cheese-spread/"
  },
  {
    "recipe": "Roasted Carrots",
    "listOfIngredients": [
      "carrots",
      "olive oil",
      "salt",
      "black pepper",
      "garlic powder"
    ],
    "url": "https://www.budgetbytes.com/roasted-carrots/"
  },
  {
    "recipe": "Jerk Seasoned Collard Greens",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "cooking oil",
      "jerk seasoning",
      "orange juice",
      "chicken broth",
      "collard greens"
    ],
    "url": "https://www.budgetbytes.com/jerk-seasoned-collard-greens/"
  },
  {
    "recipe": "Beef and Cabbage Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "beef",
      "cabbage",
      "stewed tomatoes",
      "dried oregano",
      "dried basil",
      "black pepper",
      "beef broth",
      "Worcestershire sauce",
      "lemon",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/beef-and-cabbage-soup/"
  },
  {
    "recipe": "Pico de Gallo",
    "listOfIngredients": [
      "tomatoes",
      "Vidalia onion",
      "lime",
      "cilantro",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/pico-de-gallo/"
  },
  {
    "recipe": "Coconut Rice Pilaf",
    "listOfIngredients": [
      "uncooked jasmine rice",
      "coconut milk",
      "garlic",
      "olive oil",
      "yellow onion",
      "frozen peas and carrots",
      "pineapple chunks",
      "soy sauce",
      "sriracha sauce",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/coconut-rice-pilaf/"
  },
  {
    "recipe": "Cumin Lime Chickpeas",
    "listOfIngredients": [
      "chickpeas",
      "red onion",
      "fresh cilantro",
      "garlic",
      "lime",
      "olive oil",
      "cumin",
      "cayenne pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/cumin-lime-chickpeas/"
  },
  {
    "recipe": "Spiced Coconut Steel-Cut Oats",
    "listOfIngredients": [
      "steel-cut oats",
      "salt",
      "cinnamon",
      "ginger",
      "cloves",
      "vanilla extract",
      "brown sugar",
      "raisins",
      "almonds",
      "light coconut milk"
    ],
    "url": "https://www.budgetbytes.com/indian-spiced-oats-w-coconut-milk/"
  },
  {
    "recipe": "Black-Eyed Peas",
    "listOfIngredients": [
      "onion",
      "garlic",
      "olive oil",
      "dried black-eyed peas",
      "water",
      "chicken bouillon granules",
      "bay leaves",
      "dried thyme",
      "red pepper flakes",
      "cranks fresh ground black pepper"
    ],
    "url": "https://www.budgetbytes.com/black-eyed-peas/"
  },
  {
    "recipe": "Spicy Hot Cocoa",
    "listOfIngredients": [
      "unsweetened cocoa powder",
      "brown sugar",
      "cinnamon",
      "cayenne pepper",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/aztec-cocoa/"
  },
  {
    "recipe": "Chipotle Chicken Chili or \"C3\"",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "chicken breast",
      "V8 juice",
      "tomato",
      "kidney beans",
      "black beans",
      "frozen corn kernels",
      "chipotle peppers adobo sauce",
      "chili powder",
      "cumin",
      "dried oregano",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/chipotle-chicken-chili-or-c3/"
  },
  {
    "recipe": "Lentil Tacos",
    "listOfIngredients": [
      "dry brown lentils",
      "yellow onion",
      "garlic",
      "olive oil",
      "recipe taco seasoning",
      "salt",
      "corn tortillas",
      "recipe pico de gallo",
      "sour cream",
      "avocados"
    ],
    "url": "https://www.budgetbytes.com/lentil-tacos/"
  },
  {
    "recipe": "Caramelized Onion & Mushroom White Pizza",
    "listOfIngredients": [
      "all purpose flour",
      "salt",
      "instant yeast",
      "water",
      "yellow onions",
      "olive oil",
      "salt and pepper",
      "button mushrooms",
      "dried thyme",
      "shredded mozzarella",
      "fresh parsley",
      "butter",
      "garlic",
      "cream cheese",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/caramelized-onion-mushroom-white-pizza/"
  },
  {
    "recipe": "Chicken Enchilada Pasta",
    "listOfIngredients": [
      "vegetable oil",
      "yellow onion",
      "garlic",
      "chicken breast",
      "enchilada sauce",
      "sour cream",
      "uncooked pasta",
      "shredded monterrey jack",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/chicken-enchilada-pasta/"
  },
  {
    "recipe": "Quinoa Tabbouleh",
    "listOfIngredients": [
      "uncooked quinoa",
      "lemon",
      "garlic",
      "olive oil",
      "salt",
      "tomato",
      "cucumber",
      "curly leaf parsley"
    ],
    "url": "https://www.budgetbytes.com/quinoa-tabbouleh/"
  },
  {
    "recipe": "Delicious Homemade Chicken Piccata",
    "listOfIngredients": [
      "fresh lemon",
      "Italian parsley",
      "garlic",
      "boneless",
      "salt and pepper",
      "flour",
      "olive oil",
      "butter",
      "chicken broth",
      "capers"
    ],
    "url": "https://www.budgetbytes.com/chicken-piccata/"
  },
  {
    "recipe": "Lemon Blueberry Cream Cheese Galette",
    "listOfIngredients": [
      "flour",
      "sugar",
      "salt",
      "cold butter",
      "ice water",
      "blueberries",
      "cornstarch",
      "fresh lemon",
      "cream cheese",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/blueberry-lemon-cream-cheese-galette/"
  },
  {
    "recipe": "Creamy Tortellini Soup",
    "listOfIngredients": [
      "yellow onion",
      "carrots",
      "celery",
      "garlic",
      "olive oil",
      "tomato paste",
      "crushed tomatoes",
      "Italian seasoning",
      "vegetable broth",
      "cheese tortellini",
      "heavy cream",
      "fresh spinach",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/spinach-tortellini-soup/"
  },
  {
    "recipe": "One Pot Veggie Rice Bowl",
    "listOfIngredients": [
      "long grain white rice",
      "garlic",
      "frozen vegetables",
      "water",
      "soy sauce",
      "eggs",
      "toasted sesame oil",
      "green onion",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/one-pot-veggie-rice-bowl/"
  },
  {
    "recipe": "No-Knead Ciabatta",
    "listOfIngredients": [
      "all-purpose flour plus some for dusting",
      "instant",
      "salt",
      "water",
      "olive oil",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/no-knead-ciabatta/"
  },
  {
    "recipe": "Cinnamon Swirl Oven Pancake",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "sugar",
      "milk",
      "eggs",
      "butter",
      "vanilla extract",
      "salt",
      "cinnamon",
      "brown sugar"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-swirl-oven-pancake/"
  },
  {
    "recipe": "Oven Baked Garlic Parmesan Fries",
    "listOfIngredients": [
      "russet potatoes",
      "olive oil",
      "dried oregano",
      "garlic powder",
      "salt",
      "black pepper",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/thick-cut-garlic-parmesan-oven-fries/"
  },
  {
    "recipe": "Savory Oatmeal",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "mushrooms",
      "butter",
      "vegetable broth",
      "old-fashioned rolled oats",
      "spinach",
      "toasted sesame oil"
    ],
    "url": "https://www.budgetbytes.com/savory-oatmeal/"
  },
  {
    "recipe": "Gochujang Tuna Salad",
    "listOfIngredients": [
      "mayonnaise",
      "gochujang",
      "chunk light tuna water",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/gochujang-tuna-salad/"
  },
  {
    "recipe": "Hawaiian Burgers",
    "listOfIngredients": [
      "pineapple slices in juice",
      "green onions",
      "Monterey jack cheese",
      "pork",
      "teriyaki sauce",
      "red onion",
      "cooking oil",
      "Onion Rolls",
      "mayonnaise",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/pineapple-pork-hawaiian-burgers/"
  },
  {
    "recipe": "Bacon Ranch Turkey Burgers",
    "listOfIngredients": [
      "bacon",
      "turkey",
      "ranch seasoning mix",
      "cooking oil",
      "cheese",
      "hamburger buns",
      "tomato",
      "lettuce",
      "mayonnaise"
    ],
    "url": "https://www.budgetbytes.com/bacon-ranch-turkey-burgers/"
  },
  {
    "recipe": "Quickie Black Eyed Peas and Greens",
    "listOfIngredients": [
      "onion",
      "garlic",
      "olive oil",
      "black eyed peas",
      "dried oregano",
      "smoked paprika",
      "cayenne pepper",
      "black pepper",
      "vegetable broth",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/quickie-black-eyed-peas-and-greens/"
  },
  {
    "recipe": "Marinated Cauliflower Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "Dijon mustard",
      "garlic powder",
      "Italian seasoning",
      "salt",
      "black pepper",
      "Parmesan",
      "cauliflower",
      "black olives",
      "banana pepper rings",
      "red bell pepper",
      "red onion",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/marinated-cauliflower-salad/"
  },
  {
    "recipe": "Blueberry Muffins",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "cinnamon",
      "nutmeg",
      "plain yogurt",
      "granulated sugar",
      "melted butter",
      "cooking oil",
      "eggs",
      "vanilla extract",
      "blueberries"
    ],
    "url": "https://www.budgetbytes.com/homemade-blueberry-muffins/"
  },
  {
    "recipe": "Carrot Cake Baked Oatmeal",
    "listOfIngredients": [
      "carrots",
      "eggs",
      "brown sugar",
      "cinnamon",
      "nutmeg",
      "baking powder",
      "salt",
      "milk",
      "old-fashioned rolled oats",
      "walnuts",
      "raisins",
      "cream cheese",
      "egg yolk",
      "vanilla extract",
      "lemon juice",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/carrot-cake-baked-oatmeal/"
  },
  {
    "recipe": "Homemade Freezer Garlic Bread",
    "listOfIngredients": [
      "salted butter",
      "olive oil",
      "garlic",
      "garlic powder",
      "salt",
      "dried parsley",
      "French bread"
    ],
    "url": "https://www.budgetbytes.com/homemade-freezer-garlic-bread/"
  },
  {
    "recipe": "BBQ Meatballs with Cheese Grits",
    "listOfIngredients": [
      "pork",
      "eggs",
      "breadcrumbs",
      "BBQ sauce",
      "salt",
      "smoked paprika",
      "garlic powder",
      "chicken broth",
      "milk",
      "quick cooking grits",
      "butter",
      "black pepper",
      "shredded cheddar"
    ],
    "url": "https://www.budgetbytes.com/bbq-meatballs-with-cheese-grits/"
  },
  {
    "recipe": "Almost Eggs Benedict",
    "listOfIngredients": [
      "butter",
      "English muffins",
      "eggs",
      "ham",
      "water",
      "lemon",
      "cayenne",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/almost-eggs-benedict/"
  },
  {
    "recipe": "Balsamic Roasted Mushrooms",
    "listOfIngredients": [
      "mushrooms",
      "olive oil",
      "balsamic vinegar",
      "brown sugar",
      "soy sauce",
      "garlic",
      "dried thyme",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/balsamic-roasted-mushrooms/"
  },
  {
    "recipe": "Chorizo Stuffed Bell Peppers",
    "listOfIngredients": [
      "Mexican Chorizo",
      "cooked rice",
      "tomatoes with green chiles",
      "black beans",
      "chili powder",
      "salt",
      "Monterey jack",
      "green onions",
      "bell peppers"
    ],
    "url": "https://www.budgetbytes.com/chorizo-stuffed-bell-peppers/"
  },
  {
    "recipe": "Lemon Butter Green Beans",
    "listOfIngredients": [
      "green beans",
      "butter",
      "lemon",
      "Salt and black pepper"
    ],
    "url": "https://www.budgetbytes.com/lemon-butter-green-beans-revisited/"
  },
  {
    "recipe": "Peanut Lime Cauliflower Salad",
    "listOfIngredients": [
      "coconut oil",
      "riced cauliflower",
      "salt",
      "ginger",
      "fresh lime",
      "soy sauce",
      "chili garlic sauce",
      "red bell pepper",
      "red onion",
      "peanuts",
      "fresh cilantro leaves"
    ],
    "url": "https://www.budgetbytes.com/peanut-lime-cauliflower-salad/"
  },
  {
    "recipe": "Sunday Slow Cooker Beef Ragu",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "carrots",
      "boneless beef shoulder roast",
      "cooking oil",
      "dried oregano",
      "dried thyme",
      "dried rosemary",
      "Black pepper",
      "tomato paste",
      "beef broth",
      "crushed tomatoes",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/sunday-slow-cooker-beef-ragu/"
  },
  {
    "recipe": "Flour Tortillas",
    "listOfIngredients": [
      "wheat flour",
      "all-purpose flour",
      "lard",
      "salt",
      "water"
    ],
    "url": "https://www.budgetbytes.com/flour-tortillas/"
  },
  {
    "recipe": "Cinnamon Spice Biscotti",
    "listOfIngredients": [
      "all purpose flour",
      "baking powder",
      "salt",
      "white sugar",
      "brown sugar",
      "butter",
      "eggs",
      "vanilla extract",
      "cinnamon",
      "ginger",
      "nutmeg",
      "cloves",
      "whit sugar"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-spice-biscotti/"
  },
  {
    "recipe": "Jalapeno Cran-Raspberry Sauce",
    "listOfIngredients": [
      "fresh cranberries",
      "frozen raspberries",
      "jalapeno",
      "lemon juice",
      "cinnamon",
      "cloves",
      "sugar",
      "water"
    ],
    "url": "https://www.budgetbytes.com/jalapeno-cran-raspberry-sauce/"
  },
  {
    "recipe": "Pineapple Teriyaki Chicken Thighs",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "vegetable oil",
      "soy sauce",
      "pineapple jam",
      "rice vinegar",
      "cornstarch",
      "chicken thighs"
    ],
    "url": "https://www.budgetbytes.com/pineapple-teriyaki-chicken-thighs/"
  },
  {
    "recipe": "Curry Roasted Cauliflower",
    "listOfIngredients": [
      "cauliflower",
      "red onion",
      "olive oil",
      "curry powder",
      "crushed red pepper",
      "salt and pepper",
      "frozen peas"
    ],
    "url": "https://www.budgetbytes.com/curry-roasted-cauliflower/"
  },
  {
    "recipe": "Mashed Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "salt",
      "butter",
      "milk",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/mashed-potatoes/"
  },
  {
    "recipe": "Country Sausage Gravy",
    "listOfIngredients": [
      "pork sausage",
      "butter",
      "all-purpose flour",
      "milk",
      "garlic powder",
      "black pepper",
      "crushed red pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/country-sausage-gravy/"
  },
  {
    "recipe": "Triple Berry Oatmeal Muffins",
    "listOfIngredients": [
      "all-purpose flour",
      "wheat flour",
      "rolled oats",
      "brown sugar",
      "white sugar",
      "salt",
      "baking powder",
      "cinnamon",
      "milk",
      "cooking oil",
      "eggs",
      "frozen berries",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/triple-berry-oat-muffins/"
  },
  {
    "recipe": "Quinoa Black Bean Tacos",
    "listOfIngredients": [
      "uncooked quinoa",
      "garlic",
      "salt",
      "chili powder",
      "cumin",
      "dried oregano",
      "smoked paprika",
      "cooked black beans",
      "recipe pico de gallo",
      "avocado",
      "corn tortillas",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/quinoa-black-bean-tacos/"
  },
  {
    "recipe": "Pizzadillas",
    "listOfIngredients": [
      "flour tortillas",
      "shredded mozzarella",
      "pepperoni",
      "bell pepper",
      "red onion",
      "black olives",
      "mushrooms",
      "Thick & Rich Pizza Sauce"
    ],
    "url": "https://www.budgetbytes.com/pizzadillas/"
  },
  {
    "recipe": "Chicken Adobo",
    "listOfIngredients": [
      "soy sauce",
      "apple cider vinegar",
      "vegetable oil",
      "honey",
      "bay leaves",
      "garlic",
      "black peppercorns"
    ],
    "url": "https://www.budgetbytes.com/chicken-adobo/"
  },
  {
    "recipe": "No Sugar Added Banana Nut Granola",
    "listOfIngredients": [
      "bananas",
      "unsweetened apple sauce",
      "natural peanut butter",
      "cinnamon",
      "vanilla extract",
      "salt",
      "old fashioned rolled oats",
      "unsweetened shredded coconut",
      "banana chips"
    ],
    "url": "https://www.budgetbytes.com/no-sugar-added-banana-nut-granola/"
  },
  {
    "recipe": "Spinach Mushroom and Feta Crustless Quiche",
    "listOfIngredients": [
      "frozen chopped spinach",
      "mushrooms",
      "garlic",
      "Salt",
      "cooking oil",
      "feta cheese",
      "eggs",
      "Parmesan",
      "pepper",
      "milk",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/spinach-mushroom-feta-crustless-quiche/"
  },
  {
    "recipe": "Garlic Noodles with Beef and Broccoli",
    "listOfIngredients": [
      "oyster sauce",
      "butter",
      "soy sauce",
      "brown sugar",
      "toasted sesame oil",
      "beef",
      "garlic",
      "frozen broccoli florets",
      "spaghetti",
      "green onions",
      "crushed red pepper flakes"
    ],
    "url": "https://www.budgetbytes.com/garlic-noodles-with-beef-and-broccoli/"
  },
  {
    "recipe": "Cranberry Cream Cheese Dip",
    "listOfIngredients": [
      "fresh cranberries",
      "sugar",
      "water",
      "jalapeno",
      "salt",
      "cream cheese",
      "green onions",
      "crackers",
      "apple"
    ],
    "url": "https://www.budgetbytes.com/cranberry-cream-cheese-dip/"
  },
  {
    "recipe": "Everything Bagel Rice Bowl",
    "listOfIngredients": [
      "water",
      "long grain rice",
      "salted butter",
      "salt",
      "yellow onion",
      "garlic",
      "fresh spinach",
      "eggs",
      "Everything Bagel seasoning plus more for garnish"
    ],
    "url": "https://www.budgetbytes.com/everything-bagel-rice-bowl/"
  },
  {
    "recipe": "Turkey Pinwheels",
    "listOfIngredients": [
      "cream cheese",
      "sharp cheddar cheese",
      "pimento-stuffed olives",
      "olive brine",
      "garlic powder",
      "black pepper",
      "turkey",
      "spinach"
    ],
    "url": "https://www.budgetbytes.com/turkey-pinwheels/"
  },
  {
    "recipe": "Slow Cooker Meatball Subs",
    "listOfIngredients": [
      "breadcrumbs",
      "Parmesan",
      "garlic powder",
      "onion powder",
      "Italian seasoning",
      "salt",
      "pepper",
      "eggs",
      "milk",
      "Italian sausage",
      "lean ground beef",
      "marinara",
      "buns",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-meatball-subs/"
  },
  {
    "recipe": "Veggie Pot Pie",
    "listOfIngredients": [
      "Ingredient Pie Crust",
      "salted butter",
      "yellow onion",
      "garlic cloves",
      "flour",
      "vegetable broth",
      "milk",
      "salt",
      "bay leaf",
      "dried rosemary",
      "dried thyme",
      "rubbed sage",
      "black pepper",
      "soy sauce",
      "Yukon gold potato",
      "baby bellas",
      "frozen mixed vegetables",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/veggie-pot-pie/"
  },
  {
    "recipe": "Chicken Pot Pie",
    "listOfIngredients": [
      "boneless",
      "cooking oil",
      "yellow onion",
      "butter",
      "flour",
      "chicken broth",
      "milk",
      "dried thyme",
      "rubbed sage",
      "black pepper",
      "salt",
      "frozen mixed vegetables",
      "double pie crust",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/chicken-pot-pie/"
  },
  {
    "recipe": "Honey Mustard Chicken Wings",
    "listOfIngredients": [
      "chicken wings",
      "salt",
      "pepper",
      "garlic powder",
      "cornstarch",
      "mayonnaise",
      "Dijon mustard",
      "yellow mustard",
      "Honey",
      "apple cider vinegar",
      "paprika"
    ],
    "url": "https://www.budgetbytes.com/honey-mustard-wings/"
  },
  {
    "recipe": "Summer Sweet Corn Salad",
    "listOfIngredients": [
      "olive oil",
      "fresh lemon",
      "dried basil",
      "Dijon mustard",
      "salt",
      "pepper",
      "parsley",
      "pasta shells",
      "sweet corn",
      "grape tomatoes",
      "zucchini",
      "red onion",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/summer-sweet-corn-salad/"
  },
  {
    "recipe": "Spaghetti with Hidden Vegetable Pasta Sauce",
    "listOfIngredients": [
      "zucchini",
      "carrots",
      "yellow onion",
      "garlic",
      "olive oil",
      "beef",
      "dried basil",
      "dried oregano",
      "salt",
      "Freshly cracked black pepper",
      "crushed red pepper",
      "pasta sauce",
      "spaghetti"
    ],
    "url": "https://www.budgetbytes.com/spaghetti-with-vegetable-meat-sauce/"
  },
  {
    "recipe": "Thai Coconut Curry Chicken Thighs",
    "listOfIngredients": [
      "cooking oil",
      "boneless",
      "red Thai curry paste",
      "garlic",
      "ginger",
      "coconut milk",
      "chicken broth",
      "fish sauce",
      "cooked jasmine",
      "fresh cilantro",
      "green onions",
      "lime"
    ],
    "url": "https://www.budgetbytes.com/thai-coconut-curry-braised-chicken-thighs/"
  },
  {
    "recipe": "Roasted Sweet Potato Rainbow Salad with Lime Crema",
    "listOfIngredients": [
      "sour cream",
      "fresh lime",
      "clove garlic",
      "salt",
      "sweet potatoes",
      "cooking oil",
      "cumin",
      "Salt",
      "frozen corn kernels",
      "black beans",
      "red bell pepper",
      "red onion",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/roasted-sweet-potato-rainbow-salad-lime-crema/"
  },
  {
    "recipe": "Lemon Garlic Roasted Chicken",
    "listOfIngredients": [
      "lemon",
      "olive oil",
      "garlic",
      "salt",
      "Black pepper",
      "chicken breast"
    ],
    "url": "https://www.budgetbytes.com/lemon-garlic-roasted-chicken/"
  },
  {
    "recipe": "Sriracha Egg Salad",
    "listOfIngredients": [
      "eggs",
      "mayonnaise",
      "sriracha",
      "salt",
      "lemon juice",
      "Black pepper",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/sriracha-egg-salad/"
  },
  {
    "recipe": "Lemon Poppy Seed Two-Bite Scones",
    "listOfIngredients": [
      "fresh lemon",
      "all-purpose flour",
      "salt",
      "powdered sugar",
      "baking powder",
      "poppy seeds",
      "heavy whipping cream"
    ],
    "url": "https://www.budgetbytes.com/lemon-poppy-seed-two-bite-scones/"
  },
  {
    "recipe": "Creamy Garlic Mushroom Chicken",
    "listOfIngredients": [
      "mushrooms",
      "garlic",
      "boneless",
      "salt and pepper",
      "cooking oil",
      "chicken broth",
      "half and half",
      "Parmesan",
      "Parsley for garnish"
    ],
    "url": "https://www.budgetbytes.com/creamy-garlic-mushroom-chicken/"
  },
  {
    "recipe": "Coconut Crusted Tofu with Sweet Chili Dipping Sauce",
    "listOfIngredients": [
      "extra firm tofu",
      "eggs",
      "cornstarch",
      "water",
      "salt and pepper",
      "unsweetened coconut flakes",
      "virgin coconut oil",
      "sweet chili sauce"
    ],
    "url": "https://www.budgetbytes.com/coconut-crusted-tofu/"
  },
  {
    "recipe": "Easy Lemon Pepper Chicken",
    "listOfIngredients": [
      "chicken breast",
      "all-purpose flour",
      "lemon pepper seasoning",
      "cooking oil",
      "garlic",
      "chicken broth",
      "butter",
      "lemon juice",
      "fresh parsley",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-lemon-pepper-chicken/"
  },
  {
    "recipe": "Cheeseburger Salad with Animal Sauce Dressing",
    "listOfIngredients": [
      "mayonnaise",
      "ketchup",
      "olive oil",
      "Relish",
      "apple cider vinegar",
      "sugar",
      "salt",
      "black pepper",
      "beef",
      "seasoning salt",
      "cooking oil",
      "hearts of Romaine",
      "red onion",
      "tomato",
      "cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/cheeseburger-salad-animal-sauce/"
  },
  {
    "recipe": "Roasted Corn Quesadillas",
    "listOfIngredients": [
      "cooked chicken",
      "frozen roasted corn kernels",
      "green onions",
      "green chiles",
      "shredded cheese",
      "cumin",
      "salt",
      "tortillas"
    ],
    "url": "https://www.budgetbytes.com/roasted-corn-quesadillas/"
  },
  {
    "recipe": "Spinach Lasagna Roll Ups",
    "listOfIngredients": [
      "lasagna noodles",
      "ricotta",
      "mozzarella",
      "Parmesan",
      "eggs",
      "frozen spinach",
      "marinara sauce",
      "salt and pepper",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/spinach-lasagna-roll-ups/"
  },
  {
    "recipe": "Garlic Parmesan Polenta",
    "listOfIngredients": [
      "yellow cornmeal",
      "water",
      "salt",
      "butter",
      "Parmesan",
      "garlic powder",
      "canola"
    ],
    "url": "https://www.budgetbytes.com/garlic-parmesan-polenta/"
  },
  {
    "recipe": "Spicy Peanut Sauce",
    "listOfIngredients": [
      "natural style peanut butter",
      "coconut milk",
      "juice from0.5 a lime",
      "fresh ginger",
      "garlic",
      "sriracha sauce",
      "soy sauce",
      "sesame oil",
      "brown sugar",
      "cilantro",
      "water"
    ],
    "url": "https://www.budgetbytes.com/thai-peanut-sauce/"
  },
  {
    "recipe": "Rice Pancakes",
    "listOfIngredients": [
      "cooked rice",
      "eggs",
      "vanilla extract",
      "cinnamon",
      "salt",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/rice-pancakes/"
  },
  {
    "recipe": "Vegetable Egg Rolls",
    "listOfIngredients": [
      "vegetable oil",
      "garlic",
      "fresh ginger",
      "mushrooms",
      "carrots",
      "green onions",
      "head green cabbage",
      "soy sauce",
      "cornstarch",
      "sesame oil",
      "ea egg roll wrappers",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/vegetable-egg-rolls/"
  },
  {
    "recipe": "Creamy Chicken & Rice Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "carrots",
      "celery",
      "chicken breast",
      "bay leaf",
      "dried oregano",
      "dried thyme",
      "cracked pepper",
      "salt",
      "wild rice mix",
      "water",
      "fresh parsley",
      "butter",
      "all-purpose flour",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/creamy-chicken-rice-soup/"
  },
  {
    "recipe": "Turkey And Stuffing Casserole Recipe",
    "listOfIngredients": [
      "bacon",
      "celery",
      "apples",
      "yellow onion",
      "garlic",
      "dried sage",
      "dried thyme",
      "salt and pepper",
      "loaf french bread",
      "chicken base",
      "fresh parsley",
      "olive oil",
      "turkey pieces"
    ],
    "url": "https://www.budgetbytes.com/turkey-stuffing-casserole/"
  },
  {
    "recipe": "Honey Wheat Bread",
    "listOfIngredients": [
      "water",
      "active dry yeast",
      "honey",
      "olive oil",
      "wheat flour",
      "all-purpose flour",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/honey-wheat-sandwich-bread/"
  },
  {
    "recipe": "Broccoli Fettuccine Alfredo",
    "listOfIngredients": [
      "dry fettuccine",
      "frozen broccoli florets",
      "garlic",
      "butter",
      "all-purpose flour",
      "milk",
      "parmesan",
      "nutmeg",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/broccoli-fettuccine-alfredo/"
  },
  {
    "recipe": "Tuna & White Bean Salad",
    "listOfIngredients": [
      "white beans",
      "chunk light tuna water",
      "green onions",
      "lemon juice",
      "olive oil",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/tuna-white-bean-salad/"
  },
  {
    "recipe": "Southwest Salad with Taco Ranch Dressing",
    "listOfIngredients": [
      "plain yogurt",
      "buttermilk",
      "mayonnaise",
      "salt",
      "garlic powder",
      "chili powder",
      "cumin",
      "cayenne pepper",
      "corn tortillas",
      "non-stick spray",
      "iceberg lettuce",
      "black beans",
      "frozen corn kernels",
      "tomato",
      "green onions",
      "shredded cheese"
    ],
    "url": "https://www.budgetbytes.com/southwest-salad-with-taco-ranch-dressing/"
  },
  {
    "recipe": "Kale Pesto Pasta",
    "listOfIngredients": [
      "pasta",
      "kale",
      "olive oil",
      "lemon",
      "garlic",
      "walnuts",
      "Parmesan",
      "salt",
      "Black pepper",
      "mozzarella"
    ],
    "url": "https://www.budgetbytes.com/kale-pesto-pasta/"
  },
  {
    "recipe": "Chocolate Chip Cookies",
    "listOfIngredients": [
      "salted butter",
      "brown sugar",
      "granulated white sugar",
      "vanilla extract",
      "eggs",
      "all-purpose flour",
      "baking soda",
      "semi-sweet chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/chocolate-chip-cookies/"
  },
  {
    "recipe": "Easy Pesto Chicken and Vegetables",
    "listOfIngredients": [
      "red bell pepper",
      "zucchini",
      "yellow squash",
      "red onion",
      "boneless",
      "cooking oil",
      "frozen green beans",
      "pesto",
      "salt",
      "black pepper",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/easy-pesto-chicken-and-vegetables/"
  },
  {
    "recipe": "One Pot Creamy Mushroom Pasta",
    "listOfIngredients": [
      "garlic",
      "baby bella mushrooms",
      "butter",
      "salt",
      "black pepper",
      "fettuccine",
      "vegetable broth",
      "heavy cream",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/one-pot-creamy-mushroom-pasta/"
  },
  {
    "recipe": "Slow Cooker Beef Stew",
    "listOfIngredients": [
      "red potatoes",
      "yellow onion",
      "carrots",
      "celery",
      "garlic",
      "beef stew meat",
      "all-purpose flour",
      "salt",
      "Freshly cracked black pepper",
      "cooking oil",
      "beef broth",
      "Dijon mustard",
      "Worcestershire sauce",
      "soy sauce",
      "brown sugar",
      "dried rosemary",
      "dried thyme"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-rosemary-garlic-beef-stew-slow-cooker/"
  },
  {
    "recipe": "Lemon Berry Cobbler",
    "listOfIngredients": [
      "frozen mixed berries",
      "sugar",
      "cornstarch",
      "fresh lemon",
      "all-purpose flour",
      "baking powder",
      "salt",
      "cold butter",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/lemon-berry-cobbler/"
  },
  {
    "recipe": "Warm Corn and Avocado Salad",
    "listOfIngredients": [
      "cooking oil",
      "frozen corn kernels",
      "salt and pepper",
      "cumin",
      "red onion",
      "avocado",
      "cilantro",
      "lime"
    ],
    "url": "https://www.budgetbytes.com/warm-corn-avocado-salad/"
  },
  {
    "recipe": "Homemade Biscuits",
    "listOfIngredients": [
      "butter",
      "all-purpose flour",
      "baking powder",
      "baking soda",
      "salt",
      "milk",
      "vinegar"
    ],
    "url": "https://www.budgetbytes.com/basic-biscuits/"
  },
  {
    "recipe": "Instant Pot Beef Stew",
    "listOfIngredients": [
      "beef stew meat",
      "salt and pepper",
      "flour",
      "butter",
      "beef broth",
      "Worcestershire sauce",
      "soy sauce",
      "brown sugar",
      "garlic",
      "tomato paste",
      "dried rosemary",
      "dried thyme",
      "frozen pearl onions",
      "mushrooms",
      "carrots",
      "potatoes"
    ],
    "url": "https://www.budgetbytes.com/instant-pot-beef-stew/"
  },
  {
    "recipe": "Thick & Rich Homemade Pizza Sauce",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "crushed tomatoes",
      "tomato paste",
      "sugar",
      "salt",
      "dried basil",
      "dried oregano",
      "Freshly cracked black pepper",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/thick-rich-pizza-sauce/"
  },
  {
    "recipe": "Easy Homemade Falafel",
    "listOfIngredients": [
      "chickpeas",
      "red onion",
      "fresh parsley",
      "fresh cilantro",
      "garlic",
      "salt",
      "cayenne pepper",
      "cumin",
      "baking powder",
      "flour",
      "neutral cooking oil for frying"
    ],
    "url": "https://www.budgetbytes.com/falafel/"
  },
  {
    "recipe": "Homemade Pita Bread",
    "listOfIngredients": [
      "water",
      "yeast",
      "sugar",
      "olive oil",
      "wheat flour",
      "all-purpose flour",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/pita-bread/"
  },
  {
    "recipe": "Spinach and Chickpea Rice Pilaf",
    "listOfIngredients": [
      "fresh lemon",
      "frozen chopped spinach",
      "garlic",
      "yellow onion",
      "olive oil",
      "long grain white rice",
      "smoked paprika",
      "dried oregano",
      "cumin",
      "chickpeas",
      "vegetable broth",
      "feta",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/spinach-and-chickpea-rice-pilaf/"
  },
  {
    "recipe": "Pork & Ginger Pot Stickers",
    "listOfIngredients": [
      "pork",
      "head green cabbage",
      "salt",
      "vegetable oil",
      "fresh ginger",
      "garlic",
      "soy sauce",
      "sesame oil",
      "green onion",
      "carrots",
      "wonton wrappers",
      "cubes bouillon"
    ],
    "url": "https://www.budgetbytes.com/pork-ginger-pot-stickers/"
  },
  {
    "recipe": "Coconut Jerk Peas with Pineapple Salsa",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "frozen black eyed peas",
      "water",
      "jerk seasoning",
      "coconut milk",
      "salt",
      "cooked rice",
      "pineapple",
      "red onion",
      "lime",
      "fresh cilantro",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/coconut-jerk-peas-pineapple-salsa/"
  },
  {
    "recipe": "Roasted Potato Wedges with Shawarma Sauce",
    "listOfIngredients": [
      "plain yogurt",
      "garlic",
      "lemon juice",
      "dried oregano",
      "salt",
      "cinnamon",
      "nutmeg",
      "cloves",
      "potatoes",
      "olive oil",
      "garlic powder",
      "Black pepper",
      "parsley",
      "crumbled feta"
    ],
    "url": "https://www.budgetbytes.com/roasted-potato-wedges-shawarma-sauce/"
  },
  {
    "recipe": "Baked Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "butter",
      "salt",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/baked-sweet-potatoes/"
  },
  {
    "recipe": "Green Chile Mac and Cheese",
    "listOfIngredients": [
      "macaroni",
      "butter",
      "all-purpose flour",
      "milk",
      "Monterey Jack cheese",
      "green chiles",
      "cumin",
      "crushed red pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/green-chile-mac-and-cheese/"
  },
  {
    "recipe": "Lemon Blueberry Scones",
    "listOfIngredients": [
      "lemon",
      "all-purpose flour",
      "granulated sugar",
      "baking powder",
      "salt",
      "cold butter",
      "blueberries",
      "milk",
      "eggs",
      "powdered sugar"
    ],
    "url": "https://www.budgetbytes.com/lemon-blueberry-scones/"
  },
  {
    "recipe": "Chicken in Peanut Sauce",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "vegetable oil",
      "boneless",
      "coconut milk",
      "natural peanut butter",
      "soy sauce",
      "brown sugar",
      "sriracha hot sauce",
      "lime",
      "cilantro",
      "cooked jasmine rice"
    ],
    "url": "https://www.budgetbytes.com/chicken-in-peanut-sauce/"
  },
  {
    "recipe": "Bacon and Spinach Pasta with Parmesan",
    "listOfIngredients": [
      "bacon",
      "yellow onion",
      "chicken broth",
      "pasta",
      "fresh spinach",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/bacon-spinach-pasta-parmesan/"
  },
  {
    "recipe": "Creamy Pesto Mac and Cheese with Spinach",
    "listOfIngredients": [
      "uncooked macaroni",
      "butter",
      "all-purpose flour",
      "milk",
      "Parmesan",
      "basil pesto",
      "salt",
      "Black pepper",
      "frozen spinach"
    ],
    "url": "https://www.budgetbytes.com/creamy-pesto-mac-spinach/"
  },
  {
    "recipe": "Mushroom Rice",
    "listOfIngredients": [
      "mushrooms",
      "garlic",
      "butter",
      "dried thyme",
      "black pepper",
      "salt",
      "long-grain white rice",
      "vegetable broth",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/mushroom-rice/"
  },
  {
    "recipe": "Quickie Red Beans and Rice",
    "listOfIngredients": [
      "cooking oil",
      "Andouille sausage",
      "yellow onion",
      "bell pepper",
      "celery",
      "garlic",
      "smoked paprika",
      "dried oregano",
      "dried thyme",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "kidney beans",
      "chicken broth",
      "green onions",
      "long grain white rice"
    ],
    "url": "https://www.budgetbytes.com/quickie-red-beans-and-rice/"
  },
  {
    "recipe": "Broccoli Cheddar Casserole",
    "listOfIngredients": [
      "frozen broccoli florets",
      "cooked rice",
      "shredded cheddar cheese",
      "yellow onion",
      "garlic",
      "butter",
      "all-purpose flour",
      "milk",
      "salt",
      "smoked paprika",
      "cayenne pepper",
      "Freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/broccoli-cheddar-casserole/"
  },
  {
    "recipe": "Sheet Pan Pizza",
    "listOfIngredients": [
      "all-purpose flour",
      "water",
      "salt",
      "instant yeast",
      "cornmeal",
      "olive oil",
      "Freshly cracked black pepper",
      "Italian seasoning",
      "red pepper flakes",
      "pizza sauce",
      "shredded mozzarella",
      "Parmesan cheese",
      "pepperoni",
      "pickled jalapenos",
      "honey"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-pizza/"
  },
  {
    "recipe": "Ranch Broccoli Pasta",
    "listOfIngredients": [
      "pasta",
      "frozen broccoli florets",
      "butter",
      "ranch seasoning",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/ranch-broccoli-pasta/"
  },
  {
    "recipe": "Greek Chicken Pasta Salad",
    "listOfIngredients": [
      "lemon",
      "olive oil",
      "garlic",
      "dried oregano",
      "salt",
      "Black pepper",
      "boneless",
      "pasta",
      "bell pepper",
      "grape tomatoes",
      "cucumber",
      "parsley",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/greek-chicken-pasta-salad/"
  },
  {
    "recipe": "Chicken and Cranberry Salad with Lemon Poppy Seed Dressing",
    "listOfIngredients": [
      "neutral salad oil",
      "fresh lemon juice",
      "honey",
      "sugar",
      "Dijon mustard",
      "poppy seeds",
      "onion powder",
      "salt",
      "shredded cabbage",
      "Salt",
      "cooked chicken",
      "almonds",
      "dried cranberries",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/chicken-cranberry-salad-lemon-poppy-seed-dressing/"
  },
  {
    "recipe": "Eggs Florentine Breakfast Pizza",
    "listOfIngredients": [
      "butter",
      "all-purpose flour",
      "milk",
      "garlic powder",
      "salt",
      "pizza dough",
      "frozen spinach",
      "shredded mozzarella",
      "eggs",
      "Black pepper",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/eggs-florentine-breakfast-pizza/"
  },
  {
    "recipe": "Turmeric Chicken",
    "listOfIngredients": [
      "olive oil",
      "red onion",
      "fresh ginger",
      "garlic",
      "turmeric",
      "cumin",
      "cinnamon",
      "crushed red pepper",
      "bay leaf",
      "chicken",
      "tomatoes",
      "coconut milk",
      "salt and pepper",
      "fresh cilantro",
      "uncooked jasmine rice"
    ],
    "url": "https://www.budgetbytes.com/turmeric-chicken/"
  },
  {
    "recipe": "Sheet Pan Sweet and Sour Chicken",
    "listOfIngredients": [
      "onion",
      "green bell peppers",
      "red bell pepper",
      "pineapple chunks",
      "chicken breast",
      "cooking oil",
      "garlic powder",
      "ginger",
      "salt and pepper",
      "ketchup",
      "brown sugar",
      "rice",
      "soy sauce",
      "cornstarch",
      "green onions",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-sweet-sour-chicken/"
  },
  {
    "recipe": "Teriyaki Pork Sandwiches",
    "listOfIngredients": [
      "pork butt roast",
      "sweet onion",
      "teriyaki sauce",
      "pineapple",
      "fresh ginger",
      "all-purpose flour",
      "hamburger /sandwich buns"
    ],
    "url": "https://www.budgetbytes.com/teriyaki-pork-sandwiches/"
  },
  {
    "recipe": "Vegetable Enchilada Casserole",
    "listOfIngredients": [
      "corn tortillas",
      "shredded \"taco blend\" cheese",
      "zucchini",
      "black beans",
      "frozen corn kernels",
      "green chiles",
      "green onions",
      "fresh cilantro",
      "salt",
      "cooking oil",
      "chili powder",
      "all-purpose flour",
      "water",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper"
    ],
    "url": "https://www.budgetbytes.com/vegetable-enchilada-casserole/"
  },
  {
    "recipe": "Roasted Brussels Sprouts Salad",
    "listOfIngredients": [
      "Brussels sprouts",
      "sweet potatoes",
      "extra virgin olive oil",
      "salt",
      "pepper",
      "Southern Grove Chopped Pecans",
      "goat cheese",
      "maple syrup",
      "apple cider vinegar",
      "Dijon mustard",
      "garlic powder"
    ],
    "url": "https://www.budgetbytes.com/roasted-brussels-sprouts-salad/"
  },
  {
    "recipe": "Homemade Chicken Yakisoba",
    "listOfIngredients": [
      "green cabbage",
      "yellow onion",
      "carrots",
      "broccoli",
      "fresh ginger",
      "chicken breast",
      "vegetable oil",
      "ramen noodles",
      "sesame oil",
      "soy sauce",
      "worcestershire sauce",
      "ketchup",
      "sriracha",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/chicken-yakisoba/"
  },
  {
    "recipe": "Vegan Red Lentil Stew",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "tomato paste",
      "dry red lentils",
      "carrots",
      "potato",
      "vegetable broth",
      "cumin",
      "smoked paprika",
      "salt",
      "cayenne pepper"
    ],
    "url": "https://www.budgetbytes.com/vegan-red-lentil-stew/"
  },
  {
    "recipe": "Soy Dijon Pork Tenderloin",
    "listOfIngredients": [
      "pork tenderloin",
      "dijon mustard",
      "soy sauce",
      "olive oil",
      "brown sugar",
      "garlic",
      "cranks black pepper",
      "butter",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/soy-dijon-pork-tenderloin/"
  },
  {
    "recipe": "Heat and Eat Oatmeal",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "water",
      "salt",
      "brown sugar",
      "cinnamon",
      "dried cranberries",
      "almonds"
    ],
    "url": "https://www.budgetbytes.com/heat-eat-oatmeal/"
  },
  {
    "recipe": "The Quick Fix Salad Bar Pizza",
    "listOfIngredients": [
      "or 8 flour tortillas",
      "shredded mozzarella",
      "mixed vegetables from a salad bar",
      "Italian seasoning"
    ],
    "url": "https://www.budgetbytes.com/quick-fix-salad-bar-pizza/"
  },
  {
    "recipe": "BBQ Bean Sliders",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "black beans",
      "pinto beans",
      "BBQ sauce",
      "smoked paprika",
      "hamburger buns",
      "coleslaw mix",
      "green onions",
      "mayonnaise",
      "honey",
      "Dijon mustard",
      "red wine",
      "salt",
      "Freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/bbq-bean-sliders/"
  },
  {
    "recipe": "Slow Cooker 5 Spice Chicken",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "vegetable oil",
      "toasted sesame oil",
      "soy sauce",
      "brown sugar",
      "spice powder",
      "skin-on chicken pieces",
      "onion",
      "rice wine"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-5-spice-chicken/"
  },
  {
    "recipe": "Roasted Turkey Breast with Stuffing",
    "listOfIngredients": [
      "stuffing mix",
      "water",
      "butter",
      "dried sage",
      "dried rosemary",
      "dried thyme",
      "salt",
      "bone-in",
      "sweet potato",
      "brown sugar",
      "cinnamon",
      "cloves",
      "Brussels sprouts",
      "olive oil",
      "salt and pepper",
      "russet potato",
      "milk",
      "garlic powder",
      "pepper",
      "frozen cut green beans",
      "mushrooms",
      "garlic",
      "all-purpose flour",
      "vegetable broth",
      "Fried Onions",
      "rubbed sage"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-thanksgiving-dinner-for-two/"
  },
  {
    "recipe": "Chicken and Biscuit Casserole",
    "listOfIngredients": [
      "salted butter",
      "chicken",
      "red pepper flakes",
      "rubbed sage",
      "salt",
      "black pepper",
      "yellow onion",
      "garlic",
      "carrots",
      "celery",
      "frozen corn",
      "all-purpose flour",
      "chicken broth",
      "buttermilk",
      "baking powder",
      "granulated sugar",
      "shredded cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/chicken-and-biscuit-casserole/"
  },
  {
    "recipe": "Creamy White Chicken Chili",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "jalapeno",
      "olive oil",
      "boneless",
      "cannellini beans",
      "pinto beans",
      "green chiles",
      "cumin",
      "dried oregano",
      "smoked paprika",
      "cayenne pepper",
      "garlic powder",
      "black pepper",
      "chicken broth",
      "frozen corn",
      "cream cheese",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/creamy-white-chicken-chili/"
  },
  {
    "recipe": "Homemade Mac and Cheese",
    "listOfIngredients": [
      "macaroni",
      "butter",
      "all-purpose flour",
      "onion powder",
      "milk",
      "hot sauce",
      "salt",
      "sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/extra-cheesy-homemade-mac-and-cheese/"
  },
  {
    "recipe": "Chicken Alfredo Bake",
    "listOfIngredients": [
      "boneless",
      "olive oil",
      "Parmesan cheese",
      "Italian seasoning",
      "red pepper flakes",
      "salt",
      "black pepper",
      "water",
      "butter",
      "panko breadcrumbs",
      "garlic powder",
      "garlic",
      "heavy cream",
      "Italian shredded cheese blend",
      "rotini",
      "frozen broccoli florets"
    ],
    "url": "https://www.budgetbytes.com/chicken-alfredo-bake/"
  },
  {
    "recipe": "White Cheddar Mac and Cheese with Chicken and Broccoli",
    "listOfIngredients": [
      "pasta",
      "frozen broccoli florets",
      "boneless",
      "salt and pepper",
      "cooking oil",
      "butter",
      "evaporated milk",
      "garlic powder",
      "smoked paprika",
      "salt",
      "extra sharp white cheddar"
    ],
    "url": "https://www.budgetbytes.com/white-cheddar-mac-and-cheese/"
  },
  {
    "recipe": "Oven Baked Chicken Drumsticks",
    "listOfIngredients": [
      "smoked paprika",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "dried oregano",
      "salt",
      "black pepper",
      "chicken drumsticks",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/baked-chicken-drumsticks/"
  },
  {
    "recipe": "Wilted Spinach Salad",
    "listOfIngredients": [
      "bacon",
      "garlic",
      "cannellini beans",
      "apple cider vinegar",
      "Dijon mustard",
      "sugar",
      "black pepper",
      "salt",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/wilted-spinach-salad/"
  },
  {
    "recipe": "Blackened Salmon with Zucchini",
    "listOfIngredients": [
      "smoked paprika",
      "dried thyme",
      "dried oregano",
      "cumin",
      "cayenne",
      "garlic powder",
      "onion powder",
      "black pepper",
      "salt",
      "salmon",
      "butter",
      "cooking oil",
      "zucchini"
    ],
    "url": "https://www.budgetbytes.com/blackened-salmon-with-zucchini/"
  },
  {
    "recipe": "Muesli",
    "listOfIngredients": [
      "dry old-fashioned oats",
      "walnuts",
      "dried cranberries",
      "sunflower seeds",
      "brown sugar",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/muesli-cold-oats/"
  },
  {
    "recipe": "Sesame Cucumber Salad",
    "listOfIngredients": [
      "rice vinegar",
      "granulated sugar",
      "toasted sesame oil",
      "crushed red pepper",
      "salt",
      "cucumbers",
      "green onions",
      "peanuts"
    ],
    "url": "https://www.budgetbytes.com/thai-cucumber-salad-2/"
  },
  {
    "recipe": "Cheesy Scallion Stuffed Jalapenos",
    "listOfIngredients": [
      "cream cheese",
      "Monterey jack",
      "sour cream",
      "scallions",
      "garlic",
      "cilantro leaves",
      "chili powder",
      "salt",
      "jalapenos",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/cheesy-scallion-stuffed-jalapenos/"
  },
  {
    "recipe": "Creamy Roasted Red Pepper Sauce",
    "listOfIngredients": [
      "roasted red peppers",
      "butter",
      "garlic",
      "dried basil",
      "Freshly cracked black pepper",
      "heavy cream"
    ],
    "url": "https://www.budgetbytes.com/creamy-roasted-red-pepper-sauce/"
  },
  {
    "recipe": "Spicy Pineapple Cucumber Salad",
    "listOfIngredients": [
      "cucumber",
      "frozen pineapple chunks",
      "cilantro",
      "gochujang",
      "rice vinegar",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/spicy-pineapple-cucumber-salad/"
  },
  {
    "recipe": "Chili Lime Shrimp Bowls",
    "listOfIngredients": [
      "shrimp",
      "chili powder",
      "cooking oil",
      "honey",
      "soy sauce",
      "garlic",
      "limes",
      "black beans",
      "cumin",
      "jalapenos",
      "crushed pineapple",
      "red onion",
      "salt",
      "fresh cilantro",
      "long grain white rice"
    ],
    "url": "https://www.budgetbytes.com/chili-lime-shrimp-bowls/"
  },
  {
    "recipe": "Parsley Pesto Pasta",
    "listOfIngredients": [
      "fettuccini",
      "Italian parsley",
      "parmesan",
      "lemon juice",
      "garlic",
      "salt",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/parsley-pesto-pasta/"
  },
  {
    "recipe": "Tuna Patties",
    "listOfIngredients": [
      "green onions",
      "parsley",
      "chunk light tuna water",
      "plain breadcrumbs",
      "eggs",
      "mayonnaise",
      "lemon juice",
      "seasoning salt",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/tuna-patties/"
  },
  {
    "recipe": "Cinnamon Pita Crisps",
    "listOfIngredients": [
      "wheat pita breads",
      "butter",
      "vanilla extract",
      "sugar",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-pita-crisps/"
  },
  {
    "recipe": "Easy White Spinach Pizza",
    "listOfIngredients": [
      "ball prepared pizza dough for 12\" pizza",
      "olive oil",
      "frozen spinach",
      "garlic powder",
      "salt",
      "Black pepper",
      "crushed red pepper",
      "shredded mozzarella",
      "red onion",
      "Chevre"
    ],
    "url": "https://www.budgetbytes.com/easy-white-spinach-pizza/"
  },
  {
    "recipe": "Easy Buffalo Sauce",
    "listOfIngredients": [
      "butter",
      "Frank's Redhot Sauce",
      "Worcestershire sauce",
      "garlic powder"
    ],
    "url": "https://www.budgetbytes.com/easy-buffalo-sauce/"
  },
  {
    "recipe": "Enfrijoladas - Tortillas in Black Bean Sauce",
    "listOfIngredients": [
      "black beans",
      "chipotle peppers adobo sauce",
      "sweet onion",
      "cumin",
      "garlic powder",
      "chicken",
      "corn tortillas",
      "cilantro",
      "cheese"
    ],
    "url": "https://www.budgetbytes.com/enfrijoladas-tortillas-in-black-bean-sauce/"
  },
  {
    "recipe": "Chicken Shawarma",
    "listOfIngredients": [
      "chicken breast",
      "plain yogurt",
      "garlic",
      "lemon juice",
      "cinnamon",
      "dried oregano",
      "salt",
      "nutmeg",
      "cloves",
      "plain greek yogurt",
      "dried dill",
      "homemade naan",
      "romaine lettuce",
      "cucumber",
      "roma tomatoes"
    ],
    "url": "https://www.budgetbytes.com/chicken-shawarma/"
  },
  {
    "recipe": "Classic Meatloaf",
    "listOfIngredients": [
      "eggs",
      "milk",
      "Worcestershire sauce",
      "plain breadcrumbs",
      "Italian seasoning",
      "garlic powder",
      "salt",
      "black pepper",
      "onion",
      "beef",
      "ketchup",
      "brown sugar",
      "yellow mustard"
    ],
    "url": "https://www.budgetbytes.com/classic-homemade-meatloaf/"
  },
  {
    "recipe": "Red Lentil and Pumpkin Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "fresh ginger",
      "olive oil",
      "curry powder",
      "pumpkin puree",
      "dry red lentils",
      "vegetable broth",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/curried-red-lentil-and-pumpkin-soup/"
  },
  {
    "recipe": "Slow Cooker Buffalo Chicken",
    "listOfIngredients": [
      "buttermilk powder",
      "dried parsley",
      "dried dill",
      "onion powder",
      "garlic powder",
      "lemon pepper",
      "sugar",
      "salt",
      "black pepper",
      "hot sauce",
      "boneless",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-buffalo-chicken/"
  },
  {
    "recipe": "Vegetarian French Dip Sandwiches",
    "listOfIngredients": [
      "yellow onion",
      "portobello mushroom caps",
      "butter",
      "salt",
      "black pepper",
      "dried thyme",
      "dried oregano",
      "vegetable broth",
      "soy sauce",
      "brown sugar",
      "garlic powder",
      "French",
      "provolone"
    ],
    "url": "https://www.budgetbytes.com/vegetarian-french-dip-sandwiches/"
  },
  {
    "recipe": "Homemade Ranch Seasoning Mix",
    "listOfIngredients": [
      "buttermilk powder",
      "dried parsley",
      "dried dill",
      "onion powder",
      "garlic powder",
      "lemon pepper",
      "sugar",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/homemade-ranch-seasoning-mix/"
  },
  {
    "recipe": "Spinach Chickpea and Quinoa Salad",
    "listOfIngredients": [
      "cooked quinoa",
      "olive oil",
      "red wine vinegar",
      "lemon juice",
      "dried oregano",
      "garlic powder",
      "salt",
      "Freshly cracked black pepper",
      "fresh spinach",
      "grape tomatoes",
      "chickpeas",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/spinach-chickpea-and-quinoa-salad/"
  },
  {
    "recipe": "Vinaigrette Slaw with Feta",
    "listOfIngredients": [
      "green cabbage",
      "purple cabbage",
      "feta cheese",
      "Caesar dressing"
    ],
    "url": "https://www.budgetbytes.com/vinaigrette-slaw-with-feta/"
  },
  {
    "recipe": "Spaghetti Carbonara",
    "listOfIngredients": [
      "bacon",
      "garlic",
      "spaghetti",
      "eggs",
      "Parmesan",
      "Black pepper",
      "Salt",
      "Handful fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/spaghetti-carbonara/"
  },
  {
    "recipe": "Easy BBQ Chicken Sandwiches",
    "listOfIngredients": [
      "smoked paprika",
      "garlic powder",
      "salt",
      "pepper",
      "boneless",
      "cooking oil",
      "BBQ sauce",
      "coleslaw mix",
      "green onions",
      "ranch dressing",
      "buns"
    ],
    "url": "https://www.budgetbytes.com/easy-bbq-chicken-sandwiches/"
  },
  {
    "recipe": "Banana Bread Baked Oatmeal",
    "listOfIngredients": [
      "mashed banana",
      "brown sugar",
      "eggs",
      "salt",
      "vanilla extract",
      "baking powder",
      "cinnamon",
      "nutmeg",
      "milk",
      "old-fashioned rolled oats",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/banana-bread-oatmeal/"
  },
  {
    "recipe": "The Pizza Roll Up Lunch Box",
    "listOfIngredients": [
      "tortillas",
      "basil pesto",
      "provolone cheese",
      "pepperoni",
      "fresh spinach",
      "pizza sauce",
      "green bell peppers"
    ],
    "url": "https://www.budgetbytes.com/the-pizza-roll-up-lunch-box/"
  },
  {
    "recipe": "Stuffed Poblano Peppers",
    "listOfIngredients": [
      "uncooked long grain rice",
      "cubes bullion",
      "chili powder",
      "fresh cilantro",
      "poblano peppers",
      "cheese",
      "divided salsa",
      "black beans",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/stuffed-poblano-peppers/"
  },
  {
    "recipe": "Apple Cabbage Slaw",
    "listOfIngredients": [
      "mayonnaise",
      "Greek style plain yogurt",
      "apple cider vinegar",
      "honey",
      "salt",
      "purple cabbage",
      "carrots",
      "Granny Smith apple",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/apple-cabbage-slaw/"
  },
  {
    "recipe": "Plum Salad with Lemon Ginger Dressing",
    "listOfIngredients": [
      "fresh grated ginger",
      "fresh lemon juice",
      "canola",
      "honey",
      "salt",
      "Black pepper",
      "plums",
      "fresh parsley",
      "almonds",
      "cooked bulgur"
    ],
    "url": "https://www.budgetbytes.com/plum-salad-with-lemon-ginger-dressing/"
  },
  {
    "recipe": "No-Knead Focaccia Rolls",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "instant yeast",
      "water",
      "olive oil",
      "Italian seasoning"
    ],
    "url": "https://www.budgetbytes.com/focaccia-rolls/"
  },
  {
    "recipe": "Simple Sesame Rice",
    "listOfIngredients": [
      "garlic",
      "butter",
      "long grain jasmine rice",
      "water",
      "soy sauce",
      "toasted sesame oil",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/simple-sesame-rice/"
  },
  {
    "recipe": "Spinach Alfredo Pasta",
    "listOfIngredients": [
      "penne pasta",
      "butter",
      "garlic",
      "milk",
      "cream cheese",
      "Parmesan",
      "salt",
      "Freshly cracked black pepper",
      "baby spinach"
    ],
    "url": "https://www.budgetbytes.com/lighter-spinach-alfredo-pasta/"
  },
  {
    "recipe": "Coconut Rice",
    "listOfIngredients": [
      "long-grain jasmine rice",
      "garlic",
      "salt",
      "coconut milk",
      "water"
    ],
    "url": "https://www.budgetbytes.com/coconut-rice-take-2/"
  },
  {
    "recipe": "Curried Ground Beef with Peas and Potatoes",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "cooking oil",
      "curry powder",
      "turmeric",
      "crushed red pepper",
      "beef",
      "russet potato",
      "beef broth",
      "frozen peas",
      "salt",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/curry-beef-with-peas/"
  },
  {
    "recipe": "Sesame Noodles with Wilted Greens",
    "listOfIngredients": [
      "garlic",
      "soy sauce",
      "toasted sesame oil",
      "rice vinegar",
      "brown sugar",
      "sesame seeds",
      "red pepper flakes",
      "wheat spaghetti",
      "olive oil",
      "fresh spinach",
      "salt and pepper",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/sesame-noodles-wilted-greens/"
  },
  {
    "recipe": "Lemon Garlic Roasted Asparagus",
    "listOfIngredients": [
      "asparagus",
      "garlic",
      "olive oil",
      "salt",
      "black pepper",
      "fresh lemon"
    ],
    "url": "https://www.budgetbytes.com/lemon-garlic-roasted-asparagus/"
  },
  {
    "recipe": "Easy Homemade Teriyaki Sauce",
    "listOfIngredients": [
      "soy sauce",
      "brown sugar",
      "garlic",
      "fresh grated ginger",
      "water",
      "cornstarch"
    ],
    "url": "https://www.budgetbytes.com/easy-homemade-teriyaki-sauce-or-marinade/"
  },
  {
    "recipe": "Raspberry Oatmeal Bars",
    "listOfIngredients": [
      "Butter",
      "all-purpose flour",
      "rolled oats",
      "brown sugar",
      "baking soda",
      "salt",
      "raspberry jam"
    ],
    "url": "https://www.budgetbytes.com/raspberry-oat-bars/"
  },
  {
    "recipe": "Hearty Black Bean Quesadillas",
    "listOfIngredients": [
      "black beans",
      "frozen corn",
      "red onion",
      "garlic",
      "fresh cilantro",
      "shredded cheddar cheese",
      "taco seasoning",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/hearty-black-bean-quesadillas/"
  },
  {
    "recipe": "Slow Cooker Italian Chicken and Peppers",
    "listOfIngredients": [
      "bell peppers",
      "yellow onion",
      "chicken breast",
      "dried basil",
      "dried oregano",
      "salt and pepper",
      "marinara sauce"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-italian-chicken-and-peppers/"
  },
  {
    "recipe": "Grilled Vegetable Pasta Salad",
    "listOfIngredients": [
      "zucchini",
      "yellow squash",
      "red bell pepper",
      "red onion",
      "grape tomatoes",
      "olive oil",
      "salt and pepper",
      "balsamic vinegar",
      "mayonnaise",
      "Dijon mustard",
      "garlic",
      "dried basil",
      "salt",
      "Black pepper",
      "penne pasta",
      "Italian parsley"
    ],
    "url": "https://www.budgetbytes.com/grilled-vegetable-pasta-salad-2/"
  },
  {
    "recipe": "Cinnamon Raisin Bagels",
    "listOfIngredients": [
      "flour",
      "salt",
      "honey",
      "yeast",
      "cinnamon",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-raisin-bagels/"
  },
  {
    "recipe": "Sweet and Spicy Glazed Pork Chops",
    "listOfIngredients": [
      "brown sugar",
      "cayenne powder",
      "garlic powder",
      "paprika",
      "salt",
      "black pepper",
      "olive oil",
      "thick cut boneless pork chops"
    ],
    "url": "https://www.budgetbytes.com/glazed-pork-chops/"
  },
  {
    "recipe": "(Not) Butter Chicken",
    "listOfIngredients": [
      "chicken breast",
      "butter",
      "garlic",
      "onion",
      "fresh ginger",
      "garam masala",
      "cayenne pepper",
      "tomato sauce",
      "tomatoes",
      "plain yogurt",
      "jasmine",
      "water"
    ],
    "url": "https://www.budgetbytes.com/not-butter-chicken/"
  },
  {
    "recipe": "Lemon Coconut Bars",
    "listOfIngredients": [
      "all-purpose flour",
      "powdered sugar",
      "butter",
      "eggs",
      "granulated sugar",
      "lemon juice",
      "baking powder",
      "shredded coconut"
    ],
    "url": "https://www.budgetbytes.com/lemon-coconut-bars/"
  },
  {
    "recipe": "Easy Zucchini Sausage Ravioli",
    "listOfIngredients": [
      "frozen cheese ravioli",
      "olive oil",
      "Italian Sausage",
      "zucchini",
      "pasta sauce"
    ],
    "url": "https://www.budgetbytes.com/zucchini-sausage-ravioli/"
  },
  {
    "recipe": "SNAP Challenge: Vegetable Stir Fry with Noodles",
    "listOfIngredients": [
      "vegetable oil",
      "purple cabbage",
      "green bell peppers",
      "carrots",
      "yellow onion",
      "ramen noodles",
      "soy sauce",
      "brown sugar",
      "Sriracha",
      "cornstarch",
      "green onions",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-vegetable-stir-fry-noodles/"
  },
  {
    "recipe": "Yellow Rice Chicken Skillet",
    "listOfIngredients": [
      "cooking oil",
      "bone-in",
      "salt and pepper",
      "garlic",
      "turmeric",
      "cumin",
      "cinnamon",
      "long grain jasmine rice",
      "frozen peas",
      "chicken broth",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/yellow-rice-chicken-skillet/"
  },
  {
    "recipe": "No-Churn Strawberry Ice Cream",
    "listOfIngredients": [
      "fresh strawberries",
      "sugar",
      "vanilla extract",
      "salt",
      "sweetened condensed milk",
      "heavy whipping cream"
    ],
    "url": "https://www.budgetbytes.com/no-churn-strawberry-ice-cream/"
  },
  {
    "recipe": "Sauteed Beef, Cabbage, and Rice",
    "listOfIngredients": [
      "yellow onion",
      "green cabbage",
      "cooking oil",
      "beef",
      "steak seasoning",
      "water",
      "cooked rice",
      "butter",
      "soy sauce"
    ],
    "url": "https://www.budgetbytes.com/sauteed-beef-cabbage-and-rice/"
  },
  {
    "recipe": "Strawberry Syrup",
    "listOfIngredients": [
      "fresh strawberries",
      "sugar",
      "vanilla extract",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/strawberry-syrup/"
  },
  {
    "recipe": "Macaroni Salad",
    "listOfIngredients": [
      "hard-boiled eggs",
      "red bell pepper",
      "red onion",
      "celery",
      "macaroni",
      "mayonnaise",
      "Dijon mustard",
      "sweet pickle relish",
      "red wine vinegar",
      "sugar",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/macaroni-salad/"
  },
  {
    "recipe": "Cinnamon Pecan Sandies",
    "listOfIngredients": [
      "butter",
      "powdered sugar",
      "vanilla extract",
      "water",
      "salt",
      "flour",
      "pecans",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-pecan-sandies/"
  },
  {
    "recipe": "Lemon Ricotta Pasta",
    "listOfIngredients": [
      "lemon",
      "pasta",
      "frozen peas",
      "garlic",
      "butter",
      "milk ricotta",
      "Parmesan",
      "salt",
      "black pepper",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/lemon-ricotta-pasta/"
  },
  {
    "recipe": "Baked Garlic Butter Chicken Thigh Recipe",
    "listOfIngredients": [
      "butter",
      "garlic",
      "paprika",
      "salt",
      "black pepper",
      "fresh lemon",
      "fresh parsley",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/garlic-butter-baked-chicken-thighs/"
  },
  {
    "recipe": "Olive Oil Mashed Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "salt",
      "garlic",
      "extra virgin olive oil",
      "dried rosemary",
      "vegetable broth",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/olive-oil-mashed-potatoes/"
  },
  {
    "recipe": "Roasted Broccoli Pasta with Lemon and Feta",
    "listOfIngredients": [
      "broccoli",
      "olive oil",
      "steak seasoning",
      "fresh lemon",
      "wheat penne pasta",
      "butter",
      "crumbled feta"
    ],
    "url": "https://www.budgetbytes.com/roasted-broccoli-pasta-with-lemon-and-feta/"
  },
  {
    "recipe": "Hoisin Tofu Lettuce Cups",
    "listOfIngredients": [
      "extra firm tofu",
      "salt",
      "cornstarch",
      "cooking oil",
      "hoisin sauce",
      "green onions",
      "carrots",
      "peanuts",
      "cooked rice",
      "lettuce"
    ],
    "url": "https://www.budgetbytes.com/hoisin-tofu-lettuce-cups/"
  },
  {
    "recipe": "Chili Roasted Potatoes",
    "listOfIngredients": [
      "potatoes",
      "olive oil",
      "chili powder",
      "cumin",
      "cayenne pepper",
      "garlic powder",
      "onion powder",
      "salt",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/chili-roasted-potatoes/"
  },
  {
    "recipe": "Falafel Salad",
    "listOfIngredients": [
      "tahini sesame seed paste",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne pepper",
      "salt",
      "flat leaf parsley",
      "cilantro",
      "chickpeas",
      "uncooked bulgur",
      "tomatoes"
    ],
    "url": "https://www.budgetbytes.com/falafel-salad/"
  },
  {
    "recipe": "Easy Beef Stir Fry Noodles",
    "listOfIngredients": [
      "soy sauce",
      "water",
      "brown sugar",
      "chili garlic sauce",
      "toasted sesame oil",
      "rice noodles",
      "garlic",
      "ginger",
      "vegetable oil",
      "lean ground beef",
      "carrots",
      "green onions",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/stir-fry-beef-noodles/"
  },
  {
    "recipe": "Chorizo Sweet Potato Chili",
    "listOfIngredients": [
      "Mexican chorizo",
      "yellow onion",
      "garlic",
      "sweet potato",
      "tomatoes",
      "kidney beans",
      "black beans",
      "tomato paste",
      "chili powder",
      "cumin",
      "dried oregano",
      "water",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/chorizo-sweet-potato-chili/"
  },
  {
    "recipe": "Roasted Corn & Zucchini Tacos",
    "listOfIngredients": [
      "zucchini",
      "frozen corn",
      "taco seasoning",
      "garlic powder",
      "olive oil",
      "black beans",
      "salt",
      "corn tortillas",
      "avocado",
      "shredded monterrey jack cheese",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/roasted-corn-zucchini-tacos/"
  },
  {
    "recipe": "Oven Roasted Greek Stuffed Pitas",
    "listOfIngredients": [
      "red onion",
      "eggplant",
      "Roma tomatoes",
      "green bell peppers",
      "boneless",
      "garlic",
      "olive oil",
      "lemon juice",
      "dried oregano",
      "salt",
      "Black pepper",
      "feta cheese",
      "fresh parsley",
      "pita breads"
    ],
    "url": "https://www.budgetbytes.com/greek-stuffed-pitas/"
  },
  {
    "recipe": "Cilantro Lime Chicken Drumsticks",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "cumin",
      "salt",
      "Black pepper",
      "limes",
      "cilantro",
      "chicken drumsticks"
    ],
    "url": "https://www.budgetbytes.com/cilantro-lime-chicken-drumsticks/"
  },
  {
    "recipe": "Smoky Roasted Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "olive oil",
      "brown sugar",
      "smoked paprika",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/smoky-roasted-sweet-potatoes/"
  },
  {
    "recipe": "Pasta with Creamy Pumpkin Sauce",
    "listOfIngredients": [
      "garlic",
      "butter",
      "pumpkin puree",
      "chicken broth",
      "nutmeg",
      "chili powder",
      "cayenne pepper",
      "Freshly cracked black pepper",
      "half & half",
      "pasta"
    ],
    "url": "https://www.budgetbytes.com/pasta-creamy-pumpkin-sauce/"
  },
  {
    "recipe": "Taco Chicken Bowls",
    "listOfIngredients": [
      "chicken breast",
      "salsa",
      "garlic",
      "black beans",
      "frozen corn",
      "chili powder",
      "cumin",
      "dried oregano",
      "cayenne pepper",
      "Freshly cracked black pepper",
      "cooked rice",
      "shredded cheddar",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/taco-chicken-bowls/"
  },
  {
    "recipe": "Honey Sriracha Tofu",
    "listOfIngredients": [
      "extra firm tofu",
      "sriracha",
      "honey",
      "soy sauce",
      "crushed red pepper",
      "cooking oil",
      "cornstarch",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/honey-sriracha-tofu/"
  },
  {
    "recipe": "Perfect Oven Roasted Broccoli",
    "listOfIngredients": [
      "broccoli",
      "olive oil",
      "salt",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/perfect-oven-roasted-broccoli/"
  },
  {
    "recipe": "Apple Cinnamon Bread Pudding",
    "listOfIngredients": [
      "bread",
      "milk",
      "eggs",
      "applesauce",
      "vanilla extract",
      "sugar",
      "cinnamon",
      "butter",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/apple-cinnamon-bread-pudding/"
  },
  {
    "recipe": "Sloppy Joes Plus",
    "listOfIngredients": [
      "dry brown lentils",
      "olive oil",
      "garlic",
      "Vidalia onion",
      "green bell pepper",
      "lean ground beef",
      "tomato sauce",
      "tomato paste",
      "apple cider vinegar",
      "brown sugar",
      "Dijon mustard",
      "salt",
      "chili powder",
      "hamburger buns"
    ],
    "url": "https://www.budgetbytes.com/sloppy-joes-plus/"
  },
  {
    "recipe": "Chicken and Broccoli Pasta with Lemon Cream Sauce",
    "listOfIngredients": [
      "frozen broccoli florets",
      "rotini pasta",
      "boneless",
      "salt and pepper",
      "olive oil",
      "garlic",
      "fresh lemon",
      "chicken broth",
      "heavy cream"
    ],
    "url": "https://www.budgetbytes.com/chicken-broccoli-pasta-lemon-cream-sauce/"
  },
  {
    "recipe": "Slow Cooker Carnitas",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "cinnamon sticks",
      "oregano",
      "cumin",
      "salt",
      "Black pepper",
      "chipotle pepper powder",
      "pork butt roast",
      "or one large orange"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-carnitas/"
  },
  {
    "recipe": "Homemade Cheesy Garlic Bread",
    "listOfIngredients": [
      "water",
      "sugar",
      "Active Dry",
      "olive oil",
      "all-purpose flour",
      "salt",
      "cornmeal",
      "butter",
      "garlic",
      "Parmesan",
      "shredded cheese"
    ],
    "url": "https://www.budgetbytes.com/homemade-cheesy-garlic-bread/"
  },
  {
    "recipe": "Homemade Garlic Bread",
    "listOfIngredients": [
      "Italian",
      "butter",
      "olive oil",
      "garlic",
      "fresh parsley",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/garlic-bread/"
  },
  {
    "recipe": "Herb Roasted Chicken Breast",
    "listOfIngredients": [
      "butter",
      "garlic",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "salt",
      "Freshly cracked black pepper",
      "chicken breast"
    ],
    "url": "https://www.budgetbytes.com/herb-roasted-chicken-breasts/"
  },
  {
    "recipe": "Southwest Cauliflower Rice",
    "listOfIngredients": [
      "garlic",
      "olive oil",
      "cauliflower rice",
      "tomatoes with green chiles",
      "chili powder",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "salt",
      "black pepper",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/southwest-cauliflower-rice/"
  },
  {
    "recipe": "Chunky Split Pea Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "celery",
      "carrots",
      "smoked ham hock",
      "split peas",
      "chicken broth",
      "bay leaf",
      "potato",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/chunky-split-pea-soup/"
  },
  {
    "recipe": "Pesto Chickpea Salad",
    "listOfIngredients": [
      "mayonnaise",
      "basil pesto",
      "lemon juice",
      "black pepper",
      "chickpeas",
      "red onion",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/pesto-chickpea-salad/"
  },
  {
    "recipe": "Sweet Potato Casserole",
    "listOfIngredients": [
      "sweet potatoes",
      "brown sugar",
      "salted butter",
      "heavy cream",
      "salt",
      "vanilla extract",
      "nutmeg",
      "cinnamon",
      "mini marshmallows"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-casserole/"
  },
  {
    "recipe": "Eggplant Mozzarella Sandwiches",
    "listOfIngredients": [
      "eggplant",
      "olive oil",
      "garlic",
      "Italian seasoning",
      "marinara sauce",
      "salt",
      "rolls",
      "butter",
      "garlic powder",
      "mozzarella"
    ],
    "url": "https://www.budgetbytes.com/eggplant-mozzarella-sandwiches/"
  },
  {
    "recipe": "Chili Lime Cantaloupe",
    "listOfIngredients": [
      "cantaloupe",
      "fresh lime juice",
      "honey",
      "salt",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/chili-lime-cantaloupe/"
  },
  {
    "recipe": "Easy Garlic Parmesan Broccoli",
    "listOfIngredients": [
      "broccoli",
      "lemon",
      "olive oil",
      "garlic",
      "Parmesan",
      "Salt and freshly ground pepper"
    ],
    "url": "https://www.budgetbytes.com/quick-garlic-parmesan-broccoli/"
  },
  {
    "recipe": "Matzo Ball Soup",
    "listOfIngredients": [
      "vegetable",
      "garlic",
      "yellow onion",
      "carrots",
      "stalks celery",
      "chicken breast",
      "chicken broth",
      "water",
      "Black pepper",
      "Few fresh dill",
      "eggs",
      "matzo meal",
      "salt",
      "baking powder"
    ],
    "url": "https://www.budgetbytes.com/matzo-ball-soup/"
  },
  {
    "recipe": "Hawaiian Ham Quesadillas",
    "listOfIngredients": [
      "cream cheese",
      "shredded mozzarella",
      "green onions",
      "red pepper flakes",
      "pineapple chunks juice",
      "smoked ham",
      "four tortillas"
    ],
    "url": "https://www.budgetbytes.com/hawaiian-ham-quesadillas/"
  },
  {
    "recipe": "Curried Cabbage",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "yellow onion",
      "carrots",
      "cabbage",
      "olive oil",
      "curry powder",
      "frozen peas",
      "butter",
      "salt and pepper",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/curried-cabbage/"
  },
  {
    "recipe": "Roasted Apple Cranberry Cornbread Stuffing",
    "listOfIngredients": [
      "fresh cranberries",
      "apples",
      "Baker's Corner Brown Sugar",
      "salt",
      "Countryside Creamery Salted Butter",
      "yellow onion",
      "celery",
      "water",
      "Chef's Cupboard Cornbread Stuffing Mix",
      "Southern Grove Pecan Halves"
    ],
    "url": "https://www.budgetbytes.com/roasted-apple-cranberry-cornbread-stuffing/"
  },
  {
    "recipe": "Country Breakfast Bowls",
    "listOfIngredients": [
      "russet potatoes",
      "olive oil",
      "smoked paprika",
      "garlic powder",
      "salt",
      "Freshly cracked black pepper",
      "eggs",
      "butter",
      "salsa",
      "shredded cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/country-breakfast-bowls-freezable/"
  },
  {
    "recipe": "Spinach and Feta Turkey Meatballs",
    "listOfIngredients": [
      "fresh spinach",
      "olive oil",
      "lean ground turkey",
      "breadcrumbs",
      "garlic powder",
      "Black pepper",
      "salt",
      "eggs",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/spinach-and-feta-turkey-meatballs/"
  },
  {
    "recipe": "20 Minute Honey Mustard Chicken",
    "listOfIngredients": [
      "boneless",
      "smoked paprika",
      "garlic powder",
      "salt",
      "cooking oil",
      "chicken broth",
      "stone ground",
      "honey",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/20-minute-honey-mustard-chicken/"
  },
  {
    "recipe": "Roasted Carrot and Feta Salad",
    "listOfIngredients": [
      "carrots",
      "olive oil",
      "salt and pepper",
      "fresh parsley",
      "crumbled feta cheese"
    ],
    "url": "https://www.budgetbytes.com/carrot-feta-salad/"
  },
  {
    "recipe": "White Beans with Mushrooms and Marinara",
    "listOfIngredients": [
      "mushrooms",
      "olive oil",
      "salt and pepper",
      "garlic",
      "marinara",
      "butter beans",
      "dried basil",
      "crushed red pepper",
      "mozzarella"
    ],
    "url": "https://www.budgetbytes.com/white-beans-with-mushrooms-and-marinara/"
  },
  {
    "recipe": "Green Chile Turkey Burgers",
    "listOfIngredients": [
      "turkey",
      "green chiles",
      "cumin",
      "garlic powder",
      "salt",
      "green onions",
      "pepper jack cheese",
      "hamburger buns",
      "tomato",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/green-chile-turkey-burgers/"
  },
  {
    "recipe": "Baked Eggs with Spinach and Tomatoes",
    "listOfIngredients": [
      "frozen spinach",
      "garlic powder",
      "red pepper flakes",
      "salt and pepper",
      "Roma tomatoes",
      "eggs",
      "cream",
      "shredded cheese"
    ],
    "url": "https://www.budgetbytes.com/baked-eggs-spinach-tomatoes/"
  },
  {
    "recipe": "Pork Gyoza",
    "listOfIngredients": [
      "finely shredded",
      "canola",
      "green onions",
      "garlic",
      "ginger",
      "soy sauce",
      "sesame oil",
      "pork",
      "gyoza"
    ],
    "url": "https://www.budgetbytes.com/pork-gyoza/"
  },
  {
    "recipe": "Cheddar Scallion Scones",
    "listOfIngredients": [
      "all purpose flour",
      "sugar",
      "salt",
      "baking powder",
      "garlic powder",
      "black pepper",
      "cold butter",
      "shredded sharp cheddar",
      "green onions",
      "milk",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/cheddar-scallion-scones/"
  },
  {
    "recipe": "Green Chile Breakfast Quesadillas",
    "listOfIngredients": [
      "Monterrey Jack",
      "mild green chiles",
      "fresh cilantro",
      "eggs",
      "fajita size 8\" diameter tortillas"
    ],
    "url": "https://www.budgetbytes.com/green-chile-breakfast-quesadillas/"
  },
  {
    "recipe": "Brown Sugar Roasted Pork Loin",
    "listOfIngredients": [
      "pork loin",
      "brown sugar",
      "cayenne pepper",
      "garlic powder",
      "paprika",
      "salt",
      "black pepper",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/brown-sugar-roasted-pork-loin/"
  },
  {
    "recipe": "Pesto Chicken and Broccoli Salad",
    "listOfIngredients": [
      "cooked chicken",
      "fresh broccoli",
      "red onion",
      "basil pesto",
      "mayonnaise",
      "lemon juice",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/pesto-chicken-and-broccoli-salad/"
  },
  {
    "recipe": "Lemony White Bean Salad",
    "listOfIngredients": [
      "olive oil",
      "lemon juice",
      "red wine vinegar",
      "Dijon mustard",
      "garlic",
      "salt",
      "black pepper",
      "Cannellini beans",
      "red onion",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/lemony-white-bean-salad/"
  },
  {
    "recipe": "Chicken and Dumplings with Vegetables",
    "listOfIngredients": [
      "yellow onion",
      "carrots",
      "ribs celery",
      "olive oil",
      "chicken breast",
      "chicken broth",
      "salt and pepper",
      "milk",
      "all-purpose flour",
      "frozen peas",
      "fresh parsley",
      "baking powder",
      "salt",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/chicken-dumplings-vegetables/"
  },
  {
    "recipe": "Mango Coconut Tofu Bowls",
    "listOfIngredients": [
      "uncooked jasmine",
      "garlic",
      "salt",
      "coconut milk",
      "water",
      "lime",
      "honey",
      "soy sauce",
      "corn starch",
      "firm",
      "neutral oil for frying",
      "mango",
      "avocado",
      "green onions",
      "crushed red pepper",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/mango-coconut-tofu-bowls/"
  },
  {
    "recipe": "Italian Sausage Stuffed Zucchini",
    "listOfIngredients": [
      "zucchini",
      "olive oil",
      "Italian sausage",
      "garlic",
      "plain breadcrumbs",
      "shredded Italian cheese blend",
      "pasta sauce",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/italian-sausage-stuffed-zucchini/"
  },
  {
    "recipe": "Puerto Rican Style Red Beans and Rice",
    "listOfIngredients": [
      "cooking oil",
      "sazon",
      "salt pork",
      "onion",
      "garlic",
      "tomato sauce",
      "sofrito",
      "Better Than Bouillon",
      "distilled white vinegar",
      "sweet potato",
      "green bell pepper",
      "oz.kidney beans",
      "white grain rice",
      "water",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/puerto-rican-rice-and-beans/"
  },
  {
    "recipe": "Easy Pineapple Salsa",
    "listOfIngredients": [
      "pineapple",
      "red onion",
      "jalapeno",
      "lime",
      "cilantro",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/easy-pineapple-salsa/"
  },
  {
    "recipe": "Butternut Squash Curry",
    "listOfIngredients": [
      "butternut squash",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "olive oil",
      "curry powder",
      "cumin",
      "fire roasted diced tomatoes",
      "water",
      "full-fat coconut milk",
      "fresh spinach",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/butternut-squash-curry/"
  },
  {
    "recipe": "One Pot Cheeseburger Pasta",
    "listOfIngredients": [
      "yellow onion",
      "olive oil",
      "beef",
      "all-purpose flour",
      "tomato sauce",
      "beef broth",
      "pasta shells",
      "cheddar cheese",
      "hot dog relish",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/skillet-cheeseburger-pasta/"
  },
  {
    "recipe": "Monkey Bread",
    "listOfIngredients": [
      "salted butter",
      "brown sugar",
      "heavy whipping cream",
      "cinnamon",
      "vanilla",
      "biscuit dough"
    ],
    "url": "https://www.budgetbytes.com/monkey-bread/"
  },
  {
    "recipe": "Summer Vegetable Pasta Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "Dijon mustard",
      "dried oregano",
      "garlic",
      "salt",
      "black pepper",
      "bowtie pasta",
      "Roma tomatoes",
      "yellow squash",
      "zucchini",
      "broccoli",
      "red onion",
      "roasted red peppers",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/summer-vegetable-pasta-salad/"
  },
  {
    "recipe": "\"All-Edge\" Warm and Spicy Brownies",
    "listOfIngredients": [
      "flour",
      "unsweetened cocoa powder",
      "granulated sugar",
      "salt",
      "cayenne pepper",
      "baking powder",
      "cinnamon",
      "eggs",
      "vanilla",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/all-edge-spiced-brownies/"
  },
  {
    "recipe": "Three Pepper Pasta with Crispy Pepperoni",
    "listOfIngredients": [
      "olive oil",
      "pepperoni",
      "garlic",
      "green bell pepper",
      "red bell pepper",
      "mild banana pepper rings",
      "pasta sauce",
      "dried basil",
      "dried oregano",
      "crushed red pepper",
      "thin spaghetti"
    ],
    "url": "https://www.budgetbytes.com/three-pepper-pasta-with-crispy-pepperoni/"
  },
  {
    "recipe": "Cheesy Gnocchi Skillet",
    "listOfIngredients": [
      "gnocchi",
      "olive oil",
      "garlic",
      "frozen chopped greens",
      "pasta sauce",
      "Parmesan",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/cheesy-gnocchi-skillet/"
  },
  {
    "recipe": "funky monkey baked oatmeal",
    "listOfIngredients": [
      "bananas",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "baking powder",
      "natural peanut butter",
      "milk",
      "salt",
      "old fashioned rolled oats",
      "semi-sweet chocolate chips",
      "shredded coconut"
    ],
    "url": "https://www.budgetbytes.com/funky-monkey-baked-oatmeal/"
  },
  {
    "recipe": "Chipotle Sweet Potato Burgers",
    "listOfIngredients": [
      "sweet potato",
      "frozen corn kernels",
      "black beans",
      "chipotle pepper adobo sauce",
      "cornmeal",
      "garlic powder",
      "cumin",
      "salt",
      "fresh cilantro",
      "cooking oil",
      "wheat rolls",
      "avocado",
      "mayonnaise"
    ],
    "url": "https://www.budgetbytes.com/chipotle-sweet-potato-burgers/"
  },
  {
    "recipe": "Gochujang Mushroom Bowls",
    "listOfIngredients": [
      "rice vinegar",
      "sugar",
      "salt",
      "cucumber",
      "gochujang",
      "soy sauce",
      "water",
      "brown sugar",
      "portobello mushrooms",
      "yellow onion",
      "cooking oil",
      "cooked jasmine rice",
      "carrots",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/gochujang-mushroom-bowls/"
  },
  {
    "recipe": "Pesto Mozzarella Roll Ups",
    "listOfIngredients": [
      "flour tortillas",
      "basil pesto",
      "mozzarella string cheese",
      "cooking oil",
      "mayonnaise",
      "tomato paste",
      "garlic"
    ],
    "url": "https://www.budgetbytes.com/pesto-mozzarella-roll-ups/"
  },
  {
    "recipe": "Rice Cooker Teriyaki Shrimp and Rice Recipe",
    "listOfIngredients": [
      "raw shrimp",
      "onion",
      "frozen peas",
      "uncooked jasmine rice",
      "garlic",
      "fresh ginger",
      "water",
      "soy sauce",
      "brown sugar"
    ],
    "url": "https://www.budgetbytes.com/rice-cooker-teriyaki-shrimp-and-rice/"
  },
  {
    "recipe": "No Bake Strawberry Cheesecake for Two",
    "listOfIngredients": [
      "fresh strawberries",
      "granulated sugar",
      "cream cheese",
      "lemon juice",
      "heavy whipping cream",
      "powdered sugar",
      "vanilla extract",
      "graham crackers",
      "butter",
      "brown sugar"
    ],
    "url": "https://www.budgetbytes.com/no-bake-strawberry-cheesecake-for-two/"
  },
  {
    "recipe": "Lemon Garlic Asparagus Pasta",
    "listOfIngredients": [
      "pasta",
      "asparagus",
      "butter",
      "garlic",
      "lemon",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/lemon-garlic-asparagus-pasta/"
  },
  {
    "recipe": "Skillet Pineapple BBQ Chicken",
    "listOfIngredients": [
      "cooking oil",
      "boneless skinless chicken thighs",
      "salt and pepper",
      "Pineapple in juice",
      "BBQ sauce",
      "jalapeno",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/skillet-pineapple-bbq-chicken/"
  },
  {
    "recipe": "Chicken Arrabbiata",
    "listOfIngredients": [
      "olive oil",
      "chicken thighs",
      "salt and pepper",
      "all-purpose flour",
      "garlic",
      "tomatoes",
      "crushed tomatoes",
      "dried basil",
      "crushed red pepper",
      "chicken broth",
      "fresh parsley",
      "pasta for serving"
    ],
    "url": "https://www.budgetbytes.com/chicken-arrabbiata/"
  },
  {
    "recipe": "Coconut Vegetable Curry",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "fresh ginger",
      "curry powder",
      "carrots",
      "yellow onion",
      "tomato paste",
      "tomatoes",
      "frozen broccoli and cauliflower",
      "light coconut milk",
      "salt",
      "sugar",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/coconut-vegetable-curry/"
  },
  {
    "recipe": "Pasta with Eggplant Sauce",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "yellow onion",
      "anchovy paste",
      "eggplant",
      "or crushed tomatoes",
      "tomato paste",
      "dried basil",
      "sugar",
      "crushed red pepper flakes",
      "Freshly cracked black pepper",
      "salt",
      "pasta",
      "fresh parsley",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/pasta-eggplant-sauce/"
  },
  {
    "recipe": "Pumpkin Cheesecake Mousse",
    "listOfIngredients": [
      "heavy whipping cream",
      "vanilla extract",
      "sugar",
      "cream cheese",
      "pumpkin puree",
      "cinnamon",
      "cloves",
      "nutmeg"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-cheesecake-mousse/"
  },
  {
    "recipe": "Morning Glory Baked Oatmeal",
    "listOfIngredients": [
      "unsweetened apple sauce",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "cinnamon",
      "salt",
      "baking powder",
      "carrots",
      "crushed pineapple juice",
      "shredded coconut",
      "walnuts",
      "milk",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/morning-glory-baked-oatmeal/"
  },
  {
    "recipe": "Beef & Pineapple Enchiladas",
    "listOfIngredients": [
      "cooking oil",
      "garlic",
      "jalapeno",
      "lean ground beef",
      "black beans",
      "chili powder",
      "salt",
      "pineapple chunks",
      "green onions",
      "fresh cilantro",
      "corn tortillas",
      "vegetable oil",
      "all-purpose flour",
      "water",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "unsweetened cocoa powder"
    ],
    "url": "https://www.budgetbytes.com/beef-pineapple-enchiladas/"
  },
  {
    "recipe": "Vegan Red Beans and Rice",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "bell pepper",
      "celery",
      "garlic",
      "dry red beans",
      "vegetable broth",
      "thyme",
      "oregano",
      "bay leaf",
      "smoked paprika",
      "Black pepper",
      "cayenne pepper",
      "cooked rice",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/vegan-red-beans-rice/"
  },
  {
    "recipe": "Chorizo Chicken Jambalaya",
    "listOfIngredients": [
      "vegetable oil",
      "links 8 Mexican Chorizo",
      "boneless skinless chicken thighs",
      "frozen onion",
      "tomato paste",
      "dry long grain white rice",
      "tomatoes",
      "chicken broth",
      "bay leaf",
      "cumin",
      "smoked paprika",
      "oregano",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/chorizo-chicken-jambalaya/"
  },
  {
    "recipe": "Vegetable Alfredo Pasta Bake",
    "listOfIngredients": [
      "olive oil",
      "onion",
      "garlic",
      "carrots",
      "zucchini",
      "frozen broccoli & cauliflower",
      "frozen chopped spinach",
      "salt and pepper",
      "butter",
      "all-purpose flour",
      "nutmeg",
      "garlic powder",
      "salt",
      "Black pepper",
      "parmesan",
      "pasta",
      "shredded gouda"
    ],
    "url": "https://www.budgetbytes.com/vegetable-alfredo-pasta-bake/"
  },
  {
    "recipe": "Oven Roasted Chicken Legs",
    "listOfIngredients": [
      "bone-in",
      "butter",
      "lemon pepper seasoning"
    ],
    "url": "https://www.budgetbytes.com/oven-roasted-chicken-legs/"
  },
  {
    "recipe": "Zucchini and Corn Frittata",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "zucchini",
      "Roma tomatoes",
      "frozen corn kernels",
      "cumin",
      "salt",
      "Black pepper",
      "eggs",
      "milk 2%",
      "shredded Monterrey Jack cheese"
    ],
    "url": "https://www.budgetbytes.com/zucchini-corn-frittata/"
  },
  {
    "recipe": "White Beans with Tomato and Sausage",
    "listOfIngredients": [
      "olive oil",
      "Italian Sausage",
      "yellow onion",
      "garlic",
      "crushed tomatoes",
      "dried basil",
      "dried oregano",
      "crushed red pepper",
      "Freshly cracked black pepper",
      "Great Northern beans",
      "frozen chopped spinach",
      "Salt"
    ],
    "url": "https://www.budgetbytes.com/white-beans-tomato-sausage/"
  },
  {
    "recipe": "Caramelized Onion and Artichoke Flatbread",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "instant yeast",
      "water",
      "yellow onions",
      "butter",
      "olive oil",
      "Italian seasoning blend",
      "frozen spinach",
      "quartered artichoke hearts",
      "feta cheese"
    ],
    "url": "https://www.budgetbytes.com/caramelized-onion-artichoke-flatbread/"
  },
  {
    "recipe": "Baked Chicken Wings",
    "listOfIngredients": [
      "cornstarch",
      "paprika",
      "smoked paprika",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "salt",
      "cooking oil",
      "chicken wings"
    ],
    "url": "https://www.budgetbytes.com/baked-chicken-wings/"
  },
  {
    "recipe": "Easy Sesame Chicken",
    "listOfIngredients": [
      "eggs",
      "cornstarch",
      "salt and pepper",
      "boneless skinless chicken thighs",
      "cooking oil",
      "soy sauce",
      "water",
      "toasted sesame oil",
      "brown sugar",
      "rice vinegar",
      "fresh ginger",
      "garlic",
      "sesame seeds",
      "cooked jasmine rice",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/easy-sesame-chicken/"
  },
  {
    "recipe": "Fluffy Homemade Pancakes",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "warm milk",
      "melted butter",
      "eggs",
      "sugar",
      "vanilla extract",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/homemade-pancakes/"
  },
  {
    "recipe": "Colcannon",
    "listOfIngredients": [
      "russet potatoes",
      "butter",
      "garlic",
      "green onions",
      "cabbage",
      "chicken broth",
      "milk",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/colcannon/"
  },
  {
    "recipe": "Sesame Glazed Salmon and Green Beans",
    "listOfIngredients": [
      "salmon filet",
      "fresh green beans",
      "soy sauce",
      "water",
      "rice wine",
      "brown sugar",
      "toasted sesame oil",
      "garlic",
      "fresh ginger",
      "sesame seeds",
      "cornstarch"
    ],
    "url": "https://www.budgetbytes.com/sesame-glazed-salmon-and-green-beans/"
  },
  {
    "recipe": "Peanut Tofu Noodle Bowls",
    "listOfIngredients": [
      "extra firm tofu",
      "salt",
      "cornstarch",
      "cooking oil",
      "natural-style peanut butter",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "lime juice",
      "soy sauce",
      "neutral oil",
      "rice noodles",
      "red bell pepper",
      "cucumber",
      "carrots",
      "cilantro",
      "peanuts"
    ],
    "url": "https://www.budgetbytes.com/peanut-tofu-noodle-bowls/"
  },
  {
    "recipe": "Easy Stovetop Popcorn Recipe",
    "listOfIngredients": [
      "high heat cooking oil",
      "popcorn kernels",
      "butter",
      "seasoning salt"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-stove-top-popcorn/"
  },
  {
    "recipe": "Pumpkin Pie",
    "listOfIngredients": [
      "Ingredient Pie Crust",
      "pumpkin puree",
      "brown sugar",
      "cinnamon",
      "nutmeg",
      "ginger",
      "salt",
      "sour cream",
      "milk",
      "vanilla",
      "eggs",
      "butter",
      "flour for dusting",
      "heavy cream"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-pie/"
  },
  {
    "recipe": "Roasted Chicken",
    "listOfIngredients": [
      "chicken",
      "kosher salt",
      "salted butter",
      "dry rosemary",
      "russet potatoes",
      "onion",
      "carrots",
      "lemon",
      "garlic"
    ],
    "url": "https://www.budgetbytes.com/roasted-chicken/"
  },
  {
    "recipe": "Easy Hot and Sour Soup with Vegetables and Tofu",
    "listOfIngredients": [
      "canola oil",
      "fresh ginger",
      "green onions",
      "red cabbage",
      "carrots",
      "button mushrooms",
      "vegetable broth",
      "soy sauce",
      "rice vinegar",
      "chili garlic sauce",
      "block extra firm tofu"
    ],
    "url": "https://www.budgetbytes.com/hot-sour-vegetable-soup-with-tofu/"
  },
  {
    "recipe": "Pineapple Pork Kebabs (no grill required)",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "soy sauce",
      "cooking oil",
      "honey",
      "boneless pork chops",
      "Vidalia onion",
      "green bell pepper",
      "pineapple chunks",
      "salt and pepper",
      "cilantro",
      "Sriracha"
    ],
    "url": "https://www.budgetbytes.com/pineapple-pork-kebabs-no-grill-required/"
  },
  {
    "recipe": "beef ragout with mashed cauliflower",
    "listOfIngredients": [
      "cauliflower",
      "butter",
      "chicken bouillon",
      "garlic",
      "salt and pepper",
      "olive oil",
      "yellow onion",
      "tomato paste",
      "red wine",
      "tomatoes",
      "dried basil",
      "dried oregano",
      "bay leaf",
      "soy sauce",
      "salt",
      "brown sugar",
      "pre-cooked shredded beef"
    ],
    "url": "https://www.budgetbytes.com/beef-ragout-with-mashed-cauliflower/"
  },
  {
    "recipe": "golden rice bowls",
    "listOfIngredients": [
      "butter",
      "yellow onion",
      "garlic",
      "uncooked jasmine rice",
      "turmeric",
      "cumin",
      "cinnamon",
      "bay leaf",
      "chicken broth",
      "olive oil",
      "spinach",
      "salt and pepper",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/golden-rice-bowls/"
  },
  {
    "recipe": "S'mores Macarons",
    "listOfIngredients": [
      "eggs",
      "granulated sugar",
      "cream of tartar",
      "salt",
      "vanilla extract",
      "slivered almonds",
      "powdered sugar",
      "unsweetened cocoa powder",
      "dark chocolate",
      "heavy cream",
      "squares graham crackers"
    ],
    "url": "https://www.budgetbytes.com/smores-macarons/"
  },
  {
    "recipe": "One Pot Sausage & Mushroom Pasta",
    "listOfIngredients": [
      "olive oil",
      "Italian sausage",
      "garlic",
      "yellow onion",
      "mushrooms",
      "crushed tomatoes",
      "dried basil",
      "dried oregano",
      "vegetable broth",
      "rigatoni",
      "Parmesan",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/one-pot-sausage-mushroom-pasta/"
  },
  {
    "recipe": "Banana Coconut Baked Oatmeal",
    "listOfIngredients": [
      "mashed ripe bananas",
      "eggs",
      "brown sugar",
      "vanilla",
      "nutmeg",
      "baking powder",
      "salt",
      "unsweetened shredded coconut",
      "coconut milk",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/banana-coconut-baked-oatmeal/"
  },
  {
    "recipe": "Curried Chickpeas with Spinach",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "curry powder",
      "spinach",
      "tomato sauce",
      "chickpeas"
    ],
    "url": "https://www.budgetbytes.com/curried-chickpeas-spinach/"
  },
  {
    "recipe": "Turkey Sriracha Meatballs",
    "listOfIngredients": [
      "turkey",
      "eggs",
      "plain breadcrumbs",
      "fresh ginger",
      "soy sauce",
      "green onions",
      "Freshly cracked black pepper",
      "rice vinegar",
      "brown sugar",
      "sriracha hot sauce",
      "water",
      "cornstarch"
    ],
    "url": "https://www.budgetbytes.com/turkey-sriracha-meatballs/"
  },
  {
    "recipe": "Sweet Chili Stir Fried Tofu Bowls",
    "listOfIngredients": [
      "extra firm tofu",
      "salt",
      "cornstarch",
      "cooking oil",
      "avocado",
      "bell pepper",
      "green onions",
      "fresh cilantro",
      "sweet chili sauce",
      "sesame seeds",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/sweet-chili-tofu-bowls/"
  },
  {
    "recipe": "Pesto Hummus",
    "listOfIngredients": [
      "chickpeas",
      "lemon juice",
      "olive oil",
      "tahini",
      "basil pesto",
      "salt",
      "garlic powder"
    ],
    "url": "https://www.budgetbytes.com/pesto-hummus/"
  },
  {
    "recipe": "Chili Roasted Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "chili powder",
      "olive oil",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/chili-roasted-sweet-potatoes/"
  },
  {
    "recipe": "One Pot Sausage and Sun Dried Tomato Pasta",
    "listOfIngredients": [
      "sweet Italian sausage",
      "olive oil",
      "garlic",
      "frozen broccoli florets",
      "chicken broth",
      "sun dried tomatoes",
      "pasta",
      "red pepper",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/one-pot-sausage-sun-dried-tomato-pasta/"
  },
  {
    "recipe": "One Pot Chicken and Rice",
    "listOfIngredients": [
      "paprika",
      "dried oregano",
      "dried thyme",
      "garlic powder",
      "onion powder",
      "salt",
      "pepper",
      "boneless",
      "cooking oil",
      "yellow onion",
      "long-grain white rice",
      "vegetable broth",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/one-pot-chicken-and-rice/"
  },
  {
    "recipe": "Mediterranean Turkey Burgers",
    "listOfIngredients": [
      "plain Greek yogurt",
      "lemon juice",
      "garlic powder",
      "dried dill",
      "salt",
      "turkey",
      "sun dried tomatoes",
      "red onion",
      "frozen spinach",
      "crumbled feta",
      "dried oregano",
      "cooking oil",
      "hamburger buns",
      "cucumber"
    ],
    "url": "https://www.budgetbytes.com/greek-turkey-burgers/"
  },
  {
    "recipe": "Kale and White Bean Power Bowls",
    "listOfIngredients": [
      "long grain brown rice",
      "olive oil",
      "red wine vinegar",
      "Dijon mustard",
      "Italian seasoning",
      "garlic powder",
      "salt",
      "black pepper",
      "fresh kale",
      "cooking oil",
      "garlic",
      "cannellini beans",
      "sun dried tomatoes",
      "walnuts",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/kale-and-white-bean-power-bowls/"
  },
  {
    "recipe": "Almond Apricot Biscotti",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "sugar",
      "butter",
      "eggs",
      "vanilla extract",
      "almond extract",
      "nutmeg",
      "almonds",
      "dried apricots"
    ],
    "url": "https://www.budgetbytes.com/almond-apricot-biscotti/"
  },
  {
    "recipe": "Bibimbap - The Ultimate Bowl Meal",
    "listOfIngredients": [
      "cooked jasmine rice",
      "cooking oil",
      "fresh spinach",
      "toasted sesame oil",
      "salt",
      "beef",
      "chili garlic sauce",
      "soy sauce",
      "brown sugar",
      "carrots",
      "cucumber",
      "green onions",
      "eggs",
      "kimchi",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/bibimbap-ultimate-bowl-meal/"
  },
  {
    "recipe": "No-Knead Bread",
    "listOfIngredients": [
      "all-purpose flour",
      "instant",
      "salt",
      "water"
    ],
    "url": "https://www.budgetbytes.com/no-knead-bread/"
  },
  {
    "recipe": "Homemade English Muffins Recipe",
    "listOfIngredients": [
      "active dry yeast",
      "sugar",
      "water",
      "milk",
      "butter",
      "all-purpose flour",
      "salt",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/english-muffins/"
  },
  {
    "recipe": "Chili Garlic Breakfast Quesadilla",
    "listOfIngredients": [
      "butter",
      "eggs",
      "tortilla",
      "chili garlic sauce",
      "shredded cheddar",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/chili-garlic-breakfast-quesadilla/"
  },
  {
    "recipe": "Greek Turkey and Rice Skillet",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "turkey",
      "dried oregano",
      "salt",
      "Black pepper",
      "long grain white rice",
      "frozen cut leaf spinach",
      "sun dried tomato halves",
      "kalamata olives",
      "chicken broth",
      "fresh parsley",
      "fresh lemon",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/greek-turkey-rice-skillet/"
  },
  {
    "recipe": "Thin and Crispy Pizza Crust",
    "listOfIngredients": [
      "water",
      "sugar",
      "active dry",
      "all-purpose flour",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/thin-and-crispy-pizza-crust/"
  },
  {
    "recipe": "Gingersnap Granola",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "oat bran",
      "almonds",
      "molasses",
      "brown sugar",
      "canola oil",
      "water",
      "powdered ginger",
      "cinnamon",
      "cloves",
      "salt",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/gingersnap-granola/"
  },
  {
    "recipe": "Lemon Raspberry Baked Oatmeal",
    "listOfIngredients": [
      "old fashioned oats",
      "plain yogurt",
      "milk",
      "eggs",
      "sugar",
      "vanilla extract",
      "baking soda",
      "salt",
      "lemon",
      "frozen raspberries"
    ],
    "url": "https://www.budgetbytes.com/lemon-raspberry-baked-oatmeal/"
  },
  {
    "recipe": "Zucchini Fritters",
    "listOfIngredients": [
      "shredded zucchini",
      "garlic",
      "dried oregano",
      "dried basil",
      "fresh parsley",
      "salt and pepper",
      "eggs",
      "all-purpose flour",
      "vegetable oil"
    ],
    "url": "https://www.budgetbytes.com/zucchini-fritters/"
  },
  {
    "recipe": "Slow Cooker BBQ Chicken",
    "listOfIngredients": [
      "smoked paprika",
      "garlic powder",
      "salt",
      "black pepper",
      "boneless",
      "BBQ sauce"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-bbq-chicken/"
  },
  {
    "recipe": "Tempeh Burrito Bowls",
    "listOfIngredients": [
      "sweet potato",
      "cooking oil",
      "tempeh",
      "water",
      "tomato paste",
      "chili powder",
      "smoked paprika",
      "cumin",
      "cayenne",
      "oregano",
      "garlic powder",
      "salt",
      "black pepper",
      "cooked rice",
      "salsa",
      "frozen corn kernels",
      "jalapeno",
      "avocado",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/tempeh-burrito-bowls/"
  },
  {
    "recipe": "Roasted Vegetable Couscous Meal Prep",
    "listOfIngredients": [
      "Roma tomatoes",
      "zucchini",
      "bell pepper",
      "red onion",
      "garlic",
      "olive oil",
      "salt and pepper",
      "couscous",
      "vegetable broth",
      "parsley",
      "boneless",
      "butter",
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "salt",
      "pepper",
      "ranch dressing"
    ],
    "url": "https://www.budgetbytes.com/roasted-vegetable-couscous-meal-prep/"
  },
  {
    "recipe": "Slow Cooker Vegetarian Lentil Chili",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "petite diced tomatoes",
      "tomato paste",
      "black beans",
      "kidney beans",
      "brown lentils",
      "chili powder",
      "smoked paprika",
      "cumin",
      "onion powder",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "black pepper",
      "coconut oil",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-vegetarian-lentil-chili/"
  },
  {
    "recipe": "Weeknight Enchiladas",
    "listOfIngredients": [
      "vegetable",
      "chili powder",
      "flour",
      "water",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "corn tortillas",
      "refried beans",
      "Pepper Jack",
      "avocado",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/weeknight-enchiladas/"
  },
  {
    "recipe": "Blackened Shrimp Pasta",
    "listOfIngredients": [
      "smoked paprika",
      "thyme",
      "oregano",
      "cumin",
      "cayenne pepper",
      "garlic powder",
      "onion powder",
      "salt",
      "Black pepper",
      "and deveigned shrimp",
      "butter",
      "garlic",
      "petite diced tomatoes",
      "pasta",
      "green onions",
      "Handful fresh parsley",
      "lemon"
    ],
    "url": "https://www.budgetbytes.com/blackened-shrimp-pasta/"
  },
  {
    "recipe": "Smoked Sausage with Peppers and Farro",
    "listOfIngredients": [
      "olive oil",
      "smoked sausage",
      "bell peppers",
      "yellow onion",
      "tomatoes",
      "dried oregano",
      "Black pepper",
      "cooked farro",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/smoked-sausage-skillet-with-peppers-and-farro/"
  },
  {
    "recipe": "Banana Nut Breakfast Farro",
    "listOfIngredients": [
      "cooked farro",
      "milk",
      "vanilla extract",
      "brown sugar",
      "banana",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/banana-nut-breakfast-farro/"
  },
  {
    "recipe": "Lemony Kale and Quinoa Salad",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "Dinosaur /Lacinato Kale",
      "vegetable broth",
      "uncooked quinoa",
      "fresh lemon",
      "walnuts",
      "crumbled feta"
    ],
    "url": "https://www.budgetbytes.com/lemony-kale-quinoa-salad/"
  },
  {
    "recipe": "Curried Lentils",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "onion",
      "carrots",
      "uncooked brown lentils",
      "curry powder hot",
      "tomato sauce",
      "Salt",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/curried-lentils/"
  },
  {
    "recipe": "Easy Baked Brie with Apples",
    "listOfIngredients": [
      "apple",
      "butter",
      "brown sugar",
      "cinnamon",
      "wheel of brie",
      "pecans"
    ],
    "url": "https://www.budgetbytes.com/easy-baked-brie/"
  },
  {
    "recipe": "Homemade Hot Chocolate",
    "listOfIngredients": [
      "unsweetened cocoa powder",
      "semi-sweet chocolate",
      "sugar",
      "salt",
      "milk",
      "half and half",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/homemade-hot-chocolate/"
  },
  {
    "recipe": "Mediterranean Quesadillas",
    "listOfIngredients": [
      "flour tortillas",
      "frozen chopped spinach",
      "red onion",
      "roasted red peppers",
      "kalamata olives",
      "handful fresh parsley",
      "feta cheese",
      "shredded mozzarella",
      "dried oregano"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-quesadillas/"
  },
  {
    "recipe": "(not) Sun Dried Tomato Sauce",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "dried oregano",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "crushed red pepper",
      "cranks black pepper",
      "salt",
      "tomato paste",
      "honey"
    ],
    "url": "https://www.budgetbytes.com/not-sun-dried-tomato-sauce/"
  },
  {
    "recipe": "Mango Pineapple Chutney",
    "listOfIngredients": [
      "vegetable oil",
      "onion",
      "red pepper flakes",
      "fresh ginger",
      "mangoes",
      "pineapple juice",
      "brown sugar",
      "cider vinegar",
      "garam masala",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/mango-pineapple-chutney/"
  },
  {
    "recipe": "Beer Braised Collard Greens",
    "listOfIngredients": [
      "olive oil",
      "onion",
      "garlic",
      "beer",
      "bouillon cube",
      "water",
      "collard greens",
      "brown sugar",
      "red pepper flakes",
      "cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/beer-braised-collard-greens/"
  },
  {
    "recipe": "Chocolate Lava Cake for Two (or one)",
    "listOfIngredients": [
      "eggs",
      "white sugar",
      "butter",
      "semi-sweet chocolate",
      "flour"
    ],
    "url": "https://www.budgetbytes.com/chocolate-lava-cake-for-two-or-one/"
  },
  {
    "recipe": "Cinnamon Raisin Bread",
    "listOfIngredients": [
      "wheat flour",
      "bread flour",
      "brown sugar",
      "salt",
      "instant yeast",
      "raisins",
      "cinnamon",
      "water"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-raisin-bread/"
  },
  {
    "recipe": "Loaded Hummus Pitas",
    "listOfIngredients": [
      "cucumber",
      "grape tomatoes",
      "red onion",
      "kalamata olives",
      "parsley",
      "feta",
      "pitas",
      "hummus",
      "olive oil",
      "salt",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/loaded-hummus-pitas/"
  },
  {
    "recipe": "Cowboy Caviar",
    "listOfIngredients": [
      "olive oil",
      "fresh lime",
      "balsamic vinegar",
      "chili powder",
      "cumin",
      "salt",
      "sugar",
      "black beans",
      "black eyed peas",
      "bell pepper",
      "Roma tomatoes",
      "jalapeno",
      "red onion",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/cowboy-caviar/"
  },
  {
    "recipe": "Lentils with Creamy Mushroom Gravy",
    "listOfIngredients": [
      "garlic",
      "mushrooms",
      "olive oil",
      "brown lentils",
      "dried thyme",
      "rubbed  sage",
      "Freshly cracked black pepper",
      "vegetable broth",
      "coconut milk",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/lentils-with-creamy-mushroom-gravy/"
  },
  {
    "recipe": "Creamy Cucumber Salad",
    "listOfIngredients": [
      "sour cream",
      "lemon juice",
      "dried dill",
      "sugar",
      "salt",
      "cucumber",
      "red onion"
    ],
    "url": "https://www.budgetbytes.com/creamy-cucumber-salad/"
  },
  {
    "recipe": "Curry Chicken Salad",
    "listOfIngredients": [
      "mayonnaise",
      "plain yogurt",
      "lemon juice",
      "honey",
      "curry powder",
      "salt",
      "black pepper",
      "cooked chicken",
      "salt and pepper",
      "stalks celery",
      "green onions",
      "almonds",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/curry-chicken-salad/"
  },
  {
    "recipe": "Pan Fried Sesame Tofu with Broccoli",
    "listOfIngredients": [
      "soy sauce",
      "water",
      "toasted sesame oil",
      "brown sugar",
      "rice vinegar",
      "fresh ginger",
      "garlic",
      "sesame seeds",
      "cornstarch",
      "block extra-firm tofu",
      "salt",
      "neutral oil",
      "frozen broccoli florets",
      "green onions",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/pan-fried-sesame-tofu-with-broccoli/"
  },
  {
    "recipe": "Pastalaya",
    "listOfIngredients": [
      "vegetable oil",
      "smoked sausage",
      "garlic",
      "frozen “seasoning mix”",
      "tomatoes",
      "Creole seasoning",
      "oregano",
      "smoked paprika",
      "thyme",
      "Black pepper",
      "chicken broth",
      "water",
      "penne pasta",
      "half and half",
      "fresh parsley",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/pastalaya/"
  },
  {
    "recipe": "Secret Ingredient Tomato Soup",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "dried oregano",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "crushed red pepper",
      "black pepper",
      "tomato paste",
      "brown sugar",
      "crushed tomatoes",
      "vegetable broth",
      "cannellini beans",
      "nutritional yeast",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/secret-ingredient-tomato-soup/"
  },
  {
    "recipe": "Chimichurri Chicken and Rice",
    "listOfIngredients": [
      "extra virgin olive oil",
      "red wine vinegar",
      "dried oregano",
      "cumin",
      "red pepper flakes",
      "salt",
      "garlic",
      "fresh parsley",
      "fresh cilantro",
      "olive oil",
      "boneless",
      "salt and pepper",
      "yellow onion",
      "Roma Tomatoes",
      "frozen peas",
      "long grain white rice",
      "water"
    ],
    "url": "https://www.budgetbytes.com/chimichurri-chicken-rice/"
  },
  {
    "recipe": "Quick Lemon Garlic Fish",
    "listOfIngredients": [
      "tilapia fillets",
      "fresh parsley",
      "lemon",
      "garlic",
      "olive oil",
      "salt",
      "cranks freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/quick-lemon-garlic-fish/"
  },
  {
    "recipe": "Rosemary Roasted Potatoes",
    "listOfIngredients": [
      "potatoes",
      "olive oil",
      "garlic",
      "dried rosemary",
      "salt",
      "black pepper",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/rosemary-roasted-potatoes/"
  },
  {
    "recipe": "Green Chile Migas",
    "listOfIngredients": [
      "corn tortillas",
      "cooking oil",
      "butter",
      "eggs",
      "green chiles",
      "sour cream",
      "queso fresco",
      "green onions",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/green-chile-migas/"
  },
  {
    "recipe": "Sausage and Kale Skillet",
    "listOfIngredients": [
      "Italian Sausage",
      "kale",
      "chickpeas",
      "marinara sauce",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/sausage-kale-skillet/"
  },
  {
    "recipe": "Nacho Taters",
    "listOfIngredients": [
      "russet potatoes",
      "cooking oil",
      "frozen corn kernels",
      "recipe red enchilada sauce",
      "cheddar cheese",
      "black beans",
      "green onions",
      "jalapenos"
    ],
    "url": "https://www.budgetbytes.com/nacho-taters/"
  },
  {
    "recipe": "Balsamic Chicken and Mushrooms",
    "listOfIngredients": [
      "balsamic vinegar",
      "soy sauce",
      "brown sugar",
      "garlic",
      "dried thyme",
      "boneless",
      "salt and pepper",
      "olive oil",
      "mushrooms",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/balsamic-chicken-and-mushrooms/"
  },
  {
    "recipe": "One Pot Roasted Red Pepper Pasta",
    "listOfIngredients": [
      "vegetable broth",
      "Fettuccine",
      "Vidalia onion",
      "garlic",
      "roasted red peppers",
      "fire roasted diced tomatoes",
      "dried basil",
      "crushed red pepper",
      "Freshly cracked black pepper",
      "cream cheese"
    ],
    "url": "https://www.budgetbytes.com/one-pot-roasted-red-pepper-pasta/"
  },
  {
    "recipe": "Pesto Pizza Rolls",
    "listOfIngredients": [
      "water",
      "active dry",
      "sugar",
      "olive oil",
      "flour",
      "salt",
      "pesto",
      "pepperoni",
      "shredded mozzarella",
      "pizza sauce"
    ],
    "url": "https://www.budgetbytes.com/pesto-pizza-rolls/"
  },
  {
    "recipe": "Teriyaki Salmon with Sriracha Mayo",
    "listOfIngredients": [
      "salmon filet",
      "soy sauce",
      "water",
      "toasted sesame oil",
      "fresh ginger",
      "garlic",
      "brown sugar",
      "rice wine",
      "cornstarch",
      "mayonnaise",
      "sriracha hot sauce"
    ],
    "url": "https://www.budgetbytes.com/teriyaki-salmon-w-sriracha-mayo/"
  },
  {
    "recipe": "Lemony Cucumber Couscous Salad",
    "listOfIngredients": [
      "pearl couscous",
      "fresh lemon",
      "olive oil",
      "garlic powder",
      "salt",
      "English cucumber",
      "parsley",
      "black pepper",
      "feta cheese"
    ],
    "url": "https://www.budgetbytes.com/lemony-cucumber-couscous-salad/"
  },
  {
    "recipe": "30-Minute Smoky Black Bean Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "jalapeno",
      "olive oil",
      "black beans",
      "fire roasted diced tomatoes",
      "cumin",
      "dried oregano",
      "smoked paprika",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/smoky-black-bean-soup/"
  },
  {
    "recipe": "No Knead English Muffin Bread",
    "listOfIngredients": [
      "flour",
      "instant yeast",
      "sugar",
      "salt",
      "water",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/no-knead-english-muffin-bread/"
  },
  {
    "recipe": "Coconut Curry Ramen",
    "listOfIngredients": [
      "frozen mixed vegetables",
      "water",
      "instant ramen",
      "full fat coconut milk",
      "curry powder"
    ],
    "url": "https://www.budgetbytes.com/coconut-curry-ramen/"
  },
  {
    "recipe": "Italian Sausage and White Bean Skillet",
    "listOfIngredients": [
      "Italian sausage",
      "olive oil",
      "cannellini beans",
      "spinach",
      "Freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/italian-sausage-white-bean-skillet/"
  },
  {
    "recipe": "One Pot Creamy Cajun Chicken Pasta",
    "listOfIngredients": [
      "smoked paprika",
      "oregano",
      "thyme",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "salt",
      "olive oil",
      "butter",
      "boneless",
      "yellow onion",
      "penne pasta",
      "fire roasted diced tomatoes",
      "chicken broth",
      "cream cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/one-pot-creamy-cajun-chicken-pasta/"
  },
  {
    "recipe": "Easy 30 minute Posole",
    "listOfIngredients": [
      "yellow onion",
      "cooking oil",
      "flour",
      "mild chili powder",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "water",
      "chicken broth",
      "green chiles",
      "hominy",
      "shredded pork",
      "fresh lime",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/30-minute-posole/"
  },
  {
    "recipe": "One Pot Beef and Mushroom Stroganoff",
    "listOfIngredients": [
      "garlic",
      "butter",
      "beef",
      "mushrooms",
      "Freshly cracked black pepper",
      "beef broth",
      "Worcestershire sauce",
      "Dijon mustard",
      "wide egg noodles",
      "sour cream",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/one-pot-beef-mushroom-stroganoff/"
  },
  {
    "recipe": "Golden Chai",
    "listOfIngredients": [
      "cinnamon",
      "fresh ginger",
      "cloves",
      "Black pepper",
      "water",
      "black tea",
      "vanilla extract",
      "turmeric",
      "honey",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/golden-chai/"
  },
  {
    "recipe": "Rice Cooker Chili",
    "listOfIngredients": [
      "olive oil",
      "beef",
      "chili powder",
      "cumin",
      "cayenne pepper",
      "garlic powder",
      "onion powder",
      "brown sugar",
      "salt",
      "black pepper",
      "tomatoes",
      "tomato paste",
      "kidney beans",
      "water"
    ],
    "url": "https://www.budgetbytes.com/rice-cooker-chili/"
  },
  {
    "recipe": "Honey Balsamic Chicken Tenders",
    "listOfIngredients": [
      "chicken breast",
      "balsamic vinegar",
      "garlic",
      "olive oil",
      "salt and pepper",
      "butter",
      "honey"
    ],
    "url": "https://www.budgetbytes.com/honey-balsamic-chicken-tenders/"
  },
  {
    "recipe": "Spring Rolls & Quick Peanut Sauce",
    "listOfIngredients": [
      "rice paper wrappers",
      "red leaf lettuce",
      "bean threads",
      "mango",
      "red bell pepper",
      "cilantro",
      "krab",
      "smooth natural peanut butter",
      "hoisin sauce",
      "fresh ginger",
      "sriracha sauce",
      "water"
    ],
    "url": "https://www.budgetbytes.com/spring-rolls-quick-peanut-sauce/"
  },
  {
    "recipe": "Raspberry Chipotle BBQ Chicken",
    "listOfIngredients": [
      "vegetable oil",
      "yellow onion",
      "garlic",
      "tomato sauce",
      "raspberry jam",
      "cider vinegar",
      "pepper + sauce chipotle peppers adobo",
      "chicken thighs"
    ],
    "url": "https://www.budgetbytes.com/raspberry-chipotle-bbq-chicken/"
  },
  {
    "recipe": "Quick Curried Chick Peas",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "chickpeas",
      "tomato sauce",
      "water",
      "curry powder",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/quick-curried-chick-peas/"
  },
  {
    "recipe": "Greek Marinated Chicken",
    "listOfIngredients": [
      "plain yogurt",
      "olive oil",
      "garlic",
      "dried oregano",
      "lemon",
      "salt",
      "black pepper",
      "fresh parsley",
      "chicken"
    ],
    "url": "https://www.budgetbytes.com/greek-marinated-chicken/"
  },
  {
    "recipe": "Asparagus Breakfast Wraps",
    "listOfIngredients": [
      "asparagus",
      "size fajita flour tortillas",
      "eggs",
      "swiss cheese",
      "roma tomatoes",
      "butter",
      "salt and pepper",
      "garlic powder",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/asparagus-breakfast-wraps/"
  },
  {
    "recipe": "Easy Cilantro Lime Chicken",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "cumin",
      "salt",
      "black pepper",
      "limes",
      "cilantro",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/easy-cilantro-lime-chicken/"
  },
  {
    "recipe": "Spicy Tuna Guacamole Bowls",
    "listOfIngredients": [
      "frozen shelled edamame",
      "cucumber",
      "carrots",
      "chunk light tuna water",
      "guacamole",
      "cooked rice",
      "cilantro",
      "sriracha hot sauce",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/spicy-tuna-guacamole-bowls/"
  },
  {
    "recipe": "Garlic Herb Whipped Cottage Cheese Dip",
    "listOfIngredients": [
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "salt",
      "black pepper",
      "cottage cheese",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/garlic-herb-whipped-cottage-cheese-dip/"
  },
  {
    "recipe": "Pesto Stuffed Shells",
    "listOfIngredients": [
      "frozen spinach",
      "ricotta",
      "shredded mozzarella",
      "basil pesto",
      "eggs",
      "jumbo pasta shells",
      "pasta sauce"
    ],
    "url": "https://www.budgetbytes.com/pesto-stuffed-shells/"
  },
  {
    "recipe": "Cinnamon Date & Walnut Baked Oatmeal",
    "listOfIngredients": [
      "plain yogurt",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "cinnamon",
      "baking powder",
      "salt",
      "milk",
      "dried dates",
      "walnut halves",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/cinnamon-date-walnut-baked-oatmeal/"
  },
  {
    "recipe": "Honey Sriracha Chicken Thighs",
    "listOfIngredients": [
      "boneless skinless chicken thighs",
      "garlic",
      "fresh ginger",
      "sriracha hot sauce",
      "soy sauce",
      "rice vinegar",
      "honey",
      "brown sugar",
      "vegetable oil",
      "water",
      "corn starch",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/honey-sriracha-chicken-thighs/"
  },
  {
    "recipe": "Date & Gorgonzola Stuffed Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "olive oil",
      "medjool dates",
      "walnuts",
      "crumbled gorgonzola",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/date-gorgonzola-stuffed-sweet-potatoes/"
  },
  {
    "recipe": "The Cheese Board Lunch Box",
    "listOfIngredients": [
      "cheese",
      "salami",
      "crackers",
      "dried apricots",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/the-cheese-board-lunch-box/"
  },
  {
    "recipe": "Classic Tuna Salad",
    "listOfIngredients": [
      "chunk light tuna water",
      "celery",
      "walnuts",
      "green onions",
      "mayonnaise",
      "lemon juice",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/classic-tuna-salad/"
  },
  {
    "recipe": "BBQ Chicken Burrito Bowls",
    "listOfIngredients": [
      "chicken breast",
      "BBQ sauce",
      "cooked rice",
      "black beans",
      "frozen corn kernels",
      "zucchini",
      "pepper jack cheese",
      "green onions",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/bbq-chicken-burrito-bowls/"
  },
  {
    "recipe": "Smoky Quinoa and Black Bean Salad",
    "listOfIngredients": [
      "uncooked quinoa",
      "olive oil",
      "apple cider vinegar",
      "smoked paprika",
      "cumin",
      "garlic powder",
      "salt",
      "Freshly cracked black pepper",
      "black beans",
      "bell peppers",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/smoky-quinoa-black-bean-salad/"
  },
  {
    "recipe": "Slow Cooker Chicken Ropa Vieja",
    "listOfIngredients": [
      "chicken",
      "garlic",
      "oregano",
      "cumin",
      "red pepper flakes",
      "Freshly cracked black pepper",
      "yellow onion",
      "green bell pepper",
      "red bell pepper",
      "tomatoes",
      "tomato paste",
      "Salt"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-chicken-ropa-vieja/"
  },
  {
    "recipe": "SNAP Challenge: Creamy Chicken and Black Bean Enchiladas",
    "listOfIngredients": [
      "cooking oil",
      "garlic",
      "tomatoes with green chiles",
      "cream cheese",
      "shredded chicken",
      "black beans",
      "frozen corn kernels",
      "cumin",
      "soft taco sized 8 tortillas",
      "batch homemade red enchilada sauce"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-creamy-chicken-black-bean-enchiladas/"
  },
  {
    "recipe": "Vegetable Tamale Pie",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "sweet potato",
      "black beans",
      "green onions",
      "poblano pepper",
      "jalapeno",
      "red enchilada sauce",
      "chili powder",
      "cumin",
      "salt",
      "yellow cornmeal",
      "all-purpose flour",
      "sugar",
      "baking powder",
      "milk",
      "eggs",
      "cooking oil",
      "shredded cheddar",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/vegetable-tamale-pie/"
  },
  {
    "recipe": "Broccoli Shells and Cheese",
    "listOfIngredients": [
      "pasta",
      "frozen broccoli florets",
      "onion",
      "butter",
      "all-purpose flour",
      "milk",
      "shredded sharp cheddar",
      "parmesan",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/broccoli-shells-n-cheese/"
  },
  {
    "recipe": "One Pot Cheesy Vegetarian Chili Mac",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "flour",
      "chili powder",
      "tomatoes",
      "tomato sauce",
      "kidney beans",
      "black beans",
      "pinto beans",
      "frozen corn kernels",
      "vegetable broth",
      "uncooked macaroni noodles",
      "shredded sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/cheesy-vegetarian-chili-mac/"
  },
  {
    "recipe": "Chocolate Cinnamon Swirl Bread",
    "listOfIngredients": [
      "wheat flour",
      "all-purpose flour",
      "salt",
      "instant yeast",
      "cinnamon",
      "brown sugar",
      "water",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/chocolate-cinnamon-swirl-bread/"
  },
  {
    "recipe": "Tzatziki (Greek Yogurt Sauce)",
    "listOfIngredients": [
      "greek style yogurt",
      "cucumber",
      "garlic",
      "dill",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/tzatziki-greek-yogurt-sauce/"
  },
  {
    "recipe": "Meatball Sandwich",
    "listOfIngredients": [
      "homemade meatballs",
      "homemade marinara",
      "hearty roll",
      "provolone"
    ],
    "url": "https://www.budgetbytes.com/meatball-sandwich/"
  },
  {
    "recipe": "Sriracha Peach Crisp",
    "listOfIngredients": [
      "fresh peaches",
      "honey",
      "sriracha hot sauce",
      "cinnamon",
      "cornstarch",
      "rolled oats",
      "all-purpose flour",
      "brown sugar",
      "salt",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/sriracha-peach-crisp/"
  },
  {
    "recipe": "Creamed Spinach",
    "listOfIngredients": [
      "frozen spinach",
      "butter",
      "garlic",
      "all-purpose flour",
      "milk",
      "parmesan",
      "salt and pepper",
      "nutmeg"
    ],
    "url": "https://www.budgetbytes.com/creamed-spinach-take-2/"
  },
  {
    "recipe": "Homemade Marinara",
    "listOfIngredients": [
      "crushed tomatoes",
      "yellow onion",
      "garlic",
      "olive oil",
      "tomato paste",
      "dried basil",
      "dried oregano",
      "bay leaves",
      "brown sugar",
      "balsamic vinegar"
    ],
    "url": "https://www.budgetbytes.com/homemade-marinara/"
  },
  {
    "recipe": "Chili Cornbread Skillet",
    "listOfIngredients": [
      "cooking oil",
      "garlic",
      "yellow onion",
      "jalapeno",
      "fire roasted diced tomatoes",
      "tomato paste",
      "beans",
      "chili powder",
      "cumin",
      "dried oregano",
      "salt",
      "water",
      "shredded cheddar",
      "yellow cornmeal",
      "all-purpose flour",
      "sugar",
      "baking powder",
      "milk",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/chili-cornbread-skillet/"
  },
  {
    "recipe": "Vegetable Barley Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "carrots",
      "tomatoes",
      "pearled barley",
      "dried basil",
      "dried oregano",
      "black pepper",
      "vegetable broth",
      "russet potato",
      "frozen green beans",
      "frozen corn",
      "frozen peas",
      "lemon juice",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/vegetable-barley-soup/"
  },
  {
    "recipe": "Cajun Cabbage and Noodles",
    "listOfIngredients": [
      "smoked paprika",
      "dried oregano",
      "dried thyme",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "salt",
      "black pepper",
      "cooking oil",
      "smoked sausage",
      "shredded cabbage",
      "water",
      "wide egg noodles",
      "butter",
      "green onions",
      "hot sauce"
    ],
    "url": "https://www.budgetbytes.com/cajun-cabbage-and-noodles/"
  },
  {
    "recipe": "Loaded Guacamole",
    "listOfIngredients": [
      "ripe avocados",
      "pineapple chunks",
      "red onion",
      "fresh cilantro",
      "sriracha hot sauce",
      "salt",
      "hard-boiled eggs"
    ],
    "url": "https://www.budgetbytes.com/best-ever-avocado-dip/"
  },
  {
    "recipe": "Mediterranean Farro Salad with Spiced Chickpeas",
    "listOfIngredients": [
      "tahini",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne pepper",
      "salt",
      "chickpeas",
      "olive oil",
      "smoked paprika",
      "garlic powder",
      "Freshly cracked black pepper",
      "Salt",
      "cooked farro",
      "Roma tomatoes",
      "cucumber",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-farro-salad-with-spiced-chickpeas/"
  },
  {
    "recipe": "Pan Seared Chicken Breasts",
    "listOfIngredients": [
      "steak seasoning",
      "smoked paprika",
      "sweet paprika",
      "boneless",
      "cooking oil",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/how-to-cook-chicken-breast-in-a-pan/"
  },
  {
    "recipe": "One Pot Lemon Artichoke Chicken and Rice",
    "listOfIngredients": [
      "fresh lemon",
      "Kirkwood Fresh Chicken Breasts",
      "Carlini Extra Virgin Olive Oil",
      "garlic",
      "Stonemill Dried Oregano",
      "Stonemill Crushed Red Pepper",
      "salt",
      "Tuscan Garden Quartered Artichoke Hearts",
      "Earthly Grains Long Grain White Rice",
      "Chef's Cupboard Chicken Broth",
      "Emporium Selection Feta Cheese Crumbles",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/one-pot-lemon-artichoke-chicken-and-rice/"
  },
  {
    "recipe": "Kale & Salmon Caesar Salad",
    "listOfIngredients": [
      "bowtie pasta",
      "kale",
      "wild caught salmon",
      "hard boiled eggs",
      "shredded Parmesan",
      "or to taste creamy Caesar dressing"
    ],
    "url": "https://www.budgetbytes.com/kale-salmon-caesar-salad/"
  },
  {
    "recipe": "Ultimate Portobello Mushroom Pizza",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "dried oregano",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "crushed red pepper",
      "Freshly cracked black pepper",
      "salt",
      "tomato paste",
      "honey",
      "pizza dough",
      "portobello mushroom cap",
      "salt and pepper",
      "shredded mozzarella",
      "feta",
      "Handful chopped parsley"
    ],
    "url": "https://www.budgetbytes.com/ultimate-portobello-mushroom-pizza/"
  },
  {
    "recipe": "Quickie Faux Pho",
    "listOfIngredients": [
      "chicken broth",
      "five spice blend",
      "cooked chicken",
      "wide rice noodles",
      "jalapeno",
      "lime",
      "green onions",
      "fresh cilantro",
      "Sriracha",
      "Hoisin sauce"
    ],
    "url": "https://www.budgetbytes.com/quickie-faux-pho/"
  },
  {
    "recipe": "Autumn Quinoa Salad with Lemon Turmeric Dressing",
    "listOfIngredients": [
      "uncooked quinoa",
      "salt",
      "almond butter",
      "water",
      "lemon juice",
      "ginger",
      "turmeric",
      "sugar",
      "black pepper",
      "baby greens",
      "Granny Smith apple",
      "dried cranberries",
      "almonds"
    ],
    "url": "https://www.budgetbytes.com/autumn-quinoa-salad/"
  },
  {
    "recipe": "bbq beef stuffed potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "vegetable oil",
      "salt",
      "Multi-Purpose Shredded Beef",
      "bbq sauce",
      "shredded cheddar",
      "green onion",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/bbq-beef-stuffed-potatoes/"
  },
  {
    "recipe": "Taco Stuffed Shells",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "yellow onion",
      "beef",
      "black beans",
      "pinto beans",
      "taco seasoning",
      "salt",
      "jumbo shells",
      "recipe red enchilada sauce",
      "shredded cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/taco-stuffed-shells/"
  },
  {
    "recipe": "Hearty Meatball Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "carrots",
      "celery",
      "garlic",
      "tomatoes",
      "tomato sauce",
      "cubes beef bouillon",
      "water",
      "dry pasta",
      "turkey meatballs",
      "fresh parsley",
      "parmesan"
    ],
    "url": "https://www.budgetbytes.com/hearty-meatball-soup/"
  },
  {
    "recipe": "\"The One\" Chocolate Mug Cake",
    "listOfIngredients": [
      "all-purpose flour",
      "unsweetened cocoa powder",
      "sugar",
      "baking powder",
      "salt",
      "cooking oil",
      "milk",
      "peanut butter"
    ],
    "url": "https://www.budgetbytes.com/the-one-chocolate-mug-cake/"
  },
  {
    "recipe": "thai turkey meatloaf",
    "listOfIngredients": [
      "turkey",
      "garlic",
      "green onions",
      "fresh ginger",
      "soy sauce",
      "toasted sesame oil",
      "eggs",
      "cooked jasmine rice",
      "brown sugar",
      "ketchup",
      "sriracha sauce",
      "rice vinegar"
    ],
    "url": "https://www.budgetbytes.com/thai-turkey-meatloaf/"
  },
  {
    "recipe": "Cranberry Apple Baked Oatmeal",
    "listOfIngredients": [
      "unsweetened apple sauce",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "cinnamon",
      "salt",
      "baking powder",
      "milk",
      "fresh cranberries",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/cranberry-apple-baked-oatmeal/"
  },
  {
    "recipe": "Butternut Squash Pasta Salad",
    "listOfIngredients": [
      "butternut squash",
      "olive oil",
      "dried sage",
      "pasta",
      "fresh parsley",
      "dried cranberries",
      "shredded parmesan",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/butternut-squash-pasta-salad/"
  },
  {
    "recipe": "Apple Flax Muffins",
    "listOfIngredients": [
      "wheat flour",
      "flaxseed",
      "baking soda",
      "baking powder",
      "salt",
      "cinnamon",
      "brown sugar",
      "eggs",
      "unsweetened applesauce",
      "plain non-fat yogurt",
      "vanilla extract",
      "apples"
    ],
    "url": "https://www.budgetbytes.com/apple-flax-muffins/"
  },
  {
    "recipe": "Roasted Poblano Hummus",
    "listOfIngredients": [
      "poblano pepper",
      "jalapeno pepper",
      "chickpeas",
      "garlic",
      "lemon juice",
      "tahini",
      "cumin",
      "salt",
      "olive oil",
      "water"
    ],
    "url": "https://www.budgetbytes.com/roasted-poblano-hummus/"
  },
  {
    "recipe": "Sopa de Fideo",
    "listOfIngredients": [
      "onion",
      "garlic",
      "vegetable oil",
      "uncooked vermicelli noodles",
      "cumin",
      "tomatoes",
      "chicken broth",
      "jalapeno",
      "lime",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/sopa-de-fideo/"
  },
  {
    "recipe": "Chili Lime Pork Loin",
    "listOfIngredients": [
      "pork loin filet",
      "chili powder",
      "lime",
      "vegetable oil",
      "garlic",
      "soy sauce"
    ],
    "url": "https://www.budgetbytes.com/chili-lime-pork-loin/"
  },
  {
    "recipe": "Blackened Tilapia",
    "listOfIngredients": [
      "smoked paprika",
      "cumin",
      "thyme",
      "oregano",
      "cayenne pepper",
      "garlic powder",
      "salt",
      "Black pepper",
      "butter",
      "tilapia filets"
    ],
    "url": "https://www.budgetbytes.com/blackened-tilapia/"
  },
  {
    "recipe": "Egg Florentine Quesadillas",
    "listOfIngredients": [
      "eggs",
      "creamed spinach",
      "shredded cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/egg-florentine-quesadillas/"
  },
  {
    "recipe": "Sriracha Chicken Strips",
    "listOfIngredients": [
      "chicken breast",
      "sriracha hot sauce",
      "rice vinegar",
      "and grated ginger",
      "garlic",
      "eggs",
      "all-purpose flour",
      "panko breadcrumbs",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/sriracha-chicken-strips/"
  },
  {
    "recipe": "Breakfast Pizza",
    "listOfIngredients": [
      "ball pizza dough",
      "pizza sauce",
      "shredded cheese",
      "roma tomato",
      "ham",
      "eggs",
      "green onions",
      "cornmeal",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/breakfast-pizza/"
  },
  {
    "recipe": "Garden Tomato Soup",
    "listOfIngredients": [
      "yellow onion",
      "celery",
      "carrots",
      "garlic",
      "olive oil",
      "ripe tomatoes",
      "chicken broth",
      "plain breadcrumbs",
      "brown sugar",
      "salt",
      "loosely packed fresh basil",
      "Worchestershire sauce",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/garden-tomato-soup/"
  },
  {
    "recipe": "Marinated Mushrooms",
    "listOfIngredients": [
      "fresh button mushrooms",
      "fresh lemon",
      "garlic",
      "olive oil",
      "fresh thyme",
      "bay leaf",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/marinated-mushrooms/"
  },
  {
    "recipe": "Creamy Mushroom Pasta w/ Chicken",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "mushrooms",
      "all-purpose flour",
      "chicken broth",
      "white wine",
      "half & half",
      "dried thyme",
      "salt and pepper",
      "fresh parsley",
      "Parmesan",
      "pasta",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/creamy-mushroom-pasta-w-chicken/"
  },
  {
    "recipe": "Teriyaki Meatball Bowls",
    "listOfIngredients": [
      "pork",
      "eggs",
      "breadcrumbs",
      "garlic",
      "fresh ginger",
      "soy sauce",
      "green onions",
      "brown sugar",
      "water",
      "corn starch",
      "jasmine rice",
      "sesame seeds",
      "frozen broccoli florets"
    ],
    "url": "https://www.budgetbytes.com/teriyaki-meatball-bowls/"
  },
  {
    "recipe": "Marinated Portobello Mushroom Burgers",
    "listOfIngredients": [
      "olive oil",
      "soy sauce",
      "apple cider vinegar",
      "brown sugar",
      "oregano",
      "garlic powder",
      "onion powder",
      "smoked paprika",
      "black pepper",
      "portobello mushroom caps",
      "buns",
      "spring mix",
      "tomato",
      "red onion",
      "mayonnaise"
    ],
    "url": "https://www.budgetbytes.com/marinated-portobello-mushroom-burgers/"
  },
  {
    "recipe": "Creamy Spinach Artichoke Chicken",
    "listOfIngredients": [
      "boneless",
      "salt and pepper",
      "cooking oil",
      "fresh spinach",
      "quartered artichoke hearts water",
      "garlic",
      "butter",
      "chicken broth",
      "sour cream",
      "cream cheese",
      "milk",
      "parmesan",
      "crushed red pepper",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/creamy-spinach-artichoke-chicken/"
  },
  {
    "recipe": "Parsley Pesto Pasta with Peas",
    "listOfIngredients": [
      "flat leaf Italian Parsley",
      "fresh lemon",
      "or shredded Parmesan",
      "garlic",
      "salt and pepper",
      "olive oil",
      "pasta",
      "frozen peas"
    ],
    "url": "https://www.budgetbytes.com/parsley-pesto-pasta-with-peas/"
  },
  {
    "recipe": "Creamy Chicken and Rice Skillet",
    "listOfIngredients": [
      "yellow onion",
      "butter",
      "boneless",
      "long grain white rice",
      "dried thyme",
      "dried sage",
      "salt",
      "black pepper",
      "chicken broth",
      "frozen peas and carrots",
      "heavy cream",
      "cheddar"
    ],
    "url": "https://www.budgetbytes.com/creamy-chicken-and-rice-skillet/"
  },
  {
    "recipe": "Crunchy Chicken Ramen Stir Fry",
    "listOfIngredients": [
      "soy sauce",
      "toasted sesame oil",
      "brown sugar",
      "mayonnaise",
      "sriracha",
      "boneless",
      "cooking oil",
      "coleslaw mix",
      "garlic",
      "fresh ginger",
      "green onions",
      "ramen noodles"
    ],
    "url": "https://www.budgetbytes.com/crunchy-chicken-ramen-stir-fry/"
  },
  {
    "recipe": "Chunky Lentil and Vegetable Soup",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "yellow onion",
      "carrots",
      "celery",
      "black beans",
      "brown lentils",
      "cumin",
      "dried oregano",
      "smoked paprika",
      "cayenne pepper",
      "black pepper",
      "petite diced tomatoes",
      "vegetable broth",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/chunky-lentil-vegetable-soup/"
  },
  {
    "recipe": "Southwest Chicken Skillet",
    "listOfIngredients": [
      "uncooked long grain white rice",
      "salsa",
      "precooked shredded chicken",
      "black beans",
      "chili powder",
      "chicken broth",
      "shredded cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/southwest-chicken-skillet/"
  },
  {
    "recipe": "5 Minute Nacho Cheese Sauce",
    "listOfIngredients": [
      "butter",
      "flour",
      "milk",
      "cheddar",
      "salt",
      "chili powder"
    ],
    "url": "https://www.budgetbytes.com/5-minute-nacho-cheese-sauce/"
  },
  {
    "recipe": "Cranberry Almond Cake",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "butter",
      "white sugar",
      "eggs",
      "vanilla extract",
      "almond extract",
      "milk",
      "fresh cranberries",
      "almonds"
    ],
    "url": "https://www.budgetbytes.com/cranberry-almond-cake/"
  },
  {
    "recipe": "Split Pea, Bacon & Potato Soup",
    "listOfIngredients": [
      "bacon",
      "yellow onion",
      "garlic",
      "split peas",
      "chicken broth",
      "bay leaf",
      "black pepper",
      "potatoes",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/split-pea-bacon-potato-soup/"
  },
  {
    "recipe": "Glazed Ham Steaks",
    "listOfIngredients": [
      "brown sugar",
      "Dijon mustard",
      "Worcestershire sauce",
      "apple cider vinegar",
      "garlic powder",
      "cloves",
      "ham steaks",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/glazed-ham-steaks/"
  },
  {
    "recipe": "Mediterranean White Bean Salad",
    "listOfIngredients": [
      "olive oil",
      "lemon juice",
      "garlic",
      "salt",
      "black pepper",
      "butter beans",
      "fresh parsley",
      "grape tomatoes",
      "feta cheese"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-white-bean-salad/"
  },
  {
    "recipe": "How to Make Crispy Hash Browns",
    "listOfIngredients": [
      "russet potatoes",
      "cooking oil",
      "Seasoning salt"
    ],
    "url": "https://www.budgetbytes.com/make-crispy-hash-browns/"
  },
  {
    "recipe": "Thai Red Curry Vegetable Soup",
    "listOfIngredients": [
      "neutral cooking oil",
      "garlic",
      "fresh ginger",
      "Thai red curry paste",
      "sweet potato",
      "baby bok choy",
      "vegetable",
      "coconut milk",
      "fish sauce",
      "brown sugar",
      "rice vermicelli noodles",
      "red onion",
      "lime",
      "fresh cilantro",
      "Sriracha"
    ],
    "url": "https://www.budgetbytes.com/thai-curry-vegetable-soup/"
  },
  {
    "recipe": "Instant Pot Congee (Rice Porridge)",
    "listOfIngredients": [
      "uncooked jasmine rice",
      "garlic",
      "fresh ginger",
      "shittake mushrooms",
      "chicken pieces",
      "water",
      "salt",
      "green onions",
      "cilantro",
      "peanuts",
      "soy sauce",
      "toasted sesame oil"
    ],
    "url": "https://www.budgetbytes.com/instant-pot-congee-jook/"
  },
  {
    "recipe": "Beef and Cauliflower Taco Skillet",
    "listOfIngredients": [
      "garlic",
      "olive oil",
      "beef",
      "riced cauliflower",
      "tomatoes with green chiles",
      "black beans",
      "chili powder",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "salt",
      "pepper",
      "cheddar cheese",
      "avocado",
      "tomato",
      "red onion",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/beef-and-cauliflower-taco-skillet/"
  },
  {
    "recipe": "multi-purpose shredded beef",
    "listOfIngredients": [
      "boneless beef rump roast",
      "beef broth"
    ],
    "url": "https://www.budgetbytes.com/multi-purpose-shredded-beef/"
  },
  {
    "recipe": "Oatmeal Pumpkin Cookies",
    "listOfIngredients": [
      "all-purpose flour",
      "baking soda",
      "baking powder",
      "salt",
      "cinnamon",
      "butter",
      "pumpkin puree",
      "brown sugar",
      "white sugar",
      "eggs",
      "vanilla extract",
      "rolled oats",
      "dried cranberries"
    ],
    "url": "https://www.budgetbytes.com/oatmeal-pumpkin-cookies/"
  },
  {
    "recipe": "Cajun Potato Salad",
    "listOfIngredients": [
      "potatoes",
      "hard boiled eggs",
      "green onions",
      "celery",
      "fresh parsley",
      "mayonnaise",
      "coarse brown",
      "red wine vinegar",
      "blackened seasoning",
      "salt",
      "smoked paprika",
      "cumin",
      "thyme",
      "oregano",
      "cayenne pepper",
      "garlic powder",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/cajun-potato-salad/"
  },
  {
    "recipe": "Moroccan Beef Stew",
    "listOfIngredients": [
      "olive oil",
      "beef stew meat",
      "yellow onion",
      "fresh ginger",
      "garlic",
      "allspice",
      "cinnamon",
      "red wine",
      "tomato paste",
      "honey",
      "crushed red pepper",
      "salt",
      "water",
      "dried apricots",
      "raisins",
      "dry jasmine rice"
    ],
    "url": "https://www.budgetbytes.com/moroccan-beef-stew/"
  },
  {
    "recipe": "Chicken and Pumpkin Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "chicken broth",
      "chicken breast",
      "pumpkin puree",
      "black beans",
      "frozen corn kernels",
      "chipotle peppers adobo sauce",
      "cumin",
      "salt",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/chicken-pumpkin-soup/"
  },
  {
    "recipe": "Hummus Breakfast Mug",
    "listOfIngredients": [
      "eggs",
      "hummus"
    ],
    "url": "https://www.budgetbytes.com/hummus-breakfast-mug/"
  },
  {
    "recipe": "Lobster & Cream Cheese Wontons",
    "listOfIngredients": [
      "cream cheese",
      "imitation lobster",
      "eggs",
      "green onions",
      "wonton wrappers",
      "sriracha hot sauce",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/lobster-cream-cheese-wontons/"
  },
  {
    "recipe": "BBQ Black Bean Pizzas",
    "listOfIngredients": [
      "fajita size flour tortillas",
      "BBQ sauce",
      "black beans",
      "shredded monterrey jack cheese",
      "green onions",
      "red onion"
    ],
    "url": "https://www.budgetbytes.com/bbq-black-bean-pizzas/"
  },
  {
    "recipe": "Peanut Soba Stir Fry",
    "listOfIngredients": [
      "fresh ginger",
      "natural peanut butter",
      "hoisin sauce",
      "water",
      "sriracha hot sauce",
      "vegetable oil",
      "garlic",
      "frozen stir fry vegetables",
      "soba noodles",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/peanut-soba-stir-fry/"
  },
  {
    "recipe": "Slow Cooker Chicken",
    "listOfIngredients": [
      "chicken",
      "lemon",
      "bulb garlic",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-chicken/"
  },
  {
    "recipe": "Creamy Salsa Chicken Skillet",
    "listOfIngredients": [
      "boneless",
      "chili powder",
      "cumin",
      "garlic powder",
      "salt",
      "cooking oil",
      "salsa",
      "black beans",
      "frozen corn kernels",
      "sour cream",
      "queso fresco",
      "fresh cilantro",
      "cooked rice for serving"
    ],
    "url": "https://www.budgetbytes.com/creamy-salsa-chicken-skillet/"
  },
  {
    "recipe": "Roasted Cauliflower Taco Bowls with Cilantro Lime Ranch",
    "listOfIngredients": [
      "mayonnaise",
      "sour cream",
      "lime",
      "garlic powder",
      "onion powder",
      "cilantro",
      "green onion",
      "salt",
      "cauliflower",
      "olive oil",
      "chili powder",
      "smoked paprika",
      "cumin",
      "cayenne pepper",
      "dried oregano",
      "black pepper",
      "long grain white rice",
      "water",
      "black beans",
      "frozen corn",
      "cooking oil",
      "grape tomatoes",
      "Fresh cilantro and sliced green onion for garnish"
    ],
    "url": "https://www.budgetbytes.com/roasted-cauliflower-taco-bowls/"
  },
  {
    "recipe": "Easy Slow Cooker White Chicken Chili",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "jalapeno",
      "chicken breast",
      "salsa verde",
      "cannellini beans",
      "pinto beans",
      "cumin",
      "dried oregano",
      "cayenne pepper",
      "black pepper",
      "chicken broth",
      "Monterey Jack cheese"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-white-chicken-chili/"
  },
  {
    "recipe": "Peanut Butter Brownie Baked Oatmeal",
    "listOfIngredients": [
      "mashed ripe bananas",
      "eggs",
      "natural peanut butter",
      "brown sugar",
      "vanilla extract",
      "salt",
      "baking powder",
      "cinnamon",
      "unsweetened cocoa powder",
      "milk",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-brownie-baked-oatmeal/"
  },
  {
    "recipe": "Beer Cheese Dip",
    "listOfIngredients": [
      "beer",
      "water",
      "cornstarch",
      "cream cheese",
      "sharp cheddar cheese",
      "Worcestershire sauce",
      "Dijon mustard",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/beer-cheese-dip/"
  },
  {
    "recipe": "Miracle Mac and Cheese",
    "listOfIngredients": [
      "milk",
      "dry macaroni",
      "shredded cheddar cheese",
      "salt",
      "Dijon mustard",
      "smoked paprika",
      "cranks fresh cracked pepper"
    ],
    "url": "https://www.budgetbytes.com/miracle-mac-n-cheese/"
  },
  {
    "recipe": "Chana Saag Curry",
    "listOfIngredients": [
      "long grain white rice",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "olive oil",
      "curry powder hot",
      "cumin",
      "salt",
      "tomato",
      "frozen chopped spinach",
      "chickpeas",
      "water",
      "coconut milk"
    ],
    "url": "https://www.budgetbytes.com/chana-saag/"
  },
  {
    "recipe": "Homemade Naan Recipe",
    "listOfIngredients": [
      "dry active yeast",
      "sugar",
      "water",
      "flour",
      "salt",
      "olive oil",
      "plain yogurt",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/naan/"
  },
  {
    "recipe": "Spanish Chickpeas and Rice",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "cayenne pepper",
      "Freshly cracked black pepper",
      "yellow onion",
      "uncooked long grain white rice",
      "tomatoes",
      "quartered artichoke hearts",
      "chickpeas",
      "vegetable broth",
      "salt",
      "fresh parsley",
      "fresh lemon"
    ],
    "url": "https://www.budgetbytes.com/spanish-chickpeas-and-rice/"
  },
  {
    "recipe": "Broiled Balsamic Vegetables with Lemon Parsley Rice",
    "listOfIngredients": [
      "olive oil",
      "balsamic vinegar",
      "garlic",
      "brown sugar",
      "soy sauce",
      "Dijon mustard",
      "Black pepper",
      "button mushrooms",
      "green bell pepper",
      "zucchini",
      "grape tomatoes",
      "yellow",
      "long grain white rice",
      "water",
      "salt",
      "fresh parsley",
      "Zest of one lemon"
    ],
    "url": "https://www.budgetbytes.com/broiled-balsamic-vegetables-with-lemon-parsley-rice/"
  },
  {
    "recipe": "Oatmeal Molasses Bread",
    "listOfIngredients": [
      "quick",
      "butter",
      "envelope yeast",
      "molasses",
      "salt",
      "wheat flour",
      "all-purpose flour"
    ],
    "url": "https://www.budgetbytes.com/oatmeal-molasses-bread/"
  },
  {
    "recipe": "Wilted Kale and Lentil Salad",
    "listOfIngredients": [
      "sweet potato",
      "red onion",
      "olive oil",
      "salt and pepper",
      "brown lentils",
      "curly leaf kale",
      "garlic",
      "cumin",
      "apple cider vinegar"
    ],
    "url": "https://www.budgetbytes.com/wilted-kale-and-lentil-salad/"
  },
  {
    "recipe": "Tuna Pasta Salad with Peas",
    "listOfIngredients": [
      "bow tie pasta",
      "chunk light tuna in water",
      "lemon",
      "onion",
      "salt",
      "fresh ground black pepper",
      "light mayonnaise",
      "frozen sweet peas"
    ],
    "url": "https://www.budgetbytes.com/tuna-pasta-salad-wpeas/"
  },
  {
    "recipe": "Sauteed Corn and Tomatoes",
    "listOfIngredients": [
      "butter",
      "garlic",
      "tomatoes",
      "dried basil",
      "salt",
      "Freshly cracked black pepper",
      "sugar",
      "frozen corn kernels",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/sauteed-corn-tomatoes/"
  },
  {
    "recipe": "Soft Oat and Nut Bars",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "wheat flour",
      "baking powder",
      "salt",
      "cinnamon",
      "brown sugar",
      "butter",
      "eggs",
      "vanilla extract",
      "plain",
      "walnuts",
      "sweetened shredded coconut"
    ],
    "url": "https://www.budgetbytes.com/soft-oat-nut-bars/"
  },
  {
    "recipe": "Baked Pineapple Teriyaki Chicken Thighs",
    "listOfIngredients": [
      "pineapple chunks juice",
      "fresh ginger",
      "garlic",
      "soy sauce",
      "rice vinegar",
      "brown sugar",
      "cornstarch",
      "boneless",
      "green onions",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/baked-pineapple-teriyaki-chicken-thighs/"
  },
  {
    "recipe": "Morning Glory Muffins",
    "listOfIngredients": [
      "all-purpose flour",
      "wheat flour",
      "oat bran",
      "sugar",
      "baking soda",
      "cinnamon",
      "salt",
      "vegetable oil",
      "unsweetened applesauce",
      "eggs",
      "vanilla",
      "carrots",
      "raisins",
      "walnuts",
      "shredded coconut"
    ],
    "url": "https://www.budgetbytes.com/morning-glory-muffins/"
  },
  {
    "recipe": "Zucchini Pizza Boats",
    "listOfIngredients": [
      "zucchini",
      "tomato sauce",
      "breadcrumbs",
      "parmesan cheese",
      "Italian seasoning blend",
      "black olives",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/zucchini-pizza-boats/"
  },
  {
    "recipe": "Eggplant Parmesan",
    "listOfIngredients": [
      "eggplant",
      "salt",
      "all-purpose flour",
      "eggs",
      "breadcrumbs",
      "garlic powder",
      "parsley flakes",
      "parmesan",
      "homemade marinara",
      "shredded mozzarella",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/eggplant-parmesan/"
  },
  {
    "recipe": "Lemon Ricotta Cookies",
    "listOfIngredients": [
      "butter",
      "granulated sugar",
      "eggs",
      "vanilla",
      "ricotta cheese",
      "all purpose flour",
      "baking powder",
      "salt",
      "powdered sugar",
      "lemon"
    ],
    "url": "https://www.budgetbytes.com/lemon-ricotta-cookies/"
  },
  {
    "recipe": "Olive Herb Bread",
    "listOfIngredients": [
      "wheat flour",
      "bread flour",
      "salt",
      "active dry",
      "pitted kalamata olives",
      "dry thyme",
      "water",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/olive-herb-bread/"
  },
  {
    "recipe": "Hummus & Grilled Vegetable Pizza",
    "listOfIngredients": [
      "pizza dough",
      "recipe hummus",
      "zucchini",
      "summer squash",
      "portabello mushroom cap",
      "red onion",
      "roasted red peppers",
      "olive oil",
      "salt and pepper",
      "crushed red pepper",
      "cornmeal"
    ],
    "url": "https://www.budgetbytes.com/hummus-grilled-vegetable-pizza/"
  },
  {
    "recipe": "Tangy Tomato Pasta",
    "listOfIngredients": [
      "thin spaghetti",
      "olive oil",
      "garlic",
      "dried basil",
      "dried oregano",
      "salt",
      "dried rosemary",
      "dried thyme",
      "crushed red pepper",
      "black pepper",
      "tomato paste",
      "honey",
      "feta cheese"
    ],
    "url": "https://www.budgetbytes.com/tangy-tomato-pasta/"
  },
  {
    "recipe": "Baked Barley with Mushrooms",
    "listOfIngredients": [
      "garlic",
      "mushrooms",
      "butter",
      "pearled barley",
      "vegetable broth",
      "dried thyme",
      "black pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/baked-barley-mushrooms/"
  },
  {
    "recipe": "Spiced Lentils with Carrots",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "fresh grated ginger",
      "carrots",
      "olive oil",
      "cumin",
      "cinnamon",
      "allspice",
      "crushed red pepper",
      "brown lentils",
      "tomato paste",
      "dried apricots",
      "vegetable broth",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/spiced-lentils-with-carrots/"
  },
  {
    "recipe": "Classic Baked Ziti",
    "listOfIngredients": [
      "Italian sausage",
      "yellow onion",
      "tomato paste",
      "crushed tomatoes",
      "Italian seasoning blend",
      "water",
      "ziti",
      "salt",
      "ricotta",
      "Italian cheese blend",
      "black pepper",
      "shredded mozzarella",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/classic-baked-ziti/"
  },
  {
    "recipe": "Beer Bread",
    "listOfIngredients": [
      "all-purpose flour",
      "sugar",
      "baking powder",
      "salt",
      "shredded sharp cheddar cheese",
      "butter",
      "beer"
    ],
    "url": "https://www.budgetbytes.com/beer-bread/"
  },
  {
    "recipe": "The Hummus Lunch Box",
    "listOfIngredients": [
      "cucumber",
      "pita breads",
      "hummus",
      "grape tomatoes",
      "kalamata olives"
    ],
    "url": "https://www.budgetbytes.com/the-hummus-lunch-box/"
  },
  {
    "recipe": "The Tuna Salad Lunch Box",
    "listOfIngredients": [
      "chunk light tuna water",
      "celery",
      "walnuts",
      "green onions",
      "mayonnaise",
      "lemon juice",
      "salt",
      "black pepper",
      "mini sweet peppers",
      "crackers"
    ],
    "url": "https://www.budgetbytes.com/the-tuna-salad-lunch-box/"
  },
  {
    "recipe": "Hoisin Stir Fry Bowls with Spicy Peanut Sauce",
    "listOfIngredients": [
      "natural-style peanut butter",
      "sriracha",
      "soy sauce",
      "fresh ginger",
      "brown sugar",
      "water",
      "neutral cooking oil",
      "garlic",
      "pork",
      "button mushrooms",
      "carrots",
      "red bell pepper",
      "hoisin sauce",
      "toasted sesame oil",
      "cooked rice",
      "peanuts",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/hoisin-stir-fry-bowls-spicy-peanut-sauce/"
  },
  {
    "recipe": "Turkey and Stuffing Meatballs",
    "listOfIngredients": [
      "stuffing mix",
      "water",
      "turkey",
      "eggs",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/turkey-and-stuffing-meatballs/"
  },
  {
    "recipe": "Homemade Cajun Seasoning",
    "listOfIngredients": [
      "smoked paprika",
      "oregano",
      "thyme",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/homemade-cajun-seasoning/"
  },
  {
    "recipe": "Chipotle Pumpkin Pasta",
    "listOfIngredients": [
      "yellow onion",
      "olive oil",
      "garlic",
      "chipotle powder",
      "pumpkin puree",
      "chicken broth",
      "salt",
      "black pepper",
      "pasta",
      "heavy cream",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/chipotle-pumpkin-pasta/"
  },
  {
    "recipe": "Kale Chicken and Gnocchi Soup",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "yellow onion",
      "carrots",
      "kale",
      "chicken breast",
      "chicken broth",
      "nutmeg",
      "dried basil",
      "Freshly cracked black pepper",
      "crushed red pepper",
      "gnocchi",
      "half and half"
    ],
    "url": "https://www.budgetbytes.com/kale-chicken-and-gnocchi-soup/"
  },
  {
    "recipe": "Coffee Rubbed Pork Roast",
    "listOfIngredients": [
      "Boston Butt",
      "coffee beans",
      "brown sugar",
      "cayenne pepper",
      "salt",
      "cranks cracked black pepper",
      "garlic",
      "smoked paprika"
    ],
    "url": "https://www.budgetbytes.com/coffee-rubbed-pork-roast/"
  },
  {
    "recipe": "Dolmas (Stuffed Grape Leaves)",
    "listOfIngredients": [
      "grape leaves",
      "yellow onion",
      "garlic",
      "olive oil",
      "long grain rice",
      "lemon juice",
      "salt",
      "fresh mint"
    ],
    "url": "https://www.budgetbytes.com/dolmas-stuffed-grape-leaves/"
  },
  {
    "recipe": "Dijon Lentil Salad",
    "listOfIngredients": [
      "olive oil",
      "turnip",
      "carrots",
      "onion",
      "garlic",
      "cloves",
      "brown lentils",
      "water",
      "red wine vinegar",
      "dijon mustard",
      "salt",
      "cracked black pepper",
      "butter",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/dijon-lentil-salad/"
  },
  {
    "recipe": "Quick & Easy Garlic Noodles",
    "listOfIngredients": [
      "angel hair pasta",
      "garlic",
      "green onions",
      "butter",
      "soy sauce",
      "brown sugar",
      "sesame oil",
      "oyster sauce"
    ],
    "url": "https://www.budgetbytes.com/garlic-noodles/"
  },
  {
    "recipe": "Cranberry Almond Biscotti",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "granulated sugar",
      "butter",
      "eggs",
      "vanilla extract",
      "almond extract",
      "almonds",
      "lemon",
      "cinnamon",
      "nutmeg",
      "dried cranberries"
    ],
    "url": "https://www.budgetbytes.com/cranberry-almond-biscotti/"
  },
  {
    "recipe": "Spicy Shrimp Tomato Pasta",
    "listOfIngredients": [
      "fettuccine",
      "olive oil",
      "butter",
      "garlic",
      "& deveined shrimp",
      "tomatoes",
      "crushed red pepper flakes",
      "salt",
      "Black pepper",
      "Handful fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/spicy-shrimp-tomato-pasta/"
  },
  {
    "recipe": "Tuna and Red Pepper Pasta",
    "listOfIngredients": [
      "pasta",
      "extra virgin olive oil",
      "garlic",
      "crushed red pepper",
      "fresh parsley",
      "chunk tuna",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/tuna-red-pepper-pasta/"
  },
  {
    "recipe": "Lemon Spice Cake",
    "listOfIngredients": [
      "all-purpose flour",
      "granulated sugar",
      "baking soda",
      "cinnamon",
      "ginger",
      "nutmeg",
      "cloves",
      "salt",
      "lemon",
      "vegetable shortening",
      "apple cider vinegar",
      "water",
      "powdered sugar"
    ],
    "url": "https://www.budgetbytes.com/lemon-spice-cake/"
  },
  {
    "recipe": "Slow Cooker Ham and Bean Soup",
    "listOfIngredients": [
      "yellow onion",
      "stalks celery",
      "carrots",
      "garlic",
      "smoked ham hocks",
      "dry 16 bean mix",
      "bay leaves",
      "dried thyme",
      "dried oregano",
      "chicken base",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/ham-bean-soup/"
  },
  {
    "recipe": "Gochujang Ramen with Tofu",
    "listOfIngredients": [
      "extra firm tofu",
      "water",
      "vegetable broth",
      "gochujang",
      "instant ramen",
      "fresh spinach",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/gochujang-ramen-with-tofu/"
  },
  {
    "recipe": "Spicy Chorizo Cheese Dip",
    "listOfIngredients": [
      "Mexican chorizo",
      "tomatoes with green chiles",
      "evaporated milk",
      "Monterey jack cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/spicy-chorizo-cheese-dip/"
  },
  {
    "recipe": "Sweet Potato Corn Cakes with Garlic Dipping Sauce",
    "listOfIngredients": [
      "sweet potatoes",
      "frozen corn kernels",
      "green onions",
      "cilantro",
      "cayenne pepper",
      "cumin",
      "salt",
      "eggs",
      "yellow cornmeal",
      "plain breadcrumbs",
      "vegetable oil for frying",
      "plain yogurt",
      "garlic"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-corn-cakes-with-garlic-dipping-sauce/"
  },
  {
    "recipe": "cucumber raita",
    "listOfIngredients": [
      "plain yogurt",
      "cucumber",
      "fresh ginger",
      "coriander",
      "cumin",
      "salt",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/cucumber-raita/"
  },
  {
    "recipe": "Mango Coconut Jasmine Rice",
    "listOfIngredients": [
      "uncooked jasmine rice",
      "coconut milk",
      "water",
      "salt",
      "honey",
      "mango"
    ],
    "url": "https://www.budgetbytes.com/mango-coconut-jasmine-rice/"
  },
  {
    "recipe": "Oven Roasted Frozen Broccoli",
    "listOfIngredients": [
      "frozen broccoli florets",
      "olive oil",
      "Montreal steak seasoning"
    ],
    "url": "https://www.budgetbytes.com/oven-roasted-frozen-broccoli/"
  },
  {
    "recipe": "Turkey Meatballs",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "vegetable oil",
      "turkey Italian sausage",
      "fresh parsley",
      "breadcrumbs",
      "egg whites",
      "parmesan cheese",
      "worchestershire",
      "sriracha sauce",
      "red pepper flakes",
      "all purpose flour",
      "cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/turkey-meatballs/"
  },
  {
    "recipe": "Garlic Parmesan Kale Pasta",
    "listOfIngredients": [
      "kale",
      "angel hair pasta",
      "olive oil",
      "butter",
      "garlic",
      "Parmesan",
      "salt and pepper",
      "red pepper flakes"
    ],
    "url": "https://www.budgetbytes.com/garlic-parmesan-kale-pasta/"
  },
  {
    "recipe": "Corn and Cheddar Pudding",
    "listOfIngredients": [
      "frozen corn",
      "milk",
      "half & half",
      "eggs",
      "cornmeal",
      "honey",
      "cayenne",
      "salt",
      "cheddar"
    ],
    "url": "https://www.budgetbytes.com/corn-cheddar-pudding/"
  },
  {
    "recipe": "Honey Sunflower Bread",
    "listOfIngredients": [
      "water",
      "honey",
      "instant",
      "olive oil",
      "raw sunflower seeds",
      "wheat flour",
      "salt",
      "all-purpose flour",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/honey-sunflower-bread/"
  },
  {
    "recipe": "Sausage & Pepper Pasta",
    "listOfIngredients": [
      "Italian sausage",
      "vegetable oil",
      "green bell peppers",
      "red bell pepper",
      "yellow bell pepper",
      "yellow onion",
      "garlic",
      "petite diced tomatoes",
      "dried basil",
      "dried oregano",
      "crushed red pepper",
      "salt",
      "pasta"
    ],
    "url": "https://www.budgetbytes.com/sausage-pepper-pasta/"
  },
  {
    "recipe": "No Knead Pan Pizza",
    "listOfIngredients": [
      "all-purpose flour",
      "instant",
      "salt",
      "olive oil",
      "water",
      "sauce",
      "shredded mozzarella",
      "Toppings of your choice"
    ],
    "url": "https://www.budgetbytes.com/knead-pan-pizza/"
  },
  {
    "recipe": "Green Gazpacho",
    "listOfIngredients": [
      "cucumbers",
      "white onion",
      "green bell pepper",
      "garlic",
      "avocado",
      "fresh parsley",
      "fresh cilantro",
      "olive oil",
      "salt",
      "lemon juice",
      "water"
    ],
    "url": "https://www.budgetbytes.com/green-gazpacho/"
  },
  {
    "recipe": "Creamy Vegetarian Enchilada Pasta",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "green chiles",
      "frozen corn kernels",
      "pinto",
      "cumin",
      "red pepper flakes",
      "wide egg noodles",
      "vegetable broth",
      "sour cream",
      "green onions",
      "cilantro",
      "shredded pepper jack cheese"
    ],
    "url": "https://www.budgetbytes.com/creamy-vegetarian-enchilada-pasta/"
  },
  {
    "recipe": "Spinach Rice Breakfast Bowls",
    "listOfIngredients": [
      "cooked seasoned rice",
      "frozen chopped spinach",
      "butter",
      "eggs",
      "salt and pepper",
      "splash of hot sauce"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-spinach-rice-breakfast-bowls/"
  },
  {
    "recipe": "Soy Dijon Chicken Thighs with Sweet Potatoes",
    "listOfIngredients": [
      "Dijon mustard",
      "soy sauce",
      "vegetable oil",
      "brown sugar",
      "garlic",
      "Black pepper",
      "chicken thighs",
      "sweet potato"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-soy-dijon-chicken-thighs-sweet-potatoes/"
  },
  {
    "recipe": "Blueberry Banana Baked Oatmeal",
    "listOfIngredients": [
      "mashed bananas",
      "eggs",
      "white sugar",
      "vanilla extract",
      "salt",
      "baking powder",
      "milk",
      "old fashioned oats",
      "frozen blueberries"
    ],
    "url": "https://www.budgetbytes.com/blueberry-banana-baked-oatmeal/"
  },
  {
    "recipe": "Louisiana Style Red Beans and Rice with Sausage",
    "listOfIngredients": [
      "dry red beans",
      "cooking oil",
      "Andouille sausage",
      "yellow onion",
      "green bell pepper",
      "celery",
      "garlic",
      "smoked paprika",
      "dried oregano",
      "dried thyme",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "bay leaves",
      "water",
      "parsley",
      "salt",
      "long grain white rice",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/louisiana-red-beans-rice/"
  },
  {
    "recipe": "Southwest Tofu Scramble",
    "listOfIngredients": [
      "firm tofu",
      "turmeric",
      "cumin",
      "chili powder",
      "garlic powder",
      "salt",
      "black pepper",
      "cooking oil",
      "tomatoes with green chiles",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/southwest-tofu-scramble/"
  },
  {
    "recipe": "Homemade Black Bean Burgers",
    "listOfIngredients": [
      "black beans",
      "red onion",
      "garlic",
      "fresh cilantro",
      "sriracha",
      "mayonnaise",
      "cumin",
      "soy sauce",
      "pepper",
      "eggs",
      "plain breadcrumbs",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/black-bean-burgers/"
  },
  {
    "recipe": "Pesto Shrimp Pasta",
    "listOfIngredients": [
      "shrimp",
      "angel hair pasta",
      "olive oil",
      "garlic",
      "grape tomatoes",
      "basil pesto",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/pesto-shrimp-pasta/"
  },
  {
    "recipe": "Vegan Winter Lentil Stew",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "carrots",
      "celery",
      "potatoes",
      "brown lentils",
      "dried rosemary",
      "dried thyme",
      "Dijon mustard",
      "soy sauce",
      "brown sugar",
      "vegetable broth",
      "frozen peas"
    ],
    "url": "https://www.budgetbytes.com/vegan-winter-lentil-stew/"
  },
  {
    "recipe": "Skillet Chicken with Orzo and Olives",
    "listOfIngredients": [
      "chicken thighs",
      "salt and pepper",
      "olive oil",
      "garlic",
      "tomatoes",
      "pitted kalamata olives",
      "dried oregano",
      "chicken broth",
      "orzo",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/skillet-chicken-with-orzo-and-olives/"
  },
  {
    "recipe": "Slow Cooker White Bean Soup",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "yellow onion",
      "carrots",
      "celery",
      "dry navy beans",
      "bay leaf",
      "dried rosemary",
      "dried thyme",
      "smoked paprika",
      "Freshly cracked black pepper",
      "water",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-white-bean-soup/"
  },
  {
    "recipe": "Ham & Potato Frittata",
    "listOfIngredients": [
      "olive oil",
      "potatoes",
      "green onions",
      "a 9 oz.deli ham",
      "salt and pepper",
      "eggs",
      "milk",
      "parmesan cheese"
    ],
    "url": "https://www.budgetbytes.com/ham-potato-frittata/"
  },
  {
    "recipe": "Peach Almond Crisp",
    "listOfIngredients": [
      "peaches",
      "lemon",
      "cornstarch",
      "almond extract",
      "almonds",
      "rolled oats",
      "all-purpose flour",
      "brown sugar",
      "cinnamon",
      "salt",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/peach-almond-crisp/"
  },
  {
    "recipe": "One Pot Chili Pasta",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "beef",
      "all-purpose flour",
      "chili powder",
      "tomato sauce",
      "tomatoes",
      "black beans",
      "kidney beans",
      "frozen corn kernels",
      "uncooked elbow macaroni",
      "beef broth",
      "shredded cheese"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-one-pot-chili-pasta/"
  },
  {
    "recipe": "Roasted Vegetable Burritos",
    "listOfIngredients": [
      "uncooked long grain white rice",
      "salt",
      "chili powder",
      "zucchini",
      "red onion",
      "red bell pepper",
      "mushrooms",
      "cumin",
      "dried oregano",
      "olive oil",
      "flour tortillas",
      "black beans",
      "shredded cheese",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/roasted-vegetable-burritos/"
  },
  {
    "recipe": "Crab Dip",
    "listOfIngredients": [
      "cream cheese",
      "sour cream",
      "Old Bay Seasoning",
      "lemon juice",
      "hot sauce",
      "garlic powder",
      "green onions",
      "imitation crab",
      "sharp cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/crab-dip/"
  },
  {
    "recipe": "Creamy Pesto Pasta with Chicken and Broccoli",
    "listOfIngredients": [
      "bow tie pasta",
      "frozen broccoli florets",
      "olive oil",
      "boneless",
      "basil pesto",
      "chicken broth",
      "cream cheese"
    ],
    "url": "https://www.budgetbytes.com/creamy-pesto-pasta-chicken-broccoli/"
  },
  {
    "recipe": "Smoky White Bean Shakshuka",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "yellow onion",
      "tomatoes",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "crushed red pepper",
      "Freshly cracked black pepper",
      "salt",
      "cannellini beans",
      "eggs",
      "fresh parsley",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/smoky-white-bean-shakshuka/"
  },
  {
    "recipe": "Beef Taco Skillet",
    "listOfIngredients": [
      "chili powder",
      "smoked paprika",
      "cumin",
      "cayenne pepper",
      "dried oregano",
      "salt",
      "black pepper",
      "beef",
      "black beans",
      "grape tomatoes",
      "tortilla chips",
      "shredded cheddar cheese",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/beef-taco-skillet/"
  },
  {
    "recipe": "Kielbasa and Cabbage Skillet",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "stone ground",
      "garlic powder",
      "salt",
      "black pepper",
      "kielbasa",
      "yellow onion",
      "cabbage",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/kielbasa-cabbage-skillet/"
  },
  {
    "recipe": "Easy Cheesy Broccoli Rice",
    "listOfIngredients": [
      "long grain rice",
      "water",
      "frozen broccoli florets",
      "butter",
      "salt",
      "garlic powder",
      "cayenne pepper",
      "Black pepper",
      "Parmesan",
      "shredded sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/easy-cheesy-broccoli-rice/"
  },
  {
    "recipe": "Slow Cooker Chicken & Dumplings",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "celery",
      "carrots",
      "chicken breast",
      "bay leaf",
      "dried basil",
      "dried thyme",
      "black pepper",
      "water",
      "salt",
      "all-purpose flour",
      "baking powder",
      "dried parsley",
      "cold butter",
      "sugar",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-chicken-dumplings/"
  },
  {
    "recipe": "Tomato Spinach One Pot Pasta",
    "listOfIngredients": [
      "vegetable broth",
      "olive oil",
      "fettuccine",
      "frozen chopped spinach",
      "tomatoes",
      "yellow onion",
      "garlic",
      "dried basil",
      "dried oregano",
      "crushed red pepper",
      "black pepper",
      "shaved Parmesan"
    ],
    "url": "https://www.budgetbytes.com/italian-wonderpot/"
  },
  {
    "recipe": "Pepperoni Stuffed Chicken",
    "listOfIngredients": [
      "boneless",
      "mozzarella cheese",
      "pepperoni",
      "eggs",
      "all purpose flour",
      "breadcrumbs",
      "vegetable oil",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/pepperoni-stuffed-chicken/"
  },
  {
    "recipe": "Green Smoothie",
    "listOfIngredients": [
      "orange juice",
      "yogurt",
      "fresh baby spinach",
      "frozen pineapple chunks",
      "green apple",
      "bananas"
    ],
    "url": "https://www.budgetbytes.com/green-smoothie/"
  },
  {
    "recipe": "Garden Vegetable Lasagna Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "carrots",
      "zucchini",
      "tomatoes",
      "tomato sauce",
      "Italian seasoning blend",
      "vegetable broth",
      "lasagna noodles",
      "frozen spinach",
      "ricotta",
      "shredded mozzarella",
      "Parmesan",
      "salt",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/garden-vegetable-lasagna-soup/"
  },
  {
    "recipe": "Crispy Baked Honey Sriracha Chicken Drumsticks",
    "listOfIngredients": [
      "chicken drumsticks",
      "salt and pepper",
      "cornstarch",
      "sriracha",
      "butter",
      "honey"
    ],
    "url": "https://www.budgetbytes.com/crispy-baked-honey-sriracha-chicken-drumsticks/"
  },
  {
    "recipe": "Creamy Mushroom Soup",
    "listOfIngredients": [
      "baby bella mushrooms",
      "olive oil",
      "garlic",
      "salt and pepper",
      "butter",
      "all-purpose flour",
      "vegetable broth",
      "water",
      "dried thyme",
      "heavy cream",
      "soy sauce"
    ],
    "url": "https://www.budgetbytes.com/creamy-garlic-mushroom-soup/"
  },
  {
    "recipe": "20 Minute Creamy Spinach Artichoke Pasta",
    "listOfIngredients": [
      "butter",
      "garlic",
      "chicken broth",
      "milk",
      "salt",
      "Freshly cracked black pepper",
      "linguine",
      "fresh baby spinach",
      "quartered artichoke hearts",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/20-minute-creamy-spinach-artichoke-pasta/"
  },
  {
    "recipe": "Nam Sod (Thai Pork Salad)",
    "listOfIngredients": [
      "fresh lime juice",
      "fish sauce",
      "fresh ginger",
      "chili garlic sauce",
      "pork",
      "garlic",
      "canola oil",
      "red onion",
      "carrots",
      "cilantro",
      "unsalted peanuts",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/nam-sod-thai-pork-salad/"
  },
  {
    "recipe": "Coconut Chicken Soup",
    "listOfIngredients": [
      "lemongrass",
      "fresh ginger",
      "lime",
      "crushed red pepper",
      "coconut milk",
      "chicken broth",
      "boneless",
      "fish sauce",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/coconut-chicken-soup/"
  },
  {
    "recipe": "Spicy Sriracha Noodles",
    "listOfIngredients": [
      "lo mein noodles",
      "butter",
      "crushed red pepper",
      "eggs",
      "brown sugar",
      "soy sauce",
      "sriracha",
      "fresh cilantro",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/spicy-noodles/"
  },
  {
    "recipe": "Vegetarian Shepherd's Pie",
    "listOfIngredients": [
      "cooked lentils",
      "garlic",
      "yellow onion",
      "olive oil",
      "carrots",
      "celery",
      "button mushrooms",
      "salt",
      "dried thyme",
      "smoked paprika",
      "Black pepper",
      "tomato paste",
      "flour",
      "vegetable broth",
      "frozen peas",
      "mashed potatoes"
    ],
    "url": "https://www.budgetbytes.com/vegetarian-shepherds-pie/"
  },
  {
    "recipe": "Easy Ricotta Gnocchi",
    "listOfIngredients": [
      "ricotta cheese",
      "eggs",
      "olive oil",
      "all-purpose flour",
      "salt",
      "cranks fresh cracked pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-ricotta-gnocchi/"
  },
  {
    "recipe": "Teriyaki Noodle Bowls",
    "listOfIngredients": [
      "soy sauce",
      "rice vinegar",
      "brown sugar",
      "toasted sesame oil",
      "garlic",
      "fresh ginger",
      "red pepper flakes",
      "cornstarch",
      "water",
      "frozen stir fry vegetables",
      "buckwheat soba noodles",
      "vegetable oil"
    ],
    "url": "https://www.budgetbytes.com/teriyaki-noodle-bowls/"
  },
  {
    "recipe": "Seasoned Rice",
    "listOfIngredients": [
      "long grain brown rice",
      "garlic powder",
      "dried thyme",
      "crushed red pepper",
      "salt",
      "water"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-seasoned-rice/"
  },
  {
    "recipe": "Summer Vegetable Tian",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "zucchini",
      "yellow squash",
      "potato",
      "tomato",
      "dried thyme",
      "salt and pepper",
      "shredded Italian blend cheese",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/summer-vegetable-tian/"
  },
  {
    "recipe": "Easy Creamy Coleslaw",
    "listOfIngredients": [
      "mayonnaise",
      "honey",
      "Dijon mustard",
      "red wine vinegar",
      "salt",
      "black pepper",
      "coleslaw mix",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/simple-creamy-coleslaw/"
  },
  {
    "recipe": "Panzanella",
    "listOfIngredients": [
      "bread",
      "olive oil",
      "cherry tomatoes",
      "nectarine",
      "cucumber",
      "red onion",
      "baby spring mix",
      "mozzarella pearls",
      "salt",
      "red wine vinegar"
    ],
    "url": "https://www.budgetbytes.com/panzanella/"
  },
  {
    "recipe": "Easiest Burrito Bowl Meal Prep",
    "listOfIngredients": [
      "cooked rice",
      "turkey",
      "taco seasoning",
      "frozen corn kernels",
      "black beans",
      "cheese",
      "salsa",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/easiest-burrito-bowl-meal-prep/"
  },
  {
    "recipe": "Easy Quiche Lorraine",
    "listOfIngredients": [
      "puff pastry",
      "bacon",
      "yellow onion",
      "garlic",
      "cream cheese",
      "heavy cream",
      "milk",
      "eggs",
      "shredded Swiss cheese",
      "nutmeg",
      "salt",
      "Freshly cracked black pepper",
      "fresh Italian parsley for garnish"
    ],
    "url": "https://www.budgetbytes.com/easy-quiche-lorraine/"
  },
  {
    "recipe": "Blistered Green Bean Rice Bowl",
    "listOfIngredients": [
      "water",
      "long grain rice",
      "salted butter",
      "cooking oil",
      "fresh green beans",
      "salt",
      "black pepper",
      "eggs",
      "chili crisp"
    ],
    "url": "https://www.budgetbytes.com/blistered-green-bean-rice-bowl/"
  },
  {
    "recipe": "Taco Soup",
    "listOfIngredients": [
      "olive oil",
      "beef",
      "yellow onion",
      "garlic",
      "frozen corn",
      "tomatoes with green chiles",
      "pinto beans",
      "black beans",
      "taco seasoning",
      "ranch seasoning",
      "tomato paste",
      "water"
    ],
    "url": "https://www.budgetbytes.com/taco-soup/"
  },
  {
    "recipe": "Air Fryer Grilled Cheese",
    "listOfIngredients": [
      "butter",
      "Parmesan",
      "Italian seasoning",
      "sourdough bread",
      "cheese"
    ],
    "url": "https://www.budgetbytes.com/air-fryer-grilled-cheese/"
  },
  {
    "recipe": "Spinach and Artichoke Wonderpot (One Pot Pasta)",
    "listOfIngredients": [
      "mushrooms",
      "artichoke hearts",
      "garlic",
      "yellow onion",
      "vegetable broth",
      "olive oil",
      "fettuccine",
      "dried oregano",
      "dried thyme",
      "black pepper",
      "fresh",
      "crushed red pepper",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/spinach-artichoke-wonderpot/"
  },
  {
    "recipe": "Sriracha Chickpea Salad Wraps",
    "listOfIngredients": [
      "chickpeas",
      "mayonnaise",
      "sriracha",
      "cilantro",
      "lemon juice",
      "salt",
      "flour tortillas",
      "spinach",
      "carrots",
      "bell pepper"
    ],
    "url": "https://www.budgetbytes.com/sriracha-chickpea-salad-wraps/"
  },
  {
    "recipe": "Carrot Cake (for two)",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "cinnamon",
      "nutmeg",
      "ginger",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "vegetable oil",
      "carrots",
      "cream cheese",
      "butter",
      "powdered sugar"
    ],
    "url": "https://www.budgetbytes.com/carrot-cake-for-two/"
  },
  {
    "recipe": "Cider Roasted Turkey Breast",
    "listOfIngredients": [
      "Split turkey breast",
      "butter",
      "dried sage",
      "dried rosemary",
      "dried thyme",
      "salt",
      "apple",
      "onion",
      "apple cider"
    ],
    "url": "https://www.budgetbytes.com/cider-roasted-turkey-breast/"
  },
  {
    "recipe": "Cumin Rice",
    "listOfIngredients": [
      "butter",
      "cumin seeds",
      "long grain jasmine rice",
      "garlic",
      "salt",
      "water"
    ],
    "url": "https://www.budgetbytes.com/cumin-rice/"
  },
  {
    "recipe": "Kale Pesto",
    "listOfIngredients": [
      "torn kale leaves",
      "olive oil",
      "fresh lemon",
      "garlic",
      "walnuts",
      "Parmesan",
      "salt",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/homemade-kale-pesto/"
  },
  {
    "recipe": "Picadillo",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "red bell pepper",
      "garlic",
      "beef",
      "coarse salt",
      "sazon",
      "adobo",
      "sofrito",
      "pimento-stuffed green olives",
      "raisins",
      "white vinegar",
      "tomato sauce",
      "bay leaves",
      "water"
    ],
    "url": "https://www.budgetbytes.com/picadillo/"
  },
  {
    "recipe": "Slow Cooker Black Bean Soup",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "celery",
      "carrots",
      "black beans",
      "salsa",
      "chili powder",
      "cumin",
      "dried oregano",
      "vegetable broth",
      "water"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-black-bean-soup/"
  },
  {
    "recipe": "Cashew Rice Pilaf",
    "listOfIngredients": [
      "butter",
      "garlic",
      "turmeric",
      "cumin",
      "cinnamon",
      "uncooked jasmine rice",
      "cashews",
      "dried fruit raisins",
      "water",
      "salt",
      "bay leaf",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/cashew-rice-pilaf/"
  },
  {
    "recipe": "Honey Mustard Chicken Strips",
    "listOfIngredients": [
      "chicken breast",
      "mayonnaise",
      "honey",
      "mustard",
      "garlic powder",
      "paprika",
      "salt and pepper",
      "Panko breadcrumbs"
    ],
    "url": "https://www.budgetbytes.com/honey-mustard-chicken-strips/"
  },
  {
    "recipe": "Mexican Red Lentil Stew",
    "listOfIngredients": [
      "dry red lentils",
      "olive oil",
      "onion",
      "stalks celery",
      "garlic",
      "fire roasted diced tomatoes",
      "chili powder",
      "cumin",
      "turmeric",
      "vegetable broth",
      "hot sauce",
      "lime",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/mexican-lentil-stew/"
  },
  {
    "recipe": "Southwest Steak Bowls",
    "listOfIngredients": [
      "flank",
      "olive oil",
      "garlic",
      "cumin",
      "salt",
      "lime",
      "uncooked brown rice",
      "chicken broth",
      "onion",
      "tomato",
      "cilantro",
      "black beans",
      "frozen corn kernels",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/southwest-steak-bowls/"
  },
  {
    "recipe": "Peanut Butter Banana Smoothie",
    "listOfIngredients": [
      "frozen banana",
      "peanut butter",
      "brown sugar",
      "vanilla extract",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-banana-smoothie/"
  },
  {
    "recipe": "Sausage Stuffed Spaghetti Squash",
    "listOfIngredients": [
      "spaghetti squash",
      "Italian ground sausage",
      "shredded mozzarella",
      "Parmesan cheese",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/sausage-stuffed-spaghetti-squash/"
  },
  {
    "recipe": "Pesto Potato Salad",
    "listOfIngredients": [
      "potatoes",
      "Italian parsley",
      "garlic",
      "Parmesan",
      "lemon juice",
      "salt",
      "olive oil",
      "mayonnaise"
    ],
    "url": "https://www.budgetbytes.com/parsley-pesto-potatoes/"
  },
  {
    "recipe": "Herby Potato Salad",
    "listOfIngredients": [
      "olive oil",
      "lemon juice",
      "red wine vinegar",
      "Dijon mustard",
      "garlic",
      "salt",
      "black pepper",
      "baby potatoes",
      "fresh parsley",
      "fresh basil",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/herby-potato-salad/"
  },
  {
    "recipe": "Guacamole",
    "listOfIngredients": [
      "fresh lime",
      "Roma tomatoes",
      "jalapeno",
      "red onion",
      "fresh cilantro",
      "avocados",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/guacamole/"
  },
  {
    "recipe": "Easy Red Enchilada Sauce",
    "listOfIngredients": [
      "cooking oil",
      "all-purpose flour",
      "chili powder",
      "water",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/red-enchilada-sauce/"
  },
  {
    "recipe": "Cottage Cheese Crab Bowl",
    "listOfIngredients": [
      "cottage cheese",
      "cucumber",
      "imitation crab",
      "everything bagel seasoning",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/cottage-cheese-crab-bowl/"
  },
  {
    "recipe": "Tomato Basil Chicken",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "garlic",
      "dried basil",
      "salt",
      "black pepper",
      "boneless",
      "chicken broth",
      "tomato paste",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/tomato-basil-chicken/"
  },
  {
    "recipe": "Oven Baked Steak Fries",
    "listOfIngredients": [
      "russet potatoes",
      "cooking oil",
      "paprika",
      "steak seasoning"
    ],
    "url": "https://www.budgetbytes.com/oven-baked-steak-fries/"
  },
  {
    "recipe": "Charred Corn and Zucchini Salad",
    "listOfIngredients": [
      "high heat oil",
      "fresh sweet corn",
      "zucchini",
      "red onion",
      "salt and pepper",
      "cilantro",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/charred-corn-and-zucchini-salad/"
  },
  {
    "recipe": "Sweet and Spicy Tuna Salad",
    "listOfIngredients": [
      "tuna",
      "carrots",
      "green onions",
      "brown sugar",
      "olive oil",
      "apple cider vinegar",
      "cayenne pepper",
      "garlic powder",
      "smoked paprika",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/sweet-and-spicy-tuna-salad/"
  },
  {
    "recipe": "Roasted Garlic",
    "listOfIngredients": [
      "garlic",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/roasted-garlic/"
  },
  {
    "recipe": "Apple Cherry Baked Oatmeal",
    "listOfIngredients": [
      "frozen pitted sweet cherries",
      "unsweetened applesauce",
      "eggs",
      "vanilla extract",
      "almond extract",
      "cinnamon",
      "salt",
      "baking powder",
      "milk",
      "uncooked old fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/apple-cherry-baked-oatmeal/"
  },
  {
    "recipe": "Smoky Tomato Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "tomato paste",
      "smoked paprika",
      "cumin",
      "fire roasted diced tomatoes",
      "vegetable broth",
      "brown sugar",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/smoky-tomato-soup/"
  },
  {
    "recipe": "Sesame Kale",
    "listOfIngredients": [
      "lacinato  kale",
      "cooking oil",
      "garlic",
      "soy sauce",
      "toasted sesame oil",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/sesame-kale/"
  },
  {
    "recipe": "Smoky Maple Roasted Acorn Squash",
    "listOfIngredients": [
      "acorn squash",
      "olive oil",
      "maple syrup",
      "smoked paprika",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/smoky-maple-roasted-acorn-squash/"
  },
  {
    "recipe": "Curry Chickpea Salad",
    "listOfIngredients": [
      "plain yogurt",
      "Dijon mustard",
      "honey",
      "curry powder",
      "salt",
      "chickpeas",
      "cilantro",
      "red onion"
    ],
    "url": "https://www.budgetbytes.com/curry-chickpea-salad/"
  },
  {
    "recipe": "Quick Seasoned Black Beans",
    "listOfIngredients": [
      "jalapeno",
      "garlic",
      "cooking oil",
      "cumin",
      "black beans"
    ],
    "url": "https://www.budgetbytes.com/quick-seasoned-black-beans/"
  },
  {
    "recipe": "Chimichurri Sauce: Good on Anything and Everything",
    "listOfIngredients": [
      "Italian parsley",
      "fresh cilantro",
      "olive oil",
      "red wine vinegar",
      "garlic",
      "dried oregano",
      "cumin",
      "crushed red pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/chimichurri-good-anything-everything-sauce/"
  },
  {
    "recipe": "Chorizo Sweet Potato Skillet",
    "listOfIngredients": [
      "olive oil",
      "sweet potato",
      "Mexican chorizo",
      "black beans",
      "uncooked long grain white rice",
      "salsa",
      "chicken broth",
      "shredded cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/chorizo-sweet-potato-skillet/"
  },
  {
    "recipe": "Peanut Butter Banana Quesadillas",
    "listOfIngredients": [
      "flour tortilla",
      "peanut butter",
      "banana",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-banana-quesadillas/"
  },
  {
    "recipe": "Summer Vegetables in Red Sauce",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "eggplant",
      "Italian seasoning",
      "salt",
      "pepper",
      "red bell pepper",
      "zucchini",
      "pasta sauce",
      "fresh parsley",
      "water",
      "yellow cornmeal",
      "butter",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/summer-vegetables-in-red-sauce/"
  },
  {
    "recipe": "BIG Kale Pasta Salad",
    "listOfIngredients": [
      "olive oil",
      "balsamic vinegar",
      "mayonnaise",
      "Dijon mustard",
      "garlic",
      "dried basil",
      "salt",
      "black pepper",
      "penne pasta",
      "kale",
      "grape tomatoes",
      "red onion",
      "chickpeas",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/big-kale-pasta-salad/"
  },
  {
    "recipe": "Easy Caramel Sauce",
    "listOfIngredients": [
      "salted butter",
      "brown sugar",
      "heavy cream",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/easy-caramel-sauce/"
  },
  {
    "recipe": "Pollo Guisado (Puerto Rican Chicken Stew)",
    "listOfIngredients": [
      "chicken thighs",
      "adobo",
      "cooking oil",
      "yellow onion",
      "garlic",
      "sofrito",
      "tomato sauce",
      "sazon seasoning with annatto",
      "bay leaves",
      "dried oregano",
      "manzanilla olives",
      "potato",
      "carrots",
      "chicken stock"
    ],
    "url": "https://www.budgetbytes.com/pollo-guisado/"
  },
  {
    "recipe": "No-knead Focaccia Bread",
    "listOfIngredients": [
      "all-purpose flour",
      "instant yeast",
      "salt",
      "water",
      "olive oil",
      "cornmeal",
      "Italian seasoning"
    ],
    "url": "https://www.budgetbytes.com/no-knead-focaccia/"
  },
  {
    "recipe": "Pasta with Bacon and Peas",
    "listOfIngredients": [
      "pasta",
      "bacon",
      "onion",
      "frozen peas",
      "Parmesan",
      "salt",
      "black pepper",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/pasta-with-bacon-and-peas/"
  },
  {
    "recipe": "Comeback Sauce",
    "listOfIngredients": [
      "mayonnaise",
      "ketchup",
      "Worcestershire sauce",
      "Dijon mustard",
      "hot sauce",
      "smoked paprika",
      "garlic powder",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/comeback-sauce/"
  },
  {
    "recipe": "Baked Sweet Potato Fries with Peanut Lime Dressing",
    "listOfIngredients": [
      "natural style peanut butter",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "lime",
      "soy sauce",
      "neutral oil",
      "sweet potato",
      "cooking oil",
      "salt",
      "fresh cilantro",
      "peanuts",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/baked-sweet-potato-fries-with-peanut-lime-dressing/"
  },
  {
    "recipe": "Tomato Mozzarella Pasta Salad",
    "listOfIngredients": [
      "bowtie pasta",
      "salt for pasta water",
      "fresh spinach",
      "grape tomatoes",
      "mozzarella",
      "olive oil",
      "balsamic vinegar",
      "mayonnaise",
      "Parmesan",
      "Dijon mustard",
      "garlic",
      "dried basil",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/tomato-mozzarella-pasta-salad/"
  },
  {
    "recipe": "Swamp Soup",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "carrots",
      "celery",
      "olive oil",
      "dried basil",
      "dried oregano",
      "tomato sauce",
      "tomatoes",
      "vegetable broth",
      "frozen chopped spinach",
      "Swiss cheese"
    ],
    "url": "https://www.budgetbytes.com/swamp-soup/"
  },
  {
    "recipe": "Chipotle Peach Salsa",
    "listOfIngredients": [
      "ripe peaches",
      "red onion",
      "garlic",
      "fresh ginger",
      "chipotle peppers adobo",
      "cilantro",
      "lime",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/chipotle-peach-salsa/"
  },
  {
    "recipe": "Roasted Summer Vegetables",
    "listOfIngredients": [
      "zucchini",
      "yellow squash",
      "red onion",
      "red bell pepper",
      "olive oil",
      "dried basil",
      "salt and pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/roasted-summer-vegetables/"
  },
  {
    "recipe": "Easy Oven Baked Fish with Tomatoes",
    "listOfIngredients": [
      "fire roasted diced tomatoes",
      "garlic",
      "olive oil",
      "dried oregano",
      "salt",
      "black pepper",
      "lemon juice",
      "white fish",
      "fresh parsley for garnish"
    ],
    "url": "https://www.budgetbytes.com/easy-oven-baked-fish-with-tomatoes/"
  },
  {
    "recipe": "Garlicky Kale and Ricotta Pizza",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "torn kale leaves",
      "pizza dough",
      "garlic powder",
      "milk ricotta",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/garlicky-kale-and-ricotta-pizza/"
  },
  {
    "recipe": "Spicy Sweet Potato Fries",
    "listOfIngredients": [
      "sweet potatoes",
      "cooking oil of choice",
      "Creole seasoning"
    ],
    "url": "https://www.budgetbytes.com/spicy-sweet-potato-fries/"
  },
  {
    "recipe": "Sriracha Pimento Cheese Spread",
    "listOfIngredients": [
      "extra sharp cheddar",
      "cream cheese",
      "mayonnaise",
      "sriracha",
      "roasted red peppers",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/sriracha-pimento-cheese-spread/"
  },
  {
    "recipe": "Maple Miso Roasted Carrots",
    "listOfIngredients": [
      "white miso",
      "real maple syrup",
      "melted butter",
      "fresh ginger",
      "soy sauce",
      "carrots"
    ],
    "url": "https://www.budgetbytes.com/maple-miso-roasted-carrots/"
  },
  {
    "recipe": "Homemade Sweet and Sour Sauce Recipe",
    "listOfIngredients": [
      "brown sugar",
      "rice vinegar",
      "ketchup",
      "soy sauce",
      "water",
      "cornstarch"
    ],
    "url": "https://www.budgetbytes.com/simple-sweet-and-sour-sauce/"
  },
  {
    "recipe": "Baked Pizza Chicken",
    "listOfIngredients": [
      "Italian seasoning blend",
      "garlic powder",
      "salt",
      "olive oil",
      "boneless",
      "pizza sauce",
      "fresh mozzarella",
      "pepperoni"
    ],
    "url": "https://www.budgetbytes.com/baked-pizza-chicken/"
  },
  {
    "recipe": "Lemon Dill Salmon and Kale Salad",
    "listOfIngredients": [
      "garlic powder",
      "onion powder",
      "dried dill",
      "dried parsley",
      "salt",
      "black pepper",
      "tahini",
      "water",
      "lemon juice",
      "kale",
      "cannellini beans",
      "salmon",
      "red onion"
    ],
    "url": "https://www.budgetbytes.com/lemon-dill-salmon-and-kale-salad/"
  },
  {
    "recipe": "Soy Marinated Tofu Bowls with Spicy Peanut Sauce",
    "listOfIngredients": [
      "firm tofu",
      "light oil",
      "soy sauce",
      "garlic",
      "brown sugar",
      "brown rice",
      "water",
      "salt",
      "toasted sesame oil",
      "natural style creamy peanut butter",
      "Sriracha",
      "fresh ginger",
      "water",
      "oil for pan frying",
      "snap peas",
      "green onions",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/soy-marinated-tofu-bowls-spicy-peanut-sauce/"
  },
  {
    "recipe": "Soy Glazed Eggplant",
    "listOfIngredients": [
      "eggplant",
      "olive oil",
      "soy sauce",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "peanuts",
      "green onions",
      "cooked rice",
      "mayonnaise",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/soy-glazed-eggplant/"
  },
  {
    "recipe": "Sweet and Sour Pork Chops with Vegetables",
    "listOfIngredients": [
      "brown sugar",
      "rice vinegar",
      "ketchup",
      "water",
      "soy sauce",
      "cornstarch",
      "boneless",
      "salt and pepper",
      "cooking oil",
      "frozen stir fry vegetables"
    ],
    "url": "https://www.budgetbytes.com/sweet-and-sour-pork-chops-with-vegetables/"
  },
  {
    "recipe": "One Pot Lemon Garlic Shrimp and Rice",
    "listOfIngredients": [
      "shrimp",
      "fresh lemon",
      "garlic",
      "butter",
      "long grain white rice",
      "chicken broth",
      "water",
      "Tony Chachere's seasoning",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/one-pot-lemon-garlic-shrimp-and-rice/"
  },
  {
    "recipe": "Vegetable Fritters with Garlic Herb Dipping Sauce",
    "listOfIngredients": [
      "sour cream",
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "salt",
      "pepper",
      "frozen broccoli florets",
      "frozen corn",
      "carrots",
      "green onions",
      "all purpose flour",
      "eggs",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/vegetable-fritters-with-garlic-herb-sauce/"
  },
  {
    "recipe": "Creamy Chicken Fajita Pasta",
    "listOfIngredients": [
      "chili powder",
      "smoked paprika",
      "onion powder",
      "garlic powder",
      "cumin",
      "cayenne",
      "sugar",
      "salt",
      "cooking oil",
      "chicken breast",
      "bell pepper",
      "yellow onion",
      "fire roasted diced tomatoes",
      "cream cheese",
      "pasta",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/creamy-chicken-fajita-pasta/"
  },
  {
    "recipe": "Apple Dijon Kale Salad",
    "listOfIngredients": [
      "olive oil",
      "apple cider vinegar",
      "garlic",
      "Dijon mustard",
      "salt",
      "black pepper",
      "kale",
      "granny smith apple",
      "raisins",
      "walnut halves"
    ],
    "url": "https://www.budgetbytes.com/apple-dijon-kale-salad/"
  },
  {
    "recipe": "Roasted Apple Cranberry Relish",
    "listOfIngredients": [
      "fresh cranberries",
      "apples",
      "brown sugar",
      "cinnamon",
      "cloves",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/roasted-apple-cranberry-relish/"
  },
  {
    "recipe": "Sticky Ginger Soy Glazed Chicken",
    "listOfIngredients": [
      "brown sugar",
      "soy sauce",
      "garlic",
      "fresh ginger",
      "Black pepper",
      "cooking oil",
      "boneless",
      "green onions",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/sticky-ginger-soy-glazed-chicken/"
  },
  {
    "recipe": "The Peanut Butter Lunch Box",
    "listOfIngredients": [
      "peanut butter",
      "mini pretzels",
      "apples",
      "Medjool dates",
      "celery",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/the-peanut-butter-lunch-box/"
  },
  {
    "recipe": "Hummus Breakfast Bowls",
    "listOfIngredients": [
      "cooked rice",
      "frozen broccoli florets",
      "eggs",
      "hummus",
      "salt and pepper",
      "sesame seeds",
      "Sriracha"
    ],
    "url": "https://www.budgetbytes.com/hummus-breakfast-bowls/"
  },
  {
    "recipe": "Penne Pasta with Sausage and Greens",
    "listOfIngredients": [
      "penne pasta",
      "olive oil",
      "Italian sausage",
      "garlic",
      "yellow onion",
      "crushed tomatoes",
      "tomato paste",
      "dried basil",
      "salt",
      "Freshly cracked black pepper",
      "brown sugar",
      "frozen broccoli",
      "frozen spinach",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/snap-challenge-penne-pasta-sausage-greens/"
  },
  {
    "recipe": "Snickerdoodles for Two",
    "listOfIngredients": [
      "butter",
      "sugar",
      "egg yolk",
      "vanilla extract",
      "salt",
      "baking powder",
      "all-purpose flour",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/snickerdoodles-two/"
  },
  {
    "recipe": "Pumpkin Bread",
    "listOfIngredients": [
      "pumpkin puree",
      "sugar",
      "oil",
      "eggs",
      "vanilla",
      "water",
      "sifted flour",
      "baking powder",
      "baking soda",
      "salt",
      "pumpkin pie spice",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-bread/"
  },
  {
    "recipe": "Roasted Radishes",
    "listOfIngredients": [
      "radishes",
      "olive oil",
      "salt",
      "black pepper",
      "garlic powder",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/roasted-radishes/"
  },
  {
    "recipe": "Spicy Pickled Carrots",
    "listOfIngredients": [
      "carrots",
      "red onion",
      "jalapeno",
      "water",
      "white vinegar",
      "cooking oil",
      "cumin",
      "dried oregano",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/spicy-pickled-carrots/"
  },
  {
    "recipe": "Deruny (Ukrainian Potato Pancakes)",
    "listOfIngredients": [
      "russet potatoes",
      "yellow onion",
      "eggs",
      "all-purpose flour",
      "salt",
      "black pepper",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/deruny-potato-pancakes/"
  },
  {
    "recipe": "Roasted Brussels Sprout Bowls",
    "listOfIngredients": [
      "russet potatoes",
      "salt",
      "butter",
      "milk",
      "olive oil",
      "Dijon mustard",
      "mayonnaise",
      "red wine vinegar",
      "sugar",
      "garlic powder",
      "Black pepper",
      "fresh Brussels sprouts",
      "vegetarian Italian sausage"
    ],
    "url": "https://www.budgetbytes.com/roasted-brussels-sprout-bowls/"
  },
  {
    "recipe": "Honey Hoisin Garlic Chicken",
    "listOfIngredients": [
      "bone-in",
      "salt and pepper",
      "vegetable oil",
      "hoisin sauce",
      "soy sauce",
      "honey",
      "water",
      "ginger",
      "garlic",
      "sesame seeds for garnish",
      "fresh cilantro for garnish"
    ],
    "url": "https://www.budgetbytes.com/jessica-gavins-honey-hoisin-garlic-chicken/"
  },
  {
    "recipe": "Black Bean and Avocado Enchiladas",
    "listOfIngredients": [
      "cooking oil",
      "all-purpose flour",
      "chili powder",
      "water",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "unsweetened cocoa powder",
      "salt",
      "black beans",
      "avocado",
      "tomato",
      "green onions",
      "frozen corn kernels",
      "fresh cilantro",
      "tortillas"
    ],
    "url": "https://www.budgetbytes.com/black-bean-avocado-enchiladas/"
  },
  {
    "recipe": "Scallion Herb Chickpea Salad",
    "listOfIngredients": [
      "avocado",
      "Greek yogurt",
      "lemon juice",
      "salt",
      "fresh parsley",
      "fresh cilantro",
      "scallions",
      "chickpeas"
    ],
    "url": "https://www.budgetbytes.com/scallion-herb-chickpea-salad/"
  },
  {
    "recipe": "Hummus Breakfast Tacos",
    "listOfIngredients": [
      "tortillas",
      "butter",
      "eggs",
      "salt and pepper",
      "hummus",
      "cilantro",
      "pickled red onions",
      "cotija"
    ],
    "url": "https://www.budgetbytes.com/hummus-breakfast-tacos/"
  },
  {
    "recipe": "Quick Fix Broccoli Pesto Pizza",
    "listOfIngredients": [
      "flour tortilla",
      "pesto",
      "frozen broccoli florets",
      "shredded mozzarella",
      "crumbled feta",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/quick-fix-broccoli-pesto-pizza/"
  },
  {
    "recipe": "Roasted Brussels Sprouts",
    "listOfIngredients": [
      "Brussels sprouts",
      "olive oil",
      "salt",
      "garlic powder",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-roasted-brussels-sprouts/"
  },
  {
    "recipe": "Stromboli",
    "listOfIngredients": [
      "mushrooms",
      "garlic",
      "butter",
      "salt and pepper",
      "pizza dough",
      "provolone",
      "pepperoni",
      "shredded mozzarella",
      "olive oil",
      "Parmesan",
      "Italian seasoning",
      "garlic powder"
    ],
    "url": "https://www.budgetbytes.com/stromboli/"
  },
  {
    "recipe": "Oven Roasted Autumn Medley",
    "listOfIngredients": [
      "red onion",
      "sweet potato",
      "apples",
      "sweet Italian sausage",
      "olive oil",
      "dried basil",
      "dried sage",
      "dried rosemary",
      "salt",
      "black pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/oven-roasted-autumn-medley/"
  },
  {
    "recipe": "One Pot Lemon Pepper Chicken with Orzo",
    "listOfIngredients": [
      "chicken thighs",
      "lemon pepper seasoning",
      "cooking oil",
      "garlic",
      "chicken broth",
      "parsley",
      "orzo",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/lemon-pepper-chicken-with-orzo/"
  },
  {
    "recipe": "Kimchi Fried Rice",
    "listOfIngredients": [
      "broccoli stem",
      "carrots",
      "green onions",
      "kimchi",
      "eggs",
      "light cooking oil",
      "cooked",
      "soy sauce",
      "toasted sesame oil"
    ],
    "url": "https://www.budgetbytes.com/kimchi-fried-rice/"
  },
  {
    "recipe": "“Everything But the Bagel” Sandwich Rounds",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "instant yeast",
      "water",
      "olive oil",
      "Everything But The Bagel Seasoning"
    ],
    "url": "https://www.budgetbytes.com/everything-but-the-bagel-sandwich-rounds/"
  },
  {
    "recipe": "Lemon Dill Tahini Dressing",
    "listOfIngredients": [
      "garlic powder",
      "onion powder",
      "dried dill",
      "dried parsley",
      "salt",
      "black pepper",
      "tahini",
      "water",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/lemon-dill-tahini-dressing/"
  },
  {
    "recipe": "Vegetable Breakfast Scrambles",
    "listOfIngredients": [
      "butter",
      "bell pepper",
      "spinach",
      "eggs",
      "seasoning of choice",
      "grape tomatoes",
      "avocado",
      "hummus",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/vegetable-breakfast-scrambles/"
  },
  {
    "recipe": "Italian Orzo Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "lemon Juice",
      "Italian seasoning blend",
      "garlic powder",
      "salt",
      "Dijon mustard",
      "sugar",
      "orzo",
      "chickpeas",
      "fresh spinach",
      "roasted red peppers",
      "kalamata olives",
      "quartered artichoke hearts",
      "grape tomatoes"
    ],
    "url": "https://www.budgetbytes.com/italian-orzo-salad/"
  },
  {
    "recipe": "Jerk Chicken with Pineapple Black Bean Salsa",
    "listOfIngredients": [
      "cooked rice",
      "pineapple tidbits",
      "black beans",
      "red onion",
      "coarsely chopped cilantro",
      "lime",
      "crushed red pepper",
      "salt",
      "boneless",
      "jerk seasoning",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/jerk-chicken-with-pineapple-black-bean-salsa/"
  },
  {
    "recipe": "Golden Milk Overnight Oats",
    "listOfIngredients": [
      "rolled oats",
      "milk",
      "turmeric",
      "cinnamon",
      "cloves",
      "vanilla",
      "honey",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/golden-milk-overnight-oats/"
  },
  {
    "recipe": "Creamy Tuna Pasta with Peas",
    "listOfIngredients": [
      "pasta",
      "butter",
      "garlic",
      "frozen peas",
      "half and half",
      "shredded Parmesan",
      "solid Albacore tuna"
    ],
    "url": "https://www.budgetbytes.com/creamy-tuna-pasta-with-peas-and-parmesan/"
  },
  {
    "recipe": "Baked Chimichurri Fish Bowls",
    "listOfIngredients": [
      "red cabbage",
      "carrots",
      "Handful fresh cilantro",
      "lemon",
      "neutral oil",
      "salt",
      "olive oil",
      "red wine vinegar",
      "packed Italian parsley",
      "packed cilantro",
      "garlic",
      "dried oregano",
      "cumin",
      "red pepper flakes",
      "cod steaks",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/baked-chimichurri-fish-bowls/"
  },
  {
    "recipe": "Sally's Chocolate Glazed Orange Macaroons",
    "listOfIngredients": [
      "shredded sweetened coconut",
      "granulated sugar",
      "all-purpose flour",
      "salt",
      "egg whites",
      "almond extract",
      "vanilla extract",
      "Zest from one orange",
      "semi-sweet chocolate",
      "coconut oil"
    ],
    "url": "https://www.budgetbytes.com/sallys-chocolate-glazed-orange-macaroons/"
  },
  {
    "recipe": "Baked Chicken with Artichokes and Tomatoes",
    "listOfIngredients": [
      "tomatoes",
      "olive oil",
      "garlic",
      "dried oregano",
      "salt",
      "Freshly cracked black pepper",
      "lemon juice",
      "boneless",
      "salt and pepper",
      "artichoke hearts",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/baked-chicken-artichokes-tomatoes/"
  },
  {
    "recipe": "Cheesy Loaded Cauliflower Casserole",
    "listOfIngredients": [
      "Appleton Farms Hickory Bacon",
      "cauliflower",
      "Countryside Creamery Salted Butter",
      "Baker's Corner All-Purpose Flour",
      "Simply Nature Organic Whole Milk",
      "salt",
      "Simply Nature Organic Garlic Powder",
      "Stonemill Black Pepper",
      "Emporium Selection Vintage Cheddar",
      "Happy Farms Mild Cheddar",
      "Chef's Cupboard French Fried Onions",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/cheesy-loaded-cauliflower-casserole/"
  },
  {
    "recipe": "5-Minute Microwave French Toast Mug",
    "listOfIngredients": [
      "butter",
      "milk",
      "maple syrup",
      "cinnamon",
      "vanilla extract",
      "nutmeg",
      "eggs",
      "bread",
      "berries",
      "bananas",
      "nuts",
      "powdered sugar",
      "peanut butter",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/5-minute-microwave-french-toast-mug/"
  },
  {
    "recipe": "Strawberry Rose Slush",
    "listOfIngredients": [
      "frozen strawberries",
      "Rose",
      "powdered sugar"
    ],
    "url": "https://www.budgetbytes.com/strawberry-rose-slush/"
  },
  {
    "recipe": "Banana Flax Muffins",
    "listOfIngredients": [
      "mashed ripe bananas",
      "eggs",
      "brown sugar",
      "vanilla",
      "olive oil",
      "all-purpose flour",
      "baking powder",
      "salt",
      "flaxseed",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/banana-flax-muffins/"
  },
  {
    "recipe": "Ravioli with Sage Brown Butter Sauce",
    "listOfIngredients": [
      "ravioli",
      "garlic",
      "walnuts",
      "butter",
      "dried sage",
      "fresh spinach",
      "salt and pepper",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/ravioli-with-sage-brown-butter-sauce-spinach-and-walnuts/"
  },
  {
    "recipe": "Homemade Lemon Curd",
    "listOfIngredients": [
      "sugar",
      "eggs",
      "lemon juice",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/luscious-homemade-lemon-curd/"
  },
  {
    "recipe": "Garlic Herb Baked Chicken Breast",
    "listOfIngredients": [
      "butter",
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "salt",
      "black pepper",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/garlic-herb-baked-chicken-breast/"
  },
  {
    "recipe": "Garlic Herb Seasoning",
    "listOfIngredients": [
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/all-purpose-garlic-herb-seasoning/"
  },
  {
    "recipe": "Sheet Pan Chicken and Vegetables",
    "listOfIngredients": [
      "olive oil",
      "fresh lemon",
      "garlic",
      "dried oregano",
      "salt",
      "Black pepper",
      "grape tomatoes",
      "bell peppers",
      "red onion",
      "chicken breast",
      "kalamata olives",
      "crumbled feta",
      "fresh parsley",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-greek-chicken-and-vegetables/"
  },
  {
    "recipe": "Make Ahead Kale White Bean and Pesto Salad",
    "listOfIngredients": [
      "kale",
      "cannellini beans",
      "chicken breast",
      "grape tomatoes",
      "pesto",
      "lemon"
    ],
    "url": "https://www.budgetbytes.com/make-ahead-kale-white-bean-and-pesto-salad/"
  },
  {
    "recipe": "Chimichurri Chickpea Salad",
    "listOfIngredients": [
      "fresh parsley",
      "fresh cilantro",
      "olive oil",
      "red wine vinegar",
      "garlic",
      "dried oregano",
      "cumin",
      "crushed red pepper",
      "salt",
      "chickpeas",
      "grape tomatoes",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/chimichurri-chickpea-salad/"
  },
  {
    "recipe": "Rosemary Pepper Drop Biscuits",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "dried rosemary",
      "black pepper",
      "sugar",
      "cold butter",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/rosemary-pepper-drop-biscuits/"
  },
  {
    "recipe": "Easy Homemade Balsamic Vinaigrette",
    "listOfIngredients": [
      "olive oil",
      "balsamic vinegar",
      "mayonnaise",
      "Dijon mustard",
      "garlic",
      "dried basil",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-homemade-balsamic-vinaigrette/"
  },
  {
    "recipe": "Kale Salad with Toasted Pita and Parmesan",
    "listOfIngredients": [
      "shredded kale",
      "wheat pita",
      "olive oil",
      "walnuts",
      "golden raisins",
      "shredded",
      "champagne vinaigrette"
    ],
    "url": "https://www.budgetbytes.com/kale-salad-with-toasted-pita-and-parmesan/"
  },
  {
    "recipe": "Homemade Balsamic Glaze",
    "listOfIngredients": [
      "balsamic vinegar",
      "brown sugar"
    ],
    "url": "https://www.budgetbytes.com/homemade-balsamic-glaze/"
  },
  {
    "recipe": "Cumin Lime Roasted Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "olive oil",
      "cumin",
      "salt",
      "fresh cilantro",
      "fresh lime"
    ],
    "url": "https://www.budgetbytes.com/cumin-lime-roasted-sweet-potatoes/"
  },
  {
    "recipe": "Golden Coconut Lentil Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "turmeric",
      "crushed red pepper",
      "carrots",
      "red",
      "water",
      "coconut milk",
      "salt",
      "large",
      "fresh cilantro",
      "cooked jasmine rice"
    ],
    "url": "https://www.budgetbytes.com/golden-coconut-lentil-soup/"
  },
  {
    "recipe": "Warm Brussels Sprouts and Pear Salad with Dijon Vinaigrette",
    "listOfIngredients": [
      "clove garlic",
      "olive oil",
      "apple cider vinegar",
      "Dijon mustard",
      "salt",
      "sugar",
      "Black pepper",
      "shredded Brussels sprouts",
      "D'anjou pear",
      "dried cranberries",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/warm-brussels-sprouts-and-pear-salad/"
  },
  {
    "recipe": "Queso Fundido",
    "listOfIngredients": [
      "cooking oil",
      "Mexican chorizo",
      "queso quesadilla"
    ],
    "url": "https://www.budgetbytes.com/queso-fundido/"
  },
  {
    "recipe": "Green Chile Chicken Enchiladas",
    "listOfIngredients": [
      "corn tortillas",
      "cooking oil",
      "boneless",
      "sour cream",
      "pepper jack cheese",
      "green onions",
      "garlic powder",
      "cayenne pepper",
      "cumin",
      "salt",
      "green chiles",
      "all-purpose flour",
      "onion powder",
      "water"
    ],
    "url": "https://www.budgetbytes.com/green-chile-chicken-enchiladas/"
  },
  {
    "recipe": "Vegetable Beef Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "beef",
      "russet potato",
      "tomatoes",
      "Italian seasoning",
      "black pepper",
      "beef broth",
      "Worcestershire sauce",
      "frozen vegetables",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/easy-vegetable-beef-soup/"
  },
  {
    "recipe": "Roasted Spaghetti Squash",
    "listOfIngredients": [
      "spaghetti squash",
      "olive oil",
      "salt",
      "salted butter"
    ],
    "url": "https://www.budgetbytes.com/roasted-spaghetti-squash/"
  },
  {
    "recipe": "Creamy Lentil Vegetable Soup",
    "listOfIngredients": [
      "mushrooms",
      "cooking oil",
      "carrots",
      "celery",
      "yellow onion",
      "garlic",
      "dried thyme",
      "rubbed sage",
      "dried rosemary",
      "brown lentils",
      "vegetable broth",
      "full-fat coconut milk",
      "salt",
      "pepper"
    ],
    "url": "https://www.budgetbytes.com/creamy-lentil-vegetable-soup/"
  },
  {
    "recipe": "BBQ Beef and Beans",
    "listOfIngredients": [
      "cooking oil",
      "garlic",
      "beef",
      "kidney beans",
      "black beans",
      "tomato sauce",
      "tomato paste",
      "apple cider vinegar",
      "brown sugar",
      "molasses",
      "Dijon mustard",
      "Worcestershire sauce",
      "smoked paprika",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "salt",
      "cooked rice",
      "shredded cheddar",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/bbq-beef-and-beans/"
  },
  {
    "recipe": "Easy Vegetable Stir Fry",
    "listOfIngredients": [
      "soy sauce",
      "water",
      "brown sugar",
      "toasted sesame oil",
      "garlic",
      "fresh ginger",
      "cornstarch",
      "broccoli",
      "carrots",
      "mushrooms",
      "sugar snap peas",
      "onion",
      "red bell pepper",
      "cooking oil",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/easy-vegetable-stir-fry/"
  },
  {
    "recipe": "Cucumber Mango Salad",
    "listOfIngredients": [
      "mango",
      "cucumber",
      "rice vinegar",
      "white sugar",
      "salt",
      "red pepper flakes"
    ],
    "url": "https://www.budgetbytes.com/cucumber-mango-salad/"
  },
  {
    "recipe": "Tomato Rice",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "cooking oil",
      "long grain white rice",
      "chili powder",
      "cumin",
      "petite diced tomatoes",
      "tomato paste",
      "vegetable broth",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/tomato-rice/"
  },
  {
    "recipe": "Strawberry Shortcake",
    "listOfIngredients": [
      "fresh strawberries",
      "sugar",
      "all-purpose flour",
      "salt",
      "baking powder",
      "heavy whipping cream",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/strawberry-shortcake/"
  },
  {
    "recipe": "Homemade Granola",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "pecans",
      "unsweetened coconut",
      "cooking oil",
      "brown sugar",
      "honey",
      "cinnamon",
      "salt",
      "vanilla extract",
      "dried cranberries"
    ],
    "url": "https://www.budgetbytes.com/homemade-granola/"
  },
  {
    "recipe": "Ricotta Pancakes",
    "listOfIngredients": [
      "eggs",
      "flour",
      "baking powder",
      "granulated sugar",
      "salt",
      "ricotta",
      "milk",
      "vanilla extract",
      "oil"
    ],
    "url": "https://www.budgetbytes.com/ricotta-pancakes/"
  },
  {
    "recipe": "Blueberry Sauce",
    "listOfIngredients": [
      "frozen blueberries",
      "sugar",
      "lemon",
      "corn starch",
      "water"
    ],
    "url": "https://www.budgetbytes.com/blueberry-sauce/"
  },
  {
    "recipe": "Easy Fish Tacos with Cumin Lime Slaw",
    "listOfIngredients": [
      "mayonnaise",
      "lime",
      "cumin",
      "cayenne",
      "sugar",
      "salt",
      "coleslaw mix",
      "green onions",
      "corn tortillas",
      "chili powder",
      "garlic powder",
      "cooking oil",
      "cod fillets",
      "avocado",
      "jalapeno"
    ],
    "url": "https://www.budgetbytes.com/fish-tacos-with-cumin-lime-slaw/"
  },
  {
    "recipe": "Oven Roasted Ratatouille",
    "listOfIngredients": [
      "marinara sauce",
      "yellow onion",
      "eggplant",
      "zucchini",
      "yellow squash",
      "Roma tomatoes",
      "olive oil",
      "dried basil",
      "dried oregano",
      "Freshly cracked black pepper",
      "salt",
      "shredded mozzarella",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/oven-roasted-ratatouille/"
  },
  {
    "recipe": "King Ranch Chicken Casserole",
    "listOfIngredients": [
      "boneless",
      "chili powder",
      "cooking oil",
      "butter",
      "yellow onion",
      "green bell pepper",
      "all-purpose flour",
      "chicken broth",
      "tomatoes with green chiles",
      "sour cream",
      "cheddar cheese",
      "tortilla chip strips",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/king-ranch-chicken-casserole/"
  },
  {
    "recipe": "Chunky Ham and Bean Soup",
    "listOfIngredients": [
      "yellow onion",
      "carrots",
      "celery",
      "garlic",
      "cooked ham",
      "cooking oil",
      "cannellini beans",
      "dried thyme",
      "black pepper",
      "chicken broth"
    ],
    "url": "https://www.budgetbytes.com/chunky-ham-and-bean-soup/"
  },
  {
    "recipe": "BBQ Cheddar Baked Chicken",
    "listOfIngredients": [
      "boneless",
      "smoked paprika",
      "garlic powder",
      "salt",
      "black pepper",
      "BBQ sauce",
      "shredded cheddar",
      "red onion",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/bbq-cheddar-baked-chicken/"
  },
  {
    "recipe": "Broccoli Cheddar Stuffed Baked Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "olive oil",
      "Salt",
      "frozen broccoli florets",
      "butter",
      "all-purpose flour",
      "milk",
      "salt",
      "garlic powder",
      "cheddar"
    ],
    "url": "https://www.budgetbytes.com/broccoli-cheddar-baked-potatoes/"
  },
  {
    "recipe": "Broccoli Salad with Honey Yogurt Dressing",
    "listOfIngredients": [
      "plain Greek yogurt",
      "light mayonnaise",
      "apple cider vinegar",
      "honey",
      "salt",
      "Black pepper",
      "broccoli florets",
      "red onion",
      "carrots",
      "dried cranberries",
      "raw sunflower seeds"
    ],
    "url": "https://www.budgetbytes.com/broccoli-salad-honey-yogurt-dressing/"
  },
  {
    "recipe": "Lemon Bars",
    "listOfIngredients": [
      "all-purpose flour",
      "powdered sugar",
      "salt",
      "salted butter",
      "granulated sugar",
      "eggs",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/lemon-bars/"
  },
  {
    "recipe": "Roasted Cauliflower and Quinoa Salad",
    "listOfIngredients": [
      "cauliflower",
      "red onion",
      "olive oil",
      "salt and pepper",
      "butter",
      "garlic",
      "turmeric",
      "cumin",
      "cinnamon",
      "quinoa",
      "dried cranberries",
      "vegetable broth",
      "almonds",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/roasted-cauliflower-and-quinoa-salad/"
  },
  {
    "recipe": "Baked Tortilla Chips",
    "listOfIngredients": [
      "corn tortillas",
      "cooking oil",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/baked-tortilla-chips/"
  },
  {
    "recipe": "Turkey Chili Smothered Sweet Potatoes",
    "listOfIngredients": [
      "olive oil",
      "turkey",
      "yellow onion",
      "garlic",
      "tomatoes",
      "tomato paste",
      "black beans",
      "chili powder",
      "dried oregano",
      "cumin",
      "water",
      "Salt",
      "sweet potatoes",
      "shredded cheddar cheese",
      "Cilantro"
    ],
    "url": "https://www.budgetbytes.com/turkey-chili-smothered-sweet-potatoes/"
  },
  {
    "recipe": "Salt & Vinegar Roasted Potatoes with Smoky Garlic Mayo",
    "listOfIngredients": [
      "red potatoes",
      "white vinegar",
      "Morton® Kosher Salt",
      "olive oil",
      "Black pepper",
      "chives",
      "mayonnaise",
      "clove garlic",
      "smoked paprika"
    ],
    "url": "https://www.budgetbytes.com/salt-vinegar-roasted-potatoes-with-smoky-garlic-mayo/"
  },
  {
    "recipe": "Sweet Potato Grain Bowls with Green Tahini Sauce",
    "listOfIngredients": [
      "uncooked bulgur",
      "sweet potatoes",
      "olive oil",
      "salt and pepper",
      "black beans",
      "avocado",
      "jalapeno",
      "pepitas",
      "tahini",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne pepper",
      "salt",
      "fresh cilantro",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-grain-bowls-green-tahini-sauce/"
  },
  {
    "recipe": "Brown Sugar Bacon Breakfast Sandwiches with Chipotle Mayo",
    "listOfIngredients": [
      "bacon",
      "brown sugar",
      "mayonnaise",
      "chipotle chili powder",
      "garlic powder",
      "brioche buns",
      "eggs",
      "tomato",
      "lettuce"
    ],
    "url": "https://www.budgetbytes.com/brown-sugar-bacon-breakfast-sandwiches-chipotle-mayo/"
  },
  {
    "recipe": "Wild Rice Stuffed Acorn Squash",
    "listOfIngredients": [
      "acorn squash",
      "salt",
      "pepper",
      "wild rice blend",
      "vegetable broth",
      "butter",
      "yellow onion",
      "celery",
      "apple",
      "dried sage",
      "dried thyme",
      "walnuts",
      "dried cranberries",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/wild-rice-stuffed-acorn-squash/"
  },
  {
    "recipe": "Easy Homemade Cornbread Recipe",
    "listOfIngredients": [
      "yellow cornmeal",
      "all-purpose flour",
      "sugar",
      "baking powder",
      "salt",
      "milk",
      "eggs",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/everyday-cornbread/"
  },
  {
    "recipe": "Sweet n' Spicy Chicken Bowls",
    "listOfIngredients": [
      "mild chili powder",
      "cumin",
      "garlic powder",
      "smoked paprika",
      "cayenne pepper",
      "Freshly Cracked black Pepper",
      "salt",
      "olive oil",
      "honey",
      "apple cider vinegar",
      "uncooked brown rice",
      "chicken broth",
      "chicken breast",
      "pineapple tidbits juice",
      "black beans",
      "ripe avocado",
      "green onions",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/sweet-n-spicy-chicken-bowls/"
  },
  {
    "recipe": "Smoky Garlic Oven Fries",
    "listOfIngredients": [
      "russet potatoes",
      "olive oil",
      "garlic powder",
      "smoked paprika",
      "salt and pepper",
      "non-stick spray"
    ],
    "url": "https://www.budgetbytes.com/smoky-garlic-oven-fries/"
  },
  {
    "recipe": "Greek Chicken Wraps",
    "listOfIngredients": [
      "olive oil",
      "lemon juice",
      "garlic",
      "dried oregano",
      "salt",
      "Black pepper",
      "boneless",
      "plain Greek style yogurt",
      "dried dill",
      "grape tomatoes",
      "cucumber",
      "red onion",
      "flatbread",
      "hummus"
    ],
    "url": "https://www.budgetbytes.com/greek-chicken-wraps/"
  },
  {
    "recipe": "Homemade Ranch Dressing",
    "listOfIngredients": [
      "mayonnaise",
      "plain yogurt",
      "lemon juice",
      "garlic powder",
      "onion powder",
      "fresh parsley",
      "green onion",
      "black pepper",
      "sugar",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/homemade-ranch-dressing/"
  },
  {
    "recipe": "Rice Cooker Spanish Chickpeas and Rice",
    "listOfIngredients": [
      "olive oil",
      "long grain white rice",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "cayenne pepper",
      "onion powder",
      "garlic powder",
      "black pepper",
      "chickpeas",
      "petite diced tomatoes",
      "quartered artichoke hearts",
      "vegetable broth",
      "fresh parsley",
      "fresh lemon"
    ],
    "url": "https://www.budgetbytes.com/rice-cooker-spanish-chickpeas-and-rice/"
  },
  {
    "recipe": "Slow Cooker Spaghetti Sauce",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "crushed tomatoes",
      "tomato paste",
      "dried basil",
      "dried oregano",
      "brown sugar",
      "balsamic vinegar",
      "butter",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-marinara/"
  },
  {
    "recipe": "Thumbprint Cookies",
    "listOfIngredients": [
      "salted butter",
      "granulated sugar",
      "eggs",
      "vanilla extract",
      "all-purpose flour",
      "salt",
      "sweetened coconut",
      "fruit jam"
    ],
    "url": "https://www.budgetbytes.com/italian-holiday-cookies/"
  },
  {
    "recipe": "5 Ingredient Freezer Biscuits",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "sugar",
      "baking powder",
      "heavy whipping cream"
    ],
    "url": "https://www.budgetbytes.com/5-ingredient-freezer-biscuits/"
  },
  {
    "recipe": "Honey Balsamic Glazed Carrots",
    "listOfIngredients": [
      "carrots",
      "olive oil",
      "salt",
      "pepper",
      "honey",
      "balsamic vinegar",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/honey-balsamic-carrots/"
  },
  {
    "recipe": "Homemade Baked Chicken Nuggets",
    "listOfIngredients": [
      "plain breadcrumbs",
      "garlic powder",
      "smoked paprika",
      "salt",
      "black pepper",
      "neutral oil",
      "Greek Yogurt",
      "water",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/homemade-baked-chicken-nuggets/"
  },
  {
    "recipe": "Bowties and Broccoli",
    "listOfIngredients": [
      "pasta",
      "frozen broccoli florets",
      "butter",
      "Parmesan",
      "Salt",
      "Black pepper",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/bowties-and-broccoli/"
  },
  {
    "recipe": "Lemony Artichoke and Quinoa Salad",
    "listOfIngredients": [
      "quinoa",
      "fresh lemon",
      "olive oil",
      "garlic",
      "salt",
      "black pepper",
      "quartered artichoke hearts",
      "red bell pepper",
      "fresh parsley",
      "chickpeas"
    ],
    "url": "https://www.budgetbytes.com/lemony-artichoke-and-quinoa-salad/"
  },
  {
    "recipe": "Homemade Italian Dressing",
    "listOfIngredients": [
      "extra virgin olive oil",
      "red wine vinegar",
      "lemon juice",
      "Dijon mustard",
      "garlic powder",
      "Italian seasoning blend",
      "salt",
      "black pepper",
      "sugar",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/homemade-italian-dressing/"
  },
  {
    "recipe": "One Pot Teriyaki Chicken and Rice",
    "listOfIngredients": [
      "boneless",
      "cooking oil",
      "garlic",
      "fresh ginger",
      "uncooked jasmine rice",
      "water",
      "frozen stir fry vegetables",
      "soy sauce",
      "brown sugar",
      "toasted sesame oil",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/one-pot-teriyaki-chicken-and-rice/"
  },
  {
    "recipe": "Creamy Sweet Potato Soup",
    "listOfIngredients": [
      "sweet potatoes",
      "olive oil",
      "yellow onion",
      "garlic",
      "cumin",
      "smoked paprika",
      "cayenne",
      "cinnamon",
      "black pepper",
      "chicken broth",
      "heavy cream",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/creamy-sweet-potato-soup/"
  },
  {
    "recipe": "Cheese Grits",
    "listOfIngredients": [
      "chicken broth",
      "milk",
      "garlic powder",
      "quick cooking grits",
      "salt",
      "butter",
      "black pepper",
      "cheddar"
    ],
    "url": "https://www.budgetbytes.com/cheese-grits/"
  },
  {
    "recipe": "Easy Pumpkin Soup",
    "listOfIngredients": [
      "butter",
      "yellow onion",
      "pumpkin puree",
      "chicken broth",
      "chili powder",
      "nutmeg",
      "smoked paprika",
      "cayenne pepper",
      "black pepper",
      "salt",
      "pepitas",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/easy-pumpkin-soup/"
  },
  {
    "recipe": "Autumn Kale and Apple Salad",
    "listOfIngredients": [
      "olive oil",
      "balsamic vinegar",
      "mayonnaise",
      "Dijon mustard",
      "garlic",
      "dried basil",
      "salt",
      "black pepper",
      "walnuts",
      "butter",
      "brown sugar",
      "torn kale leaves",
      "apple",
      "crumbled blue cheese"
    ],
    "url": "https://www.budgetbytes.com/autumn-kale-and-apple-salad/"
  },
  {
    "recipe": "Peanut Butter Fluff Cups",
    "listOfIngredients": [
      "heavy whipping cream",
      "granulated sugar",
      "vanilla extract",
      "creamy natural peanut butter",
      "cream cheese",
      "powdered sugar",
      "milk",
      "chocolate graham crackers"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-fluff-cups/"
  },
  {
    "recipe": "Vegan Split Pea Soup",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "celery",
      "carrots",
      "olive oil",
      "split peas",
      "smoked paprika",
      "dried parsley",
      "dried oregano",
      "dried thyme",
      "black pepper",
      "water",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/vegan-split-pea-soup/"
  },
  {
    "recipe": "Slow Cooker Spiced Cranberry Apple Cider",
    "listOfIngredients": [
      "unfiltered apple juice",
      "cranberry juice cocktail",
      "orange",
      "fresh ginger",
      "cloves",
      "cinnamon",
      "fresh cranberries"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-spiced-cranberry-apple-cider/"
  },
  {
    "recipe": "BBQ Beef and Cabbage",
    "listOfIngredients": [
      "olive oil",
      "lean ground beef",
      "onion",
      "smoked paprika",
      "garlic powder",
      "salt",
      "shredded cabbage",
      "tomato sauce",
      "apple cider vinegar",
      "brown sugar",
      "Worcestershire sauce",
      "Dijon mustard",
      "shredded cheddar",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/bbq-beef-and-cabbage/"
  },
  {
    "recipe": "Sweet Potato Biscuits",
    "listOfIngredients": [
      "sweet potato",
      "all-purpose flour",
      "baking powder",
      "sugar",
      "salt",
      "nutmeg",
      "butter",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-biscuits/"
  },
  {
    "recipe": "Slow Simmered Black Eye Peas and Greens",
    "listOfIngredients": [
      "black eyed peas",
      "olive oil",
      "onion",
      "garlic",
      "celery",
      "oregano",
      "smoked paprika",
      "cayenne pepper",
      "Black pepper",
      "bay leaf",
      "vegetable broth",
      "fresh greens"
    ],
    "url": "https://www.budgetbytes.com/slow-simmered-black-eyed-peas-greens/"
  },
  {
    "recipe": "Pineapple Protein Smoothie",
    "listOfIngredients": [
      "cottage cheese",
      "frozen banana",
      "frozen pineapple chunks",
      "brown sugar",
      "vanilla extract",
      "flaxseed",
      "milk of choice"
    ],
    "url": "https://www.budgetbytes.com/pineapple-protein-smoothie/"
  },
  {
    "recipe": "Ultimate BBQ Chicken Quesadillas",
    "listOfIngredients": [
      "cooked chicken",
      "black beans",
      "red onion",
      "jalapeno",
      "fresh cilantro",
      "shredded cheddar",
      "chili powder",
      "smoked paprika",
      "salt",
      "BBQ Sauce",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/ultimate-bbq-chicken-quesadillas/"
  },
  {
    "recipe": "Raspberry Balsamic Baked Chicken Wings",
    "listOfIngredients": [
      "chicken wings and drumettes",
      "salt and pepper",
      "cornstarch",
      "balsamic vinegar",
      "raspberry jam",
      "water",
      "ginger",
      "soy sauce",
      "butter",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/raspberry-balsamic-baked-chicken-wings/"
  },
  {
    "recipe": "Creole White Beans with Chicken",
    "listOfIngredients": [
      "navy beans",
      "olive oil",
      "garlic",
      "yellow onion",
      "celery",
      "green bell peppers",
      "red bell pepper",
      "fresh parsley",
      "chicken thighs",
      "Creole Seasoning",
      "dried oregano",
      "smoked paprika",
      "black pepper",
      "water"
    ],
    "url": "https://www.budgetbytes.com/creole-white-beans-with-chicken/"
  },
  {
    "recipe": "Yogurt Banana Bread",
    "listOfIngredients": [
      "mashed bananas",
      "plain yogurt",
      "eggs",
      "sugar",
      "butter",
      "vanilla extract",
      "all-purpose flour",
      "baking powder",
      "baking soda",
      "salt",
      "nutmeg",
      "walnuts"
    ],
    "url": "https://www.budgetbytes.com/yogurt-banana-bread/"
  },
  {
    "recipe": "Maple Sage Breakfast Sausage",
    "listOfIngredients": [
      "turkey",
      "dried sage",
      "dried thyme",
      "garlic powder",
      "smoked paprika",
      "maple syrup",
      "salt",
      "black pepper",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/maple-sage-breakfast-sausage/"
  },
  {
    "recipe": "Spicy Coconut Vegetable Stir Fry",
    "listOfIngredients": [
      "full-fat coconut milk",
      "natural style peanut butter",
      "sriracha",
      "brown sugar",
      "soy sauce",
      "lime juice",
      "garlic",
      "fresh ginger",
      "mixed vegetables",
      "high heat cooking oil of choice",
      "cooked rice",
      "peanuts",
      "cilantro",
      "lime"
    ],
    "url": "https://www.budgetbytes.com/spicy-coconut-vegetable-stir-fry/"
  },
  {
    "recipe": "Buffalo Tempeh Sandwiches",
    "listOfIngredients": [
      "melted butter",
      "hot sauce",
      "smoked paprika",
      "garlic powder",
      "salt",
      "tempeh",
      "cooking oil",
      "coleslaw mix",
      "ranch dressing",
      "hoagie rolls",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/buffalo-tempeh-sandwiches/"
  },
  {
    "recipe": "Breakfast Nachos",
    "listOfIngredients": [
      "tomato",
      "red onion",
      "jalapeno",
      "black beans",
      "cheddar cheese",
      "eggs",
      "salt",
      "pepper",
      "butter",
      "tortilla chips",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/breakfast-nachos/"
  },
  {
    "recipe": "Super Fudgy Homemade Brownies",
    "listOfIngredients": [
      "butter",
      "cooking oil",
      "unsweetened cocoa powder",
      "granulated sugar",
      "eggs",
      "vanilla extract",
      "salt",
      "all-purpose flour",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/super-fudgy-homemade-brownies/"
  },
  {
    "recipe": "Apple Pie",
    "listOfIngredients": [
      "double pie crust",
      "sugar",
      "cinnamon",
      "flour",
      "nutmeg",
      "salt",
      "lemon juice",
      "apples",
      "eggs",
      "heavy cream"
    ],
    "url": "https://www.budgetbytes.com/apple-pie/"
  },
  {
    "recipe": "Mini Broccoli Cheddar Quiches",
    "listOfIngredients": [
      "butter",
      "cream cheese",
      "all-purpose flour",
      "eggs",
      "milk",
      "Parmesan",
      "garlic powder",
      "black pepper",
      "salt",
      "frozen broccoli florets",
      "cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/mini-broccoli-cheddar-quiches/"
  },
  {
    "recipe": "Baked Spicy Chicken Sandwiches",
    "listOfIngredients": [
      "breadcrumbs",
      "garlic powder",
      "smoked paprika",
      "cayenne",
      "salt",
      "black pepper",
      "cooking oil",
      "plain yogurt",
      "hot sauce",
      "boneless",
      "shredded cabbage slaw mix",
      "mayonnaise",
      "plain whole milk yogurt",
      "honey",
      "Dijon mustard",
      "apple cider vinegar",
      "buns"
    ],
    "url": "https://www.budgetbytes.com/baked-spicy-chicken-sandwiches/"
  },
  {
    "recipe": "Bean Quesadillas and Spanish Rice",
    "listOfIngredients": [
      "Santa Fe Blend frozen vegetables",
      "pinto beans",
      "cheddar cheese",
      "Bayou Blend seasoning",
      "flour tortillas",
      "Spanish rice",
      "Rotel"
    ],
    "url": "https://www.budgetbytes.com/dollar-store-dinners-bean-quesadillas/"
  },
  {
    "recipe": "Easy Green Chile Enchilada Sauce",
    "listOfIngredients": [
      "green chiles",
      "cooking oil",
      "all-purpose flour",
      "cumin",
      "garlic powder",
      "onion powder",
      "water",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/green-chile-enchilada-sauce/"
  },
  {
    "recipe": "Peach Galette",
    "listOfIngredients": [
      "double pie crust",
      "peaches",
      "vanilla extract",
      "granulated sugar",
      "corn starch",
      "heavy cream"
    ],
    "url": "https://www.budgetbytes.com/peach-galette/"
  },
  {
    "recipe": "Bun cha",
    "listOfIngredients": [
      "pork",
      "garlic",
      "shallot",
      "lemongrass",
      "honey",
      "fish sauce",
      "salt",
      "pepper",
      "cooking oil",
      "lime juice",
      "water",
      "Thai red chili pepper",
      "sugar",
      "carrots",
      "rice vermicelli noodles",
      "butter lettuce",
      "fresh mint",
      "cucumber"
    ],
    "url": "https://www.budgetbytes.com/bun-cha/"
  },
  {
    "recipe": "Creamy Chicken and Spinach Quesadillas",
    "listOfIngredients": [
      "chicken breast",
      "chili powder",
      "cumin",
      "garlic powder",
      "salt",
      "cooking oil",
      "fresh spinach",
      "Monterey jack cheese",
      "sour cream",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/creamy-chicken-and-spinach-quesadillas/"
  },
  {
    "recipe": "Pumpkin Pie Overnight Oats",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "pumpkin pie spice",
      "pecans",
      "salt",
      "pumpkin puree",
      "brown sugar",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-pie-overnight-oats/"
  },
  {
    "recipe": "Carrot Soup",
    "listOfIngredients": [
      "carrots",
      "olive oil",
      "salt",
      "salted butter",
      "yellow onion",
      "thyme",
      "water",
      "chicken broth",
      "heavy cream",
      "fresh ginger",
      "Italian parsley",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/carrot-soup/"
  },
  {
    "recipe": "No Churn Balsamic Peach Ice Cream",
    "listOfIngredients": [
      "butter",
      "peaches",
      "balsamic vinegar",
      "brown sugar",
      "sweetened condensed milk",
      "vanilla extract",
      "salt",
      "heavy whipping cream"
    ],
    "url": "https://www.budgetbytes.com/no-churn-balsamic-peach-ice-cream/"
  },
  {
    "recipe": "Pizza Roll Ups",
    "listOfIngredients": [
      "flour tortillas",
      "pepperoni",
      "mozzarella cheese",
      "oil",
      "pizza sauce"
    ],
    "url": "https://www.budgetbytes.com/pizza-roll-ups/"
  },
  {
    "recipe": "Sweet and Spicy Tempeh Bowls",
    "listOfIngredients": [
      "tempeh",
      "water",
      "garlic powder",
      "smoked paprika",
      "cayenne pepper",
      "salt",
      "brown sugar",
      "olive oil",
      "cornmeal",
      "butter",
      "black beans",
      "shredded cheddar",
      "avocado",
      "green onions",
      "ranch dressing"
    ],
    "url": "https://www.budgetbytes.com/sweet-and-spicy-tempeh-bowls/"
  },
  {
    "recipe": "Make Ahead Bean and Cheese Burritos",
    "listOfIngredients": [
      "cooking oil",
      "garlic",
      "chili powder",
      "cumin",
      "oregano",
      "long grain white rice",
      "salt",
      "water",
      "black beans",
      "shredded cheddar",
      "green onions",
      "taco sauce",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/make-ahead-bean-and-cheese-burritos/"
  },
  {
    "recipe": "Summer Gazpacho",
    "listOfIngredients": [
      "crushed tomatoes",
      "vegetable juice",
      "sweet onion",
      "cucumber",
      "fresh parsley",
      "fresh cilantro",
      "garlic",
      "olive oil",
      "salt",
      "Freshly cracked black pepper",
      "lemon juice",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/summer-gazpacho/"
  },
  {
    "recipe": "Instant Pot Pinto Beans with Chorizo",
    "listOfIngredients": [
      "cooking oil",
      "dry  chorizo",
      "yellow onion",
      "garlic",
      "dry pinto beans",
      "bay leaves",
      "black pepper",
      "reduced sodium chicken broth",
      "tomatoes"
    ],
    "url": "https://www.budgetbytes.com/instant-pot-pinto-beans-chorizo/"
  },
  {
    "recipe": "Freezer Ready Mini Pizzas",
    "listOfIngredients": [
      "English Muffins",
      "pizza sauce",
      "shredded mozzarella",
      "Salad Bar Vegetables"
    ],
    "url": "https://www.budgetbytes.com/freezer-ready-mini-pizzas/"
  },
  {
    "recipe": "Vegetarian Stuffing",
    "listOfIngredients": [
      "mushrooms",
      "stalks celery",
      "carrots",
      "yellow onion",
      "garlic",
      "parsley",
      "salted butter",
      "dried sage",
      "dried thyme",
      "Black pepper",
      "salt",
      "walnuts",
      "loaf French bread",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/savory-vegetable-stuffing/"
  },
  {
    "recipe": "Peanut Butter and Jelly Bars",
    "listOfIngredients": [
      "all-purpose flour",
      "rolled oats",
      "baking soda",
      "salted butter",
      "brown sugar",
      "eggs",
      "natural peanut butter",
      "vanilla extract",
      "jam",
      "peanuts"
    ],
    "url": "https://www.budgetbytes.com/peanut-butter-jelly-bars/"
  },
  {
    "recipe": "Sheet Pan Cranberry Chicken Dinner",
    "listOfIngredients": [
      "Brussels sprouts",
      "sweet potatoes",
      "olive oil",
      "salt",
      "black pepper",
      "garlic powder",
      "boneless",
      "butter",
      "dried sage",
      "dried thyme",
      "berry cranberry sauce",
      "balsamic vinegar"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-cranberry-chicken-dinner/"
  },
  {
    "recipe": "Garlic Herb mashed Cauliflower",
    "listOfIngredients": [
      "cauliflower",
      "butter",
      "cream cheese",
      "dried parsley",
      "dried oregano",
      "dried basil",
      "onion powder",
      "garlic powder",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/garlic-herb-mashed-cauliflower/"
  },
  {
    "recipe": "Singapore Noodles with Crispy Tofu",
    "listOfIngredients": [
      "firm",
      "salt",
      "cornstarch",
      "cooking oil",
      "soy sauce",
      "toasted sesame oil",
      "Sriracha",
      "rice vinegar",
      "mild curry powder",
      "rice vermicelli",
      "garlic",
      "fresh ginger",
      "green onions",
      "shredded cabbage and carrots"
    ],
    "url": "https://www.budgetbytes.com/singapore-noodles-crispy-tofu/"
  },
  {
    "recipe": "Vegetarian Mustard Greens",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "vegetable broth",
      "fresh mustard greens",
      "smoked paprika",
      "sugar",
      "Black pepper",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/vegetarian-mustard-greens/"
  },
  {
    "recipe": "Sesame Tempeh Bowls",
    "listOfIngredients": [
      "soy sauce",
      "water",
      "sesame oil",
      "brown sugar",
      "rice vinegar",
      "fresh ginger",
      "garlic",
      "sesame seeds",
      "cornstarch",
      "tempeh",
      "green onions",
      "cooked jasmine rice",
      "frozen broccoli florets"
    ],
    "url": "https://www.budgetbytes.com/sesame-tempeh-bowls/"
  },
  {
    "recipe": "Garlic Butter Shrimp",
    "listOfIngredients": [
      "shrimp",
      "garlic",
      "fresh lemon",
      "butter",
      "olive oil",
      "salt",
      "black pepper",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/quick-garlic-butter-shrimp/"
  },
  {
    "recipe": "Scrambled Eggs with Spinach and Feta",
    "listOfIngredients": [
      "fresh spinach",
      "eggs",
      "butter",
      "feta",
      "crushed red pepper",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/scrambled-eggs-with-spinach-and-feta/"
  },
  {
    "recipe": "Kapusniak",
    "listOfIngredients": [
      "pork short ribs",
      "water",
      "bay leaves",
      "bacon",
      "yellow onion",
      "carrots",
      "potatoes",
      "sauerkraut",
      "salt",
      "black pepper",
      "fresh dill"
    ],
    "url": "https://www.budgetbytes.com/kapusniak/"
  },
  {
    "recipe": "Marinated Lentil Salad",
    "listOfIngredients": [
      "lemon",
      "olive oil",
      "garlic",
      "dried oregano",
      "salt",
      "black pepper",
      "dry brown lentils",
      "parsley",
      "grape tomatoes",
      "red onion",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/marinated-lentil-salad/"
  },
  {
    "recipe": "Crunchy Kale and Chicken Salad",
    "listOfIngredients": [
      "cooked chicken",
      "kale",
      "celery",
      "or slivered almonds",
      "golden raisins",
      "mayonnaise",
      "apple cider vinegar",
      "honey",
      "Dijon mustard",
      "salt",
      "Freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/crunchy-kale-chicken-salad/"
  },
  {
    "recipe": "Black Bean and Roasted Salsa Soup",
    "listOfIngredients": [
      "Roma tomatoes",
      "yellow onion",
      "red bell pepper",
      "jalapeno",
      "garlic",
      "poblano peppers",
      "cooking oil",
      "fresh cilantro",
      "black beans",
      "vegetable broth",
      "cumin",
      "salt",
      "lime"
    ],
    "url": "https://www.budgetbytes.com/black-bean-roasted-salsa-soup/"
  },
  {
    "recipe": "Baked Beef and Black Bean Tacos",
    "listOfIngredients": [
      "chili powder",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "cayenne pepper",
      "salt",
      "Freshly cracked black pepper",
      "cooking oil",
      "yellow onion",
      "garlic",
      "lean ground beef",
      "black beans",
      "hard taco shells",
      "shredded cheddar",
      "tomato",
      "jalapeno",
      "fresh cilantro",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/baked-beef-black-bean-tacos/"
  },
  {
    "recipe": "Beef Burrito Casserole",
    "listOfIngredients": [
      "cooking oil",
      "beef",
      "garlic",
      "salt",
      "cooked rice",
      "black beans",
      "salsa",
      "green onions",
      "chili powder",
      "cream cheese",
      "shredded cheddar"
    ],
    "url": "https://www.budgetbytes.com/beef-burrito-casserole/"
  },
  {
    "recipe": "No-Churn Mint Chocolate Chip Ice Cream",
    "listOfIngredients": [
      "sweetened condensed milk",
      "mint extract",
      "vanilla extract",
      "heavy whipping cream",
      "mini chocolate chips",
      "chocolate syrup"
    ],
    "url": "https://www.budgetbytes.com/no-churn-mint-chocolate-chip-ice-cream/"
  },
  {
    "recipe": "Classic Homemade Cranberry Sauce",
    "listOfIngredients": [
      "fresh",
      "orange",
      "sugar",
      "water"
    ],
    "url": "https://www.budgetbytes.com/cranberry-sauce/"
  },
  {
    "recipe": "Easy Caprese Pizzas",
    "listOfIngredients": [
      "balsamic vinegar",
      "brown sugar",
      "mini naan",
      "Roma tomatoes",
      "mozzarella",
      "fresh basil leaves",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-caprese-pizza/"
  },
  {
    "recipe": "Easy Apple Crisp",
    "listOfIngredients": [
      "apples",
      "sugar",
      "cinnamon",
      "all-purpose flour",
      "ginger",
      "cloves",
      "vanilla extract",
      "rolled oats",
      "brown sugar",
      "butter",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/easy-apple-crisp/"
  },
  {
    "recipe": "Sweet Crunch Winter Salad",
    "listOfIngredients": [
      "tahini",
      "water",
      "lemon juice",
      "maple syrup",
      "salt",
      "garlic powder",
      "cayenne pepper",
      "purple cabbage",
      "broccoli",
      "carrots",
      "green onions",
      "sunflower seeds",
      "dried cranberries"
    ],
    "url": "https://www.budgetbytes.com/sweet-crunch-winter-salad/"
  },
  {
    "recipe": "Creamy Spinach Artichoke Pizza",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "instant yeast",
      "olive oil",
      "water",
      "frozen chopped spinach",
      "butter",
      "garlic",
      "cream cheese",
      "milk",
      "cooking oil",
      "artichoke hearts",
      "crushed red pepper",
      "shredded mozzarella"
    ],
    "url": "https://www.budgetbytes.com/creamy-spinach-artichoke-pizza/"
  },
  {
    "recipe": "Super Fresh Cucumber Tomato Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "lemon juice",
      "dried oregano",
      "salt",
      "Black pepper",
      "cucumbers",
      "Roma tomatoes",
      "red onion",
      "green bell pepper",
      "parsley",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/super-fresh-cucmber-salad/"
  },
  {
    "recipe": "Buttermilk Pull-Apart Rolls from Bread Toast Crumbs",
    "listOfIngredients": [
      "all-purpose flour",
      "kosher salt",
      "sugar",
      "instant yeast",
      "water",
      "buttermilk",
      "melted butter",
      "flakey salt"
    ],
    "url": "https://www.budgetbytes.com/buttermilk-pull-apart-rolls-bread-toast-crumbs/"
  },
  {
    "recipe": "Garlic Toast with Balsamic Tomatoes and White Beans",
    "listOfIngredients": [
      "hearty bread",
      "garlic",
      "olive oil",
      "grape tomatoes",
      "balsamic vinegar",
      "dried rosemary",
      "butter",
      "salt",
      "Cannellini beans",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/garlic-toast-balsamic-tomatoes-white-beans/"
  },
  {
    "recipe": "Oven Roasted Corn with Honey Chili Butter",
    "listOfIngredients": [
      "fresh corn",
      "butter",
      "honey",
      "chili powder",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/oven-roasted-corn-with-honey-chili-butter/"
  },
  {
    "recipe": "Simple Mushroom Broccoli Stir Fry Noodles",
    "listOfIngredients": [
      "soy sauce",
      "toasted sesame oil",
      "chili garlic sauce",
      "brown sugar",
      "water",
      "cornstarch",
      "wide rice noodles",
      "cooking oil",
      "white mushrooms",
      "garlic",
      "frozen broccoli florets",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/simple-mushroom-broccoli-stir-fry-noodles/"
  },
  {
    "recipe": "Streuseled Sweet Potatoes",
    "listOfIngredients": [
      "sweet Potatoes",
      "olive oil",
      "maple syrup",
      "all-purpose flour",
      "rolled oats",
      "brown sugar",
      "walnuts",
      "butter",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/streuseled-sweet-potatoes/"
  },
  {
    "recipe": "Sesame Slaw",
    "listOfIngredients": [
      "neutral salad oil",
      "rice vinegar",
      "soy sauce",
      "toasted sesame oil",
      "brown sugar",
      "fresh ginger",
      "sesame seeds",
      "shredded red cabbage",
      "carrots",
      "red bell pepper",
      "green onion",
      "frozen shelled edamame"
    ],
    "url": "https://www.budgetbytes.com/sesame-slaw/"
  },
  {
    "recipe": "Double Spinach Artichoke Dip",
    "listOfIngredients": [
      "frozen chopped spinach",
      "quartered artichoke hearts",
      "shredded mozzarella",
      "Parmesan",
      "crushed red pepper",
      "butter",
      "garlic",
      "cream cheese",
      "sour cream",
      "mayonnaise",
      "hot sauce"
    ],
    "url": "https://www.budgetbytes.com/double-spinach-artichoke-dip/"
  },
  {
    "recipe": "Garlic Parmesan Roasted Cauliflower",
    "listOfIngredients": [
      "cauliflower",
      "Parmesan",
      "garlic powder",
      "salt",
      "black pepper",
      "olive oil",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/garlic-parmesan-roasted-cauliflower/"
  },
  {
    "recipe": "Apple Cider Mimosas",
    "listOfIngredients": [
      "apple cider",
      "sparkling wine",
      "fresh rosemary"
    ],
    "url": "https://www.budgetbytes.com/apple-cider-mimosas/"
  },
  {
    "recipe": "Balsamic Chicken Skillet",
    "listOfIngredients": [
      "olive oil",
      "brown sugar",
      "balsamic vinegar",
      "soy sauce",
      "garlic",
      "Black pepper",
      "boneless",
      "milk mozzarella",
      "Roma tomatoes",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/balsamic-chicken-skillet/"
  },
  {
    "recipe": "Easy Spinach Ricotta Pasta",
    "listOfIngredients": [
      "uncooked fettuccine",
      "olive oil",
      "garlic",
      "milk",
      "milk ricotta",
      "salt",
      "Black pepper",
      "frozen chopped spinach"
    ],
    "url": "https://www.budgetbytes.com/easy-spinach-ricotta-pasta/"
  },
  {
    "recipe": "Moroccan Spiced Sweet Potatoes",
    "listOfIngredients": [
      "cumin",
      "turmeric",
      "cinnamon",
      "cayenne pepper",
      "paprika",
      "salt",
      "olive oil",
      "sweet potatoes",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/moroccan-spiced-sweet-potatoes/"
  },
  {
    "recipe": "Parmesan Roasted Potatoes",
    "listOfIngredients": [
      "red potatoes",
      "olive oil",
      "Parmesan",
      "garlic powder",
      "paprika",
      "salt",
      "Freshly cracked black pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/parmesan-roasted-potatoes/"
  },
  {
    "recipe": "Mushroom Herb Gravy",
    "listOfIngredients": [
      "butter",
      "garlic",
      "mushrooms",
      "all-purpose flour",
      "vegetable broth",
      "fresh thyme",
      "dried sage",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/mushroom-herb-gravy/"
  },
  {
    "recipe": "Sriracha Nooch Popcorn",
    "listOfIngredients": [
      "high heat cooking oil",
      "popcorn kernels",
      "butter",
      "sriracha",
      "nutritional yeast"
    ],
    "url": "https://www.budgetbytes.com/sriracha-nooch-popcorn/"
  },
  {
    "recipe": "Cranberry Orange Cream Scones",
    "listOfIngredients": [
      "orange",
      "all-purpose flour",
      "powdered sugar",
      "baking powder",
      "salt",
      "dried cranberries",
      "heavy whipping cream",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/cranberry-orange-cream-scones/"
  },
  {
    "recipe": "Pesto Grilled Cheese",
    "listOfIngredients": [
      "hearty bread",
      "butter",
      "pesto",
      "sun dried tomato",
      "mozzarella"
    ],
    "url": "https://www.budgetbytes.com/pesto-grilled-cheese-with-sun-dried-tomatoes/"
  },
  {
    "recipe": "Roasted Asparagus and Tomatoes",
    "listOfIngredients": [
      "grape tomatoes",
      "asparagus",
      "olive oil",
      "garlic",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/roasted-asparagus-and-tomatoes/"
  },
  {
    "recipe": "Puerto Rican Sofrito",
    "listOfIngredients": [
      "yellow onion",
      "green bell pepper",
      "fresh cilantro",
      "garlic"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-sofrito/"
  },
  {
    "recipe": "Cheese Enchiladas",
    "listOfIngredients": [
      "corn tortillas",
      "cheese",
      "green chiles",
      "sour cream",
      "garlic powder",
      "cumin",
      "salt",
      "enchilada sauce"
    ],
    "url": "https://www.budgetbytes.com/cheese-enchiladas/"
  },
  {
    "recipe": "Easy Homemade Crepes",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "eggs",
      "milk",
      "melted butter",
      "water",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/homemade-crepes/"
  },
  {
    "recipe": "Chimichurri Chicken Kebabs",
    "listOfIngredients": [
      "Italian parsley",
      "cilantro",
      "olive oil",
      "red wine vinegar",
      "garlic",
      "dried oregano",
      "cumin",
      "crushed red pepper",
      "salt",
      "boneless",
      "bell pepper",
      "zucchini",
      "red onion",
      "button mushrooms",
      "salt and pepper",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/chimichurri-chicken-kebabs/"
  },
  {
    "recipe": "Classic Three Bean Salad",
    "listOfIngredients": [
      "kidney beans",
      "cannellini beans",
      "frozen green beans",
      "parsley",
      "red onion",
      "apple cider vinegar",
      "olive oil",
      "sugar",
      "salt",
      "black pepper",
      "Dijon mustard"
    ],
    "url": "https://www.budgetbytes.com/classic-three-bean-salad/"
  },
  {
    "recipe": "Seeded No-Knead Bread",
    "listOfIngredients": [
      "rolled oats",
      "chia seeds",
      "hemp seed hearts",
      "flaxseed",
      "water",
      "all-purpose flour",
      "wheat flour",
      "salt",
      "instant yeast",
      "water"
    ],
    "url": "https://www.budgetbytes.com/seeded-no-knead-bread/"
  },
  {
    "recipe": "Classic Southern Style Potato Salad",
    "listOfIngredients": [
      "Yukon Gold potatoes",
      "salt",
      "eggs",
      "mayonnaise",
      "yellow mustard",
      "sweet relish",
      "red wine vinegar",
      "Tony Chachere’s seasoning",
      "Freshly cracked black pepper",
      "green onions",
      "ribs celery"
    ],
    "url": "https://www.budgetbytes.com/southern-style-potato-salad/"
  },
  {
    "recipe": "Almond Dutch Baby with Ricotta and Jam",
    "listOfIngredients": [
      "eggs",
      "milk",
      "all-purpose flour",
      "sugar",
      "salt",
      "almond extract",
      "vanilla extract",
      "almonds",
      "butter",
      "ricotta",
      "jam"
    ],
    "url": "https://www.budgetbytes.com/almond-dutch-baby-with-ricotta-and-jam/"
  },
  {
    "recipe": "Mini Black Bean Turkey Burgers",
    "listOfIngredients": [
      "black beans",
      "green onions",
      "chili powder",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "lean ground turkey",
      "avocado",
      "lime",
      "sour cream",
      "sugar",
      "pita halves",
      "Roma tomatoes"
    ],
    "url": "https://www.budgetbytes.com/mini-black-bean-turkey-burgers/"
  },
  {
    "recipe": "Baked Beans",
    "listOfIngredients": [
      "bacon",
      "Great Northern Beans",
      "tomato sauce",
      "tomato paste",
      "apple cider vinegar",
      "brown sugar",
      "molasses",
      "Dijon mustard",
      "Worcestershire sauce",
      "smoked paprika",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/baked-beans/"
  },
  {
    "recipe": "Cheddar Grits Breakfast Bowls",
    "listOfIngredients": [
      "water",
      "salt",
      "quick cooking yellow grits",
      "butter",
      "milk",
      "cheddar",
      "eggs",
      "salsa",
      "green onions",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/cheddar-grits-breakfast-bowls/"
  },
  {
    "recipe": "Cabbage Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "carrots",
      "celery",
      "green bell pepper",
      "tomatoes",
      "tomato sauce",
      "frozen green beans",
      "parsley",
      "smoked paprika",
      "dried oregano",
      "dried thyme",
      "black pepper",
      "cabbage",
      "vegetable broth",
      "salt",
      "lemon juice"
    ],
    "url": "https://www.budgetbytes.com/can-eat-cabbage-soup/"
  },
  {
    "recipe": "Jalapeno Cheddar Cornbread",
    "listOfIngredients": [
      "butter",
      "all-purpose flour",
      "cornmeal",
      "sugar",
      "baking powder",
      "salt",
      "cheddar",
      "jalapenos",
      "sour cream",
      "milk",
      "eggs",
      "cooking oil"
    ],
    "url": "https://www.budgetbytes.com/jalapeno-cheddar-cornbread/"
  },
  {
    "recipe": "Pumpkin Smoothie",
    "listOfIngredients": [
      "pumpkin puree",
      "frozen banana",
      "flaxseed",
      "pumpkin pie spice",
      "milk",
      "vanilla extract",
      "brown sugar"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-smoothie/"
  },
  {
    "recipe": "Wild Rice Pilaf",
    "listOfIngredients": [
      "wild rice blend",
      "vegetable broth",
      "butter",
      "yellow onion",
      "celery",
      "apple",
      "dried sage",
      "dried thyme",
      "salt",
      "black pepper",
      "walnuts",
      "dried cranberries",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/wild-rice-pilaf/"
  },
  {
    "recipe": "One Pot Veggie Pasta",
    "listOfIngredients": [
      "garlic",
      "yellow onion",
      "carrots",
      "olive oil",
      "mushrooms",
      "zucchini",
      "red bell pepper",
      "rotini",
      "dried basil",
      "dried oregano",
      "vegetable broth",
      "pasta sauce",
      "mozzarella"
    ],
    "url": "https://www.budgetbytes.com/one-pot-veggie-pasta/"
  },
  {
    "recipe": "Southwest Beef and Cabbage Stir Fry",
    "listOfIngredients": [
      "green cabbage",
      "cooking oil",
      "beef",
      "garlic",
      "chili powder",
      "cumin",
      "Salt",
      "tomatoes with green chiles",
      "frozen corn kernels",
      "green onions",
      "Taco sauce"
    ],
    "url": "https://www.budgetbytes.com/southwest-beef-cabbage-stir-fry/"
  },
  {
    "recipe": "Chorizo Breakfast Hash",
    "listOfIngredients": [
      "baby red potatoes",
      "cooking oil",
      "Mexican chorizo",
      "yellow onion",
      "green bell pepper",
      "salt and pepper",
      "chili powder",
      "green onions",
      "eggs",
      "sour cream",
      "salsa"
    ],
    "url": "https://www.budgetbytes.com/chorizo-breakfast-hash/"
  },
  {
    "recipe": "Shrimp Fried Rice with Pineapple and Toasted Coconut",
    "listOfIngredients": [
      "soy sauce",
      "sriracha",
      "brown sugar",
      "pineapple chunks juice",
      "green onions",
      "eggs",
      "unsweetened coconut shreds",
      "cooking oil",
      "and deveined shrimp",
      "day-old cooked jasmine rice",
      "Handful fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/shrimp-fried-rice-pineapple-toasted-coconut/"
  },
  {
    "recipe": "Enchilada Bubble Up Casserole",
    "listOfIngredients": [
      "cooking oil",
      "all-purpose flour",
      "chili powder",
      "water",
      "tomato paste",
      "cumin",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "water",
      "active dry",
      "baking powder",
      "sugar",
      "heavy cream",
      "cooked chicken",
      "black beans",
      "cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/enchilada-bubble-casserole/"
  },
  {
    "recipe": "Roasted Vegetable Salad Meal Prep",
    "listOfIngredients": [
      "garlic powder",
      "onion powder",
      "dried dill",
      "dried parsley",
      "salt",
      "Black pepper",
      "tahini",
      "water",
      "lemon juice",
      "quinoa",
      "water",
      "grape tomatoes",
      "mushrooms",
      "zucchini",
      "yellow squash",
      "red onion",
      "olive oil",
      "dried oregano",
      "fresh spinach",
      "hummus"
    ],
    "url": "https://www.budgetbytes.com/roasted-vegetable-salad-meal-prep/"
  },
  {
    "recipe": "Hatch Chile Sweet Potato Cornbread",
    "listOfIngredients": [
      "fresh Hatch chiles",
      "sweet potato",
      "yellow cornmeal",
      "all-purpose flour",
      "sugar",
      "baking powder",
      "salt",
      "eggs",
      "sour cream",
      "milk",
      "cooking oil",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/hatch-chile-sweet-potato-cornbread/"
  },
  {
    "recipe": "Spinach and Orzo Salad with Balsamic Vinaigrette",
    "listOfIngredients": [
      "olive oil",
      "balsamic vinegar",
      "garlic",
      "Dijon mustard",
      "salt and pepper",
      "orzo",
      "fresh baby spinach",
      "sun dried tomatoes",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/spinach-orzo-salad-balsamic-vinaigrette/"
  },
  {
    "recipe": "Homemade Pineapple Orange Julius",
    "listOfIngredients": [
      "orange juice concentrate",
      "frozen pineapple",
      "vanilla extract",
      "sugar",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/homemade-pineapple-orange-julius/"
  },
  {
    "recipe": "One Pot Bacon Broccoli Mac and Cheese",
    "listOfIngredients": [
      "frozen broccoli florets",
      "bacon",
      "cheddar",
      "pasta",
      "evaporated milk",
      "smoked paprika",
      "hot sauce",
      "Dijon mustard",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/one-pot-bacon-broccoli-mac-cheese/"
  },
  {
    "recipe": "Chili Garlic Tofu Bowls",
    "listOfIngredients": [
      "kale",
      "cooking oil",
      "garlic",
      "soy sauce",
      "toasted sesame oil",
      "sesame seeds",
      "firm tofu",
      "chili garlic sauce",
      "brown sugar",
      "cooked brown rice",
      "lime",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/chili-garlic-tofu-bowls/"
  },
  {
    "recipe": "Garlic Herb Mashed Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "salt",
      "butter",
      "milk",
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/fluffy-garlic-herb-mashed-potatoes/"
  },
  {
    "recipe": "Quick Tofu Stir Fry",
    "listOfIngredients": [
      "soy sauce",
      "brown sugar",
      "water",
      "toasted sesame oil",
      "garlic",
      "ginger",
      "cooking oil",
      "extra firm tofu",
      "peanuts",
      "coleslaw mix",
      "green onions",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/quick-tofu-stir-fry/"
  },
  {
    "recipe": "Easy Chocolate Cinnamon Buns",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "sugar",
      "baking powder",
      "heavy whipping cream",
      "butter",
      "brown sugar",
      "cinnamon",
      "milk chocolate chips",
      "powdered sugar",
      "unsweetened cocoa powder",
      "vanilla extract",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/easy-chocolate-cinnamon-buns/"
  },
  {
    "recipe": "Tomato Basil No Knead Bread",
    "listOfIngredients": [
      "sun dried tomatoes",
      "all-purpose flour",
      "instant",
      "salt",
      "dried basil",
      "water",
      "tomato paste",
      "mozzarella"
    ],
    "url": "https://www.budgetbytes.com/tomato-basil-no-knead-bread/"
  },
  {
    "recipe": "Southwest Spaghetti Squash Bowls",
    "listOfIngredients": [
      "cooked spaghetti squash",
      "chili powder",
      "Salt",
      "black beans",
      "salsa",
      "Monterey jack cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/southwest-spaghetti-squash-bowls/"
  },
  {
    "recipe": "Pressure Cooker Split Pea Soup",
    "listOfIngredients": [
      "yellow onion",
      "carrots",
      "ribs celery",
      "garlic",
      "split peas",
      "coconut oil",
      "bay leaf",
      "smoked paprika",
      "thyme",
      "Black pepper",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/pressure-cooker-split-pea-soup/"
  },
  {
    "recipe": "Cheddar Cheeseburger Meatloaf",
    "listOfIngredients": [
      "plain breadcrumbs",
      "smoked paprika",
      "garlic powder",
      "salt",
      "eggs",
      "onion",
      "sharp cheddar",
      "beef",
      "ketchup",
      "brown sugar",
      "yellow mustard",
      "Worcestershire sauce"
    ],
    "url": "https://www.budgetbytes.com/cheddar-cheeseburger-meatloaf/"
  },
  {
    "recipe": "Honey Mustard Broccoli Salad",
    "listOfIngredients": [
      "mayonnaise",
      "Dijon mustard",
      "yellow mustard",
      "honey",
      "apple cider vinegar",
      "garlic powder",
      "paprika",
      "salt",
      "black pepper",
      "Broccoli",
      "red onion",
      "slivered almonds",
      "dried cranberries"
    ],
    "url": "https://www.budgetbytes.com/honey-mustard-broccoli-salad/"
  },
  {
    "recipe": "Easy Lemon Cream Pie",
    "listOfIngredients": [
      "crushed vanilla wafers",
      "butter",
      "sugar",
      "sweetened condensed milk",
      "lemons",
      "vanilla extract",
      "heavy whipping cream"
    ],
    "url": "https://www.budgetbytes.com/easy-lemon-cream-pie/"
  },
  {
    "recipe": "Spinach Stuffed Portobello Mushrooms",
    "listOfIngredients": [
      "frozen spinach",
      "cottage cheese",
      "shredded mozzarella",
      "eggs",
      "feta",
      "garlic powder",
      "salt",
      "black pepper",
      "crushed red pepper",
      "portobello mushrooms",
      "olive oil",
      "marinara sauce"
    ],
    "url": "https://www.budgetbytes.com/spinach-stuffed-portobellos/"
  },
  {
    "recipe": "Vegetable Fried Rice",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "carrots",
      "red bell pepper",
      "green onions",
      "eggs",
      "frozen peas",
      "cooking oil",
      "cooked and cooled rice",
      "soy sauce",
      "toasted sesame oil"
    ],
    "url": "https://www.budgetbytes.com/vegetable-not-fried-rice/"
  },
  {
    "recipe": "Apple Pie Overnight Oats",
    "listOfIngredients": [
      "old-fashioned rolled oats",
      "cinnamon",
      "ginger",
      "cloves",
      "walnuts",
      "dried cranberries",
      "unsweetened applesauce",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/no-sugar-added-apple-pie-overnight-oats/"
  },
  {
    "recipe": "Peanut Lime Dressing",
    "listOfIngredients": [
      "natural-style peanut butter",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "lime",
      "soy sauce",
      "neutral oil"
    ],
    "url": "https://www.budgetbytes.com/peanut-lime-dressing/"
  },
  {
    "recipe": "Loaded Mashed Potato Bowls",
    "listOfIngredients": [
      "prepared mashed potatoes",
      "frozen corn kernels",
      "black beans",
      "chili powder",
      "cheddar",
      "BBQ sauce",
      "green onions",
      "jalapeno"
    ],
    "url": "https://www.budgetbytes.com/loaded-mashed-potato-bowls/"
  },
  {
    "recipe": "Ratatouille Frittata",
    "listOfIngredients": [
      "eggplant",
      "zucchini",
      "yellow onion",
      "grape tomatoes",
      "dried basil",
      "dried oregano",
      "crushed red pepper",
      "salt and pepper",
      "olive oil",
      "garlic",
      "eggs",
      "milk",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/ratatouille-frittata/"
  },
  {
    "recipe": "Apple Spice Pork Chops",
    "listOfIngredients": [
      "pork chops",
      "vegetable oil",
      "salt and pepper",
      "onion",
      "fuji apples",
      "butter",
      "brown sugar",
      "cinnamon",
      "nutmeg",
      "chicken broth"
    ],
    "url": "https://www.budgetbytes.com/apple-spice-pork-chops/"
  },
  {
    "recipe": "How to Steam Green Beans",
    "listOfIngredients": [
      "fresh green beans",
      "butter",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/how-to-steam-fresh-green-beans/"
  },
  {
    "recipe": "The Bagel Lunch Box",
    "listOfIngredients": [
      "cream cheese",
      "fresh parsley",
      "fresh cilantro",
      "green onion",
      "garlic powder",
      "salt",
      "lemon juice",
      "mini bagels",
      "eggs",
      "cucumber",
      "grape tomatoes"
    ],
    "url": "https://www.budgetbytes.com/the-bagel-lunch-box/"
  },
  {
    "recipe": "Giant Slow Cooker Meatballs",
    "listOfIngredients": [
      "beef",
      "Italian sausage",
      "eggs",
      "plain breadcrumbs",
      "Parmesan",
      "onion powder",
      "garlic powder",
      "salt",
      "marinara sauce",
      "spaghetti"
    ],
    "url": "https://www.budgetbytes.com/giant-slow-cooker-meatballs/"
  },
  {
    "recipe": "The Best Broccoli Cheddar Soup",
    "listOfIngredients": [
      "onion",
      "broccoli",
      "carrots",
      "butter",
      "all-purpose flour",
      "chicken broth",
      "milk",
      "smoked paprika",
      "garlic powder",
      "black pepper",
      "cayenne pepper",
      "sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/easy-broccoli-cheddar-soup/"
  },
  {
    "recipe": "Zuppa Toscana",
    "listOfIngredients": [
      "Italian Sausage",
      "yellow onion",
      "garlic",
      "Great Northern beans",
      "smoked paprika",
      "chicken broth",
      "water",
      "half and half",
      "red potatoes",
      "kale",
      "red pepper flakes",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/zuppa-toscana/"
  },
  {
    "recipe": "The Best Homemade Chicken Noodle Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "carrots",
      "celery",
      "chicken breast",
      "dried basil",
      "dried parsley",
      "dried thyme",
      "bay leaf",
      "Black pepper",
      "salt",
      "egg noodles"
    ],
    "url": "https://www.budgetbytes.com/chicken-noodle-soup/"
  },
  {
    "recipe": "Braised Red Cabbage",
    "listOfIngredients": [
      "butter",
      "yellow onion",
      "red cabbage",
      "granny smith apple",
      "apple cider vinegar",
      "water",
      "salt",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/braised-red-cabbage/"
  },
  {
    "recipe": "Chicken and Lime Soup",
    "listOfIngredients": [
      "yellow onion",
      "ribs celery",
      "jalapenno",
      "garlic",
      "olive oil",
      "boneless",
      "chicken broth",
      "tomatoes with green chiles",
      "oregano",
      "cumin",
      "lime",
      "cilantro",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/chicken-lime-soup/"
  },
  {
    "recipe": "Pressure Cooker Red Beans",
    "listOfIngredients": [
      "smoked sausage",
      "olive oil",
      "onion",
      "bell pepper",
      "stalks celery",
      "garlic",
      "dry uncooked red beans",
      "dried thyme",
      "dried oregano",
      "smoked paprika",
      "cayenne",
      "Freshly cracked black pepper",
      "chicken broth",
      "water",
      "green onions",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/pressure-cooker-red-beans/"
  },
  {
    "recipe": "Spinach White Bean Enchiladas with Pepper Jack Sauce",
    "listOfIngredients": [
      "corn tortillas",
      "pepper jack cheese",
      "frozen chopped spinach",
      "white beans",
      "garlic powder",
      "cumin",
      "salt",
      "Black pepper",
      "Handful fresh chopped cilantro for garnish",
      "butter",
      "garlic",
      "cream cheese",
      "milk"
    ],
    "url": "https://www.budgetbytes.com/spinach-white-bean-enchiladas-pepper-jack-sauce/"
  },
  {
    "recipe": "Kale Salad with Cajun Spiced Chickpeas and Buttermilk Dressing",
    "listOfIngredients": [
      "buttermilk",
      "mayonnaise",
      "lemon juice",
      "salt",
      "garlic powder",
      "dried oregano",
      "Freshly cracked black pepper",
      "chickpeas",
      "olive oil",
      "smoked paprika",
      "onion powder",
      "cayenne pepper",
      "dried thyme",
      "lacinato kale",
      "red onion",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/kale-salad-cajun-spiced-chickpeas-buttermilk-dressing/"
  },
  {
    "recipe": "Bacon Broccoli Cheddar Crustless Quiche",
    "listOfIngredients": [
      "frozen broccoli florets",
      "bacon",
      "eggs",
      "milk",
      "Parmesan",
      "seasoning salt",
      "shredded cheddar"
    ],
    "url": "https://www.budgetbytes.com/bacon-broccoli-cheddar-crustless-quiche/"
  },
  {
    "recipe": "Rice Krispie Treats",
    "listOfIngredients": [
      "butter",
      "mini marshmallows",
      "vanilla extract",
      "rice krispie cereal"
    ],
    "url": "https://www.budgetbytes.com/homemade-rice-krispie-treats/"
  },
  {
    "recipe": "Skillet Meatballs and Marinara",
    "listOfIngredients": [
      "Italian sausage",
      "breadcrumbs",
      "eggs",
      "yellow onion",
      "olive oil",
      "garlic",
      "crushed tomatoes",
      "dried oregano",
      "dried basil",
      "salt",
      "Freshly cracked black pepper",
      "brown sugar",
      "tomato paste",
      "pasta"
    ],
    "url": "https://www.budgetbytes.com/skillet-meatballs-and-marinara/"
  },
  {
    "recipe": "Blueberry Lemon Curd Shortcakes",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "sugar",
      "baking powder",
      "heavy whipping cream",
      "blueberries",
      "vanilla extract",
      "lemon curd"
    ],
    "url": "https://www.budgetbytes.com/blueberry-lemon-curd-shortcakes/"
  },
  {
    "recipe": "Meal Prep Noodle Soup Jars",
    "listOfIngredients": [
      "bouillon",
      "soy sauce",
      "toasted sesame oil",
      "garlic powder",
      "ginger powder",
      "sesame seeds",
      "sriracha",
      "carrots",
      "mushrooms",
      "green onions",
      "instant ramen",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/meal-prep-noodle-soup-jars/"
  },
  {
    "recipe": "Air Fryer Chickpeas",
    "listOfIngredients": [
      "chickpeas",
      "cooking oil",
      "seasoning of choice"
    ],
    "url": "https://www.budgetbytes.com/air-fryer-chickpeas/"
  },
  {
    "recipe": "Homemade Pizza Dough",
    "listOfIngredients": [
      "water",
      "yeast",
      "sugar",
      "all-purpose flour",
      "salt",
      "olive oil"
    ],
    "url": "https://www.budgetbytes.com/pizza-dough/"
  },
  {
    "recipe": "Sloppy Joes",
    "listOfIngredients": [
      "yellow onion",
      "green bell pepper",
      "garlic",
      "olive oil",
      "beef",
      "tomato sauce",
      "tomato paste",
      "apple cider vinegar",
      "brown sugar",
      "Dijon mustard",
      "chili powder",
      "Worcestershire sauce",
      "salt",
      "hamburger buns"
    ],
    "url": "https://www.budgetbytes.com/sloppy-joes/"
  },
  {
    "recipe": "Spinach Mushroom French Bread Pizzas",
    "listOfIngredients": [
      "mushrooms",
      "olive oil",
      "garlic",
      "salt",
      "black pepper",
      "frozen spinach",
      "butter",
      "garlic powder",
      "French bread",
      "shredded cheese",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/mushroom-spinach-and-swiss-french-bread-pizzas/"
  },
  {
    "recipe": "Spinach Artichoke Grilled Cheese",
    "listOfIngredients": [
      "frozen chopped spinach",
      "quartered artichoke hearts water",
      "shredded mozzarella",
      "Parmesan",
      "mayonnaise",
      "garlic powder",
      "crushed red pepper",
      "salt",
      "Freshly cracked black pepper",
      "focaccia",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/spinach-artichoke-grilled-cheese/"
  },
  {
    "recipe": "BBQ Chicken Pizza",
    "listOfIngredients": [
      "boneless",
      "smoked paprika",
      "garlic powder",
      "salt",
      "pepper",
      "cooking oil",
      "BBQ sauce",
      "prepared pizza dough",
      "Monterey jack cheese",
      "jalapeno",
      "red onion"
    ],
    "url": "https://www.budgetbytes.com/bbq-chicken-pizza/"
  },
  {
    "recipe": "Pea Soup with Seasoned Flatbread",
    "listOfIngredients": [
      "peas",
      "chicken broth",
      "bacon",
      "thin pizza crust",
      "steak seasoning"
    ],
    "url": "https://www.budgetbytes.com/dsd-pea-soup/"
  },
  {
    "recipe": "Sausage and Vegetable Skillet",
    "listOfIngredients": [
      "cooking oil",
      "Italian sausage",
      "frozen cauliflower florets",
      "frozen peppers and onions",
      "frozen kale",
      "seasoning salt"
    ],
    "url": "https://www.budgetbytes.com/sausage-and-vegetable-skillet/"
  },
  {
    "recipe": "Vegetables and Gravy",
    "listOfIngredients": [
      "russet potatoes",
      "vegetable broth",
      "milk",
      "all-purpose flour",
      "soy sauce",
      "dried thyme",
      "dried sage",
      "onion powder",
      "garlic powder",
      "black pepper",
      "frozen mixed vegetables",
      "butter",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/vegetables-and-gravy/"
  },
  {
    "recipe": "Creamy White Bean and Spinach Quesadillas",
    "listOfIngredients": [
      "cannellini beans",
      "chili powder",
      "cumin",
      "garlic powder",
      "salt",
      "fresh spinach",
      "pepper jack cheese",
      "sour cream",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/creamy-white-bean-and-spinach-quesadillas/"
  },
  {
    "recipe": "Ground Turkey Stir Fry",
    "listOfIngredients": [
      "soy sauce",
      "toasted sesame oil",
      "brown sugar",
      "red pepper flakes",
      "water",
      "bell peppers",
      "green onions",
      "spinach",
      "cooking oil of choice",
      "garlic",
      "turkey",
      "peanuts",
      "cooked brown rice"
    ],
    "url": "https://www.budgetbytes.com/ground-turkey-stir-fry/"
  },
  {
    "recipe": "The Best Weeknight Pasta Sauce",
    "listOfIngredients": [
      "beef",
      "olive oil",
      "onion",
      "butter",
      "crushed tomatoes",
      "Italian seasoning blend",
      "Black pepper",
      "Salt"
    ],
    "url": "https://www.budgetbytes.com/the-best-weeknight-pasta-sauce/"
  },
  {
    "recipe": "Lentil and Sausage Stew",
    "listOfIngredients": [
      "Italian sausage",
      "yellow onion",
      "carrots",
      "celery",
      "garlic",
      "brown lentils",
      "chicken broth",
      "cayenne",
      "smoked paprika",
      "cumin",
      "dried oregano",
      "frozen spinach"
    ],
    "url": "https://www.budgetbytes.com/lentil-sausage-stew/"
  },
  {
    "recipe": "Tomato Herb Soup",
    "listOfIngredients": [
      "garlic",
      "olive oil",
      "dried oregano",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "crushed red pepper",
      "black pepper",
      "tomato paste",
      "brown sugar",
      "crushed tomatoes",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/tomato-herb-soup/"
  },
  {
    "recipe": "Funfetti Mug Cake",
    "listOfIngredients": [
      "all-purpose flour",
      "sugar",
      "baking powder",
      "rainbow sprinkles",
      "milk",
      "butter",
      "vanilla extract"
    ],
    "url": "https://www.budgetbytes.com/funfetti-mug-cake/"
  },
  {
    "recipe": "Sweet Corn Salsa",
    "listOfIngredients": [
      "sweet corn",
      "Roma tomatoes",
      "red onion",
      "jalapeno",
      "cilantro",
      "fresh lime",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/sweet-corn-salsa/"
  },
  {
    "recipe": "Sweet and Spicy Glazed Chicken Thighs",
    "listOfIngredients": [
      "brown sugar",
      "cayenne pepper",
      "garlic powder",
      "paprika",
      "salt",
      "black pepper",
      "olive oil",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/sweet-and-spicy-glazed-chicken-thighs/"
  },
  {
    "recipe": "Cheesy Cauliflower and Potato Soup",
    "listOfIngredients": [
      "yellow onion",
      "olive oil",
      "cauliflower",
      "russet potatoes",
      "vegetable broth",
      "evaporated milk",
      "smoked paprika",
      "salt",
      "black pepper",
      "cheddar",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/cheesy-cauliflower-and-potato-soup/"
  },
  {
    "recipe": "Roasted Broccoli Salad with Almonds and Simple Sesame Dressing",
    "listOfIngredients": [
      "neutral oil",
      "rice vinegar",
      "soy sauce",
      "toasted sesame oil",
      "brown sugar",
      "fresh ginger",
      "sesame seeds",
      "frozen broccoli florets",
      "salt",
      "almonds",
      "crunchy chow mein noodles",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/roasted-broccoli-salad-almonds-simple-sesame-dressing/"
  },
  {
    "recipe": "Italian Pizza Pasta Salad",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "Dijon mustard",
      "garlic powder",
      "Italian seasoning",
      "salt",
      "pepper",
      "Parmesan",
      "rotini pasta",
      "pepperoni",
      "mozzarella",
      "green bell pepper",
      "red onion",
      "banana pepper rings",
      "black olives"
    ],
    "url": "https://www.budgetbytes.com/pizza-pasta-salad/"
  },
  {
    "recipe": "(Not) Refried Beans",
    "listOfIngredients": [
      "dry pinto beans",
      "onion",
      "jalapeno",
      "garlic",
      "cumin",
      "chili powder",
      "cranks cracked black pepper",
      "water",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/not-refried-beans/"
  },
  {
    "recipe": "Pork and Peanut Dragon Noodles",
    "listOfIngredients": [
      "chili garlic sauce",
      "soy sauce",
      "brown sugar",
      "pork",
      "ramen noodles",
      "green onions",
      "unsalted peanuts"
    ],
    "url": "https://www.budgetbytes.com/pork-peanut-dragon-noodles/"
  },
  {
    "recipe": "Minty Pea Salad",
    "listOfIngredients": [
      "frozen peas",
      "fresh lemon",
      "shallot",
      "olive oil",
      "salt",
      "Black pepper",
      "fresh mint"
    ],
    "url": "https://www.budgetbytes.com/minty-pea-salad/"
  },
  {
    "recipe": "Spinach and Feta Mashed Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "butter",
      "garlic powder",
      "salt",
      "Black pepper",
      "milk",
      "fresh spinach",
      "crumbled feta"
    ],
    "url": "https://www.budgetbytes.com/spinach-and-feta-mashed-potatoes/"
  },
  {
    "recipe": "French Onion Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onions",
      "butter",
      "flour",
      "beef broth",
      "dried thyme",
      "bay leaf",
      "black pepper",
      "Worcestershire sauce",
      "French bread",
      "shredded Swiss"
    ],
    "url": "https://www.budgetbytes.com/french-onion-soup/"
  },
  {
    "recipe": "Poor Man's Burrito Bowls",
    "listOfIngredients": [
      "uncooked long grain white rice",
      "salt",
      "black beans",
      "cumin",
      "garlic powder",
      "salsa",
      "shredded cheese",
      "green onions",
      "jalapeno"
    ],
    "url": "https://www.budgetbytes.com/poor-mans-burrito-bowls/"
  },
  {
    "recipe": "Sesame Tuna Salad",
    "listOfIngredients": [
      "soy sauce",
      "toasted sesame oil",
      "brown sugar",
      "sesame seeds",
      "chunk light tuna water",
      "red bell pepper",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/sesame-tuna-salad/"
  },
  {
    "recipe": "Spicy Orecchiette with Chicken Sausage and Kale",
    "listOfIngredients": [
      "orecchiette",
      "olive oil",
      "chicken sausage",
      "butter",
      "garlic",
      "kale",
      "Parmesan",
      "crushed red pepper",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/spicy-orecchiette-with-chicken-sausage-and-kale/"
  },
  {
    "recipe": "Mediterranean Hummus Bowls",
    "listOfIngredients": [
      "beef",
      "dried oregano",
      "cumin",
      "garlic powder",
      "salt",
      "cooked rice",
      "hummus",
      "grape tomatoes",
      "English cucumber",
      "red onion",
      "kalamata olives",
      "crumbled feta",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/mediterranean-hummus-bowls/"
  },
  {
    "recipe": "Sweet Potato Casserole Baked Oatmeal",
    "listOfIngredients": [
      "mashed sweet potato",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "nutmeg",
      "cinnamon",
      "salt",
      "baking powder",
      "milk",
      "old-fashioned rolled oats",
      "all-purpose flour",
      "salted butter",
      "pecans"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-casserole-baked-oatmeal/"
  },
  {
    "recipe": "Slow Cooker Pineapple Teriyaki Chicken",
    "listOfIngredients": [
      "pineapple chunks juice",
      "soy sauce",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "skinless chicken thighs",
      "cornstarch",
      "green onions",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-pineapple-teriyaki-chicken/"
  },
  {
    "recipe": "Harissa Roasted Vegetables",
    "listOfIngredients": [
      "harissa",
      "olive oil",
      "honey",
      "salt",
      "lemon juice",
      "red potatoes",
      "broccoli",
      "carrots",
      "red onion",
      "Handful chopped fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/harissa-roasted-vegetables/"
  },
  {
    "recipe": "Pumpkin Molasses Bread",
    "listOfIngredients": [
      "pumpkin puree",
      "eggs",
      "cooking oil",
      "molasses",
      "sugar",
      "all-purpose flour",
      "cinnamon",
      "ginger",
      "nutmeg",
      "salt",
      "baking powder",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/pumpkin-molasses-bread/"
  },
  {
    "recipe": "Sweet Molasses Dinner Rolls",
    "listOfIngredients": [
      "Instant",
      "brown sugar",
      "water",
      "wheat flour",
      "salt",
      "butter",
      "unsweetened cocoa powder",
      "molasses",
      "all-purpose flour",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/sweet-molasses-dinner-rolls/"
  },
  {
    "recipe": "Orange Cranberry Muffins",
    "listOfIngredients": [
      "orange",
      "brown sugar",
      "white sugar",
      "salt",
      "butter",
      "all-purpose flour",
      "flour",
      "baking powder",
      "baking soda",
      "eggs",
      "fresh cranberries",
      "Butter and flour for coating the muffin tin"
    ],
    "url": "https://www.budgetbytes.com/orange-cranberry-muffins/"
  },
  {
    "recipe": "Pressure Cooker Chicken and Rice",
    "listOfIngredients": [
      "split chicken",
      "seasoning blend of choice",
      "water",
      "long grain white rice",
      "Handful parsley"
    ],
    "url": "https://www.budgetbytes.com/pressure-cooker-chicken-rice/"
  },
  {
    "recipe": "Salisbury Steak with Mushroom Gravy",
    "listOfIngredients": [
      "yellow onion",
      "beef",
      "breadcrumbs",
      "eggs",
      "Worcestershire sauce",
      "Italian seasoning",
      "salt",
      "pepper",
      "cooking oil",
      "mushrooms",
      "butter",
      "all-purpose flour",
      "beef broth",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/salisbury-steak-with-mushroom-gravy/"
  },
  {
    "recipe": "Loaded Sweet Potatoes with Lime Crema",
    "listOfIngredients": [
      "sweet potatoes",
      "olive oil",
      "jerk seasoning",
      "garlic",
      "red bell pepper",
      "black beans",
      "cumin",
      "salt",
      "lime",
      "sour cream",
      "chipotle powder",
      "garlic powder",
      "jalapeno",
      "green onion"
    ],
    "url": "https://www.budgetbytes.com/loaded-sweet-potatoes-with-chipotle-lime-crema/"
  },
  {
    "recipe": "Cacio e Pepe",
    "listOfIngredients": [
      "salt",
      "dry spaghetti",
      "salted butter",
      "coarsely ground black pepper plus more for garnish,",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/cacio-e-pepe/"
  },
  {
    "recipe": "Slow Cooker 5 Spice Pulled Pork",
    "listOfIngredients": [
      "brown sugar",
      "Five spice blend",
      "garlic",
      "rice vinegar",
      "soy sauce",
      "pork loin",
      "cornstarch"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-5-spice-pulled-pork/"
  },
  {
    "recipe": "Smoky Roasted Breakfast Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "yellow onion",
      "olive oil",
      "smoked paprika",
      "garlic powder",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/smoky-roasted-breakfast-potatoes/"
  },
  {
    "recipe": "Homemade BBQ Sauce",
    "listOfIngredients": [
      "tomato sauce",
      "tomato paste",
      "apple cider vinegar",
      "brown sugar",
      "molasses",
      "dijon mustard",
      "Worcestershire Sauce",
      "smoked paprika",
      "garlic powder",
      "onion powder",
      "cayenne",
      "black pepper",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/homemade-bbq-sauce/"
  },
  {
    "recipe": "Creamy Rice Pudding",
    "listOfIngredients": [
      "butter",
      "almonds",
      "uncooked long-grain jasmine rice",
      "cinnamon",
      "nutmeg",
      "milk",
      "sugar",
      "vanilla extract",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/rice-pudding/"
  },
  {
    "recipe": "Cold Peanut Noodle Salad",
    "listOfIngredients": [
      "natural-style peanut butter",
      "brown sugar",
      "garlic",
      "fresh ginger",
      "lime",
      "soy sauce",
      "neutral oil",
      "wheat spaghetti",
      "finely shredded red cabbage",
      "carrots",
      "cilantro",
      "green onions",
      "peanuts"
    ],
    "url": "https://www.budgetbytes.com/cold-peanut-noodle-salad/"
  },
  {
    "recipe": "Sheet Pan Portobello Fajitas",
    "listOfIngredients": [
      "chili powder",
      "chipotle powder",
      "onion powder",
      "cumin",
      "garlic powder",
      "sugar",
      "salt",
      "portobello mushroom caps",
      "bell peppers",
      "yellow onions",
      "olive oil",
      "flour tortillas",
      "avocado",
      "cilantro",
      "fresh lime"
    ],
    "url": "https://www.budgetbytes.com/chipotle-portobello-oven-fajitas/"
  },
  {
    "recipe": "Sheet Pan Kielbasa Potatoes and Green Beans",
    "listOfIngredients": [
      "petite red potatoes",
      "kielbasa",
      "yellow onion",
      "frozen green beans",
      "olive oil",
      "steak seasoning"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-kielbasa-potatoes-and-green-beans/"
  },
  {
    "recipe": "Make Ahead Microwave Breakfast Scrambles",
    "listOfIngredients": [
      "ham",
      "bell pepper",
      "onion",
      "shredded sharp cheddar",
      "butter",
      "seasoning salt",
      "eggs"
    ],
    "url": "https://www.budgetbytes.com/make-ahead-microwave-breakfast-scrambles/"
  },
  {
    "recipe": "Hot Honey Cornbread",
    "listOfIngredients": [
      "butter",
      "honey",
      "red pepper flakes",
      "eggs",
      "sour cream",
      "cornmeal",
      "all-purpose flour",
      "salt",
      "baking powder"
    ],
    "url": "https://www.budgetbytes.com/hot-honey-cornbread/"
  },
  {
    "recipe": "Vegetable Pot Pie Skillet with Cheddar Biscuit Topping",
    "listOfIngredients": [
      "butter",
      "onion",
      "all-purpose flour",
      "milk",
      "salt",
      "dried thyme",
      "dried sage",
      "Black pepper",
      "vegetable broth",
      "frozen mixed vegetables",
      "baking powder",
      "cold butter",
      "shredded cheddar",
      "chives"
    ],
    "url": "https://www.budgetbytes.com/vegetable-pot-pie-skillet-cheddar-biscuit-topping/"
  },
  {
    "recipe": "Roasted Vegetable Couscous",
    "listOfIngredients": [
      "Roma tomatoes",
      "zucchini",
      "bell pepper",
      "red onion",
      "garlic",
      "olive oil",
      "salt and pepper",
      "couscous",
      "vegetable broth",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/roasted-vegetable-couscous/"
  },
  {
    "recipe": "Turkey Taco Skillet",
    "listOfIngredients": [
      "chili powder",
      "smoked paprika",
      "cumin",
      "cayenne pepper",
      "dried oregano",
      "salt",
      "black pepper",
      "cooking oil",
      "turkey",
      "yellow onion",
      "tomatoes with green chiles",
      "black beans",
      "frozen corn",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/turkey-taco-skillet/"
  },
  {
    "recipe": "Easy French Bread Pizza",
    "listOfIngredients": [
      "French loaf",
      "pizza sauce",
      "shredded mozzarella",
      "toppings of your choice"
    ],
    "url": "https://www.budgetbytes.com/french-bread-pizza/"
  },
  {
    "recipe": "Chocolate Coffee Breakfast Smoothie",
    "listOfIngredients": [
      "frozen banana",
      "frozen riced cauliflower",
      "unsweetened cocoa powder",
      "instant coffee",
      "milk",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/chocolate-coffee-breakfast-smoothie/"
  },
  {
    "recipe": "Lime Shrimp Dragon Noodles",
    "listOfIngredients": [
      "frozen peeled & deveined shrimp",
      "ramen noodles",
      "sriracha",
      "soy sauce",
      "brown sugar",
      "lime",
      "butter",
      "garlic",
      "green onions",
      "Handful fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/lime-shrimp-dragon-noodles/"
  },
  {
    "recipe": "Slow Cooker Chicken Tikka Masala",
    "listOfIngredients": [
      "garam masala",
      "cumin",
      "turmeric",
      "smoked paprika",
      "salt",
      "cayenne",
      "Black pepper",
      "boneless skinless chicken thighs",
      "cooking oil",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "tomato sauce",
      "heavy cream",
      "cooked rice",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-chicken-tikka-masala/"
  },
  {
    "recipe": "Parsley Scallion Hummus Pasta",
    "listOfIngredients": [
      "chickpeas",
      "olive oil",
      "fresh lemon",
      "tahini",
      "garlic",
      "cumin",
      "salt",
      "scallions",
      "fresh parsley",
      "pasta"
    ],
    "url": "https://www.budgetbytes.com/parsley-scallion-hummus-pasta/"
  },
  {
    "recipe": "Chocolate Banana Muffins",
    "listOfIngredients": [
      "mashed bananas",
      "plain yogurt",
      "eggs",
      "sugar",
      "melted butter",
      "vanilla extract",
      "all-purpose flour",
      "unsweetened cocoa powder",
      "baking powder",
      "baking soda",
      "salt",
      "chocolate chips"
    ],
    "url": "https://www.budgetbytes.com/chocolate-banana-muffins/"
  },
  {
    "recipe": "Slow Cooker Hamburger Stew",
    "listOfIngredients": [
      "russet potatoes",
      "carrots",
      "yellow onion",
      "garlic",
      "dried rosemary",
      "dried thyme",
      "black pepper",
      "beef",
      "stewed tomatoes",
      "beef broth",
      "Worcestershire sauce",
      "soy sauce",
      "frozen peas"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-hamburger-stew/"
  },
  {
    "recipe": "Sausage Breakfast Casserole",
    "listOfIngredients": [
      "country sausage",
      "frozen peppers and onions",
      "eggs",
      "milk",
      "pepper",
      "tortilla chips",
      "cheddar",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/sausage-breakfast-casserole/"
  },
  {
    "recipe": "Meal Prep Vegetable Snack Packs",
    "listOfIngredients": [
      "baby carrots",
      "fresh broccoli",
      "grape tomatoes",
      "homemade ranch dressing"
    ],
    "url": "https://www.budgetbytes.com/veggie-snack-packs/"
  },
  {
    "recipe": "15-Minute Vegetable Lo Mein",
    "listOfIngredients": [
      "noodles",
      "soy sauce",
      "toasted sesame oil",
      "sugar",
      "water",
      "high heat cooking oil",
      "mixed salad bar vegetables"
    ],
    "url": "https://www.budgetbytes.com/salad-bar-vegetable-lo-mein/"
  },
  {
    "recipe": "Honey Mustard Sauce",
    "listOfIngredients": [
      "mayonnaise",
      "Dijon mustard",
      "yellow mustard",
      "honey",
      "apple cider vinegar",
      "garlic powder",
      "paprika",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/honey-mustard-sauce/"
  },
  {
    "recipe": "Chocolate Depression Cake (No Eggs, Butter, or Milk)",
    "listOfIngredients": [
      "all-purpose flour",
      "granulated sugar",
      "salt",
      "baking soda",
      "unsweetened cocoa powder",
      "cooking oil",
      "vinegar",
      "vanilla extract",
      "water",
      "powdered sugar",
      "cocoa powder"
    ],
    "url": "https://www.budgetbytes.com/chocolate-depression-cake/"
  },
  {
    "recipe": "Maple Brown Butter Mashed Sweet Potatoes",
    "listOfIngredients": [
      "sweet potatoes",
      "butter",
      "real maple syrup",
      "cinnamon",
      "nutmeg",
      "cloves",
      "pecans"
    ],
    "url": "https://www.budgetbytes.com/maple-brown-butter-mashed-sweet-potatoes/"
  },
  {
    "recipe": "Seafood Rice Skillet",
    "listOfIngredients": [
      "olive oil",
      "onion",
      "garlic",
      "red bell pepper",
      "turmeric",
      "smoked paprika",
      "cayenne pepper",
      "uncooked long grain white rice",
      "chicken broth",
      "frozen peas",
      "frozen seafood mix",
      "fresh lemon",
      "Handful fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/seafood-rice-skillet/"
  },
  {
    "recipe": "Quick Veggie Pasta",
    "listOfIngredients": [
      "linguine",
      "mushrooms",
      "grape tomatoes",
      "cooking oil",
      "fresh spinach",
      "butter",
      "garlic powder",
      "nutritional yeast",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/quick-veggie-pasta/"
  },
  {
    "recipe": "Vegan Creamy Mushroom Ramen",
    "listOfIngredients": [
      "cooking oil",
      "baby bella mushrooms",
      "vegetable broth",
      "fresh spinach",
      "ramen noodles",
      "coconut milk",
      "green onion",
      "chili garlic sauce"
    ],
    "url": "https://www.budgetbytes.com/vegan-creamy-mushroom-ramen/"
  },
  {
    "recipe": "Coconut Curry Hummus",
    "listOfIngredients": [
      "chickpeas",
      "garlic",
      "tahini",
      "lime",
      "curry powder",
      "salt",
      "coconut milk"
    ],
    "url": "https://www.budgetbytes.com/coconut-curry-hummus/"
  },
  {
    "recipe": "Easy Orange Chicken",
    "listOfIngredients": [
      "orange",
      "soy sauce",
      "brown sugar",
      "rice vinegar",
      "fresh ginger",
      "garlic",
      "red pepper flakes",
      "cornstarch",
      "boneless",
      "eggs",
      "salt and pepper",
      "cooking oil",
      "cooked rice",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/easy-orange-chicken/"
  },
  {
    "recipe": "Zucchini and Orzo Salad with Chimichurri",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "Italian parsley",
      "cilantro",
      "garlic",
      "dried oregano",
      "cumin",
      "red pepper flakes",
      "salt",
      "uncooked orzo",
      "zucchini",
      "salt and pepper",
      "grape"
    ],
    "url": "https://www.budgetbytes.com/zucchini-orzo-salad-chimichurri/"
  },
  {
    "recipe": "Sweet Chili Chicken Stir Fry Bowls",
    "listOfIngredients": [
      "jasmine rice",
      "garlic",
      "salt",
      "coconut milk",
      "water",
      "boneless",
      "cooking oil",
      "sweet chili sauce",
      "pineapple tidbits juice",
      "broccoli"
    ],
    "url": "https://www.budgetbytes.com/sweet-chili-chicken-stir-fry-bowls/"
  },
  {
    "recipe": "Anne Byrn's 1917 Applesauce Cake",
    "listOfIngredients": [
      "sugar",
      "butter",
      "unsweetened applesauce",
      "all-purpose flour",
      "baking soda",
      "cinnamon",
      "cloves",
      "salt",
      "nutmeg",
      "raisins"
    ],
    "url": "https://www.budgetbytes.com/anne-byrns-1917-applesauce-cake/"
  },
  {
    "recipe": "Menemen",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "bell pepper",
      "dried oregano",
      "crushed red pepper",
      "tomatoes",
      "salt",
      "black pepper",
      "eggs",
      "parsley",
      "crumbled feta"
    ],
    "url": "https://www.budgetbytes.com/menemen/"
  },
  {
    "recipe": "Sausage and Rice",
    "listOfIngredients": [
      "smoked sausage",
      "cooking oil",
      "frozen seasoning mix",
      "long grain white rice",
      "chicken broth",
      "Creole seasoning",
      "hot sauce"
    ],
    "url": "https://www.budgetbytes.com/dsd-sausage-and-rice/"
  },
  {
    "recipe": "Honey Mustard Pork Chops",
    "listOfIngredients": [
      "mayonnaise",
      "Dijon mustard",
      "honey",
      "garlic powder",
      "smoked paprika",
      "salt",
      "Black pepper",
      "cooking oil",
      "pork chops"
    ],
    "url": "https://www.budgetbytes.com/honey-mustard-pork-chops/"
  },
  {
    "recipe": "Smoky Potato Chickpea Stew",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "fresh ginger",
      "yellow onion",
      "curry powder",
      "smoked paprika",
      "crushed red pepper",
      "fire roasted diced tomatoes",
      "russet potatoes",
      "chickpeas",
      "vegetable broth",
      "fresh kale"
    ],
    "url": "https://www.budgetbytes.com/smoky-potato-chickpea-stew/"
  },
  {
    "recipe": "Chicken Parmesan Meatballs",
    "listOfIngredients": [
      "breadcrumbs",
      "Parmesan",
      "garlic powder",
      "dried basil",
      "dried oregano",
      "salt",
      "black pepper",
      "chicken",
      "eggs",
      "cooking oil",
      "pasta",
      "pasta sauce"
    ],
    "url": "https://www.budgetbytes.com/chicken-parmesan-meatballs/"
  },
  {
    "recipe": "German Potato Salad with Bacon",
    "listOfIngredients": [
      "red potatoes",
      "apple cider vinegar",
      "stone ground",
      "white sugar",
      "Black pepper",
      "salt",
      "bacon",
      "yellow onion",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/german-potato-salad/"
  },
  {
    "recipe": "Spicy Seafood Pasta with Tomato Butter Sauce",
    "listOfIngredients": [
      "butter",
      "frozen seafood mix",
      "garlic",
      "tomatoes",
      "red pepper flakes",
      "fettuccine",
      "salt",
      "Handful fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/spicy-seafood-pasta-tomato-butter-sauce/"
  },
  {
    "recipe": "Honey Vanilla Cottage Cheese Fruit Dip",
    "listOfIngredients": [
      "cottage cheese",
      "honey",
      "vanilla",
      "lemon juice",
      "water"
    ],
    "url": "https://www.budgetbytes.com/honey-vanilla-cottage-cheese-fruit-dip/"
  },
  {
    "recipe": "Slow Cooker Salsa Chicken Verde Bowls",
    "listOfIngredients": [
      "yellow onion",
      "bell pepper",
      "chicken pieces",
      "cumin",
      "salt",
      "garlic powder",
      "Freshly cracked black pepper",
      "salsa verde",
      "cooked rice",
      "black beans",
      "jalapeno",
      "queso fresco",
      "lime",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-salsa-verde-chicken/"
  },
  {
    "recipe": "Sheet Pan Pesto Chicken Dinner",
    "listOfIngredients": [
      "baby potatoes",
      "olive oil",
      "oregano",
      "salt and pepper",
      "grape tomatoes",
      "boneless",
      "pesto",
      "fresh mozzarella",
      "spring mix",
      "Caesar dressing"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-pesto-chicken-dinner/"
  },
  {
    "recipe": "Antipasto Salad",
    "listOfIngredients": [
      "salad greens of choice",
      "artichoke hearts",
      "grape tomatoes",
      "mozzarella",
      "salami",
      "kalamata olives",
      "banana peppers",
      "red onion",
      "provolone",
      "extra virgin olive oil",
      "red wine vinegar",
      "lemon juice",
      "Dijon mustard",
      "garlic powder",
      "Italian seasoning",
      "sugar",
      "salt",
      "black pepper",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/antipasto-salad/"
  },
  {
    "recipe": "Easy Sweet Chili Sauce",
    "listOfIngredients": [
      "rice vinegar",
      "sugar",
      "water",
      "sambal oelek",
      "cornstarch + 1 water"
    ],
    "url": "https://www.budgetbytes.com/easy-sweet-chili-sauce/"
  },
  {
    "recipe": "Mango Coconut Chia Pudding",
    "listOfIngredients": [
      "frozen mango chunks",
      "lite coconut milk",
      "sugar",
      "chia seeds"
    ],
    "url": "https://www.budgetbytes.com/mango-coconut-chia-pudding/"
  },
  {
    "recipe": "Fresh Tomato Basil Pasta with Ricotta",
    "listOfIngredients": [
      "pasta",
      "olive oil",
      "garlic",
      "grape tomatoes",
      "butter",
      "fresh basil",
      "milk ricotta",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/fresh-tomato-basil-pasta-with-ricotta/"
  },
  {
    "recipe": "Creamy Mushroom Herb Pasta",
    "listOfIngredients": [
      "mushrooms",
      "fettuccine",
      "garlic",
      "butter",
      "all-purpose flour",
      "vegetable broth",
      "fresh thyme",
      "rubbed sage",
      "half and half",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/creamy-mushroom-herb-pasta/"
  },
  {
    "recipe": "Balsamic Roasted Mushrooms with Herby Kale Mashed Potatoes",
    "listOfIngredients": [
      "mushrooms",
      "olive oil",
      "balsamic vinegar",
      "brown sugar",
      "soy sauce",
      "garlic",
      "dried thyme",
      "russet potatoes",
      "kale",
      "salt",
      "sour cream",
      "milk",
      "dried parsley",
      "dried oregano",
      "dried basil",
      "garlic powder",
      "onion powder",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/balsamic-roasted-mushrooms-with-herby-kale-mashed-potatoes/"
  },
  {
    "recipe": "Coconut Turmeric Chicken Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "fresh ginger",
      "olive oil",
      "turmeric",
      "cumin",
      "crushed red pepper",
      "carrots",
      "celery",
      "chicken breast",
      "chicken broth",
      "coconut milk",
      "salt",
      "cooked jasmine rice",
      "fresh cilantro",
      "lime"
    ],
    "url": "https://www.budgetbytes.com/coconut-turmeric-chicken-soup/"
  },
  {
    "recipe": "Pepperoni Pasta Salad",
    "listOfIngredients": [
      "bowtie pasta",
      "salt",
      "fresh baby spinach",
      "kidney beans",
      "pepperoni",
      "mozzarella",
      "grape tomatoes",
      "Italian",
      "Parmesan",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/pepperoni-pasta-salad/"
  },
  {
    "recipe": "Cheesy Rigatoni Skillet with Mushrooms and Spinach",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "mushrooms",
      "pasta sauce",
      "fresh spinach",
      "rigatoni",
      "milk ricotta",
      "Parmesan",
      "shredded mozzarella",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/cheesy-rigatoni-skillet-mushrooms-spinach/"
  },
  {
    "recipe": "Will It Skillet? Mac and Cheese",
    "listOfIngredients": [
      "salt",
      "elbow macaroni",
      "butter",
      "evaporated milk",
      "Dijon mustard",
      "cayenne pepper",
      "shredded sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/will-skillet-mac-cheese/"
  },
  {
    "recipe": "Roasted Bratwurst with Peppers and Onions",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "stone ground",
      "garlic powder",
      "salt",
      "Black pepper",
      "bell peppers",
      "onion",
      "bratwurst links",
      "buns",
      "cheddar",
      "mustard"
    ],
    "url": "https://www.budgetbytes.com/roasted-bratwurst-peppers-onions/"
  },
  {
    "recipe": "Ham and Cheese Biscuits",
    "listOfIngredients": [
      "all-purpose flour",
      "salt",
      "sugar",
      "baking powder",
      "heavy cream",
      "cheese",
      "deli ham"
    ],
    "url": "https://www.budgetbytes.com/ham-cheese-biscuits/"
  },
  {
    "recipe": "Savory Cabbage Pancakes (Okonomiyaki)",
    "listOfIngredients": [
      "eggs",
      "water",
      "soy sauce",
      "toasted sesame oil",
      "to 1 all-purpose flour",
      "shredded green cabbage",
      "carrots",
      "green onions",
      "oil for frying",
      "mayonnaise",
      "sriracha",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/savory-cabbage-pancakes-okonomiyaki/"
  },
  {
    "recipe": "Pasta e Fagioli",
    "listOfIngredients": [
      "bacon",
      "olive oil",
      "onion",
      "carrots",
      "celery",
      "garlic",
      "red pepper flakes",
      "dried oregano",
      "salt",
      "pepper",
      "cannelinni beans",
      "crushed tomatoes",
      "water",
      "vegetable broth",
      "ditalini",
      "Parmesan cheese",
      "Flat-leaf Italian parsley"
    ],
    "url": "https://www.budgetbytes.com/pasta-e-fagioli/"
  },
  {
    "recipe": "Grape Feta and Bacon Salad with Creamy Dijon Dressing",
    "listOfIngredients": [
      "mayonnaise",
      "apple cider vinegar",
      "honey",
      "Dijon mustard",
      "salt",
      "Black pepper",
      "Romaine lettuce",
      "red seedless grapes",
      "red onion",
      "feta",
      "bacon"
    ],
    "url": "https://www.budgetbytes.com/grape-feta-bacon-salad-creamy-dijon-dressing/"
  },
  {
    "recipe": "Tuscan White Bean Pasta",
    "listOfIngredients": [
      "linguine",
      "olive oil",
      "butter",
      "garlic",
      "grape",
      "cranks freshly ground pepper",
      "salt",
      "dried basil",
      "cannellini beans",
      "baby spinach",
      "shredded parmesan"
    ],
    "url": "https://www.budgetbytes.com/tuscan-white-bean-pasta/"
  },
  {
    "recipe": "Creamy Tomato and Spinach Pasta",
    "listOfIngredients": [
      "penne pasta",
      "yellow onion",
      "garlic",
      "olive oil",
      "tomatoes",
      "dried oregano",
      "dried basil",
      "crushed red pepper",
      "salt",
      "black pepper",
      "tomato paste",
      "cream cheese",
      "Parmesan",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/creamy-tomato-spinach-pasta/"
  },
  {
    "recipe": "Easy Teriyaki Chicken",
    "listOfIngredients": [
      "soy sauce",
      "brown sugar",
      "water",
      "garlic",
      "fresh ginger",
      "cooking oil",
      "boneless"
    ],
    "url": "https://www.budgetbytes.com/easy-teriyaki-chicken/"
  },
  {
    "recipe": "Sushi Bowls",
    "listOfIngredients": [
      "short grain white rice",
      "water",
      "rice vinegar",
      "sugar",
      "salt",
      "imitation crab",
      "carrots",
      "cucumber",
      "avocado",
      "nori snack",
      "sesame seeds",
      "mayonnaise",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/sushi-bowls-sriracha-mayo/"
  },
  {
    "recipe": "Creamy Pesto Chicken",
    "listOfIngredients": [
      "boneless",
      "salt",
      "pepper",
      "olive oil",
      "garlic",
      "grape tomatoes",
      "heavy cream",
      "pesto"
    ],
    "url": "https://www.budgetbytes.com/creamy-pesto-chicken/"
  },
  {
    "recipe": "Baked Spaghetti with Sausage",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "olive oil",
      "Italian Sausage",
      "tomato paste",
      "crushed tomatoes",
      "Italian seasoning",
      "salt",
      "water",
      "spaghetti",
      "curd cottage cheese",
      "Parmesan",
      "black pepper",
      "shredded mozzarella",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/baked-spaghetti-with-sausage/"
  },
  {
    "recipe": "Cheesy Pinto Beans",
    "listOfIngredients": [
      "garlic",
      "jalapeno",
      "cooking oil",
      "pinto beans",
      "smoked paprika",
      "cumin",
      "black pepper",
      "hot sauce",
      "shredded cheddar cheese"
    ],
    "url": "https://www.budgetbytes.com/cheesy-pinto-beans/"
  },
  {
    "recipe": "Smoky Roasted Sausage and Vegetables",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "coarse deli mustard",
      "garlic powder",
      "dried oregano",
      "smoked paprika",
      "salt",
      "black pepper",
      "sugar",
      "smoked sausage",
      "broccoli",
      "bell pepper",
      "red onion",
      "long grain white rice",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/smoky-roasted-sausage-and-vegetables/"
  },
  {
    "recipe": "Indian Style Creamed Spinach",
    "listOfIngredients": [
      "full-fat coconut milk",
      "fresh spinach",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "olive oil",
      "cumin",
      "garam masala",
      "turmeric",
      "cayenne pepper",
      "tomato",
      "water",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/indian-style-creamed-spinach/"
  },
  {
    "recipe": "Cheesy Cottage Pie",
    "listOfIngredients": [
      "russet potatoes",
      "salt",
      "butter",
      "milk",
      "shredded cheddar",
      "olive oil",
      "yellow onion",
      "garlic",
      "beef",
      "all-purpose flour",
      "beef broth",
      "Worcestershire sauce",
      "dried rosemary",
      "dried thyme",
      "frozen peas and carrots",
      "frozen corn"
    ],
    "url": "https://www.budgetbytes.com/cheesy-cottage-pie/"
  },
  {
    "recipe": "Slow Cooker Chicken Noodle Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "carrots",
      "celery",
      "chicken breast",
      "dried basil",
      "dried parsley",
      "dried thyme",
      "bay leaf",
      "black pepper",
      "water",
      "wide egg noodles",
      "salt",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-chicken-noodle-soup/"
  },
  {
    "recipe": "Cajun Salmon Burgers",
    "listOfIngredients": [
      "Canned Salmon",
      "breadcrumbs",
      "eggs",
      "mayonnaise",
      "coarse ground mustard",
      "green onion",
      "smoked paprika",
      "oregano",
      "thyme",
      "garlic powder",
      "onion powder",
      "cayenne",
      "black pepper",
      "salt",
      "cooking oil",
      "butter",
      "buns",
      "guacamole",
      "spring mix"
    ],
    "url": "https://www.budgetbytes.com/cajun-salmon-burgers/"
  },
  {
    "recipe": "Baked Pumpkin Pie Oatmeal",
    "listOfIngredients": [
      "pumpkin puree",
      "brown sugar",
      "eggs",
      "pumpkin pie spice",
      "vanilla extract",
      "salt",
      "baking powder",
      "milk",
      "old fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/baked-pumpkin-pie-oatmeal/"
  },
  {
    "recipe": "Autumn Kale and Sweet Potato Salad",
    "listOfIngredients": [
      "sweet potatoes",
      "cooking oil",
      "cinnamon",
      "cumin",
      "smoked paprika",
      "salt",
      "tahini",
      "water",
      "lemon juice",
      "maple syrup",
      "garlic powder",
      "cayenne pepper",
      "kale",
      "apple",
      "pepitas",
      "pecans",
      "dried cranberries"
    ],
    "url": "https://www.budgetbytes.com/autumn-kale-and-sweet-potato-salad/"
  },
  {
    "recipe": "Slow Cooker Pulled Pork",
    "listOfIngredients": [
      "pork butt",
      "yellow onion",
      "garlic",
      "paprika",
      "smoked paprika",
      "brown sugar",
      "garlic powder",
      "onion powder",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-pulled-pork/"
  },
  {
    "recipe": "The Best Homemade Chili Recipe",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "beef",
      "kidney beans",
      "black beans",
      "tomatoes",
      "tomato paste",
      "water",
      "chili powder",
      "cumin",
      "cayenne powder",
      "garlic powder",
      "onion powder",
      "brown sugar",
      "salt",
      "Freshly cracked black pepper"
    ],
    "url": "https://www.budgetbytes.com/basic-chili/"
  },
  {
    "recipe": "Pasta Puttanesca Recipe",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "anchovy filets",
      "crushed tomatoes",
      "dried basil",
      "crushed red pepper",
      "kalamata olives",
      "capers",
      "spaghetti"
    ],
    "url": "https://www.budgetbytes.com/pasta-puttanesca/"
  },
  {
    "recipe": "Slow Cooker Hot Buttered Apples",
    "listOfIngredients": [
      "apples",
      "lemon juice",
      "brown sugar",
      "cinnamon",
      "cloves",
      "vanilla",
      "salt",
      "cornstarch",
      "butter",
      "water"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-hot-buttered-apples/"
  },
  {
    "recipe": "Homemade Taco Seasoning",
    "listOfIngredients": [
      "chili powder",
      "smoked paprika",
      "cumin",
      "cayenne pepper",
      "oregano",
      "salt",
      "cranks fresh black pepper"
    ],
    "url": "https://www.budgetbytes.com/taco-seasoning/"
  },
  {
    "recipe": "Blackened Shrimp Tacos",
    "listOfIngredients": [
      "mayonnaise",
      "honey",
      "Dijon mustard",
      "red wine vinegar",
      "salt",
      "Black pepper",
      "coleslaw mix",
      "green onions",
      "garlic powder",
      "smoked paprika",
      "lime",
      "dried thyme",
      "dried oregano",
      "cumin",
      "cayenne",
      "onion powder",
      "and deveined shrimp",
      "butter",
      "garlic",
      "corn tortillas"
    ],
    "url": "https://www.budgetbytes.com/blackened-shrimp-tacos/"
  },
  {
    "recipe": "Easy Hollandaise Sauce",
    "listOfIngredients": [
      "eggs",
      "water",
      "lemon juice",
      "butter",
      "salt",
      "cayenne pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-hollandaise-sauce/"
  },
  {
    "recipe": "Freezer Friendly Breakfast Burritos",
    "listOfIngredients": [
      "cheddar",
      "yellow onion",
      "bell pepper",
      "butter",
      "salt and pepper",
      "cooked ham",
      "eggs",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/freezer-breakfast-burritos/"
  },
  {
    "recipe": "The Best Green Bean Casserole (no canned soup)",
    "listOfIngredients": [
      "olive oil",
      "button mushrooms",
      "garlic",
      "salt and pepper",
      "butter",
      "all-purpose flour",
      "vegetable broth",
      "milk",
      "cream cheese",
      "frozen green beans",
      "French fried onions"
    ],
    "url": "https://www.budgetbytes.com/creamiest-green-bean-casserole/"
  },
  {
    "recipe": "No-Yeast Pizza Dough",
    "listOfIngredients": [
      "all-purpose flour",
      "baking powder",
      "salt",
      "olive oil",
      "water"
    ],
    "url": "https://www.budgetbytes.com/no-yeast-pizza-dough/"
  },
  {
    "recipe": "Blueberry Buttermilk Coffee Cake",
    "listOfIngredients": [
      "all-purpose flour",
      "brown sugar",
      "softened butter",
      "cinnamon",
      "baking powder",
      "baking soda",
      "salt",
      "white sugar",
      "eggs",
      "buttermilk",
      "melted butter",
      "blueberries"
    ],
    "url": "https://www.budgetbytes.com/blueberry-buttermilk-coffee-cake/"
  },
  {
    "recipe": "Mini Garden Turkey Loaves",
    "listOfIngredients": [
      "olive oil",
      "onion",
      "garlic",
      "carrots",
      "zucchini",
      "button mushrooms",
      "salt",
      "Black pepper",
      "Worcestershire sauce",
      "ketchup",
      "eggs",
      "plain breadcrumbs",
      "turkey 93% lean",
      "brown sugar",
      "apple cider vinegar"
    ],
    "url": "https://www.budgetbytes.com/mini-garden-turkey-loaves/"
  },
  {
    "recipe": "Lemon Blueberry Cornbread Skillet",
    "listOfIngredients": [
      "cornmeal",
      "all-purpose flour",
      "sugar",
      "baking powder",
      "salt",
      "fresh lemon",
      "milk",
      "eggs",
      "cooking oil",
      "butter",
      "frozen blueberries"
    ],
    "url": "https://www.budgetbytes.com/lemon-blueberry-cornbread-skillet/"
  },
  {
    "recipe": "Monterey Chicken Skillet",
    "listOfIngredients": [
      "precooked shredded chicken",
      "Rotel",
      "fusili pasta",
      "chicken broth",
      "BBQ sauce",
      "shredded Monterey Jack cheese",
      "bacon",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/monterey-chicken-skillet/"
  },
  {
    "recipe": "One Pot Creamy Pesto Chicken Pasta",
    "listOfIngredients": [
      "boneless",
      "butter",
      "garlic",
      "penne pasta",
      "chicken broth",
      "milk",
      "cream cheese",
      "basil pesto",
      "Parmesan",
      "black pepper",
      "crushed red pepper",
      "fresh spinach",
      "sun dried tomatoes"
    ],
    "url": "https://www.budgetbytes.com/one-pot-creamy-pesto-chicken-pasta/"
  },
  {
    "recipe": "Sun Dried Tomato, Kale, and White Bean Skillet",
    "listOfIngredients": [
      "cannellini beans",
      "sun dried tomatoes oil",
      "apple cider vinegar",
      "dried basil",
      "salt",
      "black pepper",
      "crushed red pepper",
      "olive oil",
      "garlic",
      "fresh kale"
    ],
    "url": "https://www.budgetbytes.com/sun-dried-tomato-kale-and-white-bean-skillet/"
  },
  {
    "recipe": "Beef & Mushroom Country Casserole",
    "listOfIngredients": [
      "cooking oil",
      "beef",
      "mushrooms",
      "onion",
      "garlic powder",
      "salt",
      "Black pepper",
      "Worcestershire sauce",
      "extra wide egg noodles",
      "tomato sauce",
      "fire roasted diced tomatoes",
      "sour cream",
      "cheddar",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/beef-mushroom-country-casserole/"
  },
  {
    "recipe": "Easy Homemade Croutons",
    "listOfIngredients": [
      "sturdy bread",
      "olive oil",
      "Italian seasoning blend",
      "garlic powder",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/easy-baked-homemade-croutons/"
  },
  {
    "recipe": "Fire Roasted Salsa",
    "listOfIngredients": [
      "Roma tomatoes",
      "poblano pepper",
      "jalapeno pepper",
      "garlic",
      "yellow onion",
      "olive oil",
      "lime",
      "cilantro",
      "salt",
      "cumin",
      "sugar"
    ],
    "url": "https://www.budgetbytes.com/fire-roasted-salsa/"
  },
  {
    "recipe": "Cheesy Chicken Vegetable and Rice Casserole",
    "listOfIngredients": [
      "frozen broccoli florets",
      "boneless",
      "olive oil",
      "salt and pepper",
      "yellow onion",
      "carrots",
      "cooked long grain rice",
      "butter",
      "flour",
      "chicken broth",
      "milk",
      "salt",
      "smoked paprika",
      "Black pepper",
      "cheddar"
    ],
    "url": "https://www.budgetbytes.com/cheesy-chicken-vegetable-rice-casserole/"
  },
  {
    "recipe": "Homemade Hummus",
    "listOfIngredients": [
      "chickpeas",
      "olive oil",
      "lemon juice",
      "tahini",
      "garlic",
      "salt",
      "cumin"
    ],
    "url": "https://www.budgetbytes.com/hummus-four-flavors/"
  },
  {
    "recipe": "Chicken and Mandarin Salad with Simple Sesame Dressing",
    "listOfIngredients": [
      "rice vinegar",
      "soy sauce",
      "toasted sesame oil",
      "brown sugar",
      "fresh ginger",
      "sesame seeds",
      "salad greens",
      "mandarin oranges",
      "chicken breast",
      "almonds",
      "red onion",
      "avocado"
    ],
    "url": "https://www.budgetbytes.com/chicken-mandarin-salad-simple-sesame-dressing/"
  },
  {
    "recipe": "Sheet Pan Roasted Kielbasa and Cabbage Dinner",
    "listOfIngredients": [
      "olive oil",
      "red wine vinegar",
      "stone ground",
      "clove garlic",
      "salt",
      "Black pepper",
      "kielbasa",
      "baby red potatoes",
      "cabbage",
      "salt and pepper",
      "Handful chopped fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/one-pan-roasted-kielbasa-cabbage-dinner/"
  },
  {
    "recipe": "How to Make Baked Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "cooking oil",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/how-to-make-baked-potatoes/"
  },
  {
    "recipe": "Garden Vegetable Quinoa Soup",
    "listOfIngredients": [
      "olive oil",
      "yellow onion",
      "garlic",
      "carrots",
      "ribs celery",
      "kidney beans",
      "fire roasted diced tomatoes",
      "dried basil",
      "dried oregano",
      "smoked paprika",
      "Freshly cracked black pepper",
      "quinoa",
      "vegetable broth",
      "water",
      "frozen spinach"
    ],
    "url": "https://www.budgetbytes.com/garden-vegetable-quinoa-soup/"
  },
  {
    "recipe": "Tomato Herb Rice with White Beans and Spinach",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "dried oregano",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "crushed red pepper",
      "Freshly cracked black pepper",
      "tomato paste",
      "brown sugar",
      "salt",
      "yellow onion",
      "fire roasted diced tomatoes",
      "cannellini beans",
      "frozen chopped spinach",
      "uncooked long grain white rice",
      "vegetable broth"
    ],
    "url": "https://www.budgetbytes.com/tomato-herb-rice-with-white-beans-and-spinach/"
  },
  {
    "recipe": "Roasted Cauliflower",
    "listOfIngredients": [
      "cauliflower",
      "olive oil",
      "seasoning of choice",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/roasted-cauliflower/"
  },
  {
    "recipe": "Herb Butter Chicken Thighs",
    "listOfIngredients": [
      "boneless skinless chicken thighs",
      "salt and pepper",
      "olive oil",
      "garlic",
      "Italian seasoning herb blend",
      "chicken broth",
      "butter",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/herb-butter-chicken-thighs/"
  },
  {
    "recipe": "Baked Zucchini Fries",
    "listOfIngredients": [
      "zucchini",
      "eggs",
      "panko breadcrumbs",
      "Parmesan",
      "Italian seasoning",
      "salt",
      "all-purpose flour",
      "pizza sauce"
    ],
    "url": "https://www.budgetbytes.com/baked-zucchini-fries/"
  },
  {
    "recipe": "Easy 3-Ingredient Pie Crust",
    "listOfIngredients": [
      "all-purpose flour",
      "salted butter",
      "chilled water"
    ],
    "url": "https://www.budgetbytes.com/3-ingredient-pie-crust/"
  },
  {
    "recipe": "Sheet Pan Chicken Fajitas",
    "listOfIngredients": [
      "chili powder",
      "paprika",
      "onion powder",
      "garlic powder",
      "cumin",
      "cayenne pepper",
      "sugar",
      "salt",
      "yellow onions",
      "bell peppers",
      "chicken breast",
      "cooking oil",
      "lime",
      "tortillas",
      "sour cream",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/oven-fajitas/"
  },
  {
    "recipe": "Salsa Chicken Meal Prep Bowls",
    "listOfIngredients": [
      "brown rice",
      "salt",
      "water",
      "boneless",
      "salsa",
      "chicken broth",
      "chili powder",
      "bell peppers",
      "oil",
      "green onions",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/salsa-chicken-meal-prep-bowls/"
  },
  {
    "recipe": "Slow Cooker Mashed Potatoes",
    "listOfIngredients": [
      "russet potatoes",
      "chicken broth",
      "garlic",
      "Freshly cracked black pepper",
      "cream cheese",
      "milk",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-mashed-potatoes/"
  },
  {
    "recipe": "Chicken Alfredo",
    "listOfIngredients": [
      "boneless",
      "Italian seasoning",
      "cooking oil",
      "butter",
      "garlic",
      "heavy cream",
      "Parmesan",
      "salt",
      "pepper",
      "parsley",
      "fettuccine"
    ],
    "url": "https://www.budgetbytes.com/chicken-alfredo/"
  },
  {
    "recipe": "Slow Cooker Chicken Tortilla Soup",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "boneless",
      "chili powder",
      "cumin",
      "smoked paprika",
      "cayenne pepper",
      "black pepper",
      "fire roasted tomatoes",
      "tomatoes with green chiles",
      "black beans",
      "frozen corn kernels",
      "chicken broth",
      "corn tortillas",
      "cooking oil",
      "salt",
      "avocado",
      "cilantro",
      "sour cream",
      "lime"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-chicken-tortilla-soup/"
  },
  {
    "recipe": "Creamy Coconut Curry Lentils with Spinach",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "fresh ginger",
      "yellow onion",
      "curry powder",
      "brown lentils",
      "vegetable broth",
      "coconut milk",
      "fresh baby spinach",
      "cooked rice",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/creamy-coconut-curry-lentils-with-spinach/"
  },
  {
    "recipe": "Creamy Mushroom Chicken with Crispy Onions",
    "listOfIngredients": [
      "baby bella mushrooms",
      "boneless",
      "salt",
      "pepper",
      "butter",
      "garlic",
      "chicken broth",
      "heavy cream",
      "crispy fried onions",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/creamy-mushroom-chicken-with-crispy-onions/"
  },
  {
    "recipe": "Super Crunchy Oil Free Granola",
    "listOfIngredients": [
      "aquafaba",
      "cream of tartar",
      "brown sugar",
      "vanilla extract",
      "rolled oats",
      "oat bran",
      "flaxseed",
      "slivered almonds",
      "pepitas",
      "cinnamon",
      "turmeric",
      "ginger",
      "cloves"
    ],
    "url": "https://www.budgetbytes.com/super-crunchy-oil-free-granola/"
  },
  {
    "recipe": "Easy Soda Bread",
    "listOfIngredients": [
      "all-purpose flour",
      "baking soda",
      "salt",
      "buttermilk"
    ],
    "url": "https://www.budgetbytes.com/easy-soda-bread/"
  },
  {
    "recipe": "Rice Cooker Mac and Cheese",
    "listOfIngredients": [
      "uncooked macaroni noodles",
      "vegetable broth",
      "milk",
      "cream cheese",
      "cheddar"
    ],
    "url": "https://www.budgetbytes.com/rice-cooker-mac-and-cheese/"
  },
  {
    "recipe": "Kale Swiss and Mushroom Strata",
    "listOfIngredients": [
      "hearty bread",
      "butter",
      "garlic",
      "mushrooms",
      "salt and pepper",
      "kale",
      "Swiss cheese",
      "eggs",
      "milk",
      "Dijon mustard",
      "nutmeg",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/kale-swiss-and-mushroom-strata/"
  },
  {
    "recipe": "One Pot Creamy Sun Dried Tomato Pasta",
    "listOfIngredients": [
      "sun dried tomatoes",
      "butter",
      "garlic",
      "fettuccine",
      "dried basil",
      "Black pepper",
      "chicken broth",
      "cream cheese",
      "milk",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/one-pot-creamy-sun-dried-tomato-pasta/"
  },
  {
    "recipe": "Shrimp Alfredo",
    "listOfIngredients": [
      "shrimp",
      "fettuccine",
      "butter",
      "garlic",
      "heavy cream",
      "Parmesan",
      "salt",
      "black pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/shrimp-alfredo-pasta/"
  },
  {
    "recipe": "Chicken Salad with Apples",
    "listOfIngredients": [
      "cooked chicken",
      "apple",
      "red onion",
      "dried cranberries",
      "mayonnaise",
      "plain yogurt",
      "Dijon mustard",
      "red wine vinegar",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/chicken-n-apple-salad/"
  },
  {
    "recipe": "Chicken and Vegetable Meal Prep",
    "listOfIngredients": [
      "Brussels sprouts",
      "sweet potato",
      "cooking oil",
      "salt",
      "pepper",
      "boneless",
      "steak seasoning",
      "smoked paprika",
      "sweet paprika",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/easy-chicken-and-vegetable-meal-prep/"
  },
  {
    "recipe": "Chipotle Lime Chicken and Rice",
    "listOfIngredients": [
      "chipotle powder",
      "cumin",
      "garlic powder",
      "onion powder",
      "salt",
      "lime",
      "boneless",
      "cooking oil",
      "yellow onion",
      "tomatoes",
      "chicken broth",
      "long grain white rice",
      "green onions",
      "Cotija cheese"
    ],
    "url": "https://www.budgetbytes.com/chipotle-lime-chicken-and-rice/"
  },
  {
    "recipe": "Thai Coconut Curry Carrot Soup",
    "listOfIngredients": [
      "butter",
      "yellow onion",
      "red Thai curry paste",
      "carrots",
      "sweet potato",
      "vegetable broth",
      "full fat coconut milk",
      "salt and pepper",
      "cilantro",
      "sriracha"
    ],
    "url": "https://www.budgetbytes.com/thai-coconut-curry-carrot-soup/"
  },
  {
    "recipe": "Bratwurst and Sauerkraut",
    "listOfIngredients": [
      "yellow onion",
      "apple",
      "garlic",
      "cooking oil",
      "bratwurst",
      "sauerkraut",
      "caraway seeds",
      "paprika",
      "black pepper",
      "chicken broth"
    ],
    "url": "https://www.budgetbytes.com/bratwurst-and-sauerkraut/"
  },
  {
    "recipe": "Beef and Cabbage Stir Fry",
    "listOfIngredients": [
      "soy sauce",
      "toasted sesame oil",
      "sriracha",
      "brown sugar",
      "green cabbage",
      "carrots",
      "green onions",
      "neutral cooking oil",
      "lean ground beef",
      "garlic",
      "fresh grated ginger",
      "salt and pepper",
      "sesame seeds"
    ],
    "url": "https://www.budgetbytes.com/beef-cabbage-stir-fry/"
  },
  {
    "recipe": "BBQ Tofu Sliders",
    "listOfIngredients": [
      "firm",
      "smoked paprika",
      "garlic powder",
      "salt",
      "black pepper",
      "cornstarch",
      "cooking oil",
      "BBQ Sauce",
      "shredded cabbage slaw mix",
      "mayonnaise",
      "honey",
      "Dijon mustard",
      "apple cider vinegar",
      "Black pepper",
      "BBQ sauce",
      "Buns"
    ],
    "url": "https://www.budgetbytes.com/bbq-tofu-sliders/"
  },
  {
    "recipe": "Roasted Eggplant with Meat Sauce",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "Italian seasoning blend",
      "salt",
      "eggplant",
      "beef",
      "onion",
      "butter",
      "crushed tomatoes",
      "Black pepper",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/roasted-eggplant-meat-sauce/"
  },
  {
    "recipe": "Sausage and Egg Breakfast Quesadillas",
    "listOfIngredients": [
      "country sausage",
      "eggs",
      "salt",
      "pepper",
      "cheddar",
      "flour tortillas"
    ],
    "url": "https://www.budgetbytes.com/sausage-and-egg-breakfast-quesadillas/"
  },
  {
    "recipe": "Sheet Pan BBQ Meatloaf Dinner",
    "listOfIngredients": [
      "sweet potato",
      "frozen broccoli florets",
      "olive oil",
      "seasoning salt",
      "salt and pepper",
      "beef",
      "eggs",
      "bread crumbs",
      "BBQ sauce",
      "smoked paprika",
      "garlic powder",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/sheet-pan-bbq-meatloaf-dinner/"
  },
  {
    "recipe": "\"Oatmeal Cookie\" Baked Oatmeal",
    "listOfIngredients": [
      "unsweetened applesauce",
      "eggs",
      "brown sugar",
      "vanilla extract",
      "cinnamon",
      "nutmeg",
      "salt",
      "baking powder",
      "melted butter",
      "milk",
      "raisins",
      "old-fashioned rolled oats"
    ],
    "url": "https://www.budgetbytes.com/oatmeal-cookie-baked-oatmeal/"
  },
  {
    "recipe": "Ultimate Southwest Scrambled Eggs",
    "listOfIngredients": [
      "eggs",
      "milk",
      "salt and pepper",
      "butter",
      "black beans",
      "green chiles",
      "taco sauce",
      "pepper jack",
      "green onions",
      "tomato"
    ],
    "url": "https://www.budgetbytes.com/ultimate-southwest-scrambled-eggs/"
  },
  {
    "recipe": "Snickerdoodles",
    "listOfIngredients": [
      "salted butter",
      "granulated sugar",
      "brown sugar",
      "eggs",
      "vanilla extract",
      "baking powder",
      "salt",
      "all-purpose flour",
      "cinnamon"
    ],
    "url": "https://www.budgetbytes.com/snickerdoodles/"
  },
  {
    "recipe": "Slow Cooker Cabbage and Sausage",
    "listOfIngredients": [
      "baby potatoes",
      "yellow onion",
      "cabbage",
      "steak seasoning",
      "smoked sausage",
      "chicken broth",
      "parsley"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-cabbage-and-sausage/"
  },
  {
    "recipe": "Ranch Chicken Meal Prep",
    "listOfIngredients": [
      "russet potatoes",
      "Parmesan",
      "garlic powder",
      "paprika",
      "cooking oil",
      "salt",
      "pepper",
      "broccoli florets",
      "boneless",
      "garlic herb seasoning"
    ],
    "url": "https://www.budgetbytes.com/ranch-chicken-meal-prep/"
  },
  {
    "recipe": "Cucumber and Black Bean Salad",
    "listOfIngredients": [
      "black beans",
      "cucumber",
      "red onion",
      "cilantro",
      "crumbled feta",
      "olive oil",
      "apple cider vinegar",
      "cumin",
      "garlic powder",
      "salt",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/cucumber-and-black-bean-salad/"
  },
  {
    "recipe": "Arroz Con Pollo (Puerto Rican Chicken and Rice)",
    "listOfIngredients": [
      "adobo seasoning",
      "boneless chicken thighs",
      "cooking oil",
      "sofrito",
      "red bell pepper",
      "yellow onion",
      "garlic",
      "tomato sauce",
      "pimiento stuffed Spanish olives",
      "rice",
      "chicken stock",
      "salt",
      "sazon seasoning",
      "frozen green peas",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/arroz-con-pollo/"
  },
  {
    "recipe": "Broccoli Cheddar Chicken Salad",
    "listOfIngredients": [
      "fresh broccoli",
      "cooked chicken",
      "cheddar",
      "green onions",
      "ranch dressing",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/broccoli-cheddar-chicken-salad/"
  },
  {
    "recipe": "Wild Rice and Vegetable Casserole",
    "listOfIngredients": [
      "butter",
      "onion",
      "garlic",
      "carrots",
      "celery",
      "button mushrooms",
      "salt",
      "Black pepper",
      "dried thyme",
      "dried sage",
      "flour",
      "vegetable broth",
      "milk",
      "cooked wild rice blend",
      "fried onions"
    ],
    "url": "https://www.budgetbytes.com/wild-rice-vegetable-casserole/"
  },
  {
    "recipe": "Skillet Pasta with Sun Dried Tomatoes Walnuts and Feta",
    "listOfIngredients": [
      "walnuts",
      "olive oil",
      "garlic",
      "frozen broccoli florets",
      "vegetable broth",
      "sun dried tomatoes",
      "bowtie pasta",
      "fresh lemon",
      "red pepper flakes",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/skillet-pasta-sun-dried-tomatoes-walnuts-feta/"
  },
  {
    "recipe": "Creamy Lemon Dill Greek Pasta Salad",
    "listOfIngredients": [
      "plain Greek yogurt",
      "mayonnaise",
      "garlic",
      "fresh lemon",
      "salt",
      "dried dill",
      "Freshly cracked black pepper",
      "penne",
      "grape tomatoes",
      "cucumber",
      "quartered artichoke hearts",
      "red onion",
      "feta"
    ],
    "url": "https://www.budgetbytes.com/creamy-lemon-dill-greek-pasta-salad/"
  },
  {
    "recipe": "Roasted Vegetable Baked Penne",
    "listOfIngredients": [
      "red onion",
      "zucchini",
      "yellow squash",
      "bell pepper",
      "olive oil",
      "salt",
      "pepper",
      "yellow onion",
      "butter",
      "crushed tomatoes",
      "tomato paste",
      "Italian seasoning",
      "water",
      "penne",
      "ricotta",
      "shredded Italian cheese blend",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/roasted-vegetable-baked-penne/"
  },
  {
    "recipe": "Sweet Potato Cornbread",
    "listOfIngredients": [
      "sweet potato",
      "yellow cornmeal",
      "all-purpose flour",
      "sugar",
      "baking powder",
      "salt",
      "cinnamon",
      "nutmeg",
      "eggs",
      "sour cream",
      "milk",
      "cooking oil",
      "cooking oil for the skillet"
    ],
    "url": "https://www.budgetbytes.com/sweet-potato-cornbread/"
  },
  {
    "recipe": "Garlic Butter Baked Cod",
    "listOfIngredients": [
      "butter",
      "olive oil",
      "garlic",
      "paprika",
      "salt",
      "parsley",
      "cod",
      "fresh lemon"
    ],
    "url": "https://www.budgetbytes.com/garlic-butter-baked-cod/"
  },
  {
    "recipe": "Smoky Chicken and Cinnamon Roasted Sweet Potato Meal Prep",
    "listOfIngredients": [
      "sweet potatoes",
      "cooking oil",
      "cinnamon",
      "cayenne pepper",
      "salt",
      "smoked paprika",
      "brown sugar",
      "garlic powder",
      "pepper",
      "boneless",
      "green beans",
      "butter",
      "salt and pepper"
    ],
    "url": "https://www.budgetbytes.com/smoky-chicken-and-cinnamon-roasted-sweet-potato-meal-prep/"
  },
  {
    "recipe": "Roasted Cauliflower Salad with Lemon Tahini Dressing",
    "listOfIngredients": [
      "cauliflower",
      "red onion",
      "olive oil",
      "salt and pepper",
      "parsley",
      "tahini",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne",
      "salt",
      "chickpeas",
      "smoked paprika",
      "garlic powder"
    ],
    "url": "https://www.budgetbytes.com/roasted-cauliflower-salad-lemon-tahini-dressing/"
  },
  {
    "recipe": "Cauliflower and Chickpea Masala",
    "listOfIngredients": [
      "garam masala",
      "cumin",
      "turmeric",
      "smoked paprika",
      "cayenne",
      "salt",
      "black pepper",
      "yellow onion",
      "garlic",
      "fresh ginger",
      "olive oil",
      "frozen cauliflower florets",
      "chickpeas",
      "tomato sauce",
      "water",
      "heavy cream",
      "salt"
    ],
    "url": "https://www.budgetbytes.com/easy-cauliflower-and-chickpea-masala/"
  },
  {
    "recipe": "Easy Homemade Meatballs",
    "listOfIngredients": [
      "plain breadcrumbs",
      "Parmesan",
      "garlic powder",
      "onion powder",
      "Italian seasoning",
      "salt",
      "pepper",
      "eggs",
      "milk",
      "bulk Italian sausage",
      "beef"
    ],
    "url": "https://www.budgetbytes.com/homemade-meatballs/"
  },
  {
    "recipe": "Peanut Tofu",
    "listOfIngredients": [
      "natural peanut butter",
      "sriracha",
      "brown sugar",
      "lime",
      "soy sauce",
      "garlic",
      "vegetable broth",
      "extra firm tofu",
      "toasted sesame oil",
      "cornstarch",
      "cooking oil",
      "frozen stir fry vegetables",
      "cooked rice",
      "cilantro"
    ],
    "url": "https://www.budgetbytes.com/peanut-tofu/"
  },
  {
    "recipe": "Beef Kofta Meatballs with Roasted Vegetables",
    "listOfIngredients": [
      "zucchini",
      "yellow squash",
      "grape tomatoes",
      "red onion",
      "olive oil",
      "garlic powder",
      "dried oregano",
      "salt and pepper",
      "beef",
      "garlic",
      "parsley",
      "cumin",
      "cinnamon",
      "cloves",
      "salt",
      "cooking oil",
      "cooked rice"
    ],
    "url": "https://www.budgetbytes.com/beef-kofta-meatballs-with-roasted-vegetables/"
  },
  {
    "recipe": "Chicken Stew",
    "listOfIngredients": [
      "yellow onion",
      "celery",
      "garlic",
      "carrots",
      "boneless",
      "all-purpose flour",
      "butter",
      "olive oil",
      "baby potatoes",
      "dried parsley",
      "dried thyme",
      "dried rosemary",
      "dried sage",
      "black pepper",
      "chicken broth",
      "vegetable broth",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/chicken-stew/"
  },
  {
    "recipe": "Ranch Drop Biscuits",
    "listOfIngredients": [
      "buttermilk powder",
      "dried parsley",
      "dried dill",
      "onion powder",
      "garlic powder",
      "lemon pepper",
      "black pepper",
      "all-purpose flour",
      "salt",
      "baking powder",
      "sugar",
      "heavy cream",
      "butter"
    ],
    "url": "https://www.budgetbytes.com/ranch-drop-biscuits/"
  },
  {
    "recipe": "Vegetarian 15 Bean Soup",
    "listOfIngredients": [
      "bean soup mix",
      "coconut oil",
      "yellow onion",
      "garlic",
      "carrots",
      "celery",
      "water",
      "tomatoes",
      "cumin",
      "oregano",
      "smoked paprika",
      "cayenne pepper",
      "Black pepper",
      "fresh parsley",
      "salt",
      "apple cider vinegar"
    ],
    "url": "https://www.budgetbytes.com/vegetarian-15-bean-soup/"
  },
  {
    "recipe": "Cajun Sausage and Rice Skillet",
    "listOfIngredients": [
      "Andouille sausage",
      "cooking oil",
      "bell pepper",
      "smoked paprika",
      "dried oregano",
      "dried thyme",
      "garlic powder",
      "onion powder",
      "cayenne pepper",
      "black pepper",
      "fire roasted diced tomatoes",
      "long grain white rice",
      "chicken broth",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/cajun-sausage-and-rice-skillet/"
  },
  {
    "recipe": "Spicy Roasted Cauliflower with Cheese Sauce",
    "listOfIngredients": [
      "smoked paprika",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "Black pepper",
      "frozen cauliflower florets",
      "olive oil",
      "evaporated milk",
      "butter",
      "sharp cheddar"
    ],
    "url": "https://www.budgetbytes.com/spicy-roasted-cauliflower-cheese-sauce/"
  },
  {
    "recipe": "Chorizo and Sweet Potato Enchiladas",
    "listOfIngredients": [
      "sweet potato",
      "poblano pepper",
      "garlic",
      "vegetable oil",
      "chorizo",
      "tortillas",
      "homemade enchilada sauce",
      "shredded cheese",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/chorizo-sweet-potato-enchiladas/"
  },
  {
    "recipe": "Purple Power Bowls",
    "listOfIngredients": [
      "tahini",
      "water",
      "lemon juice",
      "garlic",
      "cumin",
      "cayenne pepper",
      "salt",
      "cooked rice",
      "chickpeas",
      "baby greens",
      "beets",
      "zucchini",
      "carrots",
      "red cabbage",
      "avocado",
      "green onion",
      "pepitas"
    ],
    "url": "https://www.budgetbytes.com/purple-power-bowls/"
  },
  {
    "recipe": "Spinach and Feta Grilled Cheese",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "frozen chopped spinach",
      "salt and pepper",
      "bread",
      "butter",
      "shredded mozzarella",
      "feta",
      "crushed red pepper"
    ],
    "url": "https://www.budgetbytes.com/spinach-feta-grilled-cheese/"
  },
  {
    "recipe": "Veggie Packed Freezer Breakfast Sandwiches",
    "listOfIngredients": [
      "eggs",
      "milk",
      "salt",
      "Freshly cracked black pepper",
      "frozen cut leaf spinach",
      "roasted red peppers",
      "English Muffins",
      "cheese"
    ],
    "url": "https://www.budgetbytes.com/veggie-packed-freezer-ready-breakfast-sandwiches/"
  },
  {
    "recipe": "Slow Cooker Coconut Curry Lentils",
    "listOfIngredients": [
      "yellow onion",
      "garlic",
      "brown lentils",
      "sweet potato",
      "carrots",
      "curry powder",
      "cloves",
      "petite diced tomatoes",
      "tomato sauce",
      "vegetable broth",
      "coconut milk",
      "cooked rice",
      "red onion",
      "fresh cilantro"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-coconut-curry-lentils/"
  },
  {
    "recipe": "Tomato Herb Pull Apart Bread",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "dried oregano",
      "dried basil",
      "dried thyme",
      "dried rosemary",
      "red pepper flakes",
      "cranks of a pepper mill",
      "salt",
      "tomato paste",
      "honey",
      "water",
      "active dry yeast",
      "sugar",
      "all-purpose flour",
      "Parmesan"
    ],
    "url": "https://www.budgetbytes.com/tomato-herb-pull-apart-bread/"
  },
  {
    "recipe": "Thai Peanut Chicken",
    "listOfIngredients": [
      "garlic",
      "fresh ginger",
      "fresh lime",
      "chili garlic sauce",
      "soy sauce",
      "honey",
      "toasted sesame oil",
      "vegetable oil",
      "natural peanut butter",
      "water",
      "fresh cilantro",
      "chicken"
    ],
    "url": "https://www.budgetbytes.com/thai-peanut-chicken/"
  },
  {
    "recipe": "Vegan Peanut Stew",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "fresh ginger",
      "sweet potato",
      "onion",
      "cumin",
      "crushed red pepper",
      "tomato paste",
      "natural style peanut butter",
      "vegetable broth",
      "collard greens",
      "cilantro",
      "cooked brown rice",
      "peanuts"
    ],
    "url": "https://www.budgetbytes.com/african-peanut-stew-vegan/"
  },
  {
    "recipe": "Crispy Air Fryer Chicken Wings",
    "listOfIngredients": [
      "chicken wings",
      "coarse salt",
      "baking powder",
      "cornstarch",
      "garlic powder",
      "smoked paprika",
      "onion powder",
      "black pepper",
      "cooking oil for greasing"
    ],
    "url": "https://www.budgetbytes.com/crispy-air-fryer-chicken-wings/"
  },
  {
    "recipe": "Cajun Sausage and Vegetables",
    "listOfIngredients": [
      "zucchini",
      "yellow squash",
      "red bell pepper",
      "red onion",
      "Andouille sausage",
      "cooking oil",
      "smoked paprika",
      "garlic powder",
      "cayenne pepper",
      "salt",
      "black pepper",
      "fresh parsley"
    ],
    "url": "https://www.budgetbytes.com/cajun-sausage-and-vegetables/"
  },
  {
    "recipe": "Pasta with 5 Ingredient Butter Tomato Sauce",
    "listOfIngredients": [
      "olive oil",
      "breadcrumbs",
      "salt",
      "dried oregano",
      "Black pepper",
      "pasta",
      "salted butter",
      "garlic",
      "tomatoes",
      "Black pepper"
    ],
    "url": "https://www.budgetbytes.com/pasta-5-ingredient-butter-tomato-sauce/"
  },
  {
    "recipe": "Crispy Potatoes with Lemon Dill Tahini Dressing",
    "listOfIngredients": [
      "baby potatoes",
      "salt",
      "cooking oil",
      "garlic powder",
      "onion powder",
      "dried dill",
      "dried parsley",
      "black pepper",
      "tahini",
      "water",
      "lemon juice",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/crispy-potatoes-with-lemon-dill-tahini-dressing/"
  },
  {
    "recipe": "Spicy Baked Black Bean Nachos",
    "listOfIngredients": [
      "olive oil",
      "onion",
      "tomatoes with green chiles",
      "black beans",
      "chipotle powder",
      "cumin",
      "garlic powder",
      "salt",
      "sturdy corn tortilla chips",
      "cheddar",
      "Roma tomato",
      "jalapeno",
      "pickled red onions",
      "fresh cilantro",
      "sour cream"
    ],
    "url": "https://www.budgetbytes.com/spicy-baked-black-bean-nachos/"
  },
  {
    "recipe": "Easy Rosemary Garlic White Bean Soup",
    "listOfIngredients": [
      "olive oil",
      "garlic",
      "cannellini beans",
      "vegetable",
      "dried rosemary",
      "dried thyme",
      "crushed red pepper",
      "black pepper"
    ],
    "url": "https://www.budgetbytes.com/easy-rosemary-garlic-white-bean-soup/"
  },
  {
    "recipe": "Sausage and Tortellini Soup",
    "listOfIngredients": [
      "olive oil",
      "Italian sausage",
      "yellow onion",
      "garlic",
      "carrots",
      "stewed tomatoes",
      "dried basil",
      "dried oregano",
      "Freshly cracked black pepper",
      "vegetable broth",
      "water",
      "cheese tortellini",
      "fresh spinach"
    ],
    "url": "https://www.budgetbytes.com/sausage-tortellini-soup/"
  },
  {
    "recipe": "Slow Cooker Jambalaya",
    "listOfIngredients": [
      "ribs celery",
      "yellow onion",
      "green bell pepper",
      "garlic",
      "smoked sausage",
      "boneless",
      "dried oregano",
      "dried thyme",
      "smoked paprika",
      "cayenne pepper",
      "Black pepper",
      "tomatoes",
      "fresh parsley",
      "chicken broth",
      "uncooked long grain white rice",
      "green onions"
    ],
    "url": "https://www.budgetbytes.com/slow-cooker-jambalaya/"
  }
]
// Ingredient choices from ingredients.json
let ingredients = {
  "thin spaghetti": 4,
  "fresh lemon": 34,
  "garlic": 514,
  "fresh parsley": 83,
  "black pepper": 120,
  "olive oil": 431,
  "butter": 276,
  "Parmesan": 83,
  "salt": 784,
  "salted butter": 30,
  "sugar": 130,
  "vanilla": 18,
  "eggs": 81,
  "all-purpose flour": 166,
  "baking powder": 87,
  "melting chocolate": 2,
  "bacon": 24,
  "yellow onion": 215,
  "chicken broth": 95,
  "milk": 143,
  "russet potatoes": 28,
  "smoked paprika": 128,
  "cayenne pepper": 94,
  "sour cream": 56,
  "cheddar cheese": 11,
  "green onions": 173,
  "roasted red peppers": 11,
  "crushed tomatoes": 26,
  "dried basil": 79,
  "dried thyme": 74,
  "vegetable broth": 90,
  "soy sauce": 128,
  "toasted sesame oil": 47,
  "fish sauce": 8,
  "green onion": 23,
  "frozen dumplings": 2,
  "fresh spinach": 39,
  "sesame seeds": 28,
  "Sichuan Chili Crisp": 2,
  "natural peanut butter": 11,
  "granulated sugar": 34,
  "powdered sugar": 25,
  "vanilla extract": 92,
  "cold butter": 11,
  "strawberries": 2,
  "white chocolate chips": 2,
  "eggs": 123,
  "carrots": 27,
  "celery": 50,
  "cooking oil": 196,
  "crushed red pepper": 81,
  "walnuts": 33,
  "uncooked red lentils": 2,
  "tomato paste": 68,
  "dried oregano": 142,
  "garlic powder": 230,
  "black pepper": 24,
  "full-fat coconut milk": 7,
  "carrots": 92,
  "tomatoes": 47,
  "kidney beans": 15,
  "chickpeas": 39,
  "Italian seasoning": 30,
  "zucchini": 41,
  "frozen green beans": 8,
  "lemon juice": 90,
  "parsley": 49,
  "light mayonnaise": 4,
  "fat free plain yogurt": 2,
  "dill pickle": 2,
  "dijon mustard": 9,
  "dry dill": 2,
  "turkey": 17,
  "black beans": 80,
  "tomatoes with green chiles": 16,
  "chili powder": 80,
  "cumin": 166,
  "masa harina": 2,
  "sweet potato": 26,
  "frozen corn kernels": 30,
  "Optional toppings: cilantro": 2,
  "uncooked long grain white rice": 10,
  "salsa": 19,
  "chicken breast": 7,
  "shredded cheddar cheese": 15,
  "uncooked elbow macaroni": 3,
  "vegetable oil": 44,
  "cream cheese": 47,
  "parmesan": 14,
  "jalapenos": 7,
  "green chiles": 18,
  "shredded pepper jack cheese": 3,
  "chicken": 10,
  "molasses": 12,
  "fresh ginger": 91,
  "cinnamon": 118,
  "allspice": 6,
  "thyme": 12,
  "nutmeg": 45,
  "onion": 47,
  "orange": 9,
  "serrano": 2,
  "wheat flour": 20,
  "all purpose flour": 9,
  "water": 192,
  "honey": 63,
  "yeast": 5,
  "black tea": 3,
  "sticks cinnamon": 2,
  "cloves": 38,
  "chicken wings": 5,
  "chili garlic sauce": 15,
  "rice vinegar": 32,
  "firm": 5,
  "mushrooms": 42,
  "frozen onions and peppers": 2,
  "frozen spinach": 17,
  "nutritional yeast": 5,
  "Sun Dried Tomato Sauce": 2,
  "bow tie pasta": 5,
  "artichoke hearts": 6,
  "portobella mushroom caps": 2,
  "red wine vinegar": 38,
  "rigatoni": 4,
  "salt and pepper": 11,
  "flat leaf parsley": 4,
  "fresh cranberries": 9,
  "lime": 46,
  "red wine": 6,
  "butternut squash": 7,
  "dried sage": 22,
  "seasoning mix": 2,
  "wild rice mix": 3,
  "long grain white rice": 28,
  "chicken base": 2,
  "fresh thyme": 5,
  "dried cranberries": 27,
  "salt and pepper": 27,
  "stale bread": 2,
  "mayonnaise": 69,
  "Dijon mustard": 62,
  "seasoning salt": 9,
  "Black pepper": 84,
  "Roma tomatoes": 20,
  "cucumber": 29,
  "red onion": 95,
  "curry powder": 20,
  "Handful fresh cilantro": 5,
  "button mushrooms": 11,
  "kale": 19,
  "pasta": 34,
  "fresh cilantro": 74,
  "rolled oats": 15,
  "yogurt": 3,
  "bananas": 7,
  "pineapple chunks juice": 7,
  "mango": 6,
  "shredded coconut": 7,
  "flour tortilla": 6,
  "red bell pepper": 36,
  "pepper": 50,
  "tahini": 23,
  "apple": 14,
  "old-fashioned rolled oats": 22,
  "maple syrup": 12,
  "avocados": 4,
  "jalapeno": 38,
  "cilantro": 57,
  "vanilla wafers": 2,
  "vanilla pudding": 2,
  "rice vermicelli noodles": 4,
  "hot curry powder": 2,
  "bok choy": 2,
  "bean sprouts": 2,
  "sesame oil": 11,
  "popcorn kernels": 5,
  "baking soda": 23,
  "cayenne": 21,
  "honey roasted peanuts": 2,
  "dill relish": 2,
  "fire-roasted diced tomatoes": 2,
  "beef": 44,
  "chili powder blend": 2,
  "broken tortilla chips": 2,
  "iceberg lettuce": 3,
  "tomato": 20,
  "avocado": 33,
  "fresh lime juice": 6,
  "lemon pepper seasoning": 5,
  "day-old bread": 2,
  "half and half": 10,
  "chocolate chips": 9,
  "sriracha hot sauce": 12,
  "smoked sausage": 11,
  "dry navy beans": 4,
  "bay leaf": 22,
  "dried rosemary": 31,
  "black pepper": 2,
  "fresh baby spinach": 8,
  "apple cider vinegar": 42,
  "corn starch": 10,
  "egg yolks": 2,
  "pumpkin puree": 19,
  "brown sugar": 193,
  "pumpkin pie spice": 8,
  "tortilla strips": 2,
  "shredded cheese": 15,
  "thin center cut pork chops": 2,
  "salt and pepper": 55,
  "blackberry jam": 2,
  "balsamic vinegar": 28,
  "Freshly cracked black pepper": 56,
  "boneless skinless chicken thighs": 9,
  "Fresh parsley for garnish": 2,
  "unsweetened cocoa powder": 20,
  "cornstarch": 48,
  "egg whites": 5,
  "turmeric": 23,
  "frozen cauliflower florets": 5,
  "brown lentils": 15,
  "taco seasoning": 9,
  "romaine lettuce": 3,
  "frozen corn": 16,
  "grape tomatoes": 42,
  "shredded cheddar": 23,
  "Frank's RedHot Sauce": 2,
  "buttermilk ranch dressing": 2,
  "cooked chicken": 12,
  "crumbled blue cheese": 3,
  "self-rising flour": 2,
  "ginger": 28,
  "cardamom": 2,
  "bowtie pasta": 8,
  "quartered artichoke hearts": 11,
  "frozen chopped spinach": 23,
  "white wine": 3,
  "Few hot sauce": 2,
  "salt and pepper": 13,
  "apples": 13,
  "round pita pocket": 2,
  "handful baby spinach": 2,
  "sriracha hot sauce": 2,
  "salt and pepper": 7,
  "red lentils": 2,
  "light coconut milk": 5,
  "unsweetened shredded coconut": 4,
  "oat bran": 5,
  "red creamer potatoes": 2,
  "fresh green beans": 5,
  "Black pepper": 8,
  "feta": 33,
  "pitas": 3,
  "baby spinach": 5,
  "Sriracha hot sauce": 2,
  "graham crackers": 3,
  "peanut butter": 11,
  "milk chocolate chips": 3,
  "marshmallows": 2,
  "oregano": 23,
  "beef broth": 20,
  "boneless beef rump": 2,
  "water": 24,
  "active dry yeast": 5,
  "ozfresh cranberries": 2,
  "envelope plain gelatin": 2,
  "stalks celery": 10,
  "walnut": 2,
  "baby bella mushrooms": 7,
  "wild rice blend": 5,
  "stuffing mix": 4,
  "bread": 7,
  "chipotle peppers adobo sauce": 5,
  "lime juice": 5,
  "boneless": 77,
  "large": 3,
  "paprika": 22,
  "Sriracha": 7,
  "pasta shells": 4,
  "lacinato kale": 3,
  "rotisserie chicken": 2,
  "creamy Caesar dressing": 2,
  "tortillas": 9,
  "lasagna noodles": 5,
  "salt and pepper": 10,
  "ricotta cheese": 4,
  "shredded mozzarella": 42,
  "pasta sauce": 13,
  "fresh lime": 11,
  "spring mix": 6,
  "pecans": 11,
  "goat cheese": 3,
  "pork tenderloin": 3,
  "cold heavy cream": 2,
  "English cucumber": 4,
  "cannellini beans": 18,
  "chunk light tuna": 3,
  "quinoa": 6,
  "chipotle powder": 8,
  "sweet potatoes": 23,
  "pepper": 2,
  "uncooked orzo": 4,
  "feta cheese": 11,
  "Italian sausage": 17,
  "frozen broccoli florets": 30,
  "smoked gouda": 2,
  "shredded Italian cheese": 2,
  "flour": 28,
  "lemon": 27,
  "peaches": 5,
  "blueberries": 9,
  "plain yogurt": 23,
  "old-fashioned oats": 4,
  "frozen mixed vegetables": 7,
  "coconut milk": 25,
  "dried ground ginger": 2,
  "broccoli": 14,
  "sambal": 3,
  "salt": 13,
  "breadcrumbs": 17,
  "BBQ sauce": 17,
  "pineapple": 5,
  "cauliflower": 14,
  "unsweetened apple sauce": 5,
  "rubbed sage": 9,
  "heavy cream": 33,
  "milk ricotta": 8,
  "shredded Italian cheese blend": 4,
  "black pepper": 64,
  "Countryside Creamery Salted Butter": 4,
  "Happy Farms Cream Cheese": 2,
  "Baker's Corner All Purpose Flour": 2,
  "Baker's Corner Granulated Sugar": 3,
  "Baker’s Corner 100% Pure Canned Pumpkin": 2,
  "Baker's Corner Evaporated Milk": 2,
  "Simply Nature Grade A Organic Cage Free Brown Eggs": 2,
  "Baker's Corner Brown Sugar": 3,
  "Stonemill Ground Cinnamon": 2,
  "Stonemill Ground Ginger": 2,
  "Stonemill Ground Nutmeg": 2,
  "Stonemill Salt": 2,
  "long grain brown rice": 4,
  "frozen peas": 21,
  "hot sauce": 13,
  "pepper jack cheese": 8,
  "evaporated milk": 9,
  "unbaked 9- deep dish pie crust": 2,
  "riced cauliflower": 4,
  "Italian seasoning blend": 14,
  "boneless pork butt": 2,
  "onion powder": 58,
  "frozen cheese ravioli": 3,
  "tilapia filets": 2,
  "cajun seasoning": 2,
  "panko breadcrumbs": 6,
  "ripe banana": 2,
  "solidpumpkin puree": 2,
  "old fashioned rolled oats": 5,
  "raw unsalted sunflower seeds": 2,
  "unsweetened applesauce": 9,
  "shelled almonds": 2,
  "white sugar": 14,
  "egg whites": 3,
  "hard boiled eggs": 4,
  "fresh": 4,
  "cranks fresh cracked pepper": 4,
  "pineapple chunks with juice": 2,
  "ice cubes": 2,
  "Mexican style chorizo": 2,
  "tomato sauce": 32,
  "dry macaroni": 3,
  "shredded sharp cheddar": 8,
  "chicken thighs": 7,
  "cider vinegar": 4,
  "mozzarella": 14,
  "flour tortillas": 17,
  "chia seeds": 5,
  "mini chocolate chips": 3,
  "heavy whipping cream": 19,
  "baby portobello mushrooms": 2,
  "cooked turkey": 2,
  "luncheon meat": 2,
  "frozen stir fry vegetables": 7,
  "instant ramen": 6,
  "chocolate kisses": 2,
  "light brown sugar": 2,
  "plain breadcrumbs": 15,
  "pork": 12,
  "Worcestershire sauce": 25,
  "cream of tartar": 5,
  "graham cracker crumbs": 2,
  "mini pretzels": 3,
  "sweetened flaked coconut": 2,
  "sweet chili sauce": 5,
  "parsnips": 2,
  "radishes": 4,
  "wide egg noodles": 7,
  "shredded Monterey Jack": 2,
  "frozen blueberries": 5,
  "tostadas": 2,
  "guacamole": 4,
  "pizza dough": 9,
  "pizza sauce": 12,
  "shredded Monterrey Jack cheese": 3,
  "real maple syrup": 4,
  "lemon pepper": 5,
  "fresh dill": 3,
  "almonds": 20,
  "uncooked quinoa": 7,
  "apple juice": 2,
  "worcestershire sauce": 3,
  "chops thick-cut pork chops": 2,
  "orange juice concentrate": 3,
  "beef roast": 2,
  "Italian sausage links": 2,
  "penne pasta": 10,
  "petite diced tomatoes": 10,
  "frozen cheese tortellini": 2,
  "fresh salmon": 2,
  "fresh grated ginger": 7,
  "semi-sweet chocolate": 5,
  "plum tomatoes": 2,
  "baguette": 2,
  "fresh basil leaves": 3,
  "coarse ground black pepper": 2,
  "rotini pasta": 4,
  "unsalted sunflower seeds": 2,
  "frozen lima beans": 2,
  "frozen sweet corn": 2,
  "neutral oil": 11,
  "green cabbage": 8,
  "high smoke point cooking oil": 2,
  "purple cabbage": 6,
  "sunflower seeds": 4,
  "champagne vinaigrette": 3,
  "eggplant": 11,
  "roasted garlic": 2,
  "shredded monterey jack": 2,
  "pineapple pieces": 2,
  "ham": 5,
  "dry brown lentils": 5,
  "crushed": 2,
  "quick cooking grits": 4,
  "collard greens": 6,
  "Corn bread /muffin mix": 2,
  "potatoes": 13,
  "fried eggs": 2,
  "fresh parsley leaves": 2,
  "red pepper flakes": 30,
  "fresh mozzarella": 4,
  "anchovy filets": 3,
  "or crushed tomatoes": 3,
  "kalamata olives": 11,
  "black pepper": 6,
  "squash": 2,
  "tuna steaks": 2,
  "thin cut pork chops": 2,
  "apricot preserves": 2,
  "uncooked long grain jasmine rice": 2,
  "chicken breast": 2,
  "rice wine": 5,
  "bell pepper": 22,
  "roasted unsalted peanuts": 2,
  "uncooked jasmine rice": 10,
  "corn tortilla chips": 2,
  "shredded Mexican cheese blend": 2,
  "crumbled queso fresco": 2,
  "vegetable": 8,
  "yellow onions": 6,
  "bell peppers": 13,
  "natural-style peanut butter": 6,
  "dark": 2,
  "vinegar": 4,
  "loaf french bread": 3,
  "raisins": 19,
  "packed brown sugar": 2,
  "cooked and cooled bulgur": 2,
  "dried apricots": 6,
  "salt + black pepper": 2,
  "pesto": 9,
  "Roma tomato": 3,
  "shredded purple cabbage": 2,
  "peanuts": 16,
  "neutral salad oil": 4,
  "corn tortillas": 18,
  "peppers chipotle peppers adobo": 2,
  "bread flour": 4,
  "instant yeast": 12,
  "cornmeal": 19,
  "dark molasses": 3,
  "frozen riced cauliflower": 3,
  "frozen banana": 6,
  "frozen sweet cherries": 2,
  "almond butter": 3,
  "almond milk": 2,
  "cracked pepper": 2,
  "smoked ham hock": 3,
  "boneless beef shoulder roast": 3,
  "poblano peppers": 4,
  "Roasted Poblano and Sweet Potato Salad": 2,
  "fajita size flour tortillas": 3,
  "enchilada sauce": 4,
  "uncooked steel-cut oats": 2,
  "bay leaves": 11,
  "elbow macaroni": 3,
  "instant": 8,
  "water": 2,
  "naan": 2,
  "hoisin sauce": 7,
  "sriracha hot sauce": 2,
  "uncooked yellow grits": 2,
  "almond extract": 9,
  "butter beans": 4,
  "pumpkin seeds": 2,
  "dark chocolate": 3,
  "melted butter": 12,
  "pecan": 2,
  "bone-in": 6,
  "puff pastry": 3,
  "cottage cheese": 7,
  "green beans": 4,
  "water": 2,
  "salami": 4,
  "smoked provolone": 2,
  "Parmesan cheese": 6,
  "crumbled feta": 12,
  "cooked jasmine rice": 10,
  "plain Greek yogurt": 5,
  "extra firm tofu": 10,
  "russet potato": 6,
  "stewed tomatoes": 5,
  "cheddar": 21,
  "salad dressing": 2,
  "coleslaw mix": 10,
  "black olives": 6,
  "banana pepper rings": 4,
  "red onions": 2,
  "fresh pineapple": 2,
  "Simply Nature Organic Chicken Breasts": 2,
  "sweet paprika": 4,
  "Burman's Original BBQ Sauce": 2,
  "baby potatoes": 7,
  "everything bagel seasoning": 3,
  "jerk seasoning": 5,
  "orange juice": 3,
  "cabbage": 8,
  "Vidalia onion": 5,
  "frozen peas and carrots": 4,
  "pineapple chunks": 6,
  "sriracha sauce": 6,
  "steel-cut oats": 2,
  "dried black-eyed peas": 2,
  "chicken bouillon granules": 2,
  "cranks fresh ground black pepper": 2,
  "chicken breast": 9,
  "V8 juice": 2,
  "recipe taco seasoning": 2,
  "recipe pico de gallo": 3,
  "yellow onions": 2,
  "olive oil": 2,
  "salt and pepper": 2,
  "button mushrooms": 2,
  "dried thyme": 2,
  "shredded mozzarella": 2,
  "uncooked pasta": 2,
  "shredded monterrey jack": 2,
  "curly leaf parsley": 2,
  "Italian parsley": 9,
  "capers": 3,
  "ice water": 2,
  "cheese tortellini": 3,
  "frozen vegetables": 3,
  "sriracha": 27,
  "all-purpose flour plus some for dusting": 2,
  "spinach": 9,
  "gochujang": 5,
  "chunk light tuna water": 8,
  "pineapple slices in juice": 2,
  "Monterey jack cheese": 6,
  "teriyaki sauce": 3,
  "Onion Rolls": 2,
  "ranch seasoning mix": 2,
  "cheese": 11,
  "hamburger buns": 7,
  "lettuce": 4,
  "black eyed peas": 4,
  "egg yolk": 3,
  "dried parsley": 22,
  "French bread": 4,
  "English muffins": 2,
  "Mexican Chorizo": 2,
  "cooked rice": 38,
  "Monterey jack": 3,
  "Salt and black pepper": 2,
  "coconut oil": 6,
  "fresh cilantro leaves": 2,
  "lard": 2,
  "whit sugar": 2,
  "frozen raspberries": 3,
  "pineapple jam": 2,
  "chicken thighs": 3,
  "pork sausage": 2,
  "frozen berries": 2,
  "cooked black beans": 2,
  "pepperoni": 11,
  "Thick & Rich Pizza Sauce": 2,
  "skin-on": 2,
  "black peppercorns": 2,
  "banana chips": 2,
  "Salt": 6,
  "oyster sauce": 3,
  "spaghetti": 7,
  "crushed red pepper flakes": 4,
  "crackers": 4,
  "long grain rice": 5,
  "Everything Bagel seasoning plus more for garnish": 2,
  "sharp cheddar cheese": 4,
  "pimento-stuffed olives": 2,
  "olive brine": 2,
  "extra-": 2,
  "lean ground beef": 8,
  "marinara": 3,
  "buns": 7,
  "Ingredient Pie Crust": 3,
  "garlic cloves": 2,
  "Yukon gold potato": 2,
  "baby bellas": 2,
  "double pie crust": 4,
  "yellow mustard": 7,
  "Honey": 2,
  "sweet corn": 3,
  "red Thai curry paste": 3,
  "cooked jasmine": 2,
  "clove garlic": 5,
  "Salt": 11,
  "lemon": 2,
  "chicken breast": 6,
  "poppy seeds": 3,
  "Parsley for garnish": 2,
  "salt and pepper": 6,
  "unsweetened coconut flakes": 2,
  "virgin coconut oil": 2,
  "chicken breast": 3,
  "ketchup": 12,
  "Relish": 2,
  "black pepper": 5,
  "hearts of Romaine": 2,
  "frozen roasted corn kernels": 2,
  "ricotta": 8,
  "marinara sauce": 8,
  "non-stick spray": 3,
  "yellow cornmeal": 9,
  "canola": 4,
  "natural style peanut butter": 5,
  "juice from0.5 a lime": 2,
  "head green cabbage": 3,
  "ea egg roll wrappers": 2,
  "non-stick spray": 5,
  "cracked pepper": 2,
  "salt": 2,
  "chicken base": 3,
  "turkey pieces": 2,
  "dry fettuccine": 2,
  "white beans": 3,
  "salt and pepper": 6,
  "buttermilk": 7,
  "granulated white sugar": 2,
  "semi-sweet chocolate chips": 3,
  "yellow squash": 11,
  "fettuccine": 10,
  "red potatoes": 7,
  "beef stew meat": 4,
  "frozen mixed berries": 2,
  "frozen pearl onions": 2,
  "neutral cooking oil for frying": 2,
  "wonton wrappers": 3,
  "cubes bouillon": 2,
  "non-stick spray": 2,
  "frozen black eyed peas": 2,
  "macaroni": 4,
  "Monterey Jack cheese": 3,
  "uncooked macaroni": 2,
  "basil pesto": 11,
  "long-grain white rice": 3,
  "Andouille sausage": 5,
  "pickled jalapenos": 2,
  "ranch seasoning": 3,
  "fresh lemon juice": 3,
  "shredded cabbage": 4,
  "green bell peppers": 7,
  "rice": 3,
  "pork butt roast": 3,
  "sweet onion": 4,
  "hamburger /sandwich buns": 2,
  "shredded \"taco blend\" cheese": 2,
  "Brussels sprouts": 6,
  "extra virgin olive oil": 8,
  "Southern Grove Chopped Pecans": 2,
  "ramen noodles": 7,
  "dry red lentils": 4,
  "potato": 5,
  "cranks black pepper": 3,
  "or 8 flour tortillas": 2,
  "mixed vegetables from a salad bar": 2,
  "pinto beans": 9,
  "spice powder": 2,
  "skin-on chicken pieces": 2,
  "salt and pepper": 4,
  "frozen cut green beans": 2,
  "Fried Onions": 2,
  "sharp cheddar": 5,
  "Italian shredded cheese blend": 2,
  "rotini": 3,
  "extra sharp white cheddar": 2,
  "chicken drumsticks": 4,
  "salmon": 3,
  "dry old-fashioned oats": 2,
  "cucumbers": 4,
  "scallions": 4,
  "cilantro leaves": 2,
  "frozen pineapple chunks": 4,
  "shrimp": 6,
  "limes": 4,
  "crushed pineapple": 2,
  "fettuccini": 2,
  "wheat pita breads": 2,
  "ball prepared pizza dough for 12\" pizza": 2,
  "Chevre": 2,
  "Frank's Redhot Sauce": 2,
  "plain greek yogurt": 2,
  "dried dill": 13,
  "homemade naan": 2,
  "roma tomatoes": 3,
  "buttermilk powder": 4,
  "portobello mushroom caps": 4,
  "French": 2,
  "provolone": 5,
  "cooked quinoa": 2,
  "Caesar dressing": 3,
  "Handful fresh parsley": 6,
  "ranch dressing": 6,
  "mashed banana": 2,
  "provolone cheese": 2,
  "uncooked long grain rice": 2,
  "cubes bullion": 2,
  "divided salsa": 2,
  "Greek style plain yogurt": 2,
  "Granny Smith apple": 3,
  "plums": 2,
  "cooked bulgur": 2,
  "long grain jasmine rice": 4,
  "long-grain jasmine rice": 2,
  "wheat spaghetti": 3,
  "asparagus": 5,
  "Butter": 2,
  "raspberry jam": 4,
  "chicken breast": 2,
  "salt and pepper": 3,
  "cayenne powder": 3,
  "thick cut boneless pork chops": 2,
  "garam masala": 6,
  "jasmine": 2,
  "Italian Sausage": 6,
  "fresh strawberries": 5,
  "sweetened condensed milk": 5,
  "steak seasoning": 9,
  "hard-boiled eggs": 3,
  "sweet pickle relish": 2,
  "wheat penne pasta": 2,
  "tahini sesame seed paste": 2,
  "uncooked bulgur": 3,
  "rice noodles": 3,
  "Mexican chorizo": 6,
  "shredded monterrey jack cheese": 3,
  "pita breads": 3,
  "half & half": 4,
  "applesauce": 2,
  "green bell pepper": 17,
  "salt and pepper": 2,
  "cinnamon sticks": 2,
  "chipotle pepper powder": 2,
  "or one large orange": 2,
  "Active Dry": 2,
  "Italian": 3,
  "cauliflower rice": 2,
  "split peas": 5,
  "mini marshmallows": 3,
  "rolls": 2,
  "cantaloupe": 2,
  "Salt and freshly ground pepper": 2,
  "Few fresh dill": 2,
  "matzo meal": 2,
  "smoked ham": 2,
  "four tortillas": 2,
  "Chef's Cupboard Cornbread Stuffing Mix": 2,
  "Southern Grove Pecan Halves": 2,
  "lean ground turkey": 3,
  "stone ground": 6,
  "crumbled feta cheese": 2,
  "cream": 2,
  "finely shredded": 2,
  "gyoza": 2,
  "Monterrey Jack": 2,
  "mild green chiles": 2,
  "fajita size 8\" diameter tortillas": 2,
  "pork loin": 3,
  "fresh broccoli": 4,
  "Cannellini beans": 3,
  "ribs celery": 7,
  "uncooked jasmine": 2,
  "neutral oil for frying": 2,
  "sazon": 3,
  "salt pork": 2,
  "sofrito": 5,
  "Better Than Bouillon": 2,
  "distilled white vinegar": 2,
  "oz.kidney beans": 2,
  "white grain rice": 2,
  "water": 3,
  "fire roasted diced tomatoes": 15,
  "hot dog relish": 2,
  "biscuit dough": 2,
  "mild banana pepper rings": 2,
  "gnocchi": 3,
  "frozen chopped greens": 2,
  "chipotle pepper adobo sauce": 2,
  "wheat rolls": 2,
  "portobello mushrooms": 3,
  "mozzarella string cheese": 2,
  "raw shrimp": 2,
  "Pineapple in juice": 2,
  "pasta for serving": 2,
  "frozen broccoli and cauliflower": 2,
  "anchovy paste": 2,
  "crushed pineapple juice": 2,
  "dry red beans": 3,
  "links 8 Mexican Chorizo": 2,
  "boneless skinless chicken thighs": 2,
  "frozen onion": 2,
  "dry long grain white rice": 2,
  "frozen broccoli & cauliflower": 2,
  "shredded gouda": 2,
  "milk 2%": 2,
  "Great Northern beans": 3,
  "warm milk": 2,
  "salmon filet": 3,
  "high heat cooking oil": 4,
  "flour for dusting": 2,
  "kosher salt": 3,
  "dry rosemary": 2,
  "canola oil": 4,
  "red cabbage": 5,
  "block extra firm tofu": 2,
  "boneless pork chops": 2,
  "chicken bouillon": 2,
  "pre-cooked shredded beef": 2,
  "slivered almonds": 4,
  "squares graham crackers": 2,
  "mashed ripe bananas": 4,
  "sweet Italian sausage": 3,
  "sun dried tomatoes": 9,
  "red pepper": 2,
  "fresh kale": 4,
  "kimchi": 2,
  "tortilla": 2,
  "frozen cut leaf spinach": 3,
  "sun dried tomato halves": 2,
  "active dry": 5,
  "powdered ginger": 2,
  "old fashioned oats": 3,
  "shredded zucchini": 2,
  "tempeh": 5,
  "couscous": 3,
  "refried beans": 2,
  "Pepper Jack": 2,
  "and deveigned shrimp": 2,
  "cooked farro": 4,
  "banana": 3,
  "Dinosaur /Lacinato Kale": 2,
  "uncooked brown lentils": 2,
  "curry powder hot": 3,
  "wheel of brie": 2,
  "handful fresh parsley": 2,
  "mangoes": 2,
  "pineapple juice": 2,
  "beer": 4,
  "bouillon cube": 2,
  "cracked black pepper": 2,
  "eggs": 2,
  "hummus": 10,
  "rubbed  sage": 2,
  "salt and pepper": 6,
  "block extra-firm tofu": 2,
  "frozen “seasoning mix”": 2,
  "Creole seasoning": 4,
  "Roma Tomatoes": 2,
  "tilapia fillets": 2,
  "cranks freshly cracked black pepper": 2,
  "queso fresco": 4,
  "recipe red enchilada sauce": 3,
  "Fettuccine": 2,
  "pearl couscous": 2,
  "instant yeast": 2,
  "full fat coconut milk": 3,
  "mild chili powder": 3,
  "hominy": 2,
  "shredded pork": 2,
  "chicken breast": 2,
  "rice paper wrappers": 2,
  "red leaf lettuce": 2,
  "bean threads": 2,
  "krab": 2,
  "smooth natural peanut butter": 2,
  "water": 10,
  "pepper + sauce chipotle peppers adobo": 2,
  "size fajita flour tortillas": 2,
  "swiss cheese": 2,
  "garlic powder": 2,
  "non-stick spray": 2,
  "frozen shelled edamame": 3,
  "jumbo pasta shells": 2,
  "dried dates": 2,
  "walnut halves": 3,
  "medjool dates": 2,
  "crumbled gorgonzola": 2,
  "chicken breast": 3,
  "chicken": 2,
  "shredded chicken": 2,
  "soft taco sized 8 tortillas": 2,
  "batch homemade red enchilada sauce": 2,
  "poblano pepper": 5,
  "red enchilada sauce": 2,
  "uncooked macaroni noodles": 3,
  "instant yeast": 2,
  "greek style yogurt": 2,
  "dill": 2,
  "homemade meatballs": 2,
  "homemade marinara": 3,
  "hearty roll": 2,
  "fresh peaches": 2,
  "beans": 2,
  "pearled barley": 3,
  "hot sauce": 3,
  "ripe avocados": 2,
  "Kirkwood Fresh Chicken Breasts": 2,
  "Carlini Extra Virgin Olive Oil": 2,
  "Stonemill Dried Oregano": 2,
  "Stonemill Crushed Red Pepper": 2,
  "Tuscan Garden Quartered Artichoke Hearts": 2,
  "Earthly Grains Long Grain White Rice": 2,
  "Chef's Cupboard Chicken Broth": 2,
  "Emporium Selection Feta Cheese Crumbles": 2,
  "wild caught salmon": 2,
  "shredded Parmesan": 3,
  "or to taste creamy Caesar dressing": 2,
  "portobello mushroom cap": 2,
  "Handful chopped parsley": 2,
  "five spice blend": 2,
  "wide rice noodles": 3,
  "Sriracha": 4,
  "Hoisin sauce": 2,
  "baby greens": 3,
  "Multi-Purpose Shredded Beef": 2,
  "bbq sauce": 2,
  "jumbo shells": 2,
  "cubes beef bouillon": 2,
  "dry pasta": 2,
  "turkey meatballs": 2,
  "fresh cranberries": 2,
  "shredded parmesan": 3,
  "flaxseed": 7,
  "plain non-fat yogurt": 2,
  "jalapeno pepper": 3,
  "uncooked vermicelli noodles": 2,
  "pork loin filet": 2,
  "tilapia filets": 2,
  "creamed spinach": 2,
  "chicken breast": 2,
  "and grated ginger": 2,
  "ball pizza dough": 2,
  "roma tomato": 2,
  "ripe tomatoes": 2,
  "loosely packed fresh basil": 2,
  "Worchestershire sauce": 2,
  "fresh button mushrooms": 2,
  "jasmine rice": 3,
  "quartered artichoke hearts water": 3,
  "flat leaf Italian Parsley": 2,
  "or shredded Parmesan": 2,
  "precooked shredded chicken": 2,
  "ham steaks": 2,
  "Seasoning salt": 2,
  "neutral cooking oil": 4,
  "Thai red curry paste": 2,
  "baby bok choy": 2,
  "shittake mushrooms": 2,
  "chicken pieces": 2,
  "boneless beef rump roast": 2,
  "coarse brown": 2,
  "blackened seasoning": 2,
  "dry jasmine rice": 2,
  "imitation lobster": 2,
  "non-stick spray": 2,
  "soba noodles": 2,
  "bulb garlic": 2,
  "cooked rice for serving": 2,
  "Fresh cilantro and sliced green onion for garnish": 2,
  "chicken breast": 6,
  "salsa verde": 3,
  "dry active yeast": 2,
  "yellow": 2,
  "Zest of one lemon": 2,
  "quick": 2,
  "envelope yeast": 2,
  "all-purpose flour": 2,
  "curly leaf kale": 2,
  "chunk light tuna in water": 2,
  "fresh ground black pepper": 2,
  "frozen sweet peas": 2,
  "butter": 3,
  "plain": 2,
  "sweetened shredded coconut": 2,
  "parmesan cheese": 4,
  "parsley flakes": 2,
  "pitted kalamata olives": 3,
  "dry thyme": 2,
  "recipe hummus": 2,
  "summer squash": 2,
  "portabello mushroom cap": 2,
  "roasted red peppers": 2,
  "ziti": 2,
  "Italian cheese blend": 2,
  "shredded sharp cheddar cheese": 2,
  "mini sweet peppers": 2,
  "cooked rice": 2,
  "chicken breast": 3,
  "Boston Butt": 2,
  "coffee beans": 2,
  "cranks cracked black pepper": 3,
  "grape leaves": 2,
  "fresh mint": 4,
  "turnip": 2,
  "carrots": 2,
  "cracked black pepper": 3,
  "angel hair pasta": 4,
  "& deveined shrimp": 2,
  "chunk tuna": 2,
  "vegetable shortening": 2,
  "smoked ham hocks": 2,
  "dry 16 bean mix": 2,
  "vegetable oil for frying": 2,
  "coriander": 2,
  "Montreal steak seasoning": 2,
  "turkey Italian sausage": 2,
  "worchestershire": 2,
  "raw sunflower seeds": 3,
  "yellow bell pepper": 2,
  "sauce": 2,
  "Toppings of your choice": 2,
  "white onion": 2,
  "pinto": 2,
  "cooked seasoned rice": 2,
  "splash of hot sauce": 2,
  "chicken thighs": 2,
  "mashed bananas": 4,
  "firm tofu": 3,
  "orzo": 5,
  "a 9 oz.deli ham": 2,
  "Old Bay Seasoning": 2,
  "imitation crab": 4,
  "tortilla chips": 4,
  "kielbasa": 4,
  "shaved Parmesan": 2,
  "mozzarella cheese": 3,
  "pepperoni": 2,
  "green apple": 2,
  "linguine": 4,
  "unsalted peanuts": 3,
  "lemongrass": 3,
  "lo mein noodles": 2,
  "cooked lentils": 2,
  "mashed potatoes": 2,
  "all-purpose flour": 2,
  "buckwheat soba noodles": 2,
  "salt and pepper": 2,
  "shredded Italian blend cheese": 2,
  "cherry tomatoes": 2,
  "nectarine": 2,
  "baby spring mix": 2,
  "mozzarella pearls": 2,
  "shredded Swiss cheese": 2,
  "fresh Italian parsley for garnish": 2,
  "chili crisp": 2,
  "sourdough bread": 2,
  "all-purpose flour": 2,
  "baking powder": 2,
  "salt": 2,
  "cinnamon": 2,
  "nutmeg": 2,
  "brown sugar": 2,
  "vanilla extract": 3,
  "vegetable oil": 2,
  "carrots": 2,
  "cream cheese": 2,
  "butter": 2,
  "powdered sugar": 2,
  "Split turkey breast": 2,
  "apple cider": 3,
  "cumin seeds": 2,
  "torn kale leaves": 4,
  "coarse salt": 3,
  "adobo": 3,
  "pimento-stuffed green olives": 2,
  "white vinegar": 4,
  "cashews": 2,
  "dried fruit raisins": 2,
  "mustard": 3,
  "Panko breadcrumbs": 2,
  "flank": 2,
  "uncooked brown rice": 3,
  "spaghetti squash": 3,
  "Italian ground sausage": 2,
  "fresh basil": 3,
  "high heat oil": 2,
  "fresh sweet corn": 2,
  "tuna": 2,
  "frozen pitted sweet cherries": 2,
  "uncooked old fashioned rolled oats": 2,
  "lacinato  kale": 2,
  "acorn squash": 3,
  "sazon seasoning with annatto": 2,
  "manzanilla olives": 2,
  "chicken stock": 3,
  "salt for pasta water": 2,
  "Swiss cheese": 3,
  "ripe peaches": 2,
  "chipotle peppers adobo": 2,
  "white fish": 2,
  "fresh parsley for garnish": 2,
  "cooking oil of choice": 3,
  "extra sharp cheddar": 2,
  "white miso": 2,
  "light oil": 2,
  "brown rice": 3,
  "natural style creamy peanut butter": 2,
  "oil for pan frying": 2,
  "snap peas": 2,
  "Tony Chachere's seasoning": 2,
  "granny smith apple": 3,
  "Medjool dates": 2,
  "frozen broccoli": 2,
  "oil": 5,
  "sifted flour": 2,
  "fresh Brussels sprouts": 2,
  "vegetarian Italian sausage": 2,
  "sesame seeds for garnish": 2,
  "fresh cilantro for garnish": 2,
  "Greek yogurt": 2,
  "pickled red onions": 3,
  "cotija": 2,
  "broccoli stem": 2,
  "kimchi": 2,
  "light cooking oil": 2,
  "cooked": 2,
  "Everything But The Bagel Seasoning": 2,
  "seasoning of choice": 4,
  "lemon Juice": 2,
  "pineapple tidbits": 2,
  "coarsely chopped cilantro": 2,
  "solid Albacore tuna": 2,
  "packed Italian parsley": 2,
  "packed cilantro": 2,
  "cod steaks": 2,
  "shredded sweetened coconut": 2,
  "Zest from one orange": 2,
  "Appleton Farms Hickory Bacon": 2,
  "Baker's Corner All-Purpose Flour": 2,
  "Simply Nature Organic Whole Milk": 2,
  "Simply Nature Organic Garlic Powder": 2,
  "Stonemill Black Pepper": 2,
  "Emporium Selection Vintage Cheddar": 2,
  "Happy Farms Mild Cheddar": 2,
  "Chef's Cupboard French Fried Onions": 2,
  "berries": 2,
  "nuts": 2,
  "frozen strawberries": 2,
  "Rose": 2,
  "ravioli": 2,
  "shredded kale": 2,
  "wheat pita": 2,
  "golden raisins": 3,
  "shredded": 2,
  "red": 2,
  "shredded Brussels sprouts": 2,
  "D'anjou pear": 2,
  "queso quesadilla": 2,
  "sugar snap peas": 2,
  "unsweetened coconut": 2,
  "cod fillets": 2,
  "tortilla chip strips": 2,
  "cooked ham": 3,
  "broccoli florets": 3,
  "lemon juice": 2,
  "Cilantro": 2,
  "Morton® Kosher Salt": 3,
  "chives": 3,
  "pepitas": 6,
  "chipotle chili powder": 2,
  "brioche buns": 2,
  "Freshly Cracked black Pepper": 2,
  "pineapple tidbits juice": 3,
  "ripe avocado": 2,
  "salt and pepper": 2,
  "non-stick spray": 2,
  "plain Greek style yogurt": 2,
  "flatbread": 2,
  "sweetened coconut": 2,
  "fruit jam": 2,
  "Greek Yogurt": 2,
  "creamy natural peanut butter": 2,
  "chocolate graham crackers": 2,
  "unfiltered apple juice": 2,
  "cranberry juice cocktail": 2,
  "fresh greens": 2,
  "milk of choice": 2,
  "BBQ Sauce": 3,
  "chicken wings and drumettes": 2,
  "navy beans": 2,
  "Creole Seasoning": 2,
  "mixed vegetables": 2,
  "high heat cooking oil of choice": 2,
  "hoagie rolls": 2,
  "shredded cabbage slaw mix": 3,
  "plain whole milk yogurt": 2,
  "Santa Fe Blend frozen vegetables": 2,
  "Bayou Blend seasoning": 2,
  "Spanish rice": 2,
  "Rotel": 3,
  "shallot": 3,
  "Thai red chili pepper": 2,
  "butter lettuce": 2,
  "taco sauce": 3,
  "vegetable juice": 2,
  "dry  chorizo": 2,
  "dry pinto beans": 3,
  "reduced sodium chicken broth": 2,
  "English Muffins": 3,
  "Salad Bar Vegetables": 2,
  "loaf French bread": 2,
  "eggs": 2,
  "jam": 3,
  "berry cranberry sauce": 2,
  "mild curry powder": 2,
  "rice vermicelli": 2,
  "shredded cabbage and carrots": 2,
  "fresh mustard greens": 2,
  "pork short ribs": 2,
  "sauerkraut": 3,
  "or slivered almonds": 2,
  "hard taco shells": 2,
  "mint extract": 2,
  "chocolate syrup": 2,
  "mini naan": 2,
  "flakey salt": 2,
  "hearty bread": 4,
  "fresh corn": 2,
  "water": 2,
  "white mushrooms": 2,
  "sweet Potatoes": 2,
  "shredded red cabbage": 2,
  "sparkling wine": 2,
  "fresh rosemary": 2,
  "milk mozzarella": 2,
  "uncooked fettuccine": 2,
  "sun dried tomato": 2,
  "hemp seed hearts": 2,
  "water": 2,
  "Yukon Gold potatoes": 2,
  "sweet relish": 2,
  "Tony Chachere’s seasoning": 2,
  "pita halves": 2,
  "Great Northern Beans": 2,
  "quick cooking yellow grits": 2,
  "Taco sauce": 2,
  "baby red potatoes": 3,
  "unsweetened coconut shreds": 2,
  "and deveined shrimp": 3,
  "day-old cooked jasmine rice": 2,
  "fresh Hatch chiles": 2,
  "frozen pineapple": 2,
  "firm tofu": 2,
  "cooked brown rice": 4,
  "cooked spaghetti squash": 2,
  "Broccoli": 2,
  "crushed vanilla wafers": 2,
  "lemons": 2,
  "cooked and cooled rice": 2,
  "prepared mashed potatoes": 2,
  "pork chops": 2,
  "fuji apples": 2,
  "mini bagels": 2,
  "egg noodles": 2,
  "jalapenno": 2,
  "dry uncooked red beans": 2,
  "Handful fresh chopped cilantro for garnish": 2,
  "rice krispie cereal": 2,
  "lemon curd": 2,
  "bouillon": 2,
  "ginger powder": 2,
  "focaccia": 2,
  "prepared pizza dough": 2,
  "peas": 2,
  "thin pizza crust": 2,
  "frozen peppers and onions": 3,
  "frozen kale": 2,
  "rainbow sprinkles": 2,
  "crunchy chow mein noodles": 2,
  "shredded Swiss": 2,
  "orecchiette": 2,
  "chicken sausage": 2,
  "black pepper": 3,
  "mashed sweet potato": 2,
  "baking powder": 2,
  "skinless chicken thighs": 2,
  "harissa": 2,
  "Handful chopped fresh cilantro": 2,
  "Instant": 2,
  "Butter and flour for coating the muffin tin": 2,
  "split chicken": 2,
  "seasoning blend of choice": 2,
  "Handful parsley": 2,
  "dry spaghetti": 2,
  "coarsely ground black pepper plus more for garnish,": 2,
  "Five spice blend": 2,
  "dijon mustard": 2,
  "Worcestershire Sauce": 2,
  "uncooked long-grain jasmine rice": 2,
  "finely shredded red cabbage": 2,
  "petite red potatoes": 2,
  "French loaf": 2,
  "toppings of your choice": 2,
  "instant coffee": 2,
  "frozen peeled & deveined shrimp": 2,
  "country sausage": 3,
  "baby carrots": 2,
  "homemade ranch dressing": 2,
  "noodles": 2,
  "mixed salad bar vegetables": 2,
  "cocoa powder": 2,
  "frozen seafood mix": 3,
  "grape": 3,
  "frozen seasoning mix": 2,
  "pork chops": 2,
  "chicken pieces": 2,
  "salad greens of choice": 2,
  "banana peppers": 2,
  "sambal oelek": 2,
  "cornstarch + 1 water": 2,
  "frozen mango chunks": 2,
  "lite coconut milk": 2,
  "chicken breast": 2,
  "bratwurst links": 2,
  "deli ham": 2,
  "eggs": 2,
  "to 1 all-purpose flour": 2,
  "shredded green cabbage": 2,
  "oil for frying": 2,
  "cannelinni beans": 2,
  "ditalini": 2,
  "Flat-leaf Italian parsley": 2,
  "Romaine lettuce": 2,
  "red seedless grapes": 2,
  "cranks freshly ground pepper": 2,
  "short grain white rice": 2,
  "nori snack": 2,
  "curd cottage cheese": 2,
  "coarse deli mustard": 2,
  "Canned Salmon": 2,
  "coarse ground mustard": 2,
  "pork butt": 2,
  "cranks fresh black pepper": 2,
  "French fried onions": 2,
  "softened butter": 2,
  "turkey 93% lean": 2,
  "precooked shredded chicken": 2,
  "fusili pasta": 2,
  "shredded Monterey Jack cheese": 2,
  "sun dried tomatoes oil": 2,
  "extra wide egg noodles": 2,
  "sturdy bread": 2,
  "cooked long grain rice": 2,
  "light": 2,
  "salad greens": 2,
  "mandarin oranges": 2,
  "Handful chopped fresh parsley": 2,
  "Italian seasoning herb blend": 2,
  "chilled water": 2,
  "fire roasted tomatoes": 2,
  "crispy fried onions": 2,
  "aquafaba": 2,
  "Cotija cheese": 2,
  "bratwurst": 2,
  "caraway seeds": 2,
  "Buns": 2,
  "bread crumbs": 2,
  "pepper jack": 2,
  "garlic herb seasoning": 2,
  "adobo seasoning": 2,
  "boneless chicken thighs": 2,
  "pimiento stuffed Spanish olives": 2,
  "sazon seasoning": 2,
  "frozen green peas": 2,
  "cooked wild rice blend": 2,
  "fried onions": 2,
  "penne": 3,
  "cooking oil for the skillet": 2,
  "cod": 2,
  "bulk Italian sausage": 2,
  "bean soup mix": 2,
  "chorizo": 2,
  "homemade enchilada sauce": 2,
  "beets": 2,
  "cranks of a pepper mill": 2,
  "cooking oil for greasing": 2,
  "Black pepper": 2,
  "sturdy corn tortilla chips": 2
}

let fridgeIngredients = JSON.parse(localStorage.getItem("fridge")) || [];

function getIngredients(value) {
    let addIngredientsDiv = document.getElementById("add-ingredients");
    addIngredientsDiv.innerHTML = "";
    for (let ingredient in ingredients) {
        if (ingredient.includes(value)) {
            let addIngredient = document.createElement("button");
            addIngredient.textContent = ingredient;
            addIngredient.onclick = () => {
                if (!fridgeIngredients.includes(ingredient)) {
                    fridgeIngredients.push(ingredient);
                    updateFridgeButtons();
                }
                addIngredientsDiv.removeChild(addIngredient);
                getTopRecipes();
            }
            addIngredientsDiv.appendChild(addIngredient);
        }
    }
}

function updateFridgeButtons() {
    localStorage.setItem("fridge", JSON.stringify(fridgeIngredients));
    let haveIngredientsDiv = document.getElementById("have-ingredients");
    haveIngredientsDiv.innerHTML = "";
    for (let ingredient of fridgeIngredients) {
        let haveIngredient = document.createElement("button");
        haveIngredient.textContent = ingredient;
        haveIngredientsDiv.appendChild(haveIngredient);
        haveIngredient.onclick = () => {
            haveIngredientsDiv.removeChild(haveIngredient);
            for (f in fridgeIngredients) {
                if (fridgeIngredients[f] == ingredient) {
                    fridgeIngredients.splice(f, 1);
                }
            }
            updateFridgeButtons();
            getTopRecipes();
        }
    }
}

function getTopRecipes() {
    let topRecipes = [];
    for (let recipeContainer of data) {
        let ingredientsMissing = [];
        let ingredientsHave = [];
        for (let ingredient of recipeContainer.listOfIngredients) {
            let have = false;
            if (fridgeIngredients.includes(ingredient)) {
                have = true;
                ingredientsHave.push(ingredient);
            }
            if (!have) {
                ingredientsMissing.push(ingredient);
            }
        }
        let percentage = ingredientsHave.length / (ingredientsHave.length + ingredientsMissing.length);
        topRecipes.push({
            "recipe" : recipeContainer.recipe,
            "ingredientsHave" : ingredientsHave,
            "ingredientsMissing" : ingredientsMissing,
            "percentage" : percentage,
            "url" : recipeContainer.url
        });
    }
    
    let recipiesDiv = document.getElementById("recipies");
    recipiesDiv.innerHTML = "";

    function addRecipes() {
        for (let recipe of topRecipes.slice(0, 5)) {
            let recipeDiv = document.createElement("div");
            recipeDiv.className = "recipe";
            let recipeTitle = document.createElement("a");
            recipeTitle.href = recipe.url;
            recipeTitle.textContent = recipe.recipe;
            recipeTitle.target = "_blank";
            let recipeHave = document.createElement("div");
            recipeHave.className = "recipe-have";
            for (let ingredient of recipe.ingredientsHave) {
                let button = document.createElement("button");
                button.textContent = ingredient;
                button.onclick = () => {
                    for (f in fridgeIngredients) {
                        if (fridgeIngredients[f] == ingredient) {
                            fridgeIngredients.splice(f, 1);
                            updateFridgeButtons();
                        }
                    }
                    getTopRecipes();
                }
                recipeHave.appendChild(button);
            }
            let recipeMissing = document.createElement("div");
            recipeMissing.className = "recipe-missing";
            for (let ingredient of recipe.ingredientsMissing) {
                let button = document.createElement("button");
                button.textContent = ingredient;
                button.onclick = () => {
                    if (!fridgeIngredients.includes(ingredient)) {
                        fridgeIngredients.push(ingredient);
                        updateFridgeButtons();
                    }
                    getTopRecipes();
                }
                recipeMissing.appendChild(button);
            }
            recipeDiv.appendChild(recipeTitle);
            recipeDiv.appendChild(recipeHave);
            recipeDiv.appendChild(recipeMissing);
            let recipeImage = document.createElement("img");
            recipeImage.src = "./images/" + recipe.recipe + ".jpg";
            recipeDiv.appendChild(recipeImage);
            alreadyHas = false;
            for (let recipeDivChild of recipiesDiv.children) {
                if (recipeDivChild.isEqualNode(recipeDiv)) {
                    alreadyHas = true;
                    break;
                }
            }
            if (!alreadyHas) {
                recipiesDiv.appendChild(recipeDiv);
            }
        }
    }

    // Sort by ingredients have
    topRecipes.sort(function (a, b) {
        // Return -1 if a less, 1 if b less
        return b.ingredientsHave.length - a.ingredientsHave.length;
    });
    addRecipes();
    // Sort by percentage of ingredients
    topRecipes.sort(function (a, b) {
        if (a.ingredientsHave.length > 0 && b.ingredientsHave.length == 0) {
            return -1;
        }
        if (b.ingredientsHave.length > 0 && a.ingredientsHave.length == 0) {
            return 1;
        }
        return a.ingredientsMissing.length - b.ingredientsMissing.length;
    });
    addRecipes();
}

//let topRecipes = getTopRecipes();
//topRecipes.sort((a, b) => b.percentage - a.percentage)
//console.log(topRecipes.slice(0, 10)[0]);