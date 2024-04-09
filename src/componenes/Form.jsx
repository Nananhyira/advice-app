import { useState } from "react";
import Button from "react-bootstrap/Button";

const Form = () => {
	const [users, setUsers] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");




	return (
		<div className='container m-5 j'>
			<div className='row'>
				<div className='col-md-12  justify-content-center'>
			<h1>Register form</h1>
			<form>
				<input type='text' placeholder='name' />
				<input type='text' placeholder='email' />
				<Button variant='primary'>submit</Button>
			</form>
      </div>
<div className='col-md-6'>

</div>
      </div>
		</div>
	);
};

export default Form;
