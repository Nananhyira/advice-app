import { useState,useEffect } from 'react'
import axios from "axios"


const Search = () => {
  const [data, setData]=useState([])

  	useEffect(()=>{
		axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{setData(response.data)})

	},[])
  console.log(data);
  return (
    <div>
      <h1>Search</h1>
      <input/>
     {data.map((item, index)=>{
      return(
       <div key={index}>
        <h1>
         {item.name}
        </h1>
         <h3></h3>
      </div>
     )})}
    </div>
  )
}

export default Search