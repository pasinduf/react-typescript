import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const Main = lazy(() => import('./app/components/main/App'))
const Dashboard = lazy(() => import('./app/components/dashboard'));
const Test = lazy(() => import('./app/components/test/sample1'));

const routes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path='/'  ><Redirect to='main' /></Route>
                <Route exact path='/main' component={Main} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/test' component={Test} />
            </Suspense>
        </Router>
    );
};

export default routes;
