import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Toster from "react-hot-toast"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toster/>
  </React.StrictMode>,
)
