import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { BrowserRouter as Router } from "react-router-dom";
import 'devextreme/dist/css/dx.light.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </StrictMode>,
)
