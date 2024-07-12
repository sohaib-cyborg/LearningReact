const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, [React.createElement("h1",{id:"heading"},"Hello world"), React.createElement("h2",{id:"heading2"},"Hello world")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

