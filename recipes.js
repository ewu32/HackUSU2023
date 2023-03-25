const parser = require("ingredientparserjs");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require("fs");

const downloadImage = async (url, path) => {
    done = false;
    while (!done) {
        try {
            console.log("RETRYING" + url);
            const response = await fetch(url);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            await fs.writeFile(path, buffer, (err) => err && console.error(err));
            done = true;
        } catch (err) {
            console.log(err);
        }
    }
}

let data = [];
let uniqueIngredients = {};
let pages = 121; // 121
let crawledPages = 0;

for (let i = 1; i <= pages; i++) {
    fetch("https://www.budgetbytes.com/recipe-catalog/page/" + i)
        .then((response) => response.text())
        .then((html) => {
            let doc = new JSDOM(html).window.document;
            let costs = doc.getElementsByClassName("cost-per");
            let recipeCount = 0;
            for (let cost of costs) {
                fetch(cost.parentElement.parentElement.href)
                .then((response) => response.text())
                .then((html) => {
                        recipeCount++;
                        let doc = new JSDOM(html).window.document;

                        let ingredients = doc.getElementsByClassName("wprm-recipe-ingredient-name");
                        let recipe = doc.getElementsByClassName("wprm-recipe-name wprm-block-text-bold")[0].textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                        let imgSrc = doc.getElementsByClassName("wprm-recipe-image wprm-block-image-normal")[0].firstChild.getAttribute("data-src");
                        //console.log(imgSrc);
                        downloadImage(imgSrc, "./images/" + recipe + ".jpg");

                        let listOfIngredients = [];
                        for (let ingredient of ingredients) {
                            ingredient = ingredient.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll("*", "");
                            //console.log(ingredient);
                            let ingredientParse = parser.parse(ingredient).name;
                            ingredient = (typeof(ingredientParse) === "string")? ingredientParse : ingredientParse[0];
                            //console.log(ingredient);
                            uniqueIngredients[ingredient] = (uniqueIngredients[ingredient] || 1) + 1;
                            if (!listOfIngredients.includes(ingredient)) {
                                listOfIngredients.push(ingredient);
                            }
                        }
                        let url = cost.parentElement.parentElement.href;
                        data.push({
                            recipe,
                            listOfIngredients,
                            url
                        })
                        // Collected all recipes
                        if (recipeCount == costs.length) {
                            crawledPages++;
                            console.log((100 * crawledPages / pages).toFixed(2) + "%");
                        }
                        if (recipeCount == costs.length && crawledPages == pages) {
                            let fs = require('fs');
                            let jsonData = JSON.stringify(data, null, 2);
                            fs.writeFile("data.json", jsonData, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                            let jsonData2 = JSON.stringify(uniqueIngredients, null, 2);
                            fs.writeFile("ingredients.json", jsonData2, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                            console.log("DONE!");
                            //console.log(data);
                            
                        }
                    })
                    .catch((err) => console.log("RECIPE ERROR: " + recipeCount + err));
                }
            //crawledPages++;
        })
        .catch((err) => {crawledPages++; console.log("ERROR PAGE: " + crawledPages)});
}

