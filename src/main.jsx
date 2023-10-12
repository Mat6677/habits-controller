import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PendingProvider } from './context/pending.jsx'
import { DateProvider } from './context/date.jsx'
import { CompleteProvider } from './context/complete.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PendingProvider>
    <CompleteProvider>
      <DateProvider>
        <App />
      </DateProvider>
    </CompleteProvider>
  </PendingProvider>
)
