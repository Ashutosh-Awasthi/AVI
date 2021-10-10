import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';

function App() {
  return (<>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:id' component={Dashboard}/>
    </Switch>
    </>
  );
}

export default App;
