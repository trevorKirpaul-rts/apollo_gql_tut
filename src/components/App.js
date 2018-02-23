import React, { Component } from 'react';
import {  Switch, Route, BrowserRouter } from 'react-router-dom'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="center w85">
        <BrowserRouter>
          <div>
            <Header />
            <div className="ph3 pv1 background-gray">
              <Switch>
                <Route exact path="/" component={LinkList} />
                <Route exact path="/create" component={CreateLink} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
