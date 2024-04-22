import {useState} from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const News = () => {
  const [rate, setRate]=useState()
  return (
		<div>
			<h1>Rating Customers</h1>
			<i
				className='bi bi-star-fill  self'
				style={{ width: "40rem", height: "40px" }}></i>
			<i className='bi bi-star-fill self'></i>
			<i className='bi bi-star-fill self'></i>
			<i className='bi bi-star-fill self'></i>
		</div>
	);
}

export default News