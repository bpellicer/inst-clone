import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const SignUp = lazy(() => import('./pages/sign-up'));
const Login = lazy(() => import('./pages/login'));
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading . . .</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
