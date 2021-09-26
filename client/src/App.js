import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from "./components/home";
import  Preguntas  from "./components/Preguntas";
import { Historial } from './components/historial';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/preguntas" component={Preguntas} /> 
          <Route exact path="/historial" component={ Historial} />         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
