import React, { useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	console.log('este es el home ')
	const {store, actions} = useContext(Context)
	console.log(store)
	console.log(store.demo)
	actions.printText()
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo! HOME</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			<button onClick={actions.updateTitle}>Cambiar titulo</button>
		</div>
	);
}





