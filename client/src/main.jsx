import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Input from '../src/components/input'
// import App from '../App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Instead of Tweeter, call our jsx file */}
    <Input />
  </React.StrictMode>,
)
