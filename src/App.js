import React, { Component } from 'react';
import Counter from './Counter'
import PassingProps from './PassingProps'
import CounterWithStartValue from './counter-with-start-value'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import FetchUsers from './FetchUsers'
import Paper from 'material-ui/Paper'
import SyncUsers from './SyncUsers'
import Add from './Add'
import AddRedux from './AddRedux';

const style = {
  paper: {
    margin: 30,
    padding: 30
  }
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Paper
              style={style.paper}
            >
              <Route exact path='/' component={Counter} />
              <Route exact path='/counter' component={Counter} />
              <Route exact path='/counterwithstartvalue' component={() => <CounterWithStartValue startValue={15} />} />
              <Route path='/passingprops' component={PassingProps} />
              <Route path='/fetchusers' component={FetchUsers} />
              <Route path='/syncusers' component={SyncUsers} />
              <Route path='/add' component={Add} />
              <Route path='/addredux' component={AddRedux} />
            </Paper>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
