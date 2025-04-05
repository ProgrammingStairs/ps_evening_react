// example showing the concept of functional component

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import jsonData from './jsonData.json';
function MyComponent(){
    return (<>
        <table border='1' cellSpacing='0' cellPadding='10'> 
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {
                    jsonData.map((obj,index)=>{
                        return (<>
                        <tr>
                            <td>{index+1}</td>
                            <td>{obj.userId}</td>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                            <td>{obj.body}</td>
                        </tr>
                        </>)
                    })
                }
            </thead>
        </table>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);
