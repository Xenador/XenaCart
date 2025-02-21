import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Hey(){
  return(
    <h1>Hello</h1>
  )
}
createRoot(document.getElementById('root')).render(
  <App/>
)
