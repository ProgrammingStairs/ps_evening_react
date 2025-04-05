import React from 'react';
import { createRoot } from 'react-dom/client';

const message = "This is an example of React js";
const msg = <h1><mark>{message}</mark></h1>

createRoot(document.getElementById("root")).render(msg);