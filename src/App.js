import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Articles from './components/Articles';
import './App.css';
import EditArticle from './components/EditArticle';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/edit' component={EditArticle} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
