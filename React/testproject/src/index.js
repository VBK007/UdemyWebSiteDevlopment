import React from "react"
import { createRoot } from 'react-dom/client';

import WelComepage from "./component.js/Componenting";

const rootElement = document.getElementById('root');
const root=createRoot(rootElement);
root.render(<WelComepage />)
