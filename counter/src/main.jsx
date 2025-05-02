import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {storeData } from './redux/Stores.js'
import App from './redux/App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={storeData}>
   <App/>
  </Provider>
)
