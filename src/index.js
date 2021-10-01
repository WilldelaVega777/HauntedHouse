//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React            from 'react'
import ReactDOM         from 'react-dom'
import App              from './App/App.jsx'
import reportWebVitals  from './reportWebVitals'

import './index.css'

//-----------------------------------------------------------------------------
// Render App Section
//-----------------------------------------------------------------------------
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

//-----------------------------------------------------------------------------
// Performance Measure
//-----------------------------------------------------------------------------
reportWebVitals()
