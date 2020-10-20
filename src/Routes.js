import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CompanyLists from './Pages/CompanyLists/CompanyLists';
import Detail from './Pages/Detail/Detail';
import Recommendation from './Pages/Recommendation/Recommendation';
import Resume from './Pages/Resume/Resume';
import Salary from './Pages/Salary/Salary';
import Profile from './Pages/Profile/Profile';
import Search from './Pages/Search/Search';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={CompanyLists} />
          <Route exact path="/Detail/:id" component={Detail} />
          <Route exact path="/Recommendation" component={Recommendation} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Salary" component={Salary} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Search" component={Search} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
