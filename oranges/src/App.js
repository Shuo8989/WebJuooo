import React from 'react';
import Button from 'antd/es/button';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import router from './router';
import GuardRouter from './router/GuardRouter';
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Router>
          {
            router.map((v,i)=>(
              <Route key={i} path={v.path} exact={v.exact} render={()=><GuardRouter {...v}/>} ></Route>
            ))
          }
        </Router>
      </div>
    )
  }
}

export default App;
