import React from "react";
import { createRoot } from "react-dom/client";

/*
var message = "This is an example of React js Application";
var rootElement = document.getElementById("root");
var root = createRoot(rootElement);
root.render(message);
*/

/*
createRoot(document.getElementById("root")).render("This is an example of react js application");
*/

/*
var data = <h1>This is an example of react js application</h1>
createRoot(document.getElementById("root")).render(data);
*/

var data = <div>
    <h2>ReactJs Introduction</h2>
    <blockquote>
    This is an example of react js application. This is an example of react js application. This is an example of react js application. This is an example of react js application. This is an example of react js application.
    </blockquote>
</div>
createRoot(document.getElementById("root")).render(data);
