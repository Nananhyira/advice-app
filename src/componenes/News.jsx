import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const News = () => {
	const [rate, setRate] = useState(0);
	return (
		<div>
			<h1>Rating Customers</h1>
			<i
				className='bi bi-star-fill  self'
				style={{ fontSize: "10rem" }}
				onClick={() => {
					setRate(5);
				}}></i>
			<i className='bi bi-star-fill self' style={{ fontSize: "8rem" }} onClick={() => {
					setRate(4);
				}}></i>
			<i className='bi bi-star-fill self' style={{ fontSize: "6rem" }} onClick={() => {
					setRate(3);
				}}></i>
			<i className='bi bi-star-fill self' style={{ fontSize: "5rem" }}onClick={() => {
					setRate(2);
				}}></i>
			<i className='bi bi-star-half self' style={{ fontSize: "5rem" }} onClick={() => {
					setRate(4.5);
				}}></i>
{rate>0&&<h1>your rating:{rate}</h1>}
			
		</div>
	);
};

export default News;
