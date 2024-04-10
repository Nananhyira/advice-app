import { useState } from "react";
import Button from "react-bootstrap/Button";

const Form = () => {
	const [users, setUsers] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

const handleSubmit =() =>{
  // e.preventDefault();
  let user= {name:name, email:email}
setUsers(user)
console.log(users, user);

}


	return (
		<div className='container m-5 j'>
			<div className='row'>
				<div className='col-md-12  justify-content-center'>
					<h1>Register form</h1>
					<form onSubmit={handleSubmit()}>
						<input
							type='text'
							placeholder='name'
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<input
							type='text'
							placeholder='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Button type='submit' variant='primary'>
							submit
						</Button>
					</form>
				</div>
				<div className='col-md-6'></div>
			</div>
		</div>
	);
};

export default Form;
