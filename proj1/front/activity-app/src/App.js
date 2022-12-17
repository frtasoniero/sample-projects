import './App.css';
import Activity from './pages/activities/Activity';
import { Switch, Route } from 'react-router-dom';
import ClientForm from './pages/clients/ClientForm';
import ClientList from './pages/clients/ClientList';
import Home from './pages/home/Home'
import PageNotFound from './pages/PageNotFound'

export default function App() {
  return (
    <Switch>
      <Route path='/activity/list' component={Activity}></Route>
      <Route path='/client/list' component={ClientList}></Route>
      <Route path='/client/detail/:id?' component={ClientForm}></Route>
      <Route path='/' exact component={Home}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  )
}