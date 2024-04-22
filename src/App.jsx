import Advice from "./componenes/Advice";
import Form from "./componenes/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./componenes/Search";
import Memory from "./componenes/Memory";

 import Recipe from "./componenes/Recipe";
import News from "./componenes/News";


function App() {

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-3 m-2'>
					<Advice />
					{/* <Recipe/> */}
					{/* <Search/> */}
					<Memory/>News
				</div>
				<div className='col-md-9'>
					<News/>
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
