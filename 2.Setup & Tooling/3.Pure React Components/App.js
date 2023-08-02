const Pet = (props) => {
	/**
	 * * One way Data flow
	 * * React has a concept called `one-way data-flow` were we can always pass data down,
	 * * from parent to child, but not the other way around. We cannot pass data from child
	 * * to parent. IE from Pet to App.
	 * *
	 * * This is great for debugging because we know that children cannot mess with there
	 * * parents.
	 */
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h1", {}, props.breed),
	]);
};

const App = () => {
	/**
	 * @Function React.createElement
	 *
	 * * React createElement can take text or components. Since we give it text
	 * * it is looking to render an HTML tag (h1,p,a, etc). We can place any text there, but if it
	 * * is not a valid html tag, then it will not be recognized by the browser as a valid html Tag.
	 *
	 * * If we give React.createElement a component(denoted with a identifier that is a function with a Capital letter)
	 * * react will render that component as a react element.
	 *
	 * * React.createElement Takes 3 parameters:
	 * @param TagNAME : string | ReactComponent `Mandatory`
	 * @param HTMLElementAttributes_||_Props { attributeName:string IE: id:root} `Optional`
	 * @param Children : string | ReactComponent `Optional`
	 *
	 *
	 */

	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			animal: "Dog",
			name: "Luna",
			breed: "Havanese",
		}),
		React.createElement(Pet, {
			animal: "Bird",
			name: "Pepper",
			breed: "Cockatiel",
		}),
		React.createElement(Pet, {
			animal: "Cat",
			name: "Doink",
			breed: "Mixed",
		}),
	]);
};
// Your code is going to go here

/**
 * * ReactDom.createRoot(rootElement)
 * * Create root is the newest way to append react elements to the dom. Before
 * * react 18, the way to do this was `ReactDom.Render(rootElement, <App />)`,
 * * but in react 18 , we got a feature called `concurrency` which used be called `concurrent mode`.
 * * This is a way to opt-in to new features of react. React.createRoot basically tells react itself
 * * 'this project is using the new features of react'.
 *
 * * ReactDom.Render() basically puts the project into legacy mode.
 * * You can also use your root identifier to call render() to have react re-render.(This is very special edge case though)
 */

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
