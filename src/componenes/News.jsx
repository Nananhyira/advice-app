import {useState} from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const News = () => {
  const [rate, setRate]=useState()
  return (
		<div>
			<h1>Rating Customers</h1>
			<i className='bi bi-star-fill  self' style={{ fontSize: "10rem" }}></i>
			<i className='bi bi-star-fill self' style={{ fontSize: "8rem" }}></i>
			<i className='bi bi-star-fill self' style={{ fontSize: '6rem' }}></i>
			<i className='bi bi-star-fill self'style={{ fontSize: '5rem' }}></i>
			<i className='bi bi-star-half self'style={{ fontSize: '5rem' }}></i>
		</div>
	);
}

export default News