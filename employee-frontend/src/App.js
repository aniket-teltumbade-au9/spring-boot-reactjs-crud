import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddForm from './pages/AddForm';
import EmployeeList from './pages/EmployeeList';
import ActionForm from './pages/ActionForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/add" component={AddForm} />
        <Route path="/all" component={EmployeeList} />
        <Route path="/action/:id" component={ActionForm} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
