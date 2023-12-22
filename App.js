import React from "react";
import ReactDOM from "react-dom/client"

//React Element
const Title = () => (
    <h1 className="head">Namaste react using jsx</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//React functional Component
// const HeadingComponent = () => {}
//    return <h1 className="heading">Namaste react functional component</h1>
// };

const HeadingComponent = () =>(
    <div className="container">
        <Title />
        <h1 className="heading">Namaste react functional component</h1>
    </div>
);

root.render(<HeadingComponent />);