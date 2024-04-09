import Advice from "./componenes/Advice";
import Form from "./componenes/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Recipe from "./componenes/Recipe";

function App() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<Advice />
					{/* <Recipe/> */}
				</div>
				<div className='col-md-6'>
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
