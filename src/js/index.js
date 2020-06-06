// Global app controller
import axios from 'axios';

async function getresult(query){
    let recipe = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    console.log(recipe.data.recipes);
    
}
getresult('pizza')