import { createRoot } from "react-dom/client";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

/**
 * * To use react query, we first have to instantiate the query provider
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // How long do you want to cache things? Time Values are in milliseconds : 1000 * 60 * 10 = 10 minutes
      cacheTime: Infinity, //
    },
  },
});

/**
 * *ES6 Module Capability:
 *  Instead of importing the entire module, we can import specific functions, variables, etc.
 *  In most cases, this is what you want to do.
 */

/**
 * * Tree Shaking
 * In vite, there is a feature called tree-shaking, also known as live code inclusion, only includes
 * code that is actively being used.
 *
 * * Dead code elimination will see if it can find things that are never called
 */
import SearchParams from "./SearchParams";
const App = () => {
  const adoptedPet = useState(null);
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

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
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
const root = createRoot(container);
root.render(<App />);
