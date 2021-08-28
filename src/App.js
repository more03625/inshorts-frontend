import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  const Home = React.lazy(() => import('./components/pages/Home'));
  const Author = React.lazy(() => import('./components/pages/Author'));
  const Read = React.lazy(() => import('./components/pages/Read'));
  const Informational = React.lazy(() => import('./components/pages/Informational'));


  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>

          <Route path="read/:slug/:newsID" component={Read}></Route>
          <Route path="/author/:authorUserName" component={Author}></Route>

          <Route path="informational/:slug/" component={Informational}></Route>


          <Route exact path="/" component={Home}></Route>



        </Switch>
      </Suspense>
    </Router>
  )
}
export default App;