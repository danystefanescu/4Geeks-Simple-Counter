import React, {useState, useEffect} from "react";
import '/workspace/react-hello/src/styles/timer.css';


const Timer = () => {
	const [timer, setTimer] = useState(0);

useEffect(() => {
	const interval = setInterval(() => {
	setTimer((X) => X + 1);
	}, 1000);
},[]);
	return (
		<div className="div1 p-5 bg-dark container-flex">
			<div className="d-flex flex-row justify-content-center">
				<div className="clock text-white container-flex">
				<i class="bi bi-clock"></i>
				</div>
				<div className="four text-white p-5 fs-1">{Math.floor(timer/1000)%10}</div>
				<div className="four text-white p-5 fs-1">{Math.floor(timer/100)%10}</div>
				<div className="four text-white p-5 fs-1">{Math.floor(timer/10)%10}</div>
				<div className="four text-white p-5 fs-1">{Math.floor(timer/1)%10}</div>
			</div>
		</div>
	);
};

export default Timer;
