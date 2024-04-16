import Advice from "./componenes/Advice";
import Form from "./componenes/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./componenes/Search";

// import Recipe from "./componenes/Recipe";


function App() {

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-3 m-2'>
					<Advice />
					{/* <Recipe/> */}
					<Search/>
				</div>
				<div className='col-md-9'>
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
