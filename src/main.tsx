import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import { ComplaintProvider } from './contexts/ComplaintContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComplaintProvider>
      <App/>
    </ComplaintProvider>
  </React.StrictMode>
)
