import React from "react";
import { Switch, Route, Redirect } from 'react-router'
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

import AuthOrApp from './AuthOrApp'
import Dashboard from "../dashboard/Dashboard";
import Dashboard2 from "../dashboard2/Dashboard2";
import BillingCycle from "../billingCycle/BillingCycle";

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dash2' component={Dashboard2} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)