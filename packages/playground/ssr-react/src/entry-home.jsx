import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

ReactDOM.hydrate(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('app')
)
