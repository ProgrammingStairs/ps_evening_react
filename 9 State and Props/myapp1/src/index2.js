// concept of class component
import React from 'react';
import { createRoot } from 'react-dom/client';
class MyComponent extends React.Component{
//    constructor(props){
//         super(props);
//         this.state={
//             name:this.props.name
//         }
//    }
    state={
        name:this.props.name
    }
    display(){
        console.log("display method called");
        this.setState({name:"Daemon"})
    }
    render(){
        return(<>
        {/* {console.log(this.props.name)} */}
        {console.log(this.state.name)}
        {this.state.name}
        <button onClick={()=>{this.display()}}>change</button>            
        </>);
    }
}
createRoot(document.getElementById('root')).render(<MyComponent name="ram"/>);

/*
Both versions of your code work, so which one should you prefer?

Preferred Approach: Direct State Initialization (state = {})
Since your code does not require any pre-processing of props, method binding, or compatibility with older versions, you should prefer the simpler approach:

javascript
Copy
Edit
class MyComponent extends React.Component {
    state = {
        name: this.props.name
    };

    display() {
        console.log("display method called");
        this.setState({ name: "Daemon" });
    }

    render() {
        return (
            <>
                {console.log(this.state.name)}
                {this.state.name}
                <button onClick={() => this.display()}>change</button>
            </>
        );
    }
}
Why is this better?
✔ Less boilerplate – No need to manually call super(props).
✔ Easier to read and maintain – Directly declares state as a class property.
✔ Modern React syntax – Uses class field initialization instead of a constructor.

When Should You Use the Constructor?
You should use a constructor if:

You need pre-process props before setting them in state.
You need to bind methods (though in your case, you're using an arrow function in onClick, so binding is not needed).
You want compatibility with older React versions (before ES6 class fields were introduced).
Final Recommendation
👉 Use direct state initialization (state = {}) unless you specifically need a constructor.

So your current approach without the constructor is the best choice for modern React! 🚀
*/