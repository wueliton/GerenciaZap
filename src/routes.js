import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading.js'

const Home = lazy(() => import('./pages/Home/'));
const Login = lazy(() => import('./pages/Login/'));
const Recover = lazy(() => import('./pages/Recover/'));
const Join = lazy(() => import('./pages/Join/'));
const Panel = lazy(() => import('./pages/Panel/'));
const Messages = lazy(() => import('./pages/Messages/'));
const Report = lazy(() => import('./pages/Report/'));
const Contacts = lazy(() => import('./pages/Contacts/'));
const GetStart = lazy(() => import('./pages/GetStart/'));

const Routes = () => (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Index" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Recover" component={Recover}/>
          <Route path="/Join" component={Join}/>
          <Route path="/Panel" component={Panel}/>
          <Route path="/Messages" component={Messages}/>
          <Route path="/Report" component={Report}/>
          <Route path="/Contacts" component={Contacts}/>
          <Route path="/GetStart" component={GetStart}/>
        </Switch>
      </Suspense>
    </Router>
)

export default Routes