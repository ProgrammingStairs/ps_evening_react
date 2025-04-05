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
    display = ()=>{
        console.log("display method called");
        this.setState({name:"Daemon"})
    }
    render(){
        return(<>
        {/* {console.log(this.props.name)} */}
        {console.log(this.state.name)}
        {this.state.name}
        <button onClick={this.display}>change</button>            
        </>);
    }
}
createRoot(document.getElementById('root')).render(<MyComponent name="ram"/>);

/*
Why Use Arrow Functions for Binding in React?
Arrow functions are often used in React for event handlers because they automatically bind this to the class instance. Regular function expressions do not.

1️⃣ Problem with Regular Function Expressions
In JavaScript, this inside a regular function depends on how the function is called.

Example: Without Binding (Function Expression)
javascript
Copy
Edit
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        console.log(this); // Undefined in strict mode, or Window in non-strict mode
        this.setState({ count: this.state.count + 1 }); // ❌ This will cause an error
    }

    render() {
        return (
            <button onClick={this.increment}>
                Count: {this.state.count}
            </button>
        );
    }
}
🔴 Error: this.setState is not a function
Reason: this.increment is passed directly as a reference to the onClick event, so this is not bound to the class when onClick calls it.

2️⃣ Solution 1: Manual Binding in the Constructor
To fix this issue, we can bind the function explicitly in the constructor.

Example: Binding in Constructor
javascript
Copy
Edit
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        // ✅ Binding method in the constructor
        this.increment = this.increment.bind(this);
    }

    increment() {
        console.log(this); // ✅ Now refers to MyComponent instance
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <button onClick={this.increment}>
                Count: {this.state.count}
            </button>
        );
    }
}
✅ Works correctly! this is bound to the class instance.

3️⃣ Solution 2: Using an Arrow Function
Instead of binding manually, we can define the method as an arrow function.

Example: Arrow Function Approach
javascript
Copy
Edit
class MyComponent extends React.Component {
    state = { count: 0 };

    // ✅ Arrow function binds 'this' automatically
    increment = () => {
        console.log(this); // ✅ Always refers to MyComponent instance
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <button onClick={this.increment}>
                Count: {this.state.count}
            </button>
        );
    }
}
✅ Works correctly without needing manual binding!
Reason: Arrow functions do not have their own this, so they inherit this from the surrounding scope, which is the class instance.

4️⃣ Solution 3: Arrow Function Directly in JSX
You can also use an arrow function directly in JSX:

javascript
Copy
Edit
<button onClick={() => this.increment()}>Click Me</button>
⚠️ Caution: This creates a new function on every render, which may cause performance issues in large applications.

Which Method Should You Use?
Approach	Pros	Cons
Binding in constructor	Efficient, avoids re-render performance issues	More boilerplate
Arrow function as a class method	Clean syntax, avoids this issues	Not officially part of ES6 (class fields are a later addition)
Arrow function inside JSX	Easy to use	Creates a new function on every render (performance issue)
✅ Best Practice: Use an arrow function as a class method
javascript
Copy
Edit
increment = () => {
    this.setState({ count: this.state.count + 1 });
};
It keeps the code clean, efficient, and avoids unnecessary function re-creation.

Hope this helps! 🚀
*/