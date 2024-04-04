import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Advice = () => {
	const [data, setData] = useState({});

  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice")
			.then((data) => data.json())
			.then((response) => setData(response.slip));
console.log(data);
  },[])

	return (
		<div className='container m-5 justify-content-center' >
			<div className='row'>
				<Form  className='d-flex'>
					<Form.Control
						type='search'
						placeholder='Search'
						className='me-2'
						aria-label='Search'
					/>
					<Button variant='outline-success'>Search</Button>
				</Form>

      
          	<div  className='col'>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant='top' src='holder.js/100px180' />
						<Card.Body>
							<Card.Title>{data.id}</Card.Title>
							<Card.Text>
							{data.advice}
							</Card.Text>
							<Button variant='primary'>Go somewhere</Button>
						</Card.Body>
					</Card>
				</div>
         
			
			</div>
		</div>
	);
};

export default Advice;
