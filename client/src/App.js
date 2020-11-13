import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import routes from './routes/index';
import Header from './component/Header';
// import Home from './views/home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section className='mobile:px-10 px-4 pb-10 flex justify-center'>
      <section className='w-fw'>
        <Switch>
          {routes.map(({ path, component: Component, exact}, index ) => (
            <Route 
              key={index}
              path={path}
              exact={exact}
              render={(props) => <Component {...props} />}
            />
          ))}
        </Switch>
      </section>
    </section>
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
