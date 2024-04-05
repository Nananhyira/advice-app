import {useState, useEffect} from 'react'

const apiKey = import.meta.env.VITE_MY_API_KEY


const Recipe = () => {
  const [recipe , setRecipe]=useState({})
   useEffect(() =>{
    fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${apiKey}`).then((res) => res.json())
			.then((result) => setRecipe(result))
   },[])
console.log(recipe)
  return (
    <div>Recipe</div>
  )
}

export default Recipe