import {useState} from 'react'

const Memory = () => {
  const [grid , setGrid]=useState([
    [0,3,5,1], 
    [1,2,2,4],
    [4,3,5,0]
  ])
  return (
    {grid.map((row, rowIndex)=>{
      return(
        <div  key={rowIndex} className="row">
        {row.map((col, colIndex)=>{
          return(
            <div></div>
          )})}
        </div>
      )

    })}
    <div>Memory</div>
  )
}

export default Memory