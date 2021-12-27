import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App'
import Dashboard from "../dashboard/Dashboard";
import Dashboard2 from "../dashboard2/Dashboard2";
import BillingCycle from "../billingCycle/BillingCycle";

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='dash2' component={Dashboard2} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        
        <Route path='*' to='/' />
    </Router>
)