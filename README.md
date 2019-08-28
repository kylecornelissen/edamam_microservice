# Kyle's Calories Microservice

This is a microservice to provide Kyle's Calories with a list of recipies based on the given input.

## Learning Goals
  - Create an Express API microservice to work with another Express API
  - Create an Express API that interfaces with the Edamam API

## Technologies Used
  - [Node.JS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Jest](https://jestjs.io/)

## Setup
1. Clone this repository
2. Install npm with the command `npm install`
3. Create a sequelize database `npx sequelize db:create`
3. Migrate the with database `npx sequelize db:migrate`
4. Run your npm server `npm start`

  ### Testing
  1. Globally install Jest
    - `npm install jest -g`
  2. Install [babel-jest](https://www.npmjs.com/package/babel-jest) and [supertest](https://github.com/visionmedia/supertest)
    - `npm install jest -g`
  3. Add a test script to the `package.json` file
  ```
    // example
    "scripts": {
      "start": "node ./bin/www",
      "test": "jest --watch"
    },
  ```
  4. Run the test suit from the terminal
    - `npm test`

---

## Endpoints
  - [Recipes by Calories](#recipes-by-calories)
  - [Recipes by Meal Type](#recipes-by-meal-type)
  - [Recipes by Ingredient](#recipes-by-ingredient)

## Recipes By Calories
Send a GET request to receive recipes based on the count of calories.

  #### GET /api/v1/recipes/calorie_search?q=calorie_count
  ```
  Content-Type: application/json
  Accept: application/json
  ```
  ##### Example Request
  ```/api/v1/recipes/calorie_search?q=250```

  ##### Successful Response
  ```
  {
    recipes: {
      recipe_1: {
        "id": 1,
        "name": "recipe uno",
        "calories": 250
      },
      recipe_2: {
        "id": 1,
        "name": "recipe dos",
        "calories": 250
      }
    }
  }
  ```
  ##### Requirements
  - A valid calorie count must be provided, otherwise a (404) status code will be returned.

## Recipes By Meal Type
Send a GET request to receive recipes based on the meal type (ex. breakfast, lunch, dinner).

  #### GET /api/v1/recipes/meal_search?q=meal_type
  ```
  Content-Type: application/json
  Accept: application/json
  ```
  ##### Example Request
  ```/api/v1/recipes/meal_search?q=breakfast```

  ##### Successful Response
  ```
  {
    recipes: {
      recipe_1: {
        "id": 1,
        "name": "recipe uno",
        "calories": 250
      },
      recipe_2: {
        "id": 1,
        "name": "recipe dos",
        "calories": 250
      }
    }
  }
  ```
  ##### Requirements
  - A valid meal type must be provided, otherwise a (404) status code will be returned.

## Recipes By Ingredient
Send a GET request to receive recipes based on ingredient type.

  #### GET /api/v1/recipes/ingredient_search?q=ingredient
  ```
  Content-Type: application/json
  Accept: application/json
  ```
  ##### Example Request
  ```/api/v1/recipes/ingredient_search?q=bacon```

  ##### Successful Response
  ```
  {
    recipes: {
      recipe_1: {
        "id": 1,
        "name": "recipe uno",
        "calories": 250
      },
      recipe_2: {
        "id": 1,
        "name": "recipe dos",
        "calories": 250
      }
    }
  }
  ```
  ##### Requirements
  - A valid ingredient count must be provided, otherwise a (404) status code will be returned.
----------

## Contributing
   - Please open a pull request to contribute!