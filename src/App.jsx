import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/slices/counter";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button onClick={() => dispatch(increment())} type="button">
						count is: {counter}
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
