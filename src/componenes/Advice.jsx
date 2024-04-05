import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Advice = () => {
	const [data, setData] = useState({});
  const [image,setImage]=useState("")

	useEffect(() => {
		fetch("https://api.adviceslip.com/advice")
			.then((data) => data.json())
			.then((response) => setData(response.slip));
		// fetch('https://api.api-ninjas.com/v1/randomimage?category=')
		// 	.then((data) => data.json())
		// 	.then((response) => console.log(response))
	}, [data, image]);
  

	return (
		<div className='container m-5 j'>
			<div className='row'>
				<div className='col-6  justify-content-center'>
					<Card  className="justify-content-center"style={{ width: "25rem" , height:"20rem", backgroundColor:"red"} }>
						<Card.Body>
							<Card.Title className="text-center" style={{color:"white" ,fontSize:"20px"}}> Advice Number: {data.id}</Card.Title>
							<Card.Text className="text-center" style={{color:"white" ,fontSize:"30px"}}>{data.advice}</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Advice;
