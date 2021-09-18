import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditorsRoute from './components/admin/layouts/EditorsRoute';

function App() {
  const Home = React.lazy(() => import('./components/pages/Home'));
  const Author = React.lazy(() => import('./components/pages/Author'));
  const Category = React.lazy(() => import('./components/pages/Category'));
  const Read = React.lazy(() => import('./components/pages/Read'));
  const Informational = React.lazy(() => import('./components/pages/Informational'));
  const PageNotFound = React.lazy(() => import('./components/pages/PageNotFound'));

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
          <Route path="/category/:slug/:newsID" component={Category}></Route>

          {/* Admin */}
          <Route path="/admin/login" component={Login}></Route>

          <Route path="/admin/dashboard">
            <EditorsRoute component={Dashboard} />
          </Route>

          <Route path="/admin/add-short">
            <EditorsRoute component={Shortsaction} />
          </Route>

          <Route path="/admin/edit-shorts/:shortsID">
            <EditorsRoute component={Shortsaction} />
          </Route>

          <Route path="/admin/edit-shorts">
            <EditorsRoute component={Shorts} />
          </Route>

          <Route path="/admin/shorts">
            <EditorsRoute component={Shorts} />
          </Route>


          <Route exact path="/" component={Home}></Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default App;