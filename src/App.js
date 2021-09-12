import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  const Home = React.lazy(() => import('./components/pages/Home'));
  const Author = React.lazy(() => import('./components/pages/Author'));
  const Category = React.lazy(() => import('./components/pages/Category'));
  const Read = React.lazy(() => import('./components/pages/Read'));
  const Informational = React.lazy(() => import('./components/pages/Informational'));

  {/* Admin */ }
  const Login = React.lazy(() => import('./components/admin/pages/Login'))
  const Dashboard = React.lazy(() => import('./components/admin/pages/Dashboard'))
  const Shorts = React.lazy(() => import('./components/admin/pages/Shorts'))
  const Shortsaction = React.lazy(() => import('./components/admin/pages/Shortsaction'))

  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>

          <Route path="/read/:slug/:newsID" component={Read}></Route>
          <Route path="/author/:authorUserName" component={Author}></Route>
          <Route path="informational/:slug/" component={Informational}></Route>
          <Route path="/category/:slug/:id" component={Category}></Route>

          {/* Admin */}
          <Route path="/admin/login" component={Login}></Route>
          <Route path="/admin/dashboard" component={Dashboard}></Route>
          <Route path="/admin/add-shorts" component={Shortsaction}></Route>
          <Route path="/admin/edit-shorts/:shortsID" component={Shortsaction}></Route>

          <Route path="/admin/edit-shorts" component={Shorts}></Route>
          <Route path="/admin/shorts" component={Shorts}></Route>

          <Route exact path="/" component={Home}></Route>
          <Route path="*">
            Route Not found
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default App;