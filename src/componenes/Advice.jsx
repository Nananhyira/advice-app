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
				<div className='col-6  ustify-content-center'>
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Advice Number: {data.id}</Card.Title>
							<Card.Text>{data.advice}</Card.Text>
							<Button variant='primary' onClick={() => location.reload()}>Load</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Advice;
