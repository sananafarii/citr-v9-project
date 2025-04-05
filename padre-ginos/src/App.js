const { createElement } = require("react");

const Pizza = () => {
    return (
        React.createElement("div", {}, [
            React,createElement("h2", {}, "The poperoni pizza"),
            React.createElement("p", {}, "Mozzarella cheese, Peperoni")

        ])
    )
}






const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement ("h1", {}, "Padre Ginno's")
  )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));