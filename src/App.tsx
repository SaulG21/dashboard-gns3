import { Route, Switch, BrowserRouter } from "react-router-dom"
import './index.css'
import Dashboard from './modules/metrics/dashboard/screens/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
