// const heading = React.createElement("h1", { id: "title" }, "hey buddy");

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hey buddy"),
    React.createElement("h2", {}, "hey buddy You are awesome"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hey buddy"),
    React.createElement("h2", {}, "hey buddy You are awesome"),
  ])
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
