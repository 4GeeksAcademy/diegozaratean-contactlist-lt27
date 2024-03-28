const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST1",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND23",
					background: "white",
					initial: "white"
				}
			],
			address: 'siempre viva 123',
			titulo: 'este es el titulo Flux'
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			printText: () => {
				console.log('Hola desde flux')
			},
			updateTitle: () => {
				console.log('updateTitle')
				setStore({ titulo: 'nuevo titulo' });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
