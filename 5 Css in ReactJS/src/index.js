import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

/*
const output = <div style={{color:"red",fontSize:"30px"}}>
    <p>
        This is an example of Paragraph
    </p>
</div>
*/

/*
const styleDemo = {color:"blue",fontSize:"40px"};
const output = <div style={styleDemo}>
    <p>
        This is an example of Paragraph
    </p>
</div>
*/

/*
const styleDemo = {
    style1 : {
        color:'white'
    },
    style2 : {
        backgroundColor:"crimson"
    }
};
const output = <div style={styleDemo.style2}>
    <p style={styleDemo.style1}>
        This is an example of Paragraph
    </p>
</div>
*/

/*
import './style.css';
const output = <div className='demo2'>
    <p id='demo1'>
        This is an example of Paragraph
    </p>
</div>
*/

import styled from 'styled-components';
const MyParagraph = styled.p`
    font-family:candara;
    font-size:40px;
    background-color : red;
    color:white;
`
const output = <MyParagraph>
This is an example of css in raeact js
</MyParagraph>

createRoot(document.getElementById("root")).render(output);