import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './pages/Home'

ReactDOM.hydrate(
  <BrowserRouter>
    <About />
  </BrowserRouter>,
  document.getElementById('app')
)
