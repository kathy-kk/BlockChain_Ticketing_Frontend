import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Signin, Signup } from './screen/Page';
import App from './screen/App/App';

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
    <Route {...rest} render= { (props) => {
        console.log(isLoggedIn);
        return isLoggedIn? (
            < Component {...props} />)
            :(<Redirect to = {{pathname: '/signin',
                state: {
                    from: props.location }
            }} />); }
    } />
);

const PublicRoutes = ({history, isLoggedIn}) => {
    return(
        <ConnectedRouter history = {history} >
            <div>
                <Route exact path={'/'} component = { (props) => { const history = props.history ;return <Signin history = {history}/>;}}/>
                <Route exact path={'/signin'} component = { (props) => { const history = props.history ;return <Signin history = {history}/>;}}/>
                <Route exact path={'/signup'} component = { (props) => { return <Signup />; } } />
                <RestrictedRoute path={'/app'} component = {(props) => { const history = props.history ; return <App history = {history} />;}} isLoggedIn = {isLoggedIn}/>
            </div>
        </ConnectedRouter>
    );
};

export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null
}))(PublicRoutes);
