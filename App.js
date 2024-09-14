// const heading = React.createElement('h1', {id:"heading", xyz:"cccc"}, "Hello world from React");
// const root =  ReactDOM .createRoot(document.getElementById('root'));
// root.render(heading);

{
  /* <div id="parent">
        <div id="child">
            <h1>im h1 tag</h1>
            <h2>im h2 tag</h2>
        </div>
    </div> 
    */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 in C1"),
    React.createElement("h2", {}, "Im h2 tag in c1"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 in C2"),
    React.createElement("h2", {}, "Im h2 tag in C2"),
  ]), 
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
