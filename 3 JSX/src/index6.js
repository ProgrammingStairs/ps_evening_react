import React from 'react';
import { createRoot } from 'react-dom/client';
import msgDemo31,{msgDemo1,msgDemo2} from './demo5.jsx';

createRoot(document.getElementById("root1")).render(msgDemo1);
createRoot(document.getElementById("root2")).render(msgDemo2);
createRoot(document.getElementById("root3")).render(msgDemo31);