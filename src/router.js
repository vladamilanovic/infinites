import { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';

export const renderRoutes = (routes) => (
  <Suspense fallback={<div></div>}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '/about',
    layout: BaseLayout,
    exact: true,
    component: lazy(() => import('./pages/About')),
  },
  {
    path: '/infinite/:id',
    layout: BaseLayout,
    exact: true,
    component: lazy(() => import('./pages/InfiniteDetail')),
  },
  {
    path: '*',
    layout: BaseLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: Home,
      },
      {
        component: () => <Redirect to='/' />,
      },
    ],
  },
];

export default routes;
