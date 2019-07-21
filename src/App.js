const Pet = (props) => {
    const { name, animal, breed } = props;
    return React.createElement(
        "div",
        {},
        [ 
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed)
        ]
    );
}
const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { 
                name: "Luna", 
                animal: "Dog", 
                breed: "Havanese" 
            }),
            React.createElement(Pet,{ 
                name: "Ginger", 
                animal: "Cat", 
                breed: "Mixed" 
            })
        ]
    );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));