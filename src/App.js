import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decNum, incNum } from './actions/index';

const App = () => {
	const myState = useSelector((state) => state.changeNum);
	const dispatch = useDispatch();
	return (
		<div className="container">
			<h1>Hello</h1>
			<h4>using react and redux</h4>
			<div className="main">
				<a className="btn" title="Decrement" onClick={() => dispatch(decNum())}>
					<span>-</span>
				</a>
				<input type="text" value={myState} />
				<a
					className="btn"
					title="Increment"
					onClick={() => dispatch(incNum(5))}
				>
					<span>+</span>
				</a>
			</div>
		</div>
	);
};

export default App;
