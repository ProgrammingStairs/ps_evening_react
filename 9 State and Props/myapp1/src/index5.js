// concept of class component
import React from 'react';
import { createRoot } from 'react-dom/client';
class MyComponent extends React.Component{
   state={
      count : 0,
      counterTitle : "Counting"
   }
   increment(){
        this.setState({count:this.state.count+1});
   }
   decrement = ()=>{
        this.setState({count:this.state.count-1});
   }
   reset = function(){
        this.setState({count:0});
   }
   changeTitle = function change(){
        this.setState({counterTitle:"Counter"});
   }
    render(){
        return(<>
            <h1>{this.state.counterTitle} : {this.state.count} </h1>
            <button onClick={()=>{this.increment()}}>Increment..</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={()=>{this.reset()}}>Reset</button>
            <button onClick={()=>{this.changeTitle()}}>ChangeTitle</button>
        </>);
    }
}
createRoot(document.getElementById('root')).render(<MyComponent/>);

/*
   increment = ()=>{
    
   }
   <button onClick={this.increment}>Increment</button>
or
   increment(){
    
   }
   <button onClick={()=>{this.increment()}}>Increment</button>

   
*/
/*
If we want to do binding then we use constructor other wise above example can also works
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

*/