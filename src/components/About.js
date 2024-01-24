import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props){

        super(props);

        // console.log("parent constructor")
    }

    componentDidMount(){
        // console.log("parent component did mount");
    }

    render() {

        // console.log("parent Render")
        return (
            <div>
                <h1>About</h1>
                <div>LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is namaste react series</h2>
                <UserClass />
            </div>
        );
    }
}

export default About;