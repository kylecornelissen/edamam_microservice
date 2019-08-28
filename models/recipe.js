'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    foodType: DataTypes.STRING,
    recipeUrl: DataTypes.STRING,
    recipeImage: DataTypes.STRING,
    ingredientList: DataTypes.STRING,
    ingredientCount: DataTypes.INTEGER,
    calorieCount: DataTypes.INTEGER,
    servingCount: DataTypes.INTEGER,
    mealType: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};