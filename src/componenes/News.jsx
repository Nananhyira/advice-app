import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const News = () => {
	const [rate, setRate] = useState(0);
	return (
		<div>
			<h1>Rating Customers</h1>
			<i
				className='bi bi-star-fill  self'
				style={{ color: rate > 0 ? "red" : "blue", fontSize: "5rem" }}
				onClick={() => {
					setRate(1);
				}}></i>
			<i
				className='bi bi-star-fill self'
				style={{ color: rate > 1 ? "yellow" : "pink", fontSize: "6rem" }}
				onClick={() => {
					setRate(2);
				}}></i>
			<i
				className='bi bi-star-fill self'
				style={{ color: rate > 2 ? "black" : "magenta", fontSize: "8rem" }}
				onClick={() => {
					setRate(3);
				}}></i>
			<i
				className='bi bi-star-fill self'
				style={{ color: rate > 3 ? "yellow" : "gray", fontSize: "10rem" }}
				onClick={() => {
					setRate(4);
				}}></i>
			<i
				className='bi bi-star-half self'
				style={{ color: rate > 4 ? "green" : "purple", fontSize: "12rem" }}
				onClick={() => {
					setRate(4.5);
				}}></i>
			{rate > 0 && <h1>your rating:{rate}</h1>}
		</div>
	);
};

export default News;
