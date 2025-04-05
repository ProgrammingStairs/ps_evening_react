// example showing the concept of class component

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

class MyComponent extends React.Component{
    state={
        age : 0,
        name : '',
        obj : {}
    }
    handleSubmit = ()=>{
        this.setState({
            obj:
                {
                    age : this.state.age,
                    name : this.state.name
                }
        })
    }
    render(){
        return(<>
                <input 
                    placeholder='Enter Age'
                    name='age'
                    onChange={(event)=>{
                        // console.log(event.target.value);
                        this.setState({age:event.target.value});
                    }}
                /> <br/>
                <input 
                    placeholder='Enter name'
                    name='name'
                    onChange={(event)=>{
                        this.setState({name:event.target.value});
                    }}
                /> <br/>
                <input 
                    value='Submit' 
                    type="submit"
                    onClick={this.handleSubmit}
                />
                <h1>{this.state.obj.age ? `Age : ${this.state.obj.age}`: ""}</h1>
                <h1>{this.state.obj.name ? `Name : ${this.state.obj.name}`: ""}</h1>

            </>);
    };
}
createRoot(document.getElementById("root")).render(<MyComponent/>);
