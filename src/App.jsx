import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
} from "./store/slices/counter";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>count is: {counter}</p>
				<p>
					<button onClick={() => dispatch(increment())} type="button">
						Increment
					</button>
					<button onClick={() => dispatch(decrement())} type="button">
						Decrement
					</button>
					<button onClick={() => dispatch(incrementByAmount(5))} type="button">
						Increment by 2
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
