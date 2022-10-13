import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Products from './components/Products'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />
    </Switch>
  </BrowserRouter>
)

export default App
